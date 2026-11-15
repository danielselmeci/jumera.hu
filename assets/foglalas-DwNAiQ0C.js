import{C as e,_ as t,a as n,b as r,c as i,d as a,g as o,h as s,i as c,l,n as u,o as d,p as f,r as p,s as m,t as h,u as g,v as _,x as v,y}from"./layout-C3ydVbTG.js";import{i as b,n as x,o as S,r as C,s as w,t as T}from"./auth-ui-BNIhO0oe.js";var E=document.getElementById(`booking`),D=i(`createBooking`),O={user:null,authReady:!1,services:[],servicesLoaded:!1,settings:h,serviceId:new URLSearchParams(location.search).get(`s`)??``,date:``,slot:null,busy:[],step:1,profile:{name:``,phone:``},done:null},k=null,A=()=>O.services.find(e=>e.id===O.serviceId);function j(){return`<div class="steps">${[`Szolgáltatás`,`Időpont`,`Adatok`].map((e,t)=>`<span class="${O.step===t+1?`on`:``}">${t+1}. ${e}</span>`).join(``)}</div>`}function M(){if(k?.(),!O.date)return;let e=w.fromISO(O.date,{zone:x}),n=s(y(l,`busy`),t(`start`,`>=`,_.fromDate(e.minus({days:1}).toJSDate())),t(`start`,`<`,_.fromDate(e.plus({days:1}).toJSDate())));k=f(n,e=>{O.busy=e.docs.map(e=>({start:e.get(`start`).toDate(),end:e.get(`end`).toDate()})),O.step===2&&(O.slot&&!N().some(e=>e.getTime()===O.slot.getTime())&&(O.slot=null),F())})}function N(){let e=A();return!e||!O.date?[]:C(O.date,e.durationMinutes,O.settings,O.busy)}function P(){let e=A(),t=w.now().setZone(x).startOf(`day`),n=[];for(let r=0;r<=O.settings.maxDaysAhead;r++){let i=t.plus({days:r}),a=i.toISODate(),o=(O.settings.openingHours[String(i.weekday)]??[]).length>0&&!O.settings.closedDates.includes(a)&&e?C(a,e.durationMinutes,O.settings,[]).length>0:!1;n.push(`<button class="day ${O.date===a?`selected`:``}" data-date="${a}" ${o?``:`disabled`}>
      <div class="dn">${i.setLocale(`hu`).toFormat(`ccc`)}</div><div class="dd">${i.day}</div><div class="dm">${i.setLocale(`hu`).toFormat(`LLL`)}</div></button>`)}return n.join(``)}function F(){if(O.done){let e=A();E.innerHTML=`
      <div class="card narrow center" style="max-width:560px">
        <div class="eyebrow">${O.done.status===`pending`?`Foglalási kérés elküldve`:`Foglalás rögzítve`}</div>
        <h2>Köszönjük! 🌙</h2>
        <p>${p(e?.name)}<br><strong>${O.slot?`${b(O.slot)}, ${S(O.slot)}`:``}</strong></p>
        <p class="muted">${O.done.status===`pending`?`A foglalásodat hamarosan jóváhagyjuk. Erről értesítést kapsz az appban és a Fiókom oldalon látod az állapotát.`:`Várunk szeretettel! A foglalásodat a Fiókom oldalon látod.`}</p>
        <a class="btn" href="/fiokom/">Foglalásaim</a>
      </div>`;return}if(O.step===1){E.innerHTML=j()+`
      <div class="grid cols-2">${O.services.map(e=>`
        <button class="card service-card ${e.id===O.serviceId?`selected`:``}" data-service="${p(e.id)}">
          <div class="top"><h3>${p(e.name)}</h3><strong>${c(e.price)}${e.priceFrom?`-tól`:``}</strong></div>
          <p class="muted small" style="margin:6px 0 0">${u(e.durationMinutes)}${e.description?` · ${p(e.description)}`:``}</p>
        </button>`).join(``)||(O.servicesLoaded?`<p class="muted center">Jelenleg nincs online foglalható szolgáltatás.</p>`:`<div class="spinner"></div>`)}
      </div>`,E.querySelectorAll(`[data-service]`).forEach(e=>e.addEventListener(`click`,()=>{O.serviceId=e.dataset.service,O.slot=null,O.step=2,F(),window.scrollTo({top:0,behavior:`smooth`})}));return}let e=A();if(!e){O.step=1,F();return}if(O.step===2){let t=N();E.innerHTML=j()+`
      <div class="card">
        <div class="top" style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;align-items:baseline">
          <h3 style="margin:0">${p(e.name)}</h3><span class="muted">${u(e.durationMinutes)} · ${c(e.price)}</span>
        </div>
        <label>Válassz napot</label>
        <div class="days">${P()}</div>
        ${O.date?`<label>Szabad időpontok – ${b(w.fromISO(O.date,{zone:x}).toJSDate())}</label>
          <div class="slots">${t.map(e=>`<button class="slot ${O.slot?.getTime()===e.getTime()?`selected`:``}" data-slot="${e.toISOString()}">${S(e)}</button>`).join(``)}</div>
          ${t.length?``:`<p class="muted">Erre a napra már nincs szabad időpont.</p>`}`:`<p class="muted small">A szürke napokon zárva tartunk vagy nincs szabad időpont.</p>`}
        <div style="display:flex;justify-content:space-between;margin-top:26px;gap:12px">
          <button class="btn ghost" data-back>Vissza</button>
          <button class="btn" data-next ${O.slot?``:`disabled`}>Tovább</button>
        </div>
      </div>`,E.querySelectorAll(`[data-date]`).forEach(e=>e.addEventListener(`click`,()=>{O.date=e.dataset.date,O.slot=null,M(),F()})),E.querySelectorAll(`[data-slot]`).forEach(e=>e.addEventListener(`click`,()=>{O.slot=new Date(e.dataset.slot),F()})),E.querySelector(`[data-back]`).addEventListener(`click`,()=>{O.step=1,F()}),E.querySelector(`[data-next]`).addEventListener(`click`,()=>{O.step=3,F()}),E.querySelector(`.day.selected`)?.scrollIntoView({block:`nearest`,inline:`center`});return}if(!O.authReady){E.innerHTML=j()+`<div class="spinner"></div>`;return}if(!O.user){E.innerHTML=j()+`<div id="auth"></div>`,T(document.getElementById(`auth`),`A foglalás véglegesítéséhez jelentkezz be, vagy hozz létre fiókot. A kiválasztott időpontot megjegyeztük.`);return}E.innerHTML=j()+`
    <div class="card narrow" style="max-width:560px">
      <h3>Foglalás összesítése</h3>
      <dl class="summary">
        <dt>Szolgáltatás</dt><dd>${p(e.name)}</dd>
        <dt>Időpont</dt><dd>${b(O.slot)}, ${S(O.slot)}</dd>
        <dt>Időtartam</dt><dd>${u(e.durationMinutes)}</dd>
        <dt>Ár</dt><dd>${c(e.price)}${e.priceFrom?`-tól`:``} <span class="muted small">(a helyszínen fizetendő)</span></dd>
      </dl>
      <form>
        <label for="b-name">Név</label><input id="b-name" name="name" required maxlength="80" value="${p(O.profile.name)}">
        <label for="b-phone">Telefonszám</label><input id="b-phone" name="phone" type="tel" required maxlength="30" value="${p(O.profile.phone)}">
        <label for="b-note">Megjegyzés (nem kötelező)</label><textarea id="b-note" name="note" rows="3" maxlength="500" placeholder="Pl. első alkalom, allergia, kívánt stílus"></textarea>
        <p class="muted small" style="margin-top:12px">${O.settings.requireApproval?`A foglalást jóváhagyás után véglegesítjük, erről értesítést küldünk. `:``}Lemondani az időpont előtt ${O.settings.cancelUntilHours} óráig tudsz a Fiókom oldalon.</p>
        <div class="alert error hidden" role="alert"></div>
        <div style="display:flex;justify-content:space-between;margin-top:20px;gap:12px">
          <button class="btn ghost" type="button" data-back>Vissza</button>
          <button class="btn" type="submit">Foglalás elküldése</button>
        </div>
      </form>
    </div>`,E.querySelector(`[data-back]`).addEventListener(`click`,()=>{O.step=2,F()});let t=E.querySelector(`form`);t.addEventListener(`submit`,async n=>{n.preventDefault();let i=new FormData(t),a=t.querySelector(`button[type=submit]`),s=t.querySelector(`.alert`),c=String(i.get(`name`)??``).trim(),u=String(i.get(`phone`)??``).trim();if(!c||!u)s.textContent=`Kérjük, add meg a neved és a telefonszámod.`,s.classList.remove(`hidden`);else{a.disabled=!0;try{await o(r(l,`users`,O.user.uid),{name:c,phone:u,updatedAt:v()},{merge:!0}),O.done={status:(await D({serviceId:e.id,start:O.slot.toISOString(),note:String(i.get(`note`)??``),name:c,phone:u,source:`web`})).status},F(),window.scrollTo({top:0,behavior:`smooth`})}catch(e){s.textContent=g(e),s.classList.remove(`hidden`),a.disabled=!1}}})}n(e=>{O.services=e,O.servicesLoaded=!0,F()}),d(e=>{O.settings=e,F()}),e(m,async e=>{if(O.user=e,O.authReady=!0,e){let t=await a(r(l,`users`,e.uid)).catch(()=>null);O.profile={name:t?.get(`name`)??e.displayName??``,phone:t?.get(`phone`)??``}}F()}),O.serviceId&&(O.step=2),F();