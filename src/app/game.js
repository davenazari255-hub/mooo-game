// Mooo Game — demo farm logic (plant / grow / harvest)
// 24h full cycle, 5 growth stages (one every 4.8h). State persists in localStorage.
// Demo helper: the fast-forward button advances time by one stage.

export function initGame(root) {
  const $ = (s) => root.querySelector(s);
  const assetsEl = $("#gameAssets");
  if (!assetsEl) return;
  const A = JSON.parse(assetsEl.textContent);

  const TOTAL = 24 * 3600 * 1000;       // 24h to harvest
  const STEP = TOTAL / 5;               // one stage every 4.8h
  const KEY = "mooo_demo_v1";
  const SEEDS = {
    apple:  { price: 20,  profit: 10  },
    orange: { price: 60,  profit: 30  },
    mango:  { price: 120, profit: 80  },
    cherry: { price: 200, profit: 150 },
    plum:   { price: 300, profit: 250 },
  };

  let st = null;
  try { st = JSON.parse(localStorage.getItem(KEY) || "null"); } catch (e) { st = null; }
  if (!st || typeof st.coins !== "number") {
    st = { coins: 25430, gems: 120, xp: 720, lvl: 8, plot: null }; // plot: {seed, at}
  }
  let selecting = false;

  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {} };
  const fmt = (n) => n.toLocaleString("en-US");

  const coinEl = $("#coinVal"), gemEl = $("#gemVal");
  const xpF = $("#xpFill"), xpT = $("#xpTxt"), lvlEl = $("#lvlNum");
  const plotEl = root.querySelector('.marker.plot[data-i="0"]');
  const pimg = plotEl && plotEl.querySelector(".pimg");
  const seedwrap = $(".seedwrap");
  if (!plotEl || !pimg) return;

  let toastT;
  function toast(m) {
    const t = $("#toast");
    if (!t) return;
    t.textContent = m;
    t.classList.add("show");
    clearTimeout(toastT);
    toastT = setTimeout(() => t.classList.remove("show"), 1900);
  }

  function hud() {
    if (coinEl) coinEl.textContent = fmt(st.coins);
    if (gemEl) gemEl.textContent = fmt(st.gems);
    if (lvlEl) lvlEl.textContent = st.lvl;
    if (xpF) xpF.style.width = Math.min(100, (st.xp / 1200) * 100) + "%";
    if (xpT) xpT.textContent = st.xp + "/1200";
  }

  function gainXp(n) {
    st.xp += n;
    while (st.xp >= 1200) { st.xp -= 1200; st.lvl++; toast("Level up! " + st.lvl + " ⭐"); }
  }

  const elapsed = () => Date.now() - st.plot.at;
  const remText = () => {
    const rem = Math.max(0, TOTAL - elapsed());
    const h = Math.floor(rem / 3600000), m = Math.max(1, Math.ceil((rem % 3600000) / 60000));
    return (h > 0 ? h + "h " : "") + m + "m";
  };

  function renderPlot() {
    if (!st.plot) {
      pimg.innerHTML = '<img class="i-plus" src="' + A.plus + '" alt=""/>';
      plotEl.classList.remove("ready");
      return;
    }
    if (elapsed() >= TOTAL) {
      pimg.innerHTML =
        '<img class="i-tree" src="' + A.trees[st.plot.seed] + '" alt=""/>' +
        '<span class="timechip ready">Harvest!</span>';
      plotEl.classList.add("ready");
    } else {
      const idx = Math.min(4, Math.floor(elapsed() / STEP));
      pimg.innerHTML =
        '<img class="i-grow" src="' + A.stages[idx] + '" alt=""/>' +
        '<span class="timechip">' + remText() + "</span>";
      plotEl.classList.remove("ready");
    }
  }

  function floaty(txt) {
    const r = plotEl.getBoundingClientRect(), rr = root.getBoundingClientRect();
    const f = document.createElement("div");
    f.className = "floaty";
    f.textContent = txt;
    f.style.left = (r.left - rr.left + r.width / 2) + "px";
    f.style.top = (r.top - rr.top - 4) + "px";
    root.appendChild(f);
    setTimeout(() => f.remove(), 1150);
  }

  function plant(seed) {
    const s = SEEDS[seed];
    if (!s) return;
    if (st.plot) { toast("Plot is busy!"); return; }
    if (st.coins < s.price) { toast("Not enough coins!"); return; }
    st.coins -= s.price;
    st.plot = { seed: seed, at: Date.now() };
    gainXp(10);
    selecting = false;
    if (seedwrap) seedwrap.classList.remove("selecting");
    hud(); renderPlot(); save();
    toast(seed.charAt(0).toUpperCase() + seed.slice(1) + " planted! 🌱");
  }

  function harvest() {
    const s = SEEDS[st.plot.seed];
    const gain = s.price + s.profit;
    st.coins += gain;
    gainXp(25);
    st.plot = null;
    hud(); renderPlot(); save();
    floaty("+" + gain + " 🪙");
    toast("Harvested! +" + gain + " coins");
  }

  plotEl.addEventListener("click", () => {
    if (!st.plot) {
      selecting = true;
      if (seedwrap) seedwrap.classList.add("selecting");
      toast("Pick a seed! 👇");
      return;
    }
    if (elapsed() >= TOTAL) { harvest(); return; }
    toast("Growing… " + remText() + " left");
  });

  root.querySelectorAll(".marker.plot.locked").forEach((el) => {
    el.addEventListener("click", () => {
      el.classList.remove("shake");
      void el.offsetWidth;
      el.classList.add("shake");
      toast("Locked — reach a higher level!");
    });
  });

  root.querySelectorAll(".card[data-seed]").forEach((card) => {
    card.addEventListener("click", () => plant(card.dataset.seed));
  });

  const pa = $("#plantAll");
  if (pa) {
    const c = $("#paCost");
    if (c) c.textContent = "20";
    pa.addEventListener("click", () => {
      if (!st.plot) plant("apple");
      else if (elapsed() >= TOTAL) harvest();
      else toast("Growing… " + remText() + " left");
    });
  }

  const ff = $("#ffBtn");
  if (ff) {
    ff.addEventListener("click", () => {
      if (!st.plot) { toast("Plant something first 🌱"); return; }
      st.plot.at -= STEP;
      save(); renderPlot();
      toast("⏩ +4.8h");
    });
  }

  hud();
  renderPlot();
  const iv = setInterval(renderPlot, 20000);
  return () => clearInterval(iv);
}
