/*
  views.js
  Cada función recibe lo que necesita y devuelve un string HTML.
  No tocan el DOM directamente ni saben de rutas — eso lo maneja
  router.js. Así se pueden reordenar o reusar sin efectos colaterales.
*/

function viewResumen(){
  return `
    <div class="eyebrow">Proyecto científico · 2026</div>
    <h1 class="view-title">${DATA.meta.titulo}</h1>
    <p class="view-sub">${DATA.meta.colegio} — ${DATA.meta.curso}. Autoras y autor: ${DATA.meta.autores.join(', ')}. ${DATA.meta.fecha}.</p>

    <div class="box">
      <span class="tag">Pregunta de investigación</span>
      <p>${DATA.pregunta}</p>
    </div>
    <div class="box violet">
      <span class="tag">Hipótesis</span>
      <p>${DATA.hipotesis}</p>
    </div>

    <h3 style="margin:28px 0 4px; font-size:1.05rem;">Objetivo general</h3>
    <p>${DATA.objetivoGeneral}</p>
  `;
}

function viewMetodologia(){
  const objetivos = DATA.objetivosEspecificos.map((o, i) => `
    <div class="list-row">
      <div class="n">0${i+1}</div>
      <div class="body"><p>${o}</p></div>
    </div>`).join('');

  const pasos = DATA.pasos.map((p, i) => `
    <div class="list-row">
      <div class="n">0${i+1}</div>
      <div class="body"><strong>${p.titulo}</strong><p>${p.texto}</p></div>
    </div>`).join('');

  return `
    <div class="eyebrow">Cómo se hizo</div>
    <h1 class="view-title">Objetivos y metodología</h1>
    <p class="view-sub">Los pasos específicos que guiaron la investigación, del planteamiento a la divulgación.</p>

    <h3 style="font-size:1.05rem; margin-bottom:4px;">Objetivos específicos</h3>
    <div class="list">${objetivos}</div>

    <h3 style="font-size:1.05rem; margin:32px 0 4px;">Pasos de la metodología</h3>
    <div class="list">${pasos}</div>
  `;
}

function viewEnfermedades(filtro){
  const q = (filtro || '').trim().toLowerCase();
  const lista = DATA.enfermedades.filter(e =>
    !q || e.nombre.toLowerCase().includes(q) || e.mecanismo.toLowerCase().includes(q)
  );

  const cards = lista.map(e => `
    <button class="card" data-route="enfermedades/${e.id}">
      <div class="thumb" style="background:linear-gradient(135deg, var(${e.colorVar}), var(--abyss-2));">
        ${e.imagen
          ? `<img src="${e.imagen}" alt="${e.imagenAlt || ''}" loading="lazy">`
          : e.nombre.split(' ').map(w => w[0]).join('').slice(0,3)}
        <span class="depth-tag">detalle →</span>
      </div>
      <div class="info">
        <h4>${e.nombre}</h4>
        <p>${e.resumen}</p>
      </div>
    </button>
  `).join('');

  const empty = `<div class="empty-state">Sin resultados para "${filtro}"</div>`;

  return `
    <div class="eyebrow">Contexto clínico</div>
    <h1 class="view-title">Enfermedades neurodegenerativas</h1>
    <p class="view-sub">Tres formas distintas de perder neuronas. Elige una para ver el detalle.</p>
    <div class="card-grid">${lista.length ? cards : empty}</div>
  `;
}

function viewEnfermedadDetalle(id){
  const e = DATA.enfermedades.find(x => x.id === id);
  if (!e) return `<div class="empty-state">No se encontró esa enfermedad.</div>`;

  const relacionadas = DATA.enfermedades.filter(x => x.id !== id).map(x => `
    <button class="related-row" data-route="enfermedades/${x.id}">
      <span class="dot" style="background:var(${x.colorVar})"></span>
      <span>${x.nombre}</span>
    </button>
  `).join('');

  return `
    <div class="reader">
      <button class="back-btn" data-route="enfermedades">← Volver a enfermedades</button>
      <div class="reader-head">
        <span class="dot" style="background:var(${e.colorVar}); box-shadow:0 0 10px var(${e.colorVar});"></span>
        <h2>${e.nombre}</h2>
      </div>
      <p>${e.mecanismo}</p>
      <p>${e.respuesta}</p>

      ${e.imagen ? `
        <figure class="reader-figure">
          <img src="${e.imagen}" alt="${e.imagenAlt || ''}" loading="lazy">
        </figure>
      ` : ''}

      <div class="field-row">
        <div class="f"><div class="k">Proteína implicada</div><div class="v">${e.proteina}</div></div>
        <div class="f"><div class="k">Función afectada</div><div class="v">${e.funcion}</div></div>
      </div>

      <div class="related">
        <div class="h">Otras enfermedades</div>
        ${relacionadas}
      </div>
    </div>
  `;
}

function viewChaperonas(tab){
  const active = tab === 'cerebro' ? 'cerebro' : 'oceano';
  const c = DATA.chaperonas;

  return `
    <div class="eyebrow">10 916 metros bajo el nivel del mar</div>
    <h1 class="view-title">Chaperonas químicas</h1>
    <p class="view-sub">${c.intro}</p>

    <div class="tabs">
      <button class="tab-btn ${active==='oceano'?'active':''}" data-tab="oceano">Fosa oceánica</button>
      <button class="tab-btn ${active==='cerebro'?'active':''}" data-tab="cerebro">Cerebro humano</button>
    </div>

    <div class="tab-panel ${active==='oceano'?'active':''}" data-panel="oceano">
      <div class="tab-body">
        <p>${c.oceano.texto}</p>
        ${c.oceano.imagen ? `<img class="tab-figure tall" src="${c.oceano.imagen}" alt="${c.oceano.imagenAlt || ''}" loading="lazy">` : ''}
      </div>
    </div>
    <div class="tab-panel ${active==='cerebro'?'active':''}" data-panel="cerebro">
      <div class="tab-body">
        <p>${c.cerebro.texto}</p>
        ${c.cerebro.imagen ? `<img class="tab-figure" src="${c.cerebro.imagen}" alt="${c.cerebro.imagenAlt || ''}" loading="lazy">` : ''}
      </div>
    </div>

    <div class="tmao-box">
      <span class="tag">TMAO</span>
      <p>${c.tmao}</p>
    </div>

    <h3 style="font-size:1.05rem; margin:28px 0 4px;">¿Por qué importa para la neurociencia?</h3>
    <p>${c.pregunta}</p>
  `;
}

function viewResultados(){
  const r = DATA.resultados;
  const razones = r.razones.map(txt => `
    <div class="reason-row"><div class="x">✕</div><p>${txt}</p></div>
  `).join('');

  const fuentes = DATA.fuentes.map(f => `
    <a class="source-chip" href="${f.url}" target="_blank" rel="noopener">
      <div class="file-icon">↗</div>
      <div class="txt"><strong>${f.titulo}</strong><span>${f.dominio}</span></div>
    </a>
  `).join('');

  const perspectivas = (r.perspectivas || []).map(txt => `
    <div class="list-row"><div class="n">→</div><div class="body"><p>${txt}</p></div></div>
  `).join('');

  return `
    <div class="eyebrow">Cierre de la investigación</div>
    <h1 class="view-title">Resultados y conclusión</h1>

    <div class="verdict-row"><span class="pill">${r.veredicto}</span></div>
    <p>${r.resumen}</p>

    <h3 style="font-size:1.05rem; margin:28px 0 4px;">Razones del rechazo</h3>
    <div class="list">${razones}</div>

    <div class="box" style="margin-top:26px;">
      <span class="tag">Conclusión</span>
      <p>${r.conclusion}</p>
    </div>

    <h3 style="font-size:1.05rem; margin:32px 0 4px;">Perspectivas futuras</h3>
    <div class="list">${perspectivas}</div>

    <h3 style="font-size:1.05rem; margin:32px 0 12px;">Fuentes principales</h3>
    ${fuentes}
  `;
}
