/*
  router.js
  Traduce el hash de la URL (#/enfermedades/alzheimer) en una vista,
  la dibuja en #view-root, y conecta la navegación, la búsqueda,
  los tabs y el menú móvil.
*/

const viewRoot = document.getElementById('view-root');
const sidebar = document.getElementById('sidebar');
const searchInput = document.getElementById('search-input');
const depthValue = document.getElementById('depth-value');
const depthFill = document.getElementById('depth-fill');

// Profundidad simbólica asociada a cada sección (0 m → 10 916 m, la fosa hadal)
const DEPTHS = {
  resumen: 0,
  metodologia: 2500,
  enfermedades: 6000,
  chaperonas: 9000,
  resultados: 10916
};

let chaperonasTab = 'oceano';

function parseHash(){
  const raw = (location.hash || '#/resumen').replace(/^#\/?/, '');
  return raw.split('/').filter(Boolean);
}

function render(){
  const [section, sub] = parseHash();
  const root = section || 'resumen';
  let html = '';

  switch(root){
    case 'resumen':
      html = viewResumen();
      break;
    case 'metodologia':
      html = viewMetodologia();
      break;
    case 'enfermedades':
      html = sub ? viewEnfermedadDetalle(sub) : viewEnfermedades(searchInput.value);
      break;
    case 'chaperonas':
      html = viewChaperonas(chaperonasTab);
      break;
    case 'resultados':
      html = viewResultados();
      break;
    default:
      html = viewResumen();
  }

  viewRoot.innerHTML = html;
  updateActiveNav(root);
  updateDepth(root);
  closeSidebar();
  window.scrollTo(0, 0);
}

function updateActiveNav(root){
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('is-active', item.dataset.route === root);
  });
}

function updateDepth(root){
  const d = DEPTHS[root] ?? 0;
  const max = DEPTHS.resultados;
  depthValue.textContent = d.toLocaleString('es-CL') + ' m';
  depthFill.style.width = Math.round((d / max) * 100) + '%';
}

function openSidebar(){
  sidebar.classList.add('is-open');
  scrim.classList.add('is-open');
}
function closeSidebar(){
  sidebar.classList.remove('is-open');
  scrim.classList.remove('is-open');
}

// Scrim para cerrar el menú móvil al tocar fuera
const scrim = document.createElement('div');
scrim.className = 'sidebar-scrim';
document.body.appendChild(scrim);
scrim.addEventListener('click', closeSidebar);

document.getElementById('hamburger').addEventListener('click', () => {
  sidebar.classList.contains('is-open') ? closeSidebar() : openSidebar();
});

// Navegación por rutas (sidebar, tarjetas, botón volver, relacionados) vía delegación
document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-route]');
  if(!el) return;
  e.preventDefault();
  location.hash = '#/' + el.dataset.route;
});

// Tabs de la vista Chaperonas (no cambian el hash, solo el estado local)
document.addEventListener('click', (e) => {
  const tab = e.target.closest('.tab-btn');
  if(!tab) return;
  chaperonasTab = tab.dataset.tab;
  render();
});

// Buscador: filtra la grilla de enfermedades en tiempo real
searchInput.addEventListener('input', () => {
  const [section] = parseHash();
  if((section || 'resumen') === 'enfermedades'){
    viewRoot.innerHTML = viewEnfermedades(searchInput.value);
  }
});

window.addEventListener('hashchange', render);
render();
