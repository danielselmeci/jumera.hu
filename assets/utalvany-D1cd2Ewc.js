import{a as e,d as t,i as n,l as r}from"./layout-DN6UJXbo.js";import{n as i,t as a}from"./browser-DwDA2okr.js";import{r as o}from"./slots-CNfQrQPd.js";var s=i(a(),1),c=document.getElementById(`doc`),l=r(`checkVoucher`),u={active:`Érvényes`,used:`Felhasználva`,void:`Érvénytelen`,expired:`Lejárt`};function d(e=``){c.innerHTML=`
    <form class="card narrow" style="max-width:480px">
      <label for="v-code">Utalványkód</label>
      <input id="v-code" maxlength="20" autocomplete="off" style="text-transform:uppercase;letter-spacing:2px">
      ${e?`<div class="alert error" role="alert">${n(e)}</div>`:``}
      <button class="btn block" type="submit" style="margin-top:14px">Ellenőrzés</button>
    </form>`,c.querySelector(`form`).addEventListener(`submit`,e=>{e.preventDefault();let t=c.querySelector(`#v-code`).value.trim().toUpperCase();t&&(location.search=`?k=${encodeURIComponent(t)}`)})}async function f(r){try{let t=await l({code:r}),i=await s.toDataURL(location.href,{margin:1,width:220,color:{dark:`#2a1233`,light:`#ffffff`}});c.innerHTML=`
      <div class="card narrow center voucher" style="max-width:520px">
        <img src="/mark.svg" alt="" width="64" height="64">
        <div style="font-family:var(--serif);font-size:2rem;letter-spacing:.4em;margin-top:6px">JUMÉRA</div>
        <div class="eyebrow" style="margin-top:18px">Ajándékutalvány</div>
        <h2 style="margin:6px 0">${t.title?n(t.title):e(t.amount)}</h2>
        ${t.recipientName?`<p style="font-family:var(--serif);font-style:italic;font-size:1.3rem;margin:4px 0">${n(t.recipientName)}</p>`:``}
        ${t.message?`<p class="muted">„${n(t.message)}”</p>`:``}
        <dl class="summary" style="text-align:left;margin-top:18px">
          <dt>Állapot</dt><dd><span class="badge ${t.status===`active`?`confirmed`:`cancelled`}">${u[t.status]??t.status}</span></dd>
          <dt>Egyenleg</dt><dd><strong>${e(t.balance)}</strong>${t.balance===t.amount?``:` <span class="muted small">/ ${e(t.amount)}</span>`}</dd>
          <dt>Érvényes eddig</dt><dd>${o(new Date(t.expiresAt))}</dd>
          <dt>Kód</dt><dd style="font-family:monospace;letter-spacing:2px">${n(t.code)}</dd>
        </dl>
        <img src="${i}" alt="" width="180" height="180" style="border-radius:12px;margin-top:16px">
        <p class="muted small">A kódot vagy a QR-kódot a stúdióban mutasd fel.</p>
        ${t.status===`active`?`<a class="btn" href="/foglalas/">Időpontot foglalok</a>`:``}
      </div>`}catch(e){d(t(e))}}var p=new URLSearchParams(location.search).get(`k`);p?f(p):d();