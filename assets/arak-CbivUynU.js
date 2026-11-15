import{a as e,i as t,o as n,r}from"./layout-DN6UJXbo.js";n(n=>{let i=document.getElementById(`prices`);if(!n.length){i.innerHTML=`<p class="muted center">Az árlista hamarosan elérhető.</p>`;return}let a=new Map;n.forEach(e=>{let t=e.category||`Szolgáltatások`;a.set(t,[...a.get(t)??[],e])}),i.innerHTML=[...a.entries()].map(([n,i])=>`
    <div class="price-cat">
      <h3>${t(n)}</h3>
      ${i.map(n=>`
        <div class="price-row">
          <span class="name">${t(n.name)}</span>
          <span class="price">${e(n.price)}${n.priceFrom?`-tól`:``}</span>
          <span class="meta">${r(n.durationMinutes)}${n.description?` · ${t(n.description)}`:``}
            · <a href="/foglalas/?s=${encodeURIComponent(n.id)}">Foglalás</a></span>
        </div>`).join(``)}
    </div>`).join(``)});