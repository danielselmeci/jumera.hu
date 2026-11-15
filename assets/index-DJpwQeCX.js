import{a as e,i as t,n,o as r,r as i}from"./layout-Dagca8y_.js";e(e=>{let r=document.getElementById(`featured`);r.innerHTML=e.length?e.slice(0,6).map(e=>`
    <a class="card service-card" href="/foglalas/?s=${encodeURIComponent(e.id)}">
      <div class="top"><h3>${i(e.name)}</h3><strong>${t(e.price)}${e.priceFrom?`-tól`:``}</strong></div>
      <p class="muted small" style="margin:6px 0 0">${n(e.durationMinutes)}${e.description?` · ${i(e.description)}`:``}</p>
    </a>`).join(``):`<p class="muted center">Az árlista hamarosan elérhető.</p>`}),r(e=>{document.querySelectorAll(`[data-stamps]`).forEach(t=>t.textContent=String(e.loyalty.stampsForReward)),document.querySelectorAll(`[data-reward]`).forEach(t=>t.textContent=e.loyalty.rewardText)});