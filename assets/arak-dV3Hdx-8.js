import{a as e,i as t,n,r}from"./layout-C3ydVbTG.js";e(e=>{let i=document.getElementById(`prices`);if(!e.length){i.innerHTML=`<p class="muted center">Az árlista hamarosan elérhető.</p>`;return}let a=new Map;e.forEach(e=>{let t=e.category||`Szolgáltatások`;a.set(t,[...a.get(t)??[],e])}),i.innerHTML=[...a.entries()].map(([e,i])=>`
    <div class="price-cat">
      <h3>${r(e)}</h3>
      ${i.map(e=>`
        <div class="price-row">
          <span class="name">${r(e.name)}</span>
          <span class="price">${t(e.price)}${e.priceFrom?`-tól`:``}</span>
          <span class="meta">${n(e.durationMinutes)}${e.description?` · ${r(e.description)}`:``}
            · <a href="/foglalas/?s=${encodeURIComponent(e.id)}">Foglalás</a></span>
        </div>`).join(``)}
    </div>`).join(``)});