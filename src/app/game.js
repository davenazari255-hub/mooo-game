// Mooo Game — interactive demo v2
// Economy: coins (harvest yield) + USDT (unlock plots / buy seed packs).
// Buying a fruit pack with USDT unlocks one plot and grants 30 seeds of that fruit.
// 24h growth cycle in 5 stages; Sprinkler upgrade makes it 20% faster.

export function initGame(root) {
  const $ = (s) => root.querySelector(s);
  const $$ = (s) => Array.from(root.querySelectorAll(s));
  const assetsEl = $("#gameAssets");
  if (!assetsEl) return;
  const A = JSON.parse(assetsEl.textContent);

  const KEY = "mooo_demo_v2";
  const DAY = 24 * 3600 * 1000;
  const SEEDS = {
    apple:  { name: "Apple",  usdt: 1,  yieldC: 30,  },
    orange: { name: "Orange", usdt: 2,  yieldC: 90,  },
    mango:  { name: "Mango",  usdt: 4,  yieldC: 200, },
    cherry: { name: "Cherry", usdt: 7,  yieldC: 350, },
    plum:   { name: "Plum",   usdt: 10, yieldC: 550, },
  };
  const ORDER = ["apple", "orange", "mango", "cherry", "plum"];

  // ---------- state ----------
  let st = null;
  try { st = JSON.parse(localStorage.getItem(KEY) || "null"); } catch (e) {}
  if (!st || !Array.isArray(st.plots) || st.plots.length !== 25) {
    st = {
      coins: 25430, usdt: 25, xp: 720, lvl: 8,
      inv: { apple: 30, orange: 0, mango: 0, cherry: 0, plum: 0 },
      plots: [null].concat(new Array(24).fill("L")),
      spr: false, lastDaily: 0,
      stats: { p: 0, h: 0, u: 0 },
    };
  }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {} };
  const TOTAL = () => DAY * (st.spr ? 0.8 : 1);
  const STEPMS = () => TOTAL() / 5;
  const fmt = (n) => Math.round(n).toLocaleString("en-US");
  const fmtU = (n) => (Math.round(n * 100) / 100).toFixed(2);

  // ---------- els ----------
  const coinEl = $("#coinVal"), usdtEl = $("#usdtVal");
  const xpF = $("#xpFill"), xpT = $("#xpTxt"), lvlEl = $("#lvlNum");
  const seedwrap = $(".seedwrap");
  const plotEls = $$(".marker.plot");
  let pending = null; // plot index waiting for a seed choice

  // ---------- helpers ----------
  let toastT;
  function toast(m) {
    const t = $("#toast"); if (!t) return;
    t.textContent = m; t.classList.add("show");
    clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("show"), 2000);
  }
  function floatyAt(el, txt) {
    const r = el.getBoundingClientRect(), rr = root.getBoundingClientRect();
    const f = document.createElement("div");
    f.className = "floaty"; f.textContent = txt;
    f.style.left = (r.left - rr.left + r.width / 2) + "px";
    f.style.top = (r.top - rr.top - 2) + "px";
    root.appendChild(f); setTimeout(() => f.remove(), 1150);
  }
  function shake(el) { el.classList.remove("shake"); void el.offsetWidth; el.classList.add("shake"); }
  function hud() {
    if (coinEl) coinEl.textContent = fmt(st.coins);
    if (usdtEl) usdtEl.textContent = fmtU(st.usdt);
    if (lvlEl) lvlEl.textContent = st.lvl;
    if (xpF) xpF.style.width = Math.min(100, (st.xp / 1200) * 100) + "%";
    if (xpT) xpT.textContent = Math.round(st.xp) + "/1200";
  }
  function gainXp(n) {
    st.xp += n;
    while (st.xp >= 1200) { st.xp -= 1200; st.lvl++; toast("Level up! " + st.lvl + " ⭐"); }
  }
  const firstEmpty = () => st.plots.findIndex((p) => p === null);
  const firstLocked = () => st.plots.findIndex((p) => p === "L");
  const remText = (p) => {
    const rem = Math.max(0, TOTAL() - (Date.now() - p.at));
    const h = Math.floor(rem / 3600000), m = Math.max(1, Math.ceil((rem % 3600000) / 60000));
    return (h > 0 ? h + "h " : "") + m + "m";
  };

  // ---------- plots ----------
  function renderPlots() {
    plotEls.forEach((el) => {
      const i = +el.dataset.i, p = st.plots[i];
      const pimg = el.querySelector(".pimg");
      el.classList.toggle("locked", p === "L");
      el.classList.remove("ready");
      if (p === "L") { pimg.innerHTML = '<img class="i-lock" src="' + A.lock + '" alt=""/>'; return; }
      if (p === null) {
        pimg.innerHTML = '<img class="i-plus" src="' + A.plus + '" alt=""/>' +
          (pending === i ? '<span class="timechip ready">Pick a seed!</span>' : "");
        return;
      }
      const e = Date.now() - p.at;
      if (e >= TOTAL()) {
        pimg.innerHTML = '<img class="i-tree" src="' + A.trees[p.seed] + '" alt=""/>' +
          '<span class="timechip ready">Harvest!</span>';
        el.classList.add("ready");
      } else {
        const idx = Math.min(4, Math.floor(e / STEPMS()));
        const cls = idx <= 2 ? "i-grow" : (idx === 3 ? "i-grow g3" : "i-grow g4");
        pimg.innerHTML = '<img class="' + cls + '" src="' + A.stages[idx] + '" alt=""/>' +
          '<span class="timechip">' + remText(p) + "</span>";
      }
    });
    updateCards();
    updatePlantAll();
  }

  function plant(i, seed) {
    if (st.plots[i] !== null) return;
    if ((st.inv[seed] || 0) <= 0) { openBuySheet(seed); return; }
    st.inv[seed]--;
    st.plots[i] = { seed: seed, at: Date.now() };
    st.stats.p++; gainXp(10);
    pending = null;
    if (seedwrap) seedwrap.classList.remove("selecting");
    hud(); renderPlots(); save();
    const el = plotEls[i]; if (el) { floatyAt(el, "🌱"); const im = el.querySelector("img"); if (im) im.classList.add("pop"); }
  }
  function harvest(i) {
    const p = st.plots[i]; if (!p) return;
    const gain = SEEDS[p.seed].yieldC;
    st.coins += gain; st.stats.h++; gainXp(25);
    st.plots[i] = null;
    hud(); renderPlots(); save();
    const el = plotEls[i]; if (el) floatyAt(el, "+" + gain + " 🪙");
    toast("Harvested " + SEEDS[p.seed].name + "! +" + gain + " coins");
  }
  function unlockWith(seed) {
    const s = SEEDS[seed];
    if (st.usdt < s.usdt) { toast("Not enough USDT ₮"); return false; }
    st.usdt -= s.usdt;
    const li = firstLocked();
    if (li >= 0) { st.plots[li] = null; st.stats.u++; }
    st.inv[seed] = (st.inv[seed] || 0) + 30;
    hud(); renderPlots(); save();
    closeSheet();
    if (li >= 0) { const el = plotEls[li]; if (el) floatyAt(el, "🔓"); toast("Plot unlocked! +30 " + s.name + " seeds"); }
    else toast("+30 " + s.name + " seeds");
    return true;
  }

  plotEls.forEach((el) => {
    el.addEventListener("click", () => {
      const i = +el.dataset.i, p = st.plots[i];
      if (p === "L") { shake(el); openShopSheet("Unlock this plot 🔓"); return; }
      if (p === null) {
        pending = i;
        if (seedwrap) seedwrap.classList.add("selecting");
        renderPlots();
        toast("Pick a seed below 👇");
        return;
      }
      if (Date.now() - p.at >= TOTAL()) { harvest(i); return; }
      toast(SEEDS[p.seed].name + " growing… " + remText(p) + " left");
    });
  });

  // ---------- seed cards ----------
  function updateCards() {
    $$(".card[data-seed]").forEach((card) => {
      const f = card.dataset.seed, n = st.inv[f] || 0;
      const btn = card.querySelector(".buy");
      if (!btn) return;
      if (n > 0) {
        btn.classList.remove("usdt");
        btn.innerHTML = "🌱 ×" + n;
      } else {
        btn.classList.add("usdt");
        btn.innerHTML = "₮ " + SEEDS[f].usdt + " · +30";
      }
    });
  }
  $$(".card[data-seed]").forEach((card) => {
    card.addEventListener("click", () => {
      const f = card.dataset.seed;
      if ((st.inv[f] || 0) <= 0) { openBuySheet(f); return; }
      let t = pending !== null ? pending : firstEmpty();
      if (t < 0) { toast("No empty plot — unlock one! 🔓"); openShopSheet("Unlock a plot 🔓"); return; }
      plant(t, f);
    });
  });

  // ---------- plant all ----------
  function updatePlantAll() {
    const c = $("#paCost");
    if (!c) return;
    const empty = st.plots.filter((p) => p === null).length;
    const seeds = ORDER.reduce((a, f) => a + (st.inv[f] || 0), 0);
    c.textContent = "×" + Math.min(empty, seeds);
  }
  const pa = $("#plantAll");
  if (pa) pa.addEventListener("click", () => {
    let planted = 0;
    for (let i = 0; i < 25; i++) {
      if (st.plots[i] !== null) continue;
      const f = ORDER.slice().sort((a, b) => (st.inv[b] || 0) - (st.inv[a] || 0))[0];
      if ((st.inv[f] || 0) <= 0) break;
      st.inv[f]--; st.plots[i] = { seed: f, at: Date.now() }; st.stats.p++; planted++;
    }
    if (planted) { gainXp(10 * planted); hud(); renderPlots(); save(); toast("Planted " + planted + " seeds! 🌱"); }
    else {
      const ready = st.plots.findIndex((p) => p && p !== "L" && Date.now() - p.at >= TOTAL());
      if (ready >= 0) harvest(ready);
      else toast("Nothing to plant — need seeds or empty plots");
    }
  });

  // ---------- sheets ----------
  const wrap = $("#sheetWrap"), body = $("#sheetBody"), title = $("#sheetTitle");
  function openSheet(t, html, wire) {
    if (!wrap) return;
    title.textContent = t;
    body.innerHTML = html;
    wrap.classList.add("open");
    if (wire) wire();
  }
  function closeSheet() { if (wrap) wrap.classList.remove("open"); }
  const dim = $("#sheetDim"), x = $("#sheetX");
  if (dim) dim.addEventListener("click", closeSheet);
  if (x) x.addEventListener("click", closeSheet);

  function packRows() {
    return ORDER.map((f) => {
      const s = SEEDS[f];
      return '<div class="pack"><img src="' + A.icons[f] + '" alt=""/>' +
        '<span class="pn">' + s.name + " Pack<small>Unlocks 1 plot · +30 seeds · yields " + s.yieldC + " 🪙</small></span>" +
        '<button class="tbtn" data-buy="' + f + '">₮ ' + s.usdt + "</button></div>";
    }).join("");
  }
  function wirePacks() {
    $$("#sheetBody [data-buy]").forEach((b) => b.addEventListener("click", () => unlockWith(b.dataset.buy)));
  }
  function openShopSheet(t) {
    openSheet(t || "Shop — Fruit Packs 🛒",
      '<div class="shint">Pay with Tether to unlock a plot and get 30 seeds.</div>' + packRows(), wirePacks);
  }
  function openBuySheet(f) {
    const s = SEEDS[f];
    openSheet(s.name + " seeds needed 🌱",
      '<div class="shint">You are out of ' + s.name + " seeds. A pack unlocks a plot too!</div>" + packRows(), wirePacks);
  }
  function invRows() {
    const rows = ORDER.map((f) =>
      '<div class="pack"><img src="' + A.icons[f] + '" alt=""/><span class="pn">' + SEEDS[f].name +
      ' seeds</span><b class="cnt">×' + (st.inv[f] || 0) + "</b></div>").join("");
    return '<div class="shint">Coins: ' + fmt(st.coins) + " 🪙 &nbsp;·&nbsp; Tether: ₮" + fmtU(st.usdt) + "</div>" + rows;
  }

  const acts = {
    shop: () => openShopSheet(),
    seeds: () => {
      const t = firstEmpty();
      if (t < 0) { toast("No empty plot — unlock one! 🔓"); openShopSheet(); return; }
      pending = t; if (seedwrap) seedwrap.classList.add("selecting");
      renderPlots(); toast("Pick a seed below 👇");
    },
    storage: () => openSheet("Storage 📦", invRows()),
    upgrades: () => {
      const owned = st.spr;
      openSheet("Upgrades 🛠",
        '<div class="pack"><img src="' + A.stages[1] + '" alt=""/>' +
        '<span class="pn">Sprinklers<small>All crops grow 20% faster</small></span>' +
        (owned ? '<b class="cnt">Owned ✓</b>' : '<button class="gbtn" id="buySpr">2,000 🪙</button>') + "</div>",
        () => { const b = $("#buySpr"); if (b) b.addEventListener("click", () => {
          if (st.coins < 2000) { toast("Not enough coins!"); return; }
          st.coins -= 2000; st.spr = true; hud(); save(); closeSheet(); toast("Sprinklers installed! 💦 +20% speed");
        }); });
    },
    daily: () => {
      const left = st.lastDaily + DAY - Date.now();
      const can = left <= 0;
      openSheet("Daily Reward 📅",
        '<div class="pack"><img src="' + A.icons.apple + '" alt=""/>' +
        '<span class="pn">Daily chest<small>+500 coins every 24h</small></span>' +
        (can ? '<button class="gbtn" id="claimD">Claim!</button>'
             : '<b class="cnt">' + Math.ceil(left / 3600000) + "h left</b>") + "</div>",
        () => { const b = $("#claimD"); if (b) b.addEventListener("click", () => {
          st.coins += 500; st.lastDaily = Date.now(); hud(); save(); closeSheet();
          toast("+500 coins! Come back tomorrow 🎁");
        }); });
    },
    awards: () => {
      const items = [
        ["First seed", st.stats.p >= 1], ["First harvest", st.stats.h >= 1],
        ["Busy farmer — 10 harvests", st.stats.h >= 10], ["Land owner — unlock 3 plots", st.stats.u >= 3],
        ["Tycoon — 30,000 coins", st.coins >= 30000],
      ];
      openSheet("Achievements 🏆", items.map(([n, ok]) =>
        '<div class="pack"><span class="pn">' + n + '</span><b class="cnt">' + (ok ? "✅" : "—") + "</b></div>").join(""));
    },
    tasks: () => {
      const items = [
        ["Plant a seed", st.stats.p >= 1], ["Harvest a tree", st.stats.h >= 1],
        ["Claim the daily reward", Date.now() - st.lastDaily < DAY], ["Unlock a new plot", st.stats.u >= 1],
      ];
      openSheet("Tasks 📋", items.map(([n, ok]) =>
        '<div class="pack"><span class="pn">' + n + '</span><b class="cnt">' + (ok ? "✅" : "🔲") + "</b></div>").join(""));
    },
    settings: () => openSheet("Settings ⚙️",
      '<div class="shint">Mooo Game — demo build</div>' +
      '<div class="pack"><span class="pn">Reset demo progress<small>Coins, seeds and plots reset</small></span>' +
      '<button class="gbtn" id="rst">Reset</button></div>',
      () => { const b = $("#rst"); if (b) b.addEventListener("click", () => {
        try { localStorage.removeItem(KEY); } catch (e) {}
        location.reload();
      }); }),
  };
  $$(".chipbtn[data-act]").forEach((el) =>
    el.addEventListener("click", () => { const a = acts[el.dataset.act]; if (a) a(); }));

  // ---------- nav ----------
  $$(".nitem[data-nav]").forEach((el) => {
    el.addEventListener("click", () => {
      const n = el.dataset.nav;
      if (n === "farm") { toast("You are on the farm 🏡"); return; }
      if (n === "market") { openSheet("Market 🏪", '<div class="shint">Trade your harvest with other farmers — coming soon!</div>'); return; }
      if (n === "warehouse") { acts.storage(); return; }
    });
  });
  $$(".nitem.locked").forEach((el) => {
    el.addEventListener("click", () => { shake(el); toast("Coming soon 🔒"); });
  });

  // ---------- tabs ----------
  $$(".tab[data-tab]").forEach((el) => {
    el.addEventListener("click", () => {
      if (el.classList.contains("off")) { shake(el); toast("Locked for now 🔒"); return; }
      $$(".tab[data-tab]").forEach((t) => t.classList.remove("active"));
      el.classList.add("active");
    });
  });

  // ---------- profile (telegram avatar) ----------
  const pfpBtn = $("#pfpBtn"), pfpImg = $("#pfpImg"), pfpFb = $("#pfpFallback");
  let tgUser = null;
  try { tgUser = window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe && window.Telegram.WebApp.initDataUnsafe.user; } catch (e) {}
  if (tgUser && tgUser.photo_url && pfpImg) {
    pfpImg.src = tgUser.photo_url;
    pfpImg.style.display = "block";
    if (pfpFb) pfpFb.style.display = "none";
  } else if (tgUser && pfpFb) {
    pfpFb.textContent = (tgUser.first_name || "🐮").charAt(0).toUpperCase();
  }
  if (pfpBtn) pfpBtn.addEventListener("click", () => {
    const name = tgUser ? [tgUser.first_name, tgUser.last_name].filter(Boolean).join(" ") : "Farmer";
    const av = tgUser && tgUser.photo_url
      ? '<img src="' + tgUser.photo_url + '" style="width:56px;height:56px;border-radius:16px;object-fit:cover"/>'
      : '<span style="font-size:38px">🐮</span>';
    openSheet("Profile 👤",
      '<div class="pack">' + av + '<span class="pn">' + name +
      "<small>Level " + st.lvl + " · " + Math.round(st.xp) + "/1200 XP</small></span></div>" +
      '<div class="pack"><span class="pn">Coins</span><b class="cnt">' + fmt(st.coins) + " 🪙</b></div>" +
      '<div class="pack"><span class="pn">Tether</span><b class="cnt">₮ ' + fmtU(st.usdt) + "</b></div>" +
      '<div class="pack"><span class="pn">Harvests</span><b class="cnt">' + st.stats.h + "</b></div>");
  });

  // ---------- top-up buttons ----------
  $$(".plusbtn").forEach((el) => el.addEventListener("click", (ev) => {
    ev.stopPropagation();
    toast("Top-up coming soon 💳");
  }));

  // ---------- fast-forward (demo) ----------
  const ff = $("#ffBtn");
  if (ff) ff.addEventListener("click", () => {
    let n = 0;
    st.plots.forEach((p) => { if (p && p !== "L") { p.at -= STEPMS(); n++; } });
    if (!n) { toast("Plant something first 🌱"); return; }
    save(); renderPlots(); toast("⏩ +4.8h");
  });

  // ---------- boot ----------
  hud(); renderPlots();
  const iv = setInterval(renderPlots, 20000);
  return () => clearInterval(iv);
}
