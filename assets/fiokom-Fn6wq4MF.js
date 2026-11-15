import{A as e,B as t,E as n,F as r,H as i,I as a,M as o,N as s,P as c,R as l,U as u,a as d,b as f,c as p,d as m,f as h,i as g,j as _,k as v,l as y,s as b,t as ee,u as x,y as te,z as S}from"./layout-D2YvMMEV.js";import{n as C,t as w}from"./browser-DwDA2okr.js";import{i as T,o as E,r as D,t as O}from"./slots-CaWscRKC.js";import{a as ne,i as k,n as A,r as j,t as re}from"./calendar-DIvY00xJ.js";var ie=C(w(),1),M=document.getElementById(`account`),N=y(`cancelBooking`),P=y(`getLoyaltyCard`),F=y(`getPassLink`),I=y(`deleteAccount`),L=y(`requestEmailChange`),R=y(`startDeposit`),z=y(`leaveWaitlist`),B={awaiting_payment:`Foglalóra vár`,pending:`Jóváhagyásra vár`,confirmed:`Megerősítve`,rejected:`Elutasítva`,cancelled:`Lemondva`,completed:`Teljesítve`,noshow:`Nem jelent meg`},V=new URLSearchParams(location.search).get(`tab`)??`bookings`,H=null,U=ee,W=[],G=[],K={name:``,phone:``,marketingOptIn:!1,refillReminders:!1},q=[],J=null,Y=[];function X(e){M.innerHTML=`
    <div class="tabs">${[[`bookings`,`Foglalásaim`],[`card`,`Hűségkártya`],[`notifications`,`Értesítések`],[`profile`,`Profil`]].map(([e,t])=>`<button data-tab="${e}" class="${V===e?`on`:``}">${t}</button>`).join(``)}</div>
    <div id="tab-body">${e}</div>`,M.querySelectorAll(`[data-tab]`).forEach(e=>e.addEventListener(`click`,()=>{V=e.dataset.tab,history.replaceState(null,``,`?tab=${V}`),$()}))}function ae(){let e=Date.now(),t=W.filter(t=>t.start.getTime()>=e&&[`awaiting_payment`,`pending`,`confirmed`].includes(t.status)).sort((e,t)=>+e.start-t.start),n=W.filter(e=>!t.includes(e)),r=(e,t)=>`
    <div class="booking-item">
      <div>
        <div style="font-family:var(--serif);font-size:1.3rem">${g(e.serviceName)}</div>
        <div class="muted small">${T(e.start)} · ${d(e.price)}</div>
        ${e.statusReason?`<div class="muted small">Megjegyzés: ${g(e.statusReason)}</div>`:``}
        ${e.status===`awaiting_payment`?`<div class="small" style="color:var(--warn)">Foglaló: ${d(e.depositAmount??0)}${e.depositDueAt?` – fizetési határidő: ${T(e.depositDueAt)}`:``}</div>
          <button class="btn small" data-pay="${e.id}" style="margin-top:8px">Foglaló fizetése</button>`:``}
        ${t?re(j(e.serviceName,e.start,e.end,U.address,U.phone),e.id):``}
      </div>
      <div style="display:flex;gap:12px;align-items:center">
        <span class="badge ${e.status}">${B[e.status]??e.status}</span>
        ${t?`<button class="btn danger small" data-cancel="${e.id}">Lemondás</button>`:``}
      </div>
    </div>`;X(`
    <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap">
      <h3 style="margin:0">Közelgő időpontok</h3><a class="btn small" href="/foglalas/">Új foglalás</a>
    </div>
    ${t.map(e=>r(e,!0)).join(``)||`<p class="muted" style="margin-top:14px">Nincs közelgő foglalásod.</p>`}
    ${q.length?`<h3 style="margin-top:40px">Várólista</h3>
      ${q.map(e=>`<div class="booking-item"><div><div style="font-family:var(--serif);font-size:1.2rem">${g(e.serviceName)}</div>
        <div class="muted small">${D(E.fromISO(e.date,{zone:O}).toJSDate())}</div></div>
        <button class="btn ghost small" data-leave="${e.id}">Leiratkozás</button></div>`).join(``)}
      <p class="muted small">Ha felszabadul egy időpont azon a napon, értesítést küldünk.</p>`:``}
    ${n.length?`<h3 style="margin-top:40px">Korábbi foglalások</h3>${n.map(e=>r(e,!1)).join(``)}`:``}
    <div class="alert error hidden" role="alert"></div>`),M.querySelectorAll(`[data-ics]`).forEach(e=>e.addEventListener(`click`,()=>{let t=W.find(t=>t.id===e.dataset.ics);t&&A(j(t.serviceName,t.start,t.end,U.address,U.phone))})),M.querySelectorAll(`[data-pay]`).forEach(e=>e.addEventListener(`click`,async()=>{e.disabled=!0;try{location.href=(await R({bookingId:e.dataset.pay})).gatewayUrl}catch(t){let n=M.querySelector(`.alert`);n.textContent=m(t),n.classList.remove(`hidden`),e.disabled=!1}})),M.querySelectorAll(`[data-leave]`).forEach(e=>e.addEventListener(`click`,async()=>{e.disabled=!0,await z({id:e.dataset.leave}).catch(()=>e.disabled=!1)})),M.querySelectorAll(`[data-cancel]`).forEach(e=>e.addEventListener(`click`,async()=>{if(confirm(u(`Biztosan lemondod ezt az időpontot?`))){e.disabled=!0;try{await N({bookingId:e.dataset.cancel})}catch(t){let n=M.querySelector(`.alert`);n.textContent=m(t),n.classList.remove(`hidden`),e.disabled=!1}}}))}async function Z(){if(!J){X(`<div class="spinner"></div>`);try{J=await P({})}catch(e){X(`<div class="alert error">${g(m(e))}</div>`);return}if(V!==`card`)return}let e=J;X(`
    <div class="card loyalty">
      <div>
        <div class="eyebrow">Juméra hűségkártya</div>
        <h2 style="margin-bottom:4px">${e.stamps} / ${e.stampsForReward} pecsét</h2>
        <div class="stamp-row">${Array.from({length:e.stampsForReward},(t,n)=>`<span class="stamp ${n<e.stamps?`on`:``}">✦</span>`).join(``)}</div>
        <p class="muted">${e.rewardsAvailable>0?`<strong style="color:var(--ok)">${e.rewardsAvailable} beváltható jutalmad van: ${g(e.rewardText)}!</strong>`:`Még ${e.stampsForReward-e.stamps} pecsét, és jár: ${g(e.rewardText)}.`}</p>
        <p class="muted small">Minden látogatáskor mutasd fel a QR-kódot. A pecsét azonnal megjelenik itt, az appban és az Apple Wallet kártyán is.</p>
        <button class="wallet-btn" data-wallet><svg width="22" height="16" viewBox="0 0 22 16" aria-hidden="true"><rect x="0.5" y="0.5" width="21" height="15" rx="3" fill="none" stroke="#fff"/><rect x="3" y="4" width="16" height="2.4" rx="1" fill="#f2a3b3"/><rect x="3" y="7.2" width="16" height="2.4" rx="1" fill="#9fd8b4"/><rect x="3" y="10.4" width="16" height="2.4" rx="1" fill="#c7aed6"/></svg>Hozzáadás az Apple Wallethez</button>
        <div class="alert error hidden" role="alert"></div>
      </div>
      <div class="center">
        <div class="qr"><canvas id="qr"></canvas></div>
        <div class="muted small" style="margin-top:8px;letter-spacing:.2em">${g(e.code)}</div>
      </div>
    </div>`),ie.toCanvas(document.getElementById(`qr`),e.qr,{width:164,margin:0,errorCorrectionLevel:`M`}),M.querySelector(`[data-wallet]`).addEventListener(`click`,async e=>{let t=e.currentTarget;t.disabled=!0;try{let{url:e}=await F({});location.href=e}catch(e){let t=M.querySelector(`.alert`);t.textContent=m(e),t.classList.remove(`hidden`)}finally{t.disabled=!1}})}function oe(){X(G.length?G.map(e=>`<div class="booking-item"><div><strong>${g(e.title)}</strong><div class="muted">${g(e.body)}</div>${e.url?.startsWith(`https://jumera.hu/`)?`<a class="small" href="${g(e.url)}">Megnyitás</a>`:``}</div><span class="muted small">${e.at?T(e.at):``}</span></div>`).join(``):`<p class="muted">Még nincs értesítésed.</p>`)}function Q(){X(`
    <form class="card narrow" style="max-width:560px">
      <h3>Adataim</h3>
      <label for="p-name">Név</label><input id="p-name" name="name" maxlength="80" value="${g(K.name)}">
      <label>Telefonszám</label>
      <div id="phone-box">${H?.phoneNumber?`<p style="margin:0;color:var(--ok)">✓ ${g(H.phoneNumber)} <a href="#" data-phone class="small" style="margin-left:10px">Módosítás</a></p>`:`<p style="margin:0" class="muted small">Nincs megerősítve. <a href="#" data-phone>Megerősítés SMS-sel</a></p>`}</div>
      <label>E-mail cím</label>
      <p style="margin:0">${g(H?.email??`–`)} ${H?.providerData.some(e=>e.providerId===`password`)?`<a href="#" data-email class="small" style="margin-left:10px">Módosítás</a>`:``}</p>
      <div id="email-box"></div>
      <label class="check"><input type="checkbox" name="marketing" ${K.marketingOptIn?`checked`:``}><span>Kérek értesítést akciókról és újdonságokról. A foglalásaimmal kapcsolatos értesítéseket enélkül is megkapom.</span></label>
      ${U.refillRemindersEnabled?`<label class="check"><input type="checkbox" name="refill" ${K.refillReminders?`checked`:``}><span>Töltés-emlékeztető: szóljatok, amikor esedékes a következő töltés (ha még nincs foglalásom).</span></label>`:``}
      <div class="alert ok hidden" role="status">Mentve.</div>
      <div class="alert error hidden" role="alert"></div>
      <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:16px">
        <button class="btn" type="submit">Mentés</button>
        <button class="btn ghost" type="button" data-logout>Kijelentkezés</button>
      </div>
      <hr style="border:none;border-top:1px solid var(--line);margin:30px 0 20px">
      <h3>Fiók törlése</h3>
      <p class="muted small">A törléssel a profilod, a hűségkártyád és a pecsétjeid véglegesen megszűnnek, a jövőbeli foglalásaidat lemondjuk.</p>
      <button class="btn danger" type="button" data-delete>Fiókom végleges törlése</button>
    </form>`);let e=M.querySelector(`form`),i=e.querySelector(`.alert.ok`),a=e.querySelector(`.alert.error`);e.addEventListener(`submit`,async n=>{n.preventDefault();let o=new FormData(e),s=!!o.get(`marketing`),c=U.refillRemindersEnabled?!!o.get(`refill`):K.refillReminders;try{await r(S(x,`users`,H.uid),{name:String(o.get(`name`)??``).trim(),marketingOptIn:s,...s&&!K.marketingOptIn?{marketingOptInAt:t()}:{},refillReminders:c,...c&&!K.refillReminders?{refillRemindersAt:t()}:{},updatedAt:t()},{merge:!0}),K={...K,name:String(o.get(`name`)),marketingOptIn:s,refillReminders:c},i.classList.remove(`hidden`)}catch(e){a.textContent=m(e),a.classList.remove(`hidden`)}}),e.querySelector(`[data-logout]`).addEventListener(`click`,()=>n(p)),e.querySelector(`[data-phone]`)?.addEventListener(`click`,e=>{e.preventDefault(),k(document.getElementById(`phone-box`),{onVerified:()=>{H=p.currentUser,Q()}})}),e.querySelector(`[data-email]`)?.addEventListener(`click`,e=>{e.preventDefault();let t=document.getElementById(`email-box`);t.innerHTML=`
      <label for="e-new">Új e-mail cím</label><input id="e-new" type="email" autocomplete="email">
      <label for="e-pass">Jelenlegi jelszó</label><input id="e-pass" type="password" autocomplete="current-password">
      <button type="button" class="btn small" data-send-email style="margin-top:12px">Megerősítő link küldése</button>
      <p class="small" data-email-msg></p>`,t.querySelector(`[data-send-email]`).addEventListener(`click`,async e=>{let n=e.currentTarget,r=t.querySelector(`[data-email-msg]`),i=t.querySelector(`#e-new`).value.trim().toLowerCase(),a=t.querySelector(`#e-pass`).value;n.disabled=!0;try{let e=p.currentUser;await f(e,h.credential(e.email,a)),await e.getIdToken(!0),(await L({email:i}).catch(e=>{throw e})).sent||await v(e,i),r.style.color=`var(--ok)`,r.textContent=`Elküldtük a megerősítő linket ide: ${i}. A módosítás a link megnyitása után lép életbe.`}catch(e){r.style.color=`var(--bad)`,r.textContent=m(e),n.disabled=!1}})}),e.querySelector(`[data-delete]`).addEventListener(`click`,async()=>{if(confirm(u(`Biztosan véglegesen törlöd a fiókodat? Ez nem vonható vissza.`)))try{await I({}),await n(p),alert(u(`A fiókodat töröltük.`))}catch(e){a.textContent=m(e),a.classList.remove(`hidden`)}})}function $(){H&&(V===`card`?Z():V===`notifications`?oe():V===`profile`?Q():ae())}b(e=>{U=e}),te(p,async t=>{if(Y.forEach(e=>e()),Y=[],H=t,J=null,!t){M.innerHTML=`<div id="auth"></div>`,ne(document.getElementById(`auth`),`Jelentkezz be a foglalásaid és a hűségkártyád megtekintéséhez.`);return}M.innerHTML=`<div class="spinner"></div>`;let n=await e(S(x,`users`,t.uid)).catch(()=>null);K={name:n?.get(`name`)??t.displayName??``,phone:n?.get(`phone`)??``,marketingOptIn:!!n?.get(`marketingOptIn`),refillReminders:!!n?.get(`refillReminders`)},Y.push(o(c(l(x,`waitlist`),a(`uid`,`==`,t.uid)),e=>{let t=E.now().setZone(O).toISODate();q=e.docs.map(e=>({id:e.id,date:e.get(`date`),serviceName:i&&e.get(`serviceNameEn`)||e.get(`serviceName`)})).filter(e=>e.date>=t).sort((e,t)=>e.date.localeCompare(t.date)),V===`bookings`&&$()},()=>void 0)),Y.push(o(c(l(x,`bookings`),a(`uid`,`==`,t.uid),s(`start`,`desc`),_(50)),e=>{W=e.docs.map(e=>({id:e.id,serviceName:i&&e.get(`serviceNameEn`)||e.get(`serviceName`),price:e.get(`price`),start:e.get(`start`).toDate(),end:e.get(`end`).toDate(),status:e.get(`status`),statusReason:e.get(`statusReason`),depositAmount:e.get(`depositAmount`),depositDueAt:e.get(`depositDueAt`)?.toDate()??null})),V===`bookings`&&$()}));let r=e=>o(c(l(x,`notifications`),a(`audience`,`==`,e),s(`createdAt`,`desc`),_(30)),t=>{let n=t.docs.map(t=>({key:e,title:i&&t.get(`titleEn`)||t.get(`title`),body:i&&t.get(`bodyEn`)||t.get(`body`),at:t.get(`createdAt`)?.toDate()??null,url:t.get(`data.url`)}));G=[...G.filter(t=>t.key!==e),...n].sort((e,t)=>+(t.at??0)-(e.at??0)),V===`notifications`&&$()});Y.push(r(t.uid),r(`all`)),Y.push(o(S(x,`loyalty`,t.uid),e=>{J&&e.exists()&&(J={...J,stamps:e.get(`stamps`),rewardsAvailable:e.get(`rewardsAvailable`)},V===`card`&&Z())})),$()});