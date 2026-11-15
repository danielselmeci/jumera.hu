import{a as e,d as t,i as n,l as r}from"./layout-D2YvMMEV.js";import{n as i,t as a}from"./browser-DwDA2okr.js";import{r as o}from"./slots-CaWscRKC.js";var s=i(a(),1),c=document.getElementById(`doc`),l=r(`checkVoucher`),u={active:`Érvényes`,used:`Felhasználva`,void:`Érvénytelen`,expired:`Lejárt`};function d(e=``){c.innerHTML=`
    <form class="card narrow" style="max-width:480px">
      <label for="v-code">Utalványkód</label>
      <input id="v-code" maxlength="20" autocomplete="off" style="text-transform:uppercase;letter-spacing:2px">
      ${e?`<div class="alert error" role="alert">${n(e)}</div>`:``}
      <button class="btn block" type="submit" style="margin-top:14px">Ellenőrzés</button>
    </form>`,c.querySelector(`form`).addEventListener(`submit`,e=>{e.preventDefault();let t=c.querySelector(`#v-code`).value.trim().toUpperCase();t&&(location.search=`?k=${encodeURIComponent(t)}`)})}async function f(r){try{let t=await l({code:r}),i=await s.toDataURL(location.href,{margin:1,width:220,color:{dark:`#2a1233`,light:`#ffffff`}}),a=t.status===`active`;c.innerHTML=`
      <div class="gift-card">
        <div class="gc-main">
          <div class="gc-brand"><img src="/mark.svg" alt="" width="48" height="48"><div><div class="gc-word">JUMÉRA</div><div class="gc-tag">Lashes kissed by moonlight</div></div></div>
          <div class="gc-eyebrow">Ajándékutalvány</div>
          <div class="gc-amount">${t.title?n(t.title):e(t.amount)}</div>
          ${t.title?`<div class="gc-sub">${e(t.amount)}</div>`:``}
          ${t.recipientName?`<div class="gc-to">Neked, <em>${n(t.recipientName)}</em></div>`:``}
          ${t.message?`<div class="gc-msg">„${n(t.message)}”</div>`:``}
        </div>
        <div class="gc-side">
          <img src="${i}" alt="" width="150" height="150" class="gc-qr">
          <div class="gc-code">${n(t.code)}</div>
        </div>
      </div>
      <div class="card narrow" style="max-width:520px;margin-top:20px">
        <dl class="summary">
          <dt>Állapot</dt><dd><span class="badge ${a?`confirmed`:`cancelled`}">${u[t.status]??t.status}</span></dd>
          <dt>Egyenleg</dt><dd><strong>${e(t.balance)}</strong>${t.balance===t.amount?``:` <span class="muted small">/ ${e(t.amount)}</span>`}</dd>
          <dt>Érvényes eddig</dt><dd>${o(new Date(t.expiresAt))}</dd>
        </dl>
        <p class="muted small">A kódot vagy a QR-kódot a stúdióban mutasd fel.</p>
        ${a?`<a class="btn block" href="/foglalas/">Időpontot foglalok</a>`:``}
      </div>`}catch(e){d(t(e))}}var p=new URLSearchParams(location.search).get(`k`);p?f(p):d();