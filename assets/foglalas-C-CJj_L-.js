import{B as e,F as t,I as n,L as r,N as i,P as a,R as o,T as s,_ as c,a as l,c as u,d,f,g as p,i as m,j as h,k as g,l as _,n as v,o as y,r as b,s as x,t as S,u as C,v as w,z as T}from"./layout-Dagca8y_.js";import{a as E,c as D,d as O,f as k,i as A,l as j,n as M,o as N,r as P,s as F,t as I}from"./calendar-Dt8qVDX2.js";var L=document.getElementById(`booking`),R=u(`createBooking`),z={user:null,authReady:!1,services:[],servicesLoaded:!1,settings:S,serviceId:new URLSearchParams(location.search).get(`s`)??``,date:``,slot:null,busy:[],step:1,profile:{name:``,phone:``},done:null,mode:`choose`,guestName:``},B=null,V=()=>z.services.find(e=>e.id===z.serviceId),H=()=>{let e=V();return!e||!z.slot?null:P(e.name,z.slot,new Date(z.slot.getTime()+e.durationMinutes*6e4),z.settings.address,z.settings.phone)},U=()=>{let e=x.currentUser;return!!(e&&e.providerData.length>0&&e.providerData.every(e=>e.providerId===`phone`))};function W(){return`<div class="steps">${[`Szolgáltatás`,`Időpont`,`Adatok`].map((e,t)=>`<span class="${z.step===t+1?`on`:``}">${t+1}. ${e}</span>`).join(``)}</div>`}function G(){if(B?.(),!z.date)return;let e=k.fromISO(z.date,{zone:F}),a=i(r(_,`busy`),t(`start`,`>=`,n.fromDate(e.minus({days:1}).toJSDate())),t(`start`,`<`,n.fromDate(e.plus({days:1}).toJSDate())));B=h(a,e=>{z.busy=e.docs.map(e=>({start:e.get(`start`).toDate(),end:e.get(`end`).toDate()})),z.step===2&&(z.slot&&!K().some(e=>e.getTime()===z.slot.getTime())&&(z.slot=null),J())})}function K(){let e=V();return!e||!z.date?[]:D(z.date,e.durationMinutes,z.settings,z.busy)}function q(){let t=V(),n=k.now().setZone(F).startOf(`day`),r=[];for(let i=0;i<=z.settings.maxDaysAhead;i++){let a=n.plus({days:i}),o=a.toISODate(),s=(z.settings.openingHours[String(a.weekday)]??[]).length>0&&!z.settings.closedDates.includes(o)&&t?D(o,t.durationMinutes,z.settings,[]).length>0:!1;r.push(`<button class="day ${z.date===o?`selected`:``}" data-date="${o}" ${s?``:`disabled`}>
      <div class="dn">${a.setLocale(e).toFormat(`ccc`)}</div><div class="dd">${a.day}</div><div class="dm">${a.setLocale(e).toFormat(`LLL`)}</div></button>`)}return r.join(``)}function J(){if(z.done){let e=V();L.innerHTML=`
      <div class="card narrow center" style="max-width:560px">
        <div class="eyebrow">${z.done.status===`pending`?`Foglalási kérés elküldve`:`Foglalás rögzítve`}</div>
        <h2>Köszönjük! 🌙</h2>
        <p>${b(e?.name)}<br><strong>${z.slot?`${j(z.slot)}, ${O(z.slot)}`:``}</strong></p>
        <p class="muted">${z.done.status===`pending`?`A foglalásodat hamarosan jóváhagyjuk. Erről értesítést kapsz az appban és a Fiókom oldalon látod az állapotát.`:`Várunk szeretettel! A foglalásodat a Fiókom oldalon látod.`}</p>
        ${e&&z.slot?`<p>${I(H(),`done`)}</p>`:``}
        ${U()?``:`<a class="btn" href="/fiokom/">Foglalásaim</a>`}
      </div><div id="guest-offer"></div>`,L.querySelector(`[data-ics]`)?.addEventListener(`click`,()=>M(H())),U()&&Y(document.getElementById(`guest-offer`));return}if(z.step===1){L.innerHTML=W()+`
      <div class="grid cols-2">${z.services.map(e=>`
        <button class="card service-card ${e.id===z.serviceId?`selected`:``}" data-service="${b(e.id)}">
          <div class="top"><h3>${b(e.name)}</h3><strong>${m(e.price)}${e.priceFrom?`-tól`:``}</strong></div>
          <p class="muted small" style="margin:6px 0 0">${v(e.durationMinutes)}${e.description?` · ${b(e.description)}`:``}</p>
        </button>`).join(``)||(z.servicesLoaded?`<p class="muted center">Jelenleg nincs online foglalható szolgáltatás.</p>`:`<div class="spinner"></div>`)}
      </div>`,L.querySelectorAll(`[data-service]`).forEach(e=>e.addEventListener(`click`,()=>{z.serviceId=e.dataset.service,z.slot=null,z.step=2,J(),window.scrollTo({top:0,behavior:`smooth`})}));return}let e=V();if(!e){if(!z.servicesLoaded){L.innerHTML=W()+`<div class="spinner"></div>`;return}z.step=1,J();return}if(z.step===2){let t=K();L.innerHTML=W()+`
      <div class="card">
        <div class="top" style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;align-items:baseline">
          <h3 style="margin:0">${b(e.name)}</h3><span class="muted">${v(e.durationMinutes)} · ${m(e.price)}</span>
        </div>
        <label>Válassz napot</label>
        <div class="days">${q()}</div>
        ${z.date?`<label>Szabad időpontok – ${j(k.fromISO(z.date,{zone:F}).toJSDate())}</label>
          <div class="slots">${t.map(e=>`<button class="slot ${z.slot?.getTime()===e.getTime()?`selected`:``}" data-slot="${e.toISOString()}">${O(e)}</button>`).join(``)}</div>
          ${t.length?``:`<p class="muted">Erre a napra már nincs szabad időpont.</p>`}`:`<p class="muted small">A szürke napokon zárva tartunk vagy nincs szabad időpont.</p>`}
        <div style="display:flex;justify-content:space-between;margin-top:26px;gap:12px">
          <button class="btn ghost" data-back>Vissza</button>
          <button class="btn" data-next ${z.slot?``:`disabled`}>Tovább</button>
        </div>
      </div>`,L.querySelectorAll(`[data-date]`).forEach(e=>e.addEventListener(`click`,()=>{z.date=e.dataset.date,z.slot=null,G(),J()})),L.querySelectorAll(`[data-slot]`).forEach(e=>e.addEventListener(`click`,()=>{z.slot=new Date(e.dataset.slot),J()})),L.querySelector(`[data-back]`).addEventListener(`click`,()=>{z.step=1,J()}),L.querySelector(`[data-next]`).addEventListener(`click`,()=>{z.step=3,J()}),L.querySelector(`.day.selected`)?.scrollIntoView({block:`nearest`,inline:`center`});return}if(!z.authReady){L.innerHTML=W()+`<div class="spinner"></div>`;return}let t=`
      <h3>Foglalás összesítése</h3>
      <dl class="summary">
        <dt>Szolgáltatás</dt><dd>${b(e.name)}</dd>
        <dt>Időpont</dt><dd>${j(z.slot)}, ${O(z.slot)}</dd>
        <dt>Időtartam</dt><dd>${v(e.durationMinutes)}</dd>
        <dt>Ár</dt><dd>${m(e.price)}${e.priceFrom?`-tól`:``} <span class="muted small">(a helyszínen fizetendő)</span></dd>
      </dl>`;if(!z.user){if(z.mode===`guest`){L.innerHTML=W()+`
        <div class="card narrow" style="max-width:560px">${t}
          <h3 style="margin-top:20px">Foglalás vendégként</h3>
          <label for="g-name">Teljes név</label><input id="g-name" maxlength="80" autocomplete="name" value="${b(z.guestName)}">
          <div id="phone"></div>
          <p class="muted small" style="margin-top:12px">Vendégként minden foglalásnál SMS-kóddal erősítjük meg a számod.</p>
          <button class="btn ghost small" data-back style="margin-top:8px">Vissza</button>
        </div>`;let e=L.querySelector(`#g-name`);e.addEventListener(`input`,()=>z.guestName=e.value),A(document.getElementById(`phone`),{guestName:()=>z.guestName,onVerified:()=>void 0}),L.querySelector(`[data-back]`).addEventListener(`click`,()=>{z.mode=`choose`,J()});return}if(z.mode===`login`){L.innerHTML=W()+`<div id="auth"></div><p class="center"><a href="#" data-back>Vissza</a></p>`,E(document.getElementById(`auth`),`Jelentkezz be, és a foglalás a fiókodba kerül – a pecséteket is gyűjtheted.`),L.querySelector(`[data-back]`).addEventListener(`click`,e=>{e.preventDefault(),z.mode=`choose`,J()});return}L.innerHTML=W()+`
      <div class="card narrow" style="max-width:560px">${t}
        <div style="display:grid;gap:12px;margin-top:22px">
          <button class="btn block" data-login>Belépés vagy regisztráció<br><span class="small" style="font-weight:400;opacity:.75">Gyűjts pecséteket, és kövesd a foglalásaid</span></button>
          <button class="btn ghost block" data-guest>Folytatás vendégként</button>
          <button class="btn ghost small" data-back>Vissza</button>
        </div>
      </div>`,L.querySelector(`[data-login]`).addEventListener(`click`,()=>{z.mode=`login`,J()}),L.querySelector(`[data-guest]`).addEventListener(`click`,()=>{z.mode=`guest`,J()}),L.querySelector(`[data-back]`).addEventListener(`click`,()=>{z.step=2,J()});return}if(!z.user.phoneNumber){L.innerHTML=W()+`
      <div class="card narrow" style="max-width:560px">${t}
        <h3 style="margin-top:20px">Telefonszám megerősítése</h3>
        <p class="muted small">Egyszer kell megerősítened a számod, utána minden foglalásnál automatikusan kitöltjük.</p>
        <div id="phone"></div>
      </div>`,A(document.getElementById(`phone`),{initialPhone:z.profile.phone,onVerified:()=>{z.user=x.currentUser,J()}});return}L.innerHTML=W()+`
    <div class="card narrow" style="max-width:560px">${t}
      <form>
        <label for="b-name">Név</label><input id="b-name" name="name" required maxlength="80" value="${b(z.profile.name||z.guestName)}">
        <label>Telefonszám</label><p style="margin:0;color:var(--ok)">✓ ${b(z.user.phoneNumber)}</p>
        <label for="b-note">Megjegyzés (nem kötelező)</label><textarea id="b-note" name="note" rows="3" maxlength="500" placeholder="Pl. első alkalom, allergia, kívánt stílus"></textarea>
        <p class="muted small" style="margin-top:12px">${z.settings.requireApproval?`A foglalást jóváhagyás után véglegesítjük. `:``}Lemondani az időpont előtt ${z.settings.cancelUntilHours} óráig tudsz.</p>
        <div class="alert error hidden" role="alert"></div>
        <div style="display:flex;justify-content:space-between;margin-top:20px;gap:12px">
          <button class="btn ghost" type="button" data-back>Vissza</button>
          <button class="btn" type="submit">Foglalás elküldése</button>
        </div>
      </form>
    </div>`,L.querySelector(`[data-back]`).addEventListener(`click`,()=>{z.step=2,J()});let n=L.querySelector(`form`);n.addEventListener(`submit`,async t=>{t.preventDefault();let r=new FormData(n),i=n.querySelector(`button[type=submit]`),s=n.querySelector(`.alert`),c=String(r.get(`name`)??``).trim();if(!c)s.textContent=`Kérjük, add meg a neved.`,s.classList.remove(`hidden`);else{i.disabled=!0;try{await a(o(_,`users`,z.user.uid),{name:c,updatedAt:T()},{merge:!0}),z.done={status:(await R({serviceId:e.id,start:z.slot.toISOString(),note:String(r.get(`note`)??``),name:c,source:`web`})).status},J(),window.scrollTo({top:0,behavior:`smooth`})}catch(e){s.textContent=C(e),s.classList.remove(`hidden`),i.disabled=!1}}})}function Y(e){e.innerHTML=`
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
    </div>`;let t=e.querySelector(`.alert`),n=()=>{e.innerHTML=`<p class="center" style="margin-top:18px"><a class="btn" href="/fiokom/">Fiókom megnyitása</a></p>`},r=e=>{let n=e.code??``;t.textContent=n===`auth/email-already-in-use`||n===`auth/credential-already-in-use`?`Ehhez már tartozik fiók. Jelentkezz be vele, és a következő foglalás már oda kerül.`:C(e),t.classList.remove(`hidden`)};e.querySelector(`[data-apple]`).addEventListener(`click`,async()=>{try{let e=new f(`apple.com`);e.addScope(`email`),e.addScope(`name`);let t=await c(x.currentUser,e);await a(o(_,`users`,t.user.uid),{email:t.user.email??``,updatedAt:T()},{merge:!0}),n()}catch(e){e.code!==`auth/popup-closed-by-user`&&r(e)}});let i=e.querySelector(`form`);i.addEventListener(`submit`,async s=>{s.preventDefault();let c=e.querySelector(`#u-email`).value.trim(),l=e.querySelector(`#u-pass`).value,u=!!new FormData(i).get(`marketing`);if(l.length<8)t.textContent=`A jelszó legalább 8 karakter legyen.`,t.classList.remove(`hidden`);else try{let e=await p(x.currentUser,d.credential(c,l));await a(o(_,`users`,e.user.uid),{email:c,marketingOptIn:u,...u?{marketingOptInAt:T()}:{},updatedAt:T()},{merge:!0}),await N(),n()}catch(e){r(e)}}),e.querySelector(`[data-skip]`).addEventListener(`click`,async t=>{t.preventDefault(),await s(x),e.innerHTML=`<p class="center muted" style="margin-top:18px">Rendben! A foglalásodról telefonon is kereshetünk.</p>`})}l(e=>{z.services=e,z.servicesLoaded=!0,J()}),y(e=>{z.settings=e,J()}),w(x,async e=>{if(z.user=e,z.authReady=!0,e){let t=await g(o(_,`users`,e.uid)).catch(()=>null);z.profile={name:t?.get(`name`)??e.displayName??``,phone:t?.get(`phone`)??``}}J()}),z.serviceId&&(z.step=2),J();