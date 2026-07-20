// Static UI design port of Mooo Game (Farm screen). Non-interactive preview.
// Raw markup kept 1:1 with the approved mockup; refactor into components once locked.

const MARKUP = `
<!-- lush world background -->
      <div class="world"></div>
      <div class="bush" style="width:46px;height:40px;top:64px;left:-8px"></div>
      <div class="bush" style="width:38px;height:34px;top:120px;left:-12px"></div>
      <div class="bush" style="width:44px;height:38px;top:70px;right:-10px"></div>
      <div class="bush" style="width:36px;height:32px;top:128px;right:-12px"></div>
      <div class="bush" style="width:40px;height:34px;top:300px;left:-14px"></div>
      <div class="bush" style="width:42px;height:36px;top:300px;right:-14px"></div>

      <!-- ===== HUD ===== -->
      <div class="hud">
        <div class="pill coin">
          <svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="#f2a91d" stroke="#c17d10" stroke-width="2"/><circle cx="16" cy="16" r="10" fill="#ffd45c" stroke="#e6b52e" stroke-width="1.5"/><text x="16" y="21" font-size="13" font-weight="700" text-anchor="middle" fill="#c17d10" font-family="Baloo 2,sans-serif">$</text><ellipse cx="12" cy="11" rx="3.5" ry="2" fill="#fff" opacity=".55"/></svg>
          <span class="val">25,430</span>
          <span class="plus"><svg viewBox="0 0 24 24"><path d="M12 4v16M4 12h16" stroke="#2c4d12" stroke-width="4" stroke-linecap="round"/></svg></span>
        </div>
        <div class="pill">
          <svg viewBox="0 0 32 32"><path d="M6 12l4-6h12l4 6-10 14z" fill="#22b7d0" stroke="#1590a8" stroke-width="1.6" stroke-linejoin="round"/><path d="M6 12h20M10 6l2 6 4 14 4-14 2-6" fill="none" stroke="#8ff0fb" stroke-width="1.2" opacity=".8"/><path d="M6 12l4-6h6l-3 6z" fill="#63e2ef" opacity=".8"/></svg>
          <span class="val">120</span>
          <span class="plus"><svg viewBox="0 0 24 24"><path d="M12 4v16M4 12h16" stroke="#2c4d12" stroke-width="4" stroke-linecap="round"/></svg></span>
        </div>
        <div class="pill xp">
          <div class="lvlrow">
            <svg width="26" height="26" viewBox="0 0 32 32" style="flex:0 0 auto"><path d="M16 3l3.8 7.7 8.5 1.2-6.2 6 1.5 8.5L16 24.4 8.4 26.4l1.5-8.5-6.2-6 8.5-1.2z" fill="#ffd45c" stroke="#e08b12" stroke-width="1.6" stroke-linejoin="round"/><text x="16" y="20" font-size="11" font-weight="800" text-anchor="middle" fill="#b3690a" font-family="Baloo 2,sans-serif">8</text></svg>
            <div style="flex:1;position:relative">
              <div class="bar"><i></i></div>
              <span class="lvltxt">720/1200</span>
            </div>
          </div>
        </div>
        <div class="icon-btn">
          <svg viewBox="0 0 24 24" fill="none"><path d="M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" fill="#f0dcb8"/><path d="M19.4 13a7.6 7.6 0 000-2l2-1.5-2-3.4-2.4 1a7.6 7.6 0 00-1.7-1l-.4-2.6h-3.8l-.4 2.6a7.6 7.6 0 00-1.7 1l-2.4-1-2 3.4 2 1.5a7.6 7.6 0 000 2l-2 1.5 2 3.4 2.4-1c.5.4 1.1.7 1.7 1l.4 2.6h3.8l.4-2.6c.6-.3 1.2-.6 1.7-1l2.4 1 2-3.4-2-1.5z" stroke="#f0dcb8" stroke-width="1.6" stroke-linejoin="round"/></svg>
        </div>
      </div>

      <!-- ===== STAGE ===== -->
      <div class="stage">
        <!-- left rail -->
        <div class="rail left">
          <div class="railbtn"><div class="badge">!</div><div class="box"><svg viewBox="0 0 32 32"><path d="M5 12l2-5h18l2 5z" fill="#e35b4b" stroke="#a83526" stroke-width="1.4"/><rect x="6" y="12" width="20" height="14" rx="2" fill="#f3e6cc" stroke="#a87f4c" stroke-width="1.4"/><path d="M5 12h22" stroke="#fff" stroke-width="1" opacity=".5"/><rect x="13" y="17" width="6" height="9" fill="#c69a5f"/><path d="M8 12a2.5 2.5 0 005 0 2.5 2.5 0 005 0 2.5 2.5 0 005 0" fill="none" stroke="#fff" stroke-width="1" opacity=".6"/></svg></div><div class="lbl">Shop</div></div>
          <div class="railbtn"><div class="badge">!</div><div class="box"><svg viewBox="0 0 32 32"><path d="M16 4l10 10h-6v12h-8V14H6z" fill="#5fc23a" stroke="#3c8420" stroke-width="1.8" stroke-linejoin="round"/><path d="M16 4l10 10h-6" fill="#8fe05a"/></svg></div><div class="lbl">Upgrades</div></div>
          <div class="railbtn"><div class="box"><svg viewBox="0 0 32 32"><path d="M8 6h13l3 4-3 4H8z" fill="#e0a53d" stroke="#a8752a" stroke-width="1.4" stroke-linejoin="round"/><rect x="6" y="6" width="4" height="22" rx="1.5" fill="#9a6a34"/><ellipse cx="15" cy="22" rx="6" ry="5" fill="#7a5230" stroke="#553a1f" stroke-width="1.2"/><circle cx="13" cy="21" r="1.3" fill="#caa06a"/><circle cx="17" cy="23" r="1.3" fill="#caa06a"/></svg></div><div class="lbl">Seeds</div></div>
          <div class="railbtn"><div class="box"><svg viewBox="0 0 32 32"><path d="M5 11l11-5 11 5v3H5z" fill="#b07a3e" stroke="#7d5528" stroke-width="1.4" stroke-linejoin="round"/><rect x="7" y="14" width="18" height="12" rx="1.5" fill="#c99457" stroke="#7d5528" stroke-width="1.4"/><path d="M16 14v12M7 20h18" stroke="#7d5528" stroke-width="1.2"/></svg></div><div class="lbl">Storage</div></div>
        </div>

        <!-- right rail -->
        <div class="rail right">
          <div class="railbtn"><div class="box"><svg viewBox="0 0 32 32"><rect x="5" y="7" width="22" height="20" rx="3" fill="#f3e6cc" stroke="#a87f4c" stroke-width="1.6"/><rect x="5" y="7" width="22" height="6" rx="3" fill="#e35b4b"/><rect x="9" y="4" width="2.5" height="6" rx="1.2" fill="#a83526"/><rect x="20.5" y="4" width="2.5" height="6" rx="1.2" fill="#a83526"/><text x="16" y="24" font-size="10" font-weight="800" text-anchor="middle" fill="#c0392b" font-family="Baloo 2">7</text></svg></div><div class="lbl">Daily</div></div>
          <div class="railbtn"><div class="box"><svg viewBox="0 0 32 32"><path d="M9 5h14v4c0 4-3 7-7 7s-7-3-7-7z" fill="#ffd45c" stroke="#d8961a" stroke-width="1.5"/><path d="M9 7H5c0 3 2 5 4 5M23 7h4c0 3-2 5-4 5" fill="none" stroke="#d8961a" stroke-width="1.5"/><rect x="13" y="16" width="6" height="5" fill="#e0a53d"/><rect x="10" y="21" width="12" height="4" rx="1.5" fill="#c98a2e" stroke="#a8752a" stroke-width="1.2"/></svg></div><div class="lbl">Achievements</div></div>
          <div class="railbtn"><div class="box"><svg viewBox="0 0 32 32"><rect x="7" y="6" width="18" height="21" rx="2.5" fill="#f3e6cc" stroke="#a87f4c" stroke-width="1.6"/><rect x="11" y="4" width="10" height="5" rx="2" fill="#c98a2e"/><path d="M11 14l2 2 4-4M11 21l2 2 4-4" fill="none" stroke="#5fc23a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 14h4M19 21h4" stroke="#b89a6f" stroke-width="1.6" stroke-linecap="round"/></svg></div><div class="lbl">Tasks</div></div>
          <div class="railbtn"><div class="box"><svg viewBox="0 0 24 24" fill="none"><path d="M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" fill="#c98a2e"/><path d="M19.4 13a7.6 7.6 0 000-2l2-1.5-2-3.4-2.4 1a7.6 7.6 0 00-1.7-1l-.4-2.6h-3.8l-.4 2.6a7.6 7.6 0 00-1.7 1l-2.4-1-2 3.4 2 1.5a7.6 7.6 0 000 2l-2 1.5 2 3.4 2.4-1c.5.4 1.1.7 1.7 1l.4 2.6h3.8l.4-2.6c.6-.3 1.2-.6 1.7-1l2.4 1 2-3.4-2-1.5z" stroke="#a8752a" stroke-width="1.6" stroke-linejoin="round"/></svg></div><div class="lbl">Settings</div></div>
        </div>

        <!-- farm field -->
        <div class="field-wrap">
          <div class="field-bushes">
            <b style="width:27px;height:22px;top:-4px;left:5%"></b>
            <b style="width:31px;height:25px;top:-9px;left:25%"></b>
            <b style="width:24px;height:20px;top:-3px;left:47%"></b>
            <b style="width:31px;height:25px;top:-9px;left:67%"></b>
            <b style="width:27px;height:22px;top:-4px;left:87%"></b>
            <b style="width:24px;height:22px;top:20%;left:-11px"></b>
            <b style="width:21px;height:19px;top:52%;left:-12px"></b>
            <b style="width:24px;height:22px;top:82%;left:-9px"></b>
            <b style="width:24px;height:22px;top:18%;right:-11px"></b>
            <b style="width:21px;height:19px;top:50%;right:-12px"></b>
            <b style="width:24px;height:22px;top:80%;right:-9px"></b>
            <b style="width:28px;height:22px;bottom:-9px;left:14%"></b>
            <b style="width:26px;height:21px;bottom:-9px;left:44%"></b>
            <b style="width:28px;height:22px;bottom:-9px;left:74%"></b>
            <svg class="fl" viewBox="0 0 24 24" style="top:-3px;left:38%"><g fill="#fff"><circle cx="12" cy="6" r="3.2"/><circle cx="18" cy="12" r="3.2"/><circle cx="12" cy="18" r="3.2"/><circle cx="6" cy="12" r="3.2"/></g><circle cx="12" cy="12" r="3.3" fill="#ffcf49"/></svg>
            <svg class="fl" viewBox="0 0 24 24" style="bottom:-2px;left:60%"><g fill="#ff9ec2"><circle cx="12" cy="6" r="3.2"/><circle cx="18" cy="12" r="3.2"/><circle cx="12" cy="18" r="3.2"/><circle cx="6" cy="12" r="3.2"/></g><circle cx="12" cy="12" r="3.3" fill="#ffd45c"/></svg>
            <svg class="fl" viewBox="0 0 24 24" style="top:64%;left:-6px"><g fill="#fff"><circle cx="12" cy="6" r="3.2"/><circle cx="18" cy="12" r="3.2"/><circle cx="12" cy="18" r="3.2"/><circle cx="6" cy="12" r="3.2"/></g><circle cx="12" cy="12" r="3.3" fill="#ffcf49"/></svg>
          </div>
          <div class="field">
            <div class="fence"></div>
            <div class="plots">
              <!-- row 1: growth stages -->
              <div class="plot"><svg viewBox="0 0 40 40"><ellipse cx="20" cy="30" rx="5" ry="2.5" fill="#3c2917"/></svg></div>
              <div class="plot plain"><svg viewBox="0 0 40 40"><path d="M20 32c0-5-4-7-4-7s3 0 4 3c1-3 4-3 4-3s-4 2-4 7z" fill="#5fc23a"/><path d="M20 32v-6" stroke="#3c8420" stroke-width="2" stroke-linecap="round"/></svg></div>
              <div class="plot plain"><svg viewBox="0 0 40 40"><path d="M20 33V20" stroke="#3c8420" stroke-width="2.4" stroke-linecap="round"/><path d="M20 24c-4-1-6-4-6-4s4-1 6 2c2-3 6-2 6-2s-2 3-6 4z" fill="#5fc23a"/><path d="M20 30c-3 0-5-2-5-2s3-1 5 1c2-2 5-1 5-1s-2 2-5 2z" fill="#6ed040"/></svg></div>
              <div class="plot plain"><svg viewBox="0 0 40 40"><path d="M20 34V16" stroke="#7a5230" stroke-width="2.6" stroke-linecap="round"/><circle cx="20" cy="15" r="8" fill="#5fc23a"/><circle cx="14" cy="18" r="5" fill="#6ed040"/><circle cx="26" cy="18" r="5" fill="#6ed040"/></svg></div>
              <div class="plot plain"><svg viewBox="0 0 40 40"><path d="M20 35V18" stroke="#7a5230" stroke-width="3" stroke-linecap="round"/><circle cx="20" cy="14" r="10" fill="#4fae2c"/><circle cx="12" cy="17" r="6" fill="#5fc23a"/><circle cx="28" cy="17" r="6" fill="#5fc23a"/></svg></div>
              <div class="plot plain"><svg viewBox="0 0 40 40"><path d="M20 35V18" stroke="#7a5230" stroke-width="3" stroke-linecap="round"/><circle cx="20" cy="14" r="10.5" fill="#4fae2c"/><circle cx="12" cy="17" r="6" fill="#5fc23a"/><circle cx="28" cy="17" r="6" fill="#5fc23a"/><circle cx="15" cy="12" r="2.4" fill="#e8433a"/><circle cx="24" cy="12" r="2.4" fill="#e8433a"/><circle cx="20" cy="18" r="2.4" fill="#e8433a"/></svg></div>
              <!-- rows 2-4: empty soil -->
              <div class="plot"></div><div class="plot"></div><div class="plot"></div><div class="plot"></div><div class="plot"></div><div class="plot"></div>
              <div class="plot"></div><div class="plot"></div><div class="plot"></div><div class="plot"></div><div class="plot"></div><div class="plot"></div>
              <div class="plot"></div><div class="plot"></div><div class="plot"></div><div class="plot"></div><div class="plot"></div><div class="plot"></div>
            </div>
          </div>

          <div class="plant-all">
            <button class="btn-green">Plant All
              <span class="coinnum"><svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="#ffd45c" stroke="#e6b52e" stroke-width="2"/><text x="16" y="21" font-size="14" font-weight="700" text-anchor="middle" fill="#c17d10" font-family="Baloo 2">$</text></svg>700</span>
            </button>
          </div>
        </div>
      </div>

      <!-- ===== SEED CATALOG ===== -->
      <div class="seedbar">
        <div class="tabs">
          <div class="tab active">All Seeds</div>
          <div class="tab">Fruits</div>
          <div class="tab">Trees</div>
          <div class="tab">Special</div>
        </div>
        <div class="cards">
          <!-- Apple -->
          <div class="card">
            <div class="nm">Apple Seed</div>
            <div class="fruit"><svg viewBox="0 0 48 48"><path d="M24 12c-6-4-14 0-14 9 0 10 8 16 14 16s14-6 14-16c0-9-8-13-14-9z" fill="#e8433a" stroke="#b02a22" stroke-width="1.6"/><path d="M24 12c0-3 2-5 5-6" stroke="#6b4a2b" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M27 7c3-1 6 1 5 4-3 1-5-1-5-4z" fill="#5fc23a"/><ellipse cx="18" cy="20" rx="3" ry="5" fill="#fff" opacity=".35"/></svg></div>
            <div class="stat">Growth <span class="v">1m</span></div>
            <div class="stat">Profit <span class="v"><svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="#ffd45c" stroke="#e6b52e" stroke-width="2"/></svg>10</span></div>
            <div class="buy"><svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="#fff" opacity=".9"/><text x="16" y="22" font-size="16" text-anchor="middle" fill="#c17d10" font-family="Baloo 2" font-weight="800">$</text></svg>20</div>
          </div>
          <!-- Orange -->
          <div class="card">
            <div class="nm">Orange Seed</div>
            <div class="fruit"><svg viewBox="0 0 48 48"><circle cx="24" cy="26" r="15" fill="#f5951f" stroke="#c76c10" stroke-width="1.6"/><circle cx="24" cy="26" r="15" fill="url(#o)" opacity=".0"/><path d="M24 11c0-2 2-4 4-4" stroke="#6b4a2b" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M22 12c-3-2-7 0-6 3 3 1 6-1 6-3z" fill="#5fc23a"/><ellipse cx="18" cy="21" rx="3.5" ry="5" fill="#fff" opacity=".35"/></svg></div>
            <div class="stat">Growth <span class="v">5m</span></div>
            <div class="stat">Profit <span class="v"><svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="#ffd45c" stroke="#e6b52e" stroke-width="2"/></svg>30</span></div>
            <div class="buy"><svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="#fff" opacity=".9"/><text x="16" y="22" font-size="16" text-anchor="middle" fill="#c17d10" font-family="Baloo 2" font-weight="800">$</text></svg>60</div>
          </div>
          <!-- Mango -->
          <div class="card">
            <div class="nm">Mango Seed</div>
            <div class="fruit"><svg viewBox="0 0 48 48"><path d="M30 12c-10-2-19 6-18 16 1 7 8 9 13 6 6-4 11-11 9-17-1-3-2-4-4-5z" fill="#f6b823" stroke="#c98a10" stroke-width="1.6"/><path d="M22 22c3-4 8-6 8-6" stroke="#e8433a" stroke-width="1.6" fill="none" opacity=".5" stroke-linecap="round"/><path d="M30 12c1-2 3-3 5-2" stroke="#6b4a2b" stroke-width="2" fill="none" stroke-linecap="round"/><ellipse cx="20" cy="24" rx="3" ry="5" fill="#fff" opacity=".35"/></svg></div>
            <div class="stat">Growth <span class="v">15m</span></div>
            <div class="stat">Profit <span class="v"><svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="#ffd45c" stroke="#e6b52e" stroke-width="2"/></svg>80</span></div>
            <div class="buy"><svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="#fff" opacity=".9"/><text x="16" y="22" font-size="16" text-anchor="middle" fill="#c17d10" font-family="Baloo 2" font-weight="800">$</text></svg>120</div>
          </div>
          <!-- Cherry -->
          <div class="card">
            <div class="nm">Cherry Seed</div>
            <div class="fruit"><svg viewBox="0 0 48 48"><path d="M28 10c-2 6-2 10 0 14M28 10c4 3 8 3 12 1" stroke="#6b4a2b" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="17" cy="30" r="8" fill="#e8433a" stroke="#b02a22" stroke-width="1.5"/><circle cx="31" cy="28" r="8" fill="#e8433a" stroke="#b02a22" stroke-width="1.5"/><ellipse cx="14" cy="27" rx="2.5" ry="3.5" fill="#fff" opacity=".4"/><ellipse cx="28" cy="25" rx="2.5" ry="3.5" fill="#fff" opacity=".4"/></svg></div>
            <div class="stat">Growth <span class="v">1h</span></div>
            <div class="stat">Profit <span class="v"><svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="#ffd45c" stroke="#e6b52e" stroke-width="2"/></svg>150</span></div>
            <div class="buy"><svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="#fff" opacity=".9"/><text x="16" y="22" font-size="16" text-anchor="middle" fill="#c17d10" font-family="Baloo 2" font-weight="800">$</text></svg>200</div>
          </div>
          <!-- Plum -->
          <div class="card">
            <div class="nm">Plum Seed</div>
            <div class="fruit"><svg viewBox="0 0 48 48"><path d="M24 13c-7-3-15 2-15 11 0 9 8 15 15 15s15-6 15-15c0-9-8-14-15-11z" fill="#8b53c9" stroke="#5f338f" stroke-width="1.6"/><path d="M24 40V16" stroke="#5f338f" stroke-width="1.4" opacity=".5"/><path d="M24 13c1-2 3-4 6-4" stroke="#6b4a2b" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M30 9c3-1 5 1 4 4-3 1-5-1-4-4z" fill="#5fc23a"/><ellipse cx="18" cy="22" rx="3" ry="5.5" fill="#fff" opacity=".3"/></svg></div>
            <div class="stat">Growth <span class="v">2h</span></div>
            <div class="stat">Profit <span class="v"><svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="#ffd45c" stroke="#e6b52e" stroke-width="2"/></svg>250</span></div>
            <div class="buy"><svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="#fff" opacity=".9"/><text x="16" y="22" font-size="16" text-anchor="middle" fill="#c17d10" font-family="Baloo 2" font-weight="800">$</text></svg>300</div>
          </div>
        </div>
      </div>

      <!-- ===== BOTTOM NAV ===== -->
      <div class="nav">
        <div class="item active">
          <div class="ic"><svg viewBox="0 0 32 32"><path d="M16 5L4 15h3v11h18V15h3z" fill="#e8623a" stroke="#a83f22" stroke-width="1.6" stroke-linejoin="round"/><rect x="13" y="18" width="6" height="8" fill="#8a5330"/><rect x="9" y="16" width="4" height="4" fill="#ffe19a"/></svg></div>
          <div class="t">Farm</div>
        </div>
        <div class="item">
          <div class="ic"><svg viewBox="0 0 32 32"><path d="M5 13l2-6h18l2 6z" fill="#e35b4b" stroke="#a83526" stroke-width="1.4"/><rect x="6" y="13" width="20" height="12" rx="1.5" fill="#f3e6cc" stroke="#a87f4c" stroke-width="1.4"/><path d="M6 13a2.4 2.4 0 004.8 0 2.4 2.4 0 004.8 0 2.4 2.4 0 004.8 0 2.4 2.4 0 004.8 0" fill="none" stroke="#c0392b" stroke-width="1.2"/></svg></div>
          <div class="t">Market</div>
        </div>
        <div class="item">
          <div class="ic"><svg viewBox="0 0 32 32"><path d="M5 12l11-6 11 6v14H5z" fill="#c0392b" stroke="#8a2820" stroke-width="1.6" stroke-linejoin="round"/><path d="M11 26V16h10v10" fill="#f3e6cc" stroke="#a87f4c" stroke-width="1.2"/><path d="M16 16v10M11 21h10" stroke="#c99457" stroke-width="1.2"/></svg></div>
          <div class="t">Warehouse</div>
        </div>
        <div class="item locked">
          <div class="lockpad"><svg viewBox="0 0 24 24"><rect x="5" y="10" width="14" height="10" rx="2" fill="#f0dcb8"/><path d="M8 10V7a4 4 0 018 0v3" fill="none" stroke="#f0dcb8" stroke-width="2.4"/></svg></div>
          <div class="ic"><svg viewBox="0 0 32 32"><path d="M5 27V13l6 3V13l6 3V9l9 4v14z" fill="#8a97a3" stroke="#5f6a75" stroke-width="1.4" stroke-linejoin="round"/><rect x="8" y="20" width="3" height="4" fill="#5f6a75"/><rect x="15" y="20" width="3" height="4" fill="#5f6a75"/><rect x="22" y="20" width="3" height="4" fill="#5f6a75"/></svg></div>
          <div class="t">Factory</div>
        </div>
        <div class="item locked">
          <div class="lockpad"><svg viewBox="0 0 24 24"><rect x="5" y="10" width="14" height="10" rx="2" fill="#f0dcb8"/><path d="M8 10V7a4 4 0 018 0v3" fill="none" stroke="#f0dcb8" stroke-width="2.4"/></svg></div>
          <div class="ic"><svg viewBox="0 0 32 32"><path d="M16 4l3.8 7.7 8.5 1.2-6.2 6 1.5 8.5L16 24.4 8.4 26.4l1.5-8.5-6.2-6 8.5-1.2z" fill="#b7a06a" stroke="#877033" stroke-width="1.4" stroke-linejoin="round"/></svg></div>
          <div class="t">Prestige</div>
        </div>
      </div>
`;

export default function Home() {
  return <main className="app" dangerouslySetInnerHTML={{ __html: MARKUP }} />;
}
