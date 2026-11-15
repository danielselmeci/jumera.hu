import{C as e,D as t,I as n,O as r,S as i,_ as a,a as o,b as s,c,d as l,g as u,h as d,i as f,k as p,l as m,n as h,o as g,p as _,r as v,s as y,t as b,u as x,v as S,x as C,y as w}from"./layout-YiSyq4dx.js";import{a as T,c as E,d as D,f as O,i as k,l as A,n as j,o as M,r as N,s as P,t as F}from"./calendar-DATT8Fck.js";var I=document.getElementById(`booking`),L=c(`createBooking`),R={user:null,authReady:!1,services:[],servicesLoaded:!1,settings:b,serviceId:new URLSearchParams(location.search).get(`s`)??``,date:``,slot:null,busy:[],step:1,profile:{name:``,phone:``},done:null,mode:`choose`,guestName:``},z=null,B=()=>R.services.find(e=>e.id===R.serviceId),V=()=>{let e=B();return!e||!R.slot?null:N(e.name,R.slot,new Date(R.slot.getTime()+e.durationMinutes*6e4),R.settings.address,R.settings.phone)},H=()=>{let e=y.currentUser;return!!(e&&e.providerData.length>0&&e.providerData.every(e=>e.providerId===`phone`))};function U(){return`<div class="steps">${[`Szolgáltatás`,`Időpont`,`Adatok`].map((e,t)=>`<span class="${R.step===t+1?`on`:``}">${t+1}. ${e}</span>`).join(``)}</div>`}function W(){if(z?.(),!R.date)return;let e=O.fromISO(R.date,{zone:P}),t=d(w(m,`busy`),a(`start`,`>=`,S.fromDate(e.minus({days:1}).toJSDate())),a(`start`,`<`,S.fromDate(e.plus({days:1}).toJSDate())));z=_(t,e=>{R.busy=e.docs.map(e=>({start:e.get(`start`).toDate(),end:e.get(`end`).toDate()})),R.step===2&&(R.slot&&!G().some(e=>e.getTime()===R.slot.getTime())&&(R.slot=null),q())})}function G(){let e=B();return!e||!R.date?[]:E(R.date,e.durationMinutes,R.settings,R.busy)}function K(){let e=B(),t=O.now().setZone(P).startOf(`day`),n=[];for(let r=0;r<=R.settings.maxDaysAhead;r++){let i=t.plus({days:r}),a=i.toISODate(),o=(R.settings.openingHours[String(i.weekday)]??[]).length>0&&!R.settings.closedDates.includes(a)&&e?E(a,e.durationMinutes,R.settings,[]).length>0:!1;n.push(`<button class="day ${R.date===a?`selected`:``}" data-date="${a}" ${o?``:`disabled`}>
      <div class="dn">${i.setLocale(`hu`).toFormat(`ccc`)}</div><div class="dd">${i.day}</div><div class="dm">${i.setLocale(`hu`).toFormat(`LLL`)}</div></button>`)}return n.join(``)}function q(){if(R.done){let e=B();I.innerHTML=`
      <div class="card narrow center" style="max-width:560px">
        <div class="eyebrow">${R.done.status===`pending`?`Foglalási kérés elküldve`:`Foglalás rögzítve`}</div>
        <h2>Köszönjük! 🌙</h2>
        <p>${v(e?.name)}<br><strong>${R.slot?`${A(R.slot)}, ${D(R.slot)}`:``}</strong></p>
        <p class="muted">${R.done.status===`pending`?`A foglalásodat hamarosan jóváhagyjuk. Erről értesítést kapsz az appban és a Fiókom oldalon látod az állapotát.`:`Várunk szeretettel! A foglalásodat a Fiókom oldalon látod.`}</p>
        ${e&&R.slot?`<p>${F(V(),`done`)}</p>`:``}
        ${H()?``:`<a class="btn" href="/fiokom/">Foglalásaim</a>`}
      </div><div id="guest-offer"></div>`,I.querySelector(`[data-ics]`)?.addEventListener(`click`,()=>j(V())),H()&&J(document.getElementById(`guest-offer`));return}if(R.step===1){I.innerHTML=U()+`
      <div class="grid cols-2">${R.services.map(e=>`
        <button class="card service-card ${e.id===R.serviceId?`selected`:``}" data-service="${v(e.id)}">
          <div class="top"><h3>${v(e.name)}</h3><strong>${f(e.price)}${e.priceFrom?`-tól`:``}</strong></div>
          <p class="muted small" style="margin:6px 0 0">${h(e.durationMinutes)}${e.description?` · ${v(e.description)}`:``}</p>
        </button>`).join(``)||(R.servicesLoaded?`<p class="muted center">Jelenleg nincs online foglalható szolgáltatás.</p>`:`<div class="spinner"></div>`)}
      </div>`,I.querySelectorAll(`[data-service]`).forEach(e=>e.addEventListener(`click`,()=>{R.serviceId=e.dataset.service,R.slot=null,R.step=2,q(),window.scrollTo({top:0,behavior:`smooth`})}));return}let e=B();if(!e){R.step=1,q();return}if(R.step===2){let t=G();I.innerHTML=U()+`
      <div class="card">
        <div class="top" style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;align-items:baseline">
          <h3 style="margin:0">${v(e.name)}</h3><span class="muted">${h(e.durationMinutes)} · ${f(e.price)}</span>
        </div>
        <label>Válassz napot</label>
        <div class="days">${K()}</div>
        ${R.date?`<label>Szabad időpontok – ${A(O.fromISO(R.date,{zone:P}).toJSDate())}</label>
          <div class="slots">${t.map(e=>`<button class="slot ${R.slot?.getTime()===e.getTime()?`selected`:``}" data-slot="${e.toISOString()}">${D(e)}</button>`).join(``)}</div>
          ${t.length?``:`<p class="muted">Erre a napra már nincs szabad időpont.</p>`}`:`<p class="muted small">A szürke napokon zárva tartunk vagy nincs szabad időpont.</p>`}
        <div style="display:flex;justify-content:space-between;margin-top:26px;gap:12px">
          <button class="btn ghost" data-back>Vissza</button>
          <button class="btn" data-next ${R.slot?``:`disabled`}>Tovább</button>
        </div>
      </div>`,I.querySelectorAll(`[data-date]`).forEach(e=>e.addEventListener(`click`,()=>{R.date=e.dataset.date,R.slot=null,W(),q()})),I.querySelectorAll(`[data-slot]`).forEach(e=>e.addEventListener(`click`,()=>{R.slot=new Date(e.dataset.slot),q()})),I.querySelector(`[data-back]`).addEventListener(`click`,()=>{R.step=1,q()}),I.querySelector(`[data-next]`).addEventListener(`click`,()=>{R.step=3,q()}),I.querySelector(`.day.selected`)?.scrollIntoView({block:`nearest`,inline:`center`});return}if(!R.authReady){I.innerHTML=U()+`<div class="spinner"></div>`;return}let t=`
      <h3>Foglalás összesítése</h3>
      <dl class="summary">
        <dt>Szolgáltatás</dt><dd>${v(e.name)}</dd>
        <dt>Időpont</dt><dd>${A(R.slot)}, ${D(R.slot)}</dd>
        <dt>Időtartam</dt><dd>${h(e.durationMinutes)}</dd>
        <dt>Ár</dt><dd>${f(e.price)}${e.priceFrom?`-tól`:``} <span class="muted small">(a helyszínen fizetendő)</span></dd>
      </dl>`;if(!R.user){if(R.mode===`guest`){I.innerHTML=U()+`
        <div class="card narrow" style="max-width:560px">${t}
          <h3 style="margin-top:20px">Foglalás vendégként</h3>
          <label for="g-name">Teljes név</label><input id="g-name" maxlength="80" autocomplete="name" value="${v(R.guestName)}">
          <div id="phone"></div>
          <p class="muted small" style="margin-top:12px">Vendégként minden foglalásnál SMS-kóddal erősítjük meg a számod.</p>
          <button class="btn ghost small" data-back style="margin-top:8px">Vissza</button>
        </div>`;let e=I.querySelector(`#g-name`);e.addEventListener(`input`,()=>R.guestName=e.value),k(document.getElementById(`phone`),{guestName:()=>R.guestName,onVerified:()=>void 0}),I.querySelector(`[data-back]`).addEventListener(`click`,()=>{R.mode=`choose`,q()});return}if(R.mode===`login`){I.innerHTML=U()+`<div id="auth"></div><p class="center"><a href="#" data-back>Vissza</a></p>`,T(document.getElementById(`auth`),`Jelentkezz be, és a foglalás a fiókodba kerül – a pecséteket is gyűjtheted.`),I.querySelector(`[data-back]`).addEventListener(`click`,e=>{e.preventDefault(),R.mode=`choose`,q()});return}I.innerHTML=U()+`
      <div class="card narrow" style="max-width:560px">${t}
        <div style="display:grid;gap:12px;margin-top:22px">
          <button class="btn block" data-login>Belépés vagy regisztráció<br><span class="small" style="font-weight:400;opacity:.75">Gyűjts pecséteket, és kövesd a foglalásaid</span></button>
          <button class="btn ghost block" data-guest>Folytatás vendégként</button>
          <button class="btn ghost small" data-back>Vissza</button>
        </div>
      </div>`,I.querySelector(`[data-login]`).addEventListener(`click`,()=>{R.mode=`login`,q()}),I.querySelector(`[data-guest]`).addEventListener(`click`,()=>{R.mode=`guest`,q()}),I.querySelector(`[data-back]`).addEventListener(`click`,()=>{R.step=2,q()});return}if(!R.user.phoneNumber){I.innerHTML=U()+`
      <div class="card narrow" style="max-width:560px">${t}
        <h3 style="margin-top:20px">Telefonszám megerősítése</h3>
        <p class="muted small">Egyszer kell megerősítened a számod, utána minden foglalásnál automatikusan kitöltjük.</p>
        <div id="phone"></div>
      </div>`,k(document.getElementById(`phone`),{initialPhone:R.profile.phone,onVerified:()=>{R.user=y.currentUser,q()}});return}I.innerHTML=U()+`
    <div class="card narrow" style="max-width:560px">${t}
      <form>
        <label for="b-name">Név</label><input id="b-name" name="name" required maxlength="80" value="${v(R.profile.name||R.guestName)}">
        <label>Telefonszám</label><p style="margin:0;color:var(--ok)">✓ ${v(R.user.phoneNumber)}</p>
        <label for="b-note">Megjegyzés (nem kötelező)</label><textarea id="b-note" name="note" rows="3" maxlength="500" placeholder="Pl. első alkalom, allergia, kívánt stílus"></textarea>
        <p class="muted small" style="margin-top:12px">${R.settings.requireApproval?`A foglalást jóváhagyás után véglegesítjük. `:``}Lemondani az időpont előtt ${R.settings.cancelUntilHours} óráig tudsz.</p>
        <div class="alert error hidden" role="alert"></div>
        <div style="display:flex;justify-content:space-between;margin-top:20px;gap:12px">
          <button class="btn ghost" type="button" data-back>Vissza</button>
          <button class="btn" type="submit">Foglalás elküldése</button>
        </div>
      </form>
    </div>`,I.querySelector(`[data-back]`).addEventListener(`click`,()=>{R.step=2,q()});let n=I.querySelector(`form`);n.addEventListener(`submit`,async t=>{t.preventDefault();let r=new FormData(n),i=n.querySelector(`button[type=submit]`),a=n.querySelector(`.alert`),o=String(r.get(`name`)??``).trim();if(!o)a.textContent=`Kérjük, add meg a neved.`,a.classList.remove(`hidden`);else{i.disabled=!0;try{await u(s(m,`users`,R.user.uid),{name:o,updatedAt:C()},{merge:!0}),R.done={status:(await L({serviceId:e.id,start:R.slot.toISOString(),note:String(r.get(`note`)??``),name:o,source:`web`})).status},q(),window.scrollTo({top:0,behavior:`smooth`})}catch(e){a.textContent=x(e),a.classList.remove(`hidden`),i.disabled=!1}}})}function J(a){a.innerHTML=`
    <div class="card narrow" style="max-width:560px;margin-top:18px">
      <div class="eyebrow">Hűségkártya</div>
      <h3>Hozz létre fiókot, és gyűjts pecséteket!</h3>
      <p class="muted small">Ez a foglalás már az első pecsétet érheti. A fiókkal követheted a foglalásaid, és legközelebb nem kell SMS-kód.</p>
      <button class="btn block apple-btn" data-apple>Folytatás az Apple-lel</button>
      <form style="margin-top:14px">
        <label for="u-email">E-mail cím</label><input id="u-email" type="email" autocomplete="email" required>
        <label for="u-pass">Jelszó</label><input id="u-pass" type="password" autocomplete="new-password" minlength="8" required>
        <label class="check"><input type="checkbox" name="marketing"><span>Kérek értesítést akciókról és újdonságokról.</span></label>
        <p class="muted small">A fiók létrehozásával elfogadod az <a href="/aszf/" target="_blank">ÁSZF-et</a> és az <a href="/adatvedelem/" target="_blank">Adatkezelési tájékoztatót</a>.</p>
        <div class="alert error hidden" role="alert"></div>
        <button class="btn block" type="submit">Fiók létrehozása</button>
      </form>
      <p class="center small" style="margin-top:14px"><a href="#" data-skip>Most nem</a></p>
    </div>`;let o=a.querySelector(`.alert`),c=()=>{a.innerHTML=`<p class="center" style="margin-top:18px"><a class="btn" href="/fiokom/">Fiókom megnyitása</a></p>`},l=e=>{let t=e.code??``;o.textContent=t===`auth/email-already-in-use`||t===`auth/credential-already-in-use`?`Ehhez már tartozik fiók. Jelentkezz be vele, és a következő foglalás már oda kerül.`:x(e),o.classList.remove(`hidden`)};a.querySelector(`[data-apple]`).addEventListener(`click`,async()=>{try{let t=new e(`apple.com`);t.addScope(`email`),t.addScope(`name`);let n=await r(y.currentUser,t);await u(s(m,`users`,n.user.uid),{email:n.user.email??``,updatedAt:C()},{merge:!0}),c()}catch(e){e.code!==`auth/popup-closed-by-user`&&l(e)}});let d=a.querySelector(`form`);d.addEventListener(`submit`,async e=>{e.preventDefault();let n=a.querySelector(`#u-email`).value.trim(),r=a.querySelector(`#u-pass`).value,f=!!new FormData(d).get(`marketing`);if(r.length<8)o.textContent=`A jelszó legalább 8 karakter legyen.`,o.classList.remove(`hidden`);else try{let e=await t(y.currentUser,i.credential(n,r));await u(s(m,`users`,e.user.uid),{email:n,marketingOptIn:f,...f?{marketingOptInAt:C()}:{},updatedAt:C()},{merge:!0}),await M(),c()}catch(e){l(e)}}),a.querySelector(`[data-skip]`).addEventListener(`click`,async e=>{e.preventDefault(),await n(y),a.innerHTML=`<p class="center muted" style="margin-top:18px">Rendben! A foglalásodról telefonon is kereshetünk.</p>`})}o(e=>{R.services=e,R.servicesLoaded=!0,q()}),g(e=>{R.settings=e,q()}),p(y,async e=>{if(R.user=e,R.authReady=!0,e){let t=await l(s(m,`users`,e.uid)).catch(()=>null);R.profile={name:t?.get(`name`)??e.displayName??``,phone:t?.get(`phone`)??``}}q()}),R.serviceId&&(R.step=2),q();