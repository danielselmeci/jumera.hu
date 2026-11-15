import{a as e,i as t,o as n,r,s as i}from"./layout-D2YvMMEV.js";n(n=>{let i=document.getElementById(`featured`);i.innerHTML=n.length?n.slice(0,6).map(n=>`
    <a class="card service-card" href="/foglalas/?s=${encodeURIComponent(n.id)}">
      <div class="top"><h3>${t(n.name)}</h3><strong>${e(n.price)}${n.priceFrom?`-tól`:``}</strong></div>
      <p class="muted small" style="margin:6px 0 0">${r(n.durationMinutes)}${n.description?` · ${t(n.description)}`:``}</p>
    </a>`).join(``):`<p class="muted center">Az árlista hamarosan elérhető.</p>`}),i(e=>{document.querySelectorAll(`[data-stamps]`).forEach(t=>t.textContent=String(e.loyalty.stampsForReward)),document.querySelectorAll(`[data-reward]`).forEach(t=>t.textContent=e.loyalty.rewardText)});