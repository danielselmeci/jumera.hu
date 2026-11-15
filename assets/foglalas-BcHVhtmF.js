import{A as e,B as t,E as n,F as r,I as i,L as a,M as o,P as s,R as c,V as l,_ as u,a as d,c as f,d as p,f as m,i as h,l as g,n as _,o as v,p as y,r as b,s as x,t as S,u as C,v as w,y as T,z as E}from"./layout-DN6UJXbo.js";import{a as D,n as O,o as k,r as A,t as j}from"./slots-CNfQrQPd.js";import{a as M,i as N,n as P,o as F,r as I,t as L}from"./calendar-BUmGmD6N.js";var R=document.getElementById(`booking`),z=g(`createBooking`),B=g(`startDeposit`),V=g(`joinWaitlist`),H=new URLSearchParams(location.search).get(`fizetes`),U={user:null,authReady:!1,services:[],servicesLoaded:!1,settings:S,serviceId:new URLSearchParams(location.search).get(`s`)??``,date:``,slot:null,busy:[],step:1,profile:{name:``,phone:``,refillReminders:!1},done:null,waitlisted:new Set,mode:`choose`,guestName:``},W=null,G=()=>U.services.find(e=>e.id===U.serviceId),K=()=>{let e=G();return!e||!U.slot?null:I(e.name,U.slot,new Date(U.slot.getTime()+e.durationMinutes*6e4),U.settings.address,U.settings.phone)},q=()=>{let e=f.currentUser;return!!(e&&e.providerData.length>0&&e.providerData.every(e=>e.providerId===`phone`))};function J(){return`<div class="steps">${[`Szolgáltatás`,`Időpont`,`Adatok`].map((e,t)=>`<span class="${U.step===t+1?`on`:``}">${t+1}. ${e}</span>`).join(``)}</div>`}function Y(){if(W?.(),!U.date)return;let e=k.fromISO(U.date,{zone:j}),t=s(c(C,`busy`),i(`start`,`>=`,a.fromDate(e.minus({days:1}).toJSDate())),i(`start`,`<`,a.fromDate(e.plus({days:1}).toJSDate())));W=o(t,e=>{U.busy=e.docs.map(e=>({start:e.get(`start`).toDate(),end:e.get(`end`).toDate()})),U.step===2&&(U.slot&&!X().some(e=>e.getTime()===U.slot.getTime())&&(U.slot=null),Q())})}function X(){let e=G();return!e||!U.date?[]:O(U.date,e.durationMinutes,U.settings,U.busy,new Date,e.bufferMinutes??0)}function Z(){let e=G(),t=k.now().setZone(j).startOf(`day`),n=[];for(let r=0;r<=U.settings.maxDaysAhead;r++){let i=t.plus({days:r}),a=i.toISODate(),o=(U.settings.openingHours[String(i.weekday)]??[]).length>0&&!U.settings.closedDates.includes(a)&&e?O(a,e.durationMinutes,U.settings,[],new Date,e.bufferMinutes??0).length>0:!1;n.push(`<button class="day ${U.date===a?`selected`:``}" data-date="${a}" ${o?``:`disabled`}>
      <div class="dn">${i.setLocale(l).toFormat(`ccc`)}</div><div class="dd">${i.day}</div><div class="dm">${i.setLocale(l).toFormat(`LLL`)}</div></button>`)}return n.join(``)}function Q(){if(H){ne();return}if(U.done){let e=G();if(U.done.status===`awaiting_payment`){R.innerHTML=`
        <div class="card narrow center" style="max-width:560px">
          <div class="eyebrow">Foglaló szükséges</div>
          <h2>Még egy lépés 🌙</h2>
          <p>${h(e?.name)}<br><strong>${U.slot?`${A(U.slot)}, ${D(U.slot)}`:``}</strong></p>
          <p class="muted">Az időpontot ${U.settings.deposit.paymentWindowMinutes} percig tartjuk fenn. A ${d(U.done.depositAmount??0)} foglaló az árba beszámít.</p>
          <div class="alert error hidden" role="alert"></div>
          <button class="btn" data-pay>Foglaló fizetése</button>
        </div>`,R.querySelector(`[data-pay]`).addEventListener(`click`,e=>$(U.done.id,e.currentTarget));return}R.innerHTML=`
      <div class="card narrow center" style="max-width:560px">
        <div class="eyebrow">${U.done.status===`pending`?`Foglalási kérés elküldve`:`Foglalás rögzítve`}</div>
        <h2>Köszönjük! 🌙</h2>
        <p>${h(e?.name)}<br><strong>${U.slot?`${A(U.slot)}, ${D(U.slot)}`:``}</strong></p>
        <p class="muted">${U.done.status===`pending`?`A foglalásodat hamarosan jóváhagyjuk. Erről értesítést kapsz az appban és a Fiókom oldalon látod az állapotát.`:`Várunk szeretettel! A foglalásodat a Fiókom oldalon látod.`}</p>
        ${e&&U.slot?`<p>${L(K(),`done`)}</p>`:``}
        ${q()?``:`<a class="btn" href="/fiokom/">Foglalásaim</a>`}
      </div><div id="guest-offer"></div>`,R.querySelector(`[data-ics]`)?.addEventListener(`click`,()=>P(K())),q()&&re(document.getElementById(`guest-offer`));return}if(U.step===1){R.innerHTML=J()+`
      <div class="grid cols-2">${U.services.map(e=>`
        <button class="card service-card ${e.id===U.serviceId?`selected`:``}" data-service="${h(e.id)}">
          <div class="top"><h3>${h(e.name)}</h3><strong>${d(e.price)}${e.priceFrom?`-tól`:``}</strong></div>
          <p class="muted small" style="margin:6px 0 0">${b(e.durationMinutes)}${e.description?` · ${h(e.description)}`:``}</p>
        </button>`).join(``)||(U.servicesLoaded?`<p class="muted center">Jelenleg nincs online foglalható szolgáltatás.</p>`:`<div class="spinner"></div>`)}
      </div>`,R.querySelectorAll(`[data-service]`).forEach(e=>e.addEventListener(`click`,()=>{U.serviceId=e.dataset.service,U.slot=null,U.step=2,Q(),window.scrollTo({top:0,behavior:`smooth`})}));return}let e=G();if(!e){if(!U.servicesLoaded){R.innerHTML=J()+`<div class="spinner"></div>`;return}U.step=1,Q();return}if(U.step===2){let t=X();R.innerHTML=J()+`
      <div class="card">
        <div class="top" style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;align-items:baseline">
          <h3 style="margin:0">${h(e.name)}</h3><span class="muted">${b(e.durationMinutes)} · ${d(e.price)}</span>
        </div>
        <label>Válassz napot</label>
        <div class="days">${Z()}</div>
        ${U.date?`<label>Szabad időpontok – ${A(k.fromISO(U.date,{zone:j}).toJSDate())}</label>
          <div class="slots">${t.map(e=>`<button class="slot ${U.slot?.getTime()===e.getTime()?`selected`:``}" data-slot="${e.toISOString()}">${D(e)}</button>`).join(``)}</div>
          ${t.length?``:`<p class="muted">Erre a napra már nincs szabad időpont.</p>${ee(e)}`}`:`<p class="muted small">A szürke napokon zárva tartunk vagy nincs szabad időpont.</p>`}
        <div style="display:flex;justify-content:space-between;margin-top:26px;gap:12px">
          <button class="btn ghost" data-back>Vissza</button>
          <button class="btn" data-next ${U.slot?``:`disabled`}>Tovább</button>
        </div>
      </div>`,R.querySelectorAll(`[data-date]`).forEach(e=>e.addEventListener(`click`,()=>{U.date=e.dataset.date,U.slot=null,Y(),Q()})),R.querySelectorAll(`[data-slot]`).forEach(e=>e.addEventListener(`click`,()=>{U.slot=new Date(e.dataset.slot),Q()})),R.querySelector(`[data-back]`).addEventListener(`click`,()=>{U.step=1,Q()}),R.querySelector(`[data-next]`).addEventListener(`click`,()=>{U.step=3,Q()}),R.querySelector(`[data-waitlist]`)?.addEventListener(`click`,async t=>{let n=t.currentTarget;n.disabled=!0;try{await V({date:U.date,serviceId:e.id}),U.waitlisted.add(`${U.date}_${e.id}`),Q()}catch(e){n.disabled=!1,alert(p(e))}}),R.querySelector(`.day.selected`)?.scrollIntoView({block:`nearest`,inline:`center`});return}if(!U.authReady){R.innerHTML=J()+`<div class="spinner"></div>`;return}let n=`
      <h3>Foglalás összesítése</h3>
      <dl class="summary">
        <dt>Szolgáltatás</dt><dd>${h(e.name)}</dd>
        <dt>Időpont</dt><dd>${A(U.slot)}, ${D(U.slot)}</dd>
        <dt>Időtartam</dt><dd>${b(e.durationMinutes)}</dd>
        <dt>Ár</dt><dd>${d(e.price)}${e.priceFrom?`-tól`:``} <span class="muted small">(a helyszínen fizetendő)</span></dd>
      </dl>
      ${_(U.settings,e.price)>0?`<p class="small" style="color:var(--warn)">A foglaláshoz ${d(_(U.settings,e.price))} online foglaló szükséges, ami az árba beszámít.</p>`:``}`;if(!U.user){if(U.mode===`guest`){R.innerHTML=J()+`
        <div class="card narrow" style="max-width:560px">${n}
          <h3 style="margin-top:20px">Foglalás vendégként</h3>
          <label for="g-name">Teljes név</label><input id="g-name" maxlength="80" autocomplete="name" value="${h(U.guestName)}">
          <div id="phone"></div>
          <p class="muted small" style="margin-top:12px">Vendégként minden foglalásnál SMS-kóddal erősítjük meg a számod.</p>
          <button class="btn ghost small" data-back style="margin-top:8px">Vissza</button>
        </div>`;let e=R.querySelector(`#g-name`);e.addEventListener(`input`,()=>U.guestName=e.value),N(document.getElementById(`phone`),{guestName:()=>U.guestName,onVerified:()=>void 0}),R.querySelector(`[data-back]`).addEventListener(`click`,()=>{U.mode=`choose`,Q()});return}if(U.mode===`login`){R.innerHTML=J()+`<div id="auth"></div><p class="center"><a href="#" data-back>Vissza</a></p>`,M(document.getElementById(`auth`),`Jelentkezz be, és a foglalás a fiókodba kerül – a pecséteket is gyűjtheted.`),R.querySelector(`[data-back]`).addEventListener(`click`,e=>{e.preventDefault(),U.mode=`choose`,Q()});return}R.innerHTML=J()+`
      <div class="card narrow" style="max-width:560px">${n}
        <div style="display:grid;gap:12px;margin-top:22px">
          <button class="btn block" data-login>Belépés vagy regisztráció<br><span class="small" style="font-weight:400;opacity:.75">Gyűjts pecséteket, és kövesd a foglalásaid</span></button>
          <button class="btn ghost block" data-guest>Folytatás vendégként</button>
          <button class="btn ghost small" data-back>Vissza</button>
        </div>
      </div>`,R.querySelector(`[data-login]`).addEventListener(`click`,()=>{U.mode=`login`,Q()}),R.querySelector(`[data-guest]`).addEventListener(`click`,()=>{U.mode=`guest`,Q()}),R.querySelector(`[data-back]`).addEventListener(`click`,()=>{U.step=2,Q()});return}if(!U.user.phoneNumber){R.innerHTML=J()+`
      <div class="card narrow" style="max-width:560px">${n}
        <h3 style="margin-top:20px">Telefonszám megerősítése</h3>
        <p class="muted small">Egyszer kell megerősítened a számod, utána minden foglalásnál automatikusan kitöltjük.</p>
        <div id="phone"></div>
      </div>`,N(document.getElementById(`phone`),{initialPhone:U.profile.phone,onVerified:()=>{U.user=f.currentUser,Q()}});return}R.innerHTML=J()+`
    <div class="card narrow" style="max-width:560px">${n}
      <form>
        <label for="b-name">Név</label><input id="b-name" name="name" required maxlength="80" value="${h(U.profile.name||U.guestName)}">
        <label>Telefonszám</label><p style="margin:0;color:var(--ok)">✓ ${h(U.user.phoneNumber)}</p>
        <label for="b-note">Megjegyzés (nem kötelező)</label><textarea id="b-note" name="note" rows="3" maxlength="500" placeholder="Pl. első alkalom, allergia, kívánt stílus"></textarea>
        ${U.settings.refillRemindersEnabled&&(e.refillDays??0)>0&&!U.profile.refillReminders?`<label class="check"><input type="checkbox" name="refill"><span>Szólj, ha esedékes a töltés (${e.refillDays} nap után).</span></label>`:``}
        <p class="muted small" style="margin-top:12px">${U.settings.requireApproval?`A foglalást jóváhagyás után véglegesítjük. `:``}Lemondani az időpont előtt ${U.settings.cancelUntilHours} óráig tudsz.</p>
        <div class="alert error hidden" role="alert"></div>
        <div style="display:flex;justify-content:space-between;margin-top:20px;gap:12px">
          <button class="btn ghost" type="button" data-back>Vissza</button>
          <button class="btn" type="submit">Foglalás elküldése</button>
        </div>
      </form>
    </div>`,R.querySelector(`[data-back]`).addEventListener(`click`,()=>{U.step=2,Q()});let i=R.querySelector(`form`);i.addEventListener(`submit`,async n=>{n.preventDefault();let a=new FormData(i),o=i.querySelector(`button[type=submit]`),s=i.querySelector(`.alert`),c=String(a.get(`name`)??``).trim();if(!c)s.textContent=`Kérjük, add meg a neved.`,s.classList.remove(`hidden`);else{o.disabled=!0;try{let n=!!a.get(`refill`);await r(E(C,`users`,U.user.uid),{name:c,...n?{refillReminders:!0,refillRemindersAt:t()}:{},updatedAt:t()},{merge:!0});let i=await z({serviceId:e.id,start:U.slot.toISOString(),note:String(a.get(`note`)??``),name:c,source:`web`});U.done={status:i.status,id:i.id,depositAmount:i.depositAmount},Q(),window.scrollTo({top:0,behavior:`smooth`})}catch(e){s.textContent=p(e),s.classList.remove(`hidden`),o.disabled=!1}}})}function ee(e){return U.settings.waitlistEnabled?U.waitlisted.has(`${U.date}_${e.id}`)?`<p class="small" style="color:var(--ok)">✓ Várólistán vagy – szólunk, ha felszabadul egy időpont.</p>`:U.user?`<button class="btn ghost small" data-waitlist>🔔 Szólj, ha felszabadul egy időpont</button>`:`<p class="muted small"><a href="/fiokom/">Jelentkezz be</a>, és szólunk, ha erre a napra felszabadul egy időpont.</p>`:``}async function $(e,t){t.disabled=!0;try{let{gatewayUrl:t}=await B({bookingId:e});location.href=t}catch(e){let n=R.querySelector(`.alert`);n.textContent=p(e),n.classList.remove(`hidden`),t.disabled=!1}}var te=null;function ne(){U.authReady?U.user?te||=(R.innerHTML=`<div class="card narrow center" style="max-width:560px"><div class="spinner"></div><p class="muted">A fizetés feldolgozása…</p></div>`,o(E(C,`bookings`,H),e=>{let t=e.get(`status`),n=Number(e.get(`depositPaid`)??0)>0,r=(e,t,n,r=``)=>`<div class="card narrow center" style="max-width:560px"><div class="eyebrow">${e}</div><h2>${t}</h2><p class="muted">${n}</p>${r}</div>`;t===`awaiting_payment`?(R.innerHTML=r(`Foglaló`,`Még nem érkezett meg a fizetés`,`Ha most fizettél, pár másodperc múlva frissül. Ha megszakadt, próbáld újra.`,`<div class="alert error hidden" role="alert"></div><button class="btn" data-pay>Foglaló fizetése</button>`),R.querySelector(`[data-pay]`).addEventListener(`click`,e=>$(H,e.currentTarget))):R.innerHTML=n&&(t===`pending`||t===`confirmed`)?r(`Foglaló fizetve`,`Köszönjük! 🌙`,t===`pending`?`Megkaptuk a foglalót. A foglalásodat hamarosan jóváhagyjuk – erről értesítést kapsz.`:`Megkaptuk a foglalót, a foglalásod végleges. Várunk szeretettel!`,`<a class="btn" href="/fiokom/">Foglalásaim</a>`):r(`Foglalás`,`A foglalás lezárult`,`A fizetési idő lejárt vagy a foglalást lemondták. Válassz új időpontot.`,`<a class="btn" href="/foglalas/">Új foglalás</a>`)},()=>{R.innerHTML=`<div class="card narrow center" style="max-width:560px"><p>A foglalásod állapotát a <a href="/fiokom/">Fiókom</a> oldalon látod.</p></div>`})):R.innerHTML=`<div class="card narrow center" style="max-width:560px"><p>A foglalásod állapotát a <a href="/fiokom/">Fiókom</a> oldalon látod.</p></div>`:R.innerHTML=`<div class="spinner"></div>`}function re(e){e.innerHTML=`
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
    </div>`;let i=e.querySelector(`.alert`),a=()=>{e.innerHTML=`<p class="center" style="margin-top:18px"><a class="btn" href="/fiokom/">Fiókom megnyitása</a></p>`},o=e=>{let t=e.code??``;i.textContent=t===`auth/email-already-in-use`||t===`auth/credential-already-in-use`?`Ehhez már tartozik fiók. Jelentkezz be vele, és a következő foglalás már oda kerül.`:p(e),i.classList.remove(`hidden`)};e.querySelector(`[data-apple]`).addEventListener(`click`,async()=>{try{let e=new y(`apple.com`);e.addScope(`email`),e.addScope(`name`);let n=await w(f.currentUser,e);await r(E(C,`users`,n.user.uid),{email:n.user.email??``,updatedAt:t()},{merge:!0}),a()}catch(e){e.code!==`auth/popup-closed-by-user`&&o(e)}});let s=e.querySelector(`form`);s.addEventListener(`submit`,async n=>{n.preventDefault();let c=e.querySelector(`#u-email`).value.trim(),l=e.querySelector(`#u-pass`).value,d=!!new FormData(s).get(`marketing`);if(l.length<8)i.textContent=`A jelszó legalább 8 karakter legyen.`,i.classList.remove(`hidden`);else try{let e=await u(f.currentUser,m.credential(c,l));await r(E(C,`users`,e.user.uid),{email:c,marketingOptIn:d,...d?{marketingOptInAt:t()}:{},updatedAt:t()},{merge:!0}),await F(),a()}catch(e){o(e)}}),e.querySelector(`[data-skip]`).addEventListener(`click`,async t=>{t.preventDefault(),await n(f),e.innerHTML=`<p class="center muted" style="margin-top:18px">Rendben! A foglalásodról telefonon is kereshetünk.</p>`})}v(e=>{U.services=e,U.servicesLoaded=!0,Q()}),x(e=>{U.settings=e,Q()}),T(f,async t=>{if(U.user=t,U.authReady=!0,t){let n=await e(E(C,`users`,t.uid)).catch(()=>null);U.profile={name:n?.get(`name`)??t.displayName??``,phone:n?.get(`phone`)??``,refillReminders:!!n?.get(`refillReminders`)},o(s(c(C,`waitlist`),i(`uid`,`==`,t.uid)),e=>{U.waitlisted=new Set(e.docs.map(e=>`${e.get(`date`)}_${e.get(`serviceId`)}`)),U.step===2&&Q()},()=>void 0)}Q()}),U.serviceId&&(U.step=2),Q();