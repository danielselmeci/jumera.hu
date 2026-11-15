import{a as e,d as t,i as n,l as r}from"./layout-DN6UJXbo.js";import{i}from"./slots-CNfQrQPd.js";var a=document.getElementById(`doc`),o=r(`getReceipt`),s={cash:`Készpénz`,card:`Bankkártya`,transfer:`Átutalás`};async function c(r){try{let t=await o({token:r}),c=(t,n)=>`<tr><td class="muted">${t}</td><td style="text-align:right" class="muted">− ${e(n)}</td></tr>`;a.innerHTML=`
      <div class="card narrow receipt" style="max-width:620px">
        <div style="display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap">
          <div>
            <div style="font-family:var(--serif);font-size:1.6rem;letter-spacing:.3em">JUMÉRA</div>
            <div class="muted small">${n(t.issuer.name)}${t.issuer.address?`<br>${n(t.issuer.address)}`:``}${t.issuer.taxNumber?`<br>Adószám: ${n(t.issuer.taxNumber)}`:``}</div>
          </div>
          <div style="text-align:right">
            <div class="eyebrow">Fizetési bizonylat</div>
            <div style="font-family:monospace">${n(t.number)}</div>
            <div class="muted small">${i(new Date(t.createdAt))}</div>
          </div>
        </div>
        <p style="margin-top:18px"><span class="muted small">Vendég</span><br>${n(t.customer.name||`–`)}</p>
        <table style="width:100%;border-collapse:collapse">
          ${t.items.map(t=>`<tr><td>${t.qty} × ${n(t.name)}</td><td style="text-align:right">${e(t.total)}</td></tr>`).join(``)}
          <tr><td colspan="2"><hr style="border:none;border-top:1px solid var(--line)"></td></tr>
          ${t.discount?c(`Kedvezmény`,t.discount):``}
          ${t.depositPaid?c(`Online foglaló`,t.depositPaid):``}
          ${t.voucher?c(`Utalvány (${n(t.voucher.code)})`,t.voucher.used):``}
          <tr><td><strong>Fizetve – ${s[t.paymentMethod]??t.paymentMethod}</strong></td><td style="text-align:right"><strong>${e(t.total)}</strong></td></tr>
        </table>
        <p class="muted small" style="margin-top:18px">${t.invoiceNumber?`Számlaszám: ${n(t.invoiceNumber)}`:`Ez a bizonylat nem számla és nem nyugta; adóügyi bizonylatként nem használható.`}</p>
        ${t.issuer.footer?`<p class="muted small">${n(t.issuer.footer)}</p>`:``}
        <p style="font-family:var(--serif);font-style:italic">Köszönjük, hogy minket választottál!</p>
        <button class="btn ghost small no-print" data-print>Nyomtatás / PDF</button>
      </div>`,a.querySelector(`[data-print]`).addEventListener(`click`,()=>window.print())}catch(e){a.innerHTML=`<div class="alert error narrow" role="alert">${n(t(e))}</div>`}}var l=new URLSearchParams(location.search).get(`t`);l?c(l):a.innerHTML=`<p class="muted center">A bizonylat nem található.</p>`;