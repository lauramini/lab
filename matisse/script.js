// ═══════════════════════════════════════════
// DONNÉES — palette de couleurs & paths SVG
// ═══════════════════════════════════════════

const PALETTE_COLORS = [
  '#DDD8D4', // Fog Grey
  '#1F1F1F', // Carbon Black
  '#946128', // Clay
  '#009E95', // Lagoon Teal
  '#0043A2', // Royal Blue
  '#009DC7', // Sky Azure
  '#00673E', // Pine Green
  '#91AE94', // Sage Mist
  '#FF4400', // Sunset Orange
  '#F2AD0C', // Honey Gold
  '#EE93AC', // Blush Pink
  '#A72E67', // Berry Plum
];

// Path SVG de chaque forme (viewBox 0 0 200 200)
const SHAPE_PATHS = [
  // 1 — blob ovale
  'M174.876 103.618C172.463 145.107 141.721 175.5 99.3346 175.5C52.5135 175.5 25 143.811 25 101.447C26.9308 55.3754 55.0171 24.5 97.4039 24.5C141.812 24.5 177.374 60.6821 174.876 103.618Z',
  // 2 — rectangle arrondi
  'M27.0143 40.3975C27.0143 34.9519 30.8986 28.7209 38.4083 26.3856C45.9179 24.0503 152.348 24.9093 161.67 27.1641C170.992 29.4189 172.028 35.4674 172.028 41.9544C172.028 44.0783 173.036 57.4859 172.999 74.5607C172.957 93.9629 172.587 100.196 172.546 117.894C172.513 132.191 171.769 160.189 171.769 160.189C171.769 165.635 164.519 171.347 161.152 172.473C157.786 173.599 148.426 174.287 131.114 174.592C111.389 174.939 85.7108 174.829 66.1163 174.989C50.1771 175.119 38.2634 174.047 36.8545 173.682C32.1934 172.473 29.6038 169.79 28.3091 163.822C27.6157 160.626 27.7931 142.218 27.6346 118.413C27.5834 110.734 27.0333 102.494 27.0143 94.0217C26.9821 79.7143 27.0143 40.3975 27.0143 40.3975Z',
  // 3 — rectangle vertical
  'M47.1628 31.3208C47.1628 25.9021 51.1798 20.3774 56.6007 20.3774L76.7978 20H124.176L141.919 20.3774C147.34 20.3774 153.245 26.2795 153.245 31.6981L154 52.0755L153.622 133.585L152.49 166.038C152.49 171.456 147.582 176.981 143.052 178.491C138.522 180 125.497 179.623 125.497 179.623L84.1594 180C84.1594 180 61.3196 180 56.6007 178.868C51.8817 177.736 46.974 172.264 46.4077 167.925C45.8414 163.585 46.0302 146.226 46.0302 146.226L46.0302 96.4151L46.7852 46.6038L47.1628 31.3208Z',
  // 4 — triangle
  'M94.9207 49.2545C98.8847 45.6566 105.987 46.6506 109.287 50.2213C112.587 53.7921 123.139 66.1957 123.139 66.1957L167.619 122.764C167.619 122.764 173.818 130.628 177.934 136.671C182.049 142.713 179.617 149.497 174.171 151.329C168.724 153.162 163.344 152.457 156.786 152.833C150.229 153.209 117.33 152.833 117.33 152.833L81.9784 152.081C81.9784 152.081 31.4757 152.457 26.665 151.329C21.8543 150.202 17.9678 146.786 21.1678 139.661C24.3679 132.536 30.6889 123.818 37.9881 114.87C52.5971 96.9626 59.7858 88.7906 74.6487 70.894C81.6162 62.5043 90.9566 52.8524 94.9207 49.2545Z',
  // 5 — tige verticale fine
  'M95.4386 16.4789C95.1096 13.0224 97.8131 10 101.285 10C104.183 10 106.635 12.1297 106.956 15.0095C107.466 19.5736 108.089 26.4081 107.989 31.8233C107.824 40.7895 105.676 50.094 105.676 58.891C105.676 67.688 107.659 85.9586 107.659 94.0789C107.659 102.199 102.44 131.297 103.693 153.628C104.448 167.064 105.251 177.499 105.772 183.68C106.057 187.07 103.387 190 99.9855 190C97.0264 190 94.5547 187.763 94.2995 184.815C93.7326 178.265 92.7766 166.179 92.1275 152.444C91.1521 131.805 96.093 103.045 96.093 94.0789C96.093 85.1128 94.1102 67.1804 94.1102 58.891C94.1102 50.6015 96.4234 39.0977 96.4234 31.8233C96.4234 27.7179 95.8972 21.2954 95.4386 16.4789Z',
  // 6 — algue organique
  'M147.972 140.426C134.181 149.933 109.725 175.27 105.416 174.998C101.106 174.726 83.8682 164.734 70.4011 164.734C56.9341 164.734 49.9313 164.194 34.3095 158.792C18.6878 153.391 19.7651 133.944 30.5388 125.841C41.3124 117.739 51.5474 123.681 63.3984 130.163C75.2494 136.645 81.1749 150.69 88.7165 151.77C96.2582 152.85 96.2579 152.31 95.7193 145.828C95.1806 139.346 85.4843 129.083 75.7883 122.6C66.0922 116.118 42.3899 106.935 32.6936 96.1316C22.9973 85.328 23.3129 74.7275 28.9228 65.3413C33.3014 58.0153 42.3899 56.1583 52.6248 62.1002C62.8598 68.0422 72.5561 90.7298 75.7883 96.1316C79.0205 101.533 81.7137 111.797 88.7165 116.118C95.7194 120.44 93.5646 111.257 93.026 101.533C92.4873 91.8101 82.7911 74.5244 75.7883 66.9619C68.7854 59.3993 62.8599 48.5957 65.5533 36.7118C68.2467 24.8278 86.0232 20.5064 98.9516 30.7698C111.88 41.0332 109.187 50.7565 109.725 56.1583C110.264 61.5601 105.416 88.569 105.416 99.3727C105.416 110.176 111.341 105.315 115.651 99.3727C119.96 93.4307 128.04 64.261 130.734 52.9172C133.427 41.5734 135.043 28.0689 152.82 30.7698C170.596 33.4707 169.519 45.8949 166.287 57.2386C163.055 68.5824 136.121 88.5691 122.654 105.315C111.88 118.711 112.875 138.463 115.651 140.426C118.427 142.39 124.162 137.833 128.04 127.462C132.889 114.498 139.353 102.614 147.972 92.8905C156.591 83.1673 173.828 81.5467 177.06 99.3727C180.293 117.199 165.209 128.542 147.972 140.426Z',
  // 7 — ovale horizontal
  'M61.9989 70.1043C41.9746 77.578 27.2244 87.9977 26.9036 91.7457C26.5775 95.5561 35.9509 109.225 52.3411 121.062C63.2413 128.934 77.4895 136.597 93.1615 137.825C108.491 139.026 127.601 134.403 140.7 128.858C161.129 120.209 171.797 111.543 171.885 105.745C171.973 99.9471 160.793 83.3084 143.367 73.3021C134.364 68.1329 122.469 65.3612 108.65 63.2C92.0465 60.6034 75.8711 64.9268 61.9989 70.1043Z',
  // 8 — peigne / plante-mer
  'M165.159 63.2982C158.927 48.7841 141.21 46.2226 126.67 46.2226C112.13 46.2226 78.9632 45.3525 54.8247 54.7604C30.7478 64.1443 25.9353 85.5084 25.2725 94.8879C24.1149 111.27 26.1278 153.799 41.5232 153.799C56.9186 153.799 52.6421 126.669 52.6421 109.402C52.6421 88.9115 54.8248 78.6661 64.6164 78.6661C71.4588 78.6661 75.7352 94.8879 71.4587 109.402C67.1822 123.916 64.6163 150.383 75.7352 150.383C86.8541 150.383 91.5118 138.405 90.2753 123.063C89.0368 107.695 89.0368 100.866 89.0368 88.9115C89.0368 76.1048 97.9727 70.1284 103.96 73.5435C109.948 76.9586 109.092 101.718 103.96 117.94C98.8283 134.162 110.803 149.53 119.356 150.383C127.909 151.237 130.947 143.553 132.185 129.893C133.625 114.008 127.053 92.3266 125.343 78.6661C123.632 65.0057 132.018 66.2606 137.789 68.4208C151.474 73.5435 148.436 105.133 145.87 117.94C143.304 130.747 148.436 144.407 154.423 145.261C160.41 146.115 167.006 139.284 172.856 123.063C178.707 106.841 171.391 77.8124 165.159 63.2982Z',
  // 9 — S fluide
  'M72.1517 83.9515C63.9824 77.266 50.6145 74.2947 35.0186 80.9802C29.5724 83.2086 19.4356 88.3917 17.9373 101.037C16.4391 113.681 18.4614 122.201 29.1782 129.678C39.895 137.155 53.0313 132.562 58.0811 127.402C63.1309 122.242 72.8944 104.008 76.6077 107.722C80.321 111.436 65.2387 128.194 64.5762 140.08C63.9137 151.966 67.8237 165.437 75.6178 170.638C83.4119 175.84 94.6543 176.242 101.861 172.628C109.067 169.013 117.836 156.01 115.971 139.2C114.107 122.391 107.057 116.636 100.373 112.179C93.6889 107.722 100.373 108.465 107.057 109.95C113.741 111.436 118.197 116.636 121.167 124.064C124.138 131.492 133.533 156.886 154.587 153.034C175.642 149.183 183.111 137.805 182.461 121.55C181.812 105.296 161.271 83.9515 146.418 80.9802C131.565 78.0088 118.939 92.1226 113.741 95.8367C108.542 99.5509 100.373 92.1226 108.542 87.6656C116.711 83.2086 128.877 70.1869 128.552 53.6075C128.228 37.0282 115.226 27.4965 100.373 25.2681C85.5196 23.0396 75.865 34.9248 72.1517 52.7527C68.4384 70.5806 83.2916 76.5232 84.777 80.9802C86.2623 85.4371 80.321 90.6369 72.1517 83.9515Z',
  // 10 — goutte / flamme
  'M82.4735 100.835C78.4414 83.45 83.3513 63.4155 89.1638 54.9005C94.9763 46.3855 101.236 41.3903 105.22 48.1454C109.204 54.9005 128.431 84.6082 113.249 117.048C98.0666 149.487 92.2846 156.035 89.1638 154.876C86.0431 153.718 86.5055 118.221 82.4735 100.835Z',
  // 11 — barre oblique
  'M149.416 72.2228C149.037 70.8938 148.068 70.0812 146.828 70.7247C146.828 70.7247 118.757 85.3608 114.354 87.4526C109.951 89.5444 73.0728 108.67 70.8711 110.296C68.6695 111.923 41.1488 127.101 41.1488 127.101C38.9493 128.242 40.1664 129.819 42.623 129.443C42.623 129.443 70.5481 125.918 73.6231 125.475C76.6981 125.031 126.463 118.027 129.765 117.343C133.068 116.66 157.286 111.923 157.286 111.923C159.488 111.38 160.274 110.293 159.917 109.041C159.917 109.041 154.534 94.034 153.566 90.6321C152.598 87.2302 149.416 72.2228 149.416 72.2228Z',
  // 12 — spirale / escargot
  'M121.684 80.733C121.684 88.4106 117.338 91.9004 104.89 91.9004C92.4419 91.9004 92.2944 116.329 113.054 118.656C133.813 120.982 142.751 106.53 142.443 91.9004C142.136 77.2713 137.545 54.6756 107.222 49.5572C76.8999 44.4388 59.4061 69.1002 58.9396 96.5535C58.4731 124.007 82.8219 150.076 94.0179 157.754C105.214 165.432 116.681 168.9 113.054 173.326C109.427 177.752 79.0188 172.39 73.654 168.9C68.2893 165.411 43.6636 144.58 36.7808 108.186C31.1201 78.2548 44.2445 41.8655 75.7335 30.7192C107.222 19.5729 129.983 24.1377 150.675 49.5572C171.367 74.9766 165.352 107.786 155.109 122.676C145.136 137.174 115.341 144.923 98.7804 136.281C84.0417 128.59 72.5577 114.701 75.7335 91.9004C78.9093 69.1002 96.7259 68.7971 104.89 69.1003C113.054 69.4034 121.684 73.0554 121.684 80.733Z',
];

// ═══════════════════════════════════════════
// RÉFÉRENCES GLOBALES
// ═══════════════════════════════════════════

var canvas      = document.getElementById('canvas');
var selFrame    = document.getElementById('selection-frame');
var toolbar     = document.getElementById('bottom-menu');

var editPanelDesktop   = document.getElementById('edit-panel-desktop');
var editDividerDesktop = document.getElementById('edit-divider-desktop');
var editColorsDesktop  = document.getElementById('edit-colors-desktop');
var btnColorDesktop    = document.getElementById('panel-color');

var editPanelMobile    = document.getElementById('edit-panel-mobile');
var editColorsMobile   = document.getElementById('edit-colors-mobile');
var shapeMenuMobileEl  = document.getElementById('shape-menu-mobile');
var btnColorMobile     = document.getElementById('panel-color-mobile');
var btnCloseEditMobile = document.getElementById('edit-panel-close-mobile');

// ═══════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════

document.getElementById('btn-start').addEventListener('click', function () {
  document.getElementById('page-home').style.display = 'none';
  document.getElementById('page-creation').style.display = 'block';
});

// ═══════════════════════════════════════════
// PALETTE DE FORMES
// ═══════════════════════════════════════════

function buildShapeTile(index) {
  const btn = document.createElement('button');
  btn.className = 'shape-tile';
  btn.title = 'Forme ' + (index + 1);
  btn.innerHTML = '<img src="/matisse/shapes/shape-' + (index + 1) + '.svg" alt="Forme ' + (index + 1) + '">';
  btn.addEventListener('click', function () { addShapeToCanvas(index); });
  return btn;
}

function buildShapeGrids() {
  const desktopGrid = document.getElementById('shape-grid-desktop');
  const mobileTray  = document.getElementById('shape-grid-mobile');
  SHAPE_PATHS.forEach(function (_, i) {
    desktopGrid.appendChild(buildShapeTile(i));
    mobileTray.appendChild(buildShapeTile(i));
  });
}

// ═══════════════════════════════════════════
// FORMES SUR LA TOILE
// ═══════════════════════════════════════════

function randomColor() {
  return PALETTE_COLORS[Math.floor(Math.random() * PALETTE_COLORS.length)];
}

var canvasPlaceholder = document.getElementById('canvas-placeholder');

// Disparaît définitivement au premier ajout de forme (ne revient pas après un "Tout effacer"),
// avec un fondu léger plutôt qu'une disparition instantanée.
function hideCanvasPlaceholder() {
  if (!canvasPlaceholder) return;
  var el = canvasPlaceholder;
  canvasPlaceholder = null;
  el.classList.add('is-hiding');
  setTimeout(function () { el.remove(); }, 220);
}

function addShapeToCanvas(shapeIndex) {
  var isFirstShape = !!canvasPlaceholder;
  hideCanvasPlaceholder();
  deselect();
  const shapeSize = 160;
  const availW   = canvas.offsetWidth;
  const availH   = canvas.offsetHeight - toolbar.offsetHeight;

  const x = Math.round(availW / 2 - shapeSize / 2 + (Math.random() - 0.5) * 80);
  const y = Math.round(availH / 2 - shapeSize / 2 + (Math.random() - 0.5) * 80);

  const color   = randomColor();
  const wrapper = document.createElement('div');
  wrapper.className = 'canvas-shape';
  wrapper.style.left   = x + 'px';
  wrapper.style.top    = y + 'px';
  wrapper.style.width  = shapeSize + 'px';
  wrapper.style.height = shapeSize + 'px';

  const ns   = 'http://www.w3.org/2000/svg';
  const svg  = document.createElementNS(ns, 'svg');
  svg.setAttribute('viewBox', '0 0 200 200');
  svg.setAttribute('width',   shapeSize);
  svg.setAttribute('height',  shapeSize);

  const path = document.createElementNS(ns, 'path');
  path.setAttribute('d',    SHAPE_PATHS[shapeIndex]);
  path.setAttribute('fill', color);

  svg.appendChild(path);
  wrapper.appendChild(svg);
  canvas.appendChild(wrapper);

  // La toute première forme (celle qui remplace le placeholder) apparaît en fondu.
  if (isFirstShape) {
    wrapper.style.opacity = '0';
    void wrapper.offsetWidth; // force le reflow pour que la transition parte bien de 0
    wrapper.style.transition = 'opacity 0.22s ease';
    wrapper.style.opacity = '1';
  }

  // rAF garantit que le layout est calculé avant de mesurer offsetWidth/offsetHeight
  requestAnimationFrame(function () { selectShape(wrapper); });
}

// ═══════════════════════════════════════════
// TOUT EFFACER
// ═══════════════════════════════════════════

function clearCanvas() {
  deselect();
  canvas.querySelectorAll('.canvas-shape').forEach(function (el) {
    el.remove();
  });
}

document.getElementById('btn-erase').addEventListener('click', clearCanvas);
document.getElementById('btn-erase-mobile').addEventListener('click', clearCanvas);

// ═══════════════════════════════════════════
// MOBILE — TIROIR DE FORMES
// ═══════════════════════════════════════════

var mobileTray        = document.getElementById('shape-grid-mobile');
var btnNewShapeMobile = document.getElementById('btn-new-shape-mobile');
var iconTogglePlus    = btnNewShapeMobile.querySelector('.icon-toggle-plus');

function setMobileTrayOpen(open) {
  mobileTray.hidden = !open;
  btnNewShapeMobile.classList.toggle('active', open);
  btnNewShapeMobile.setAttribute('aria-expanded', open ? 'true' : 'false');
  iconTogglePlus.classList.toggle('is-open', open);
}

btnNewShapeMobile.addEventListener('click', function () {
  setMobileTrayOpen(mobileTray.hidden);
});

// ═══════════════════════════════════════════
// SÉLECTION
// ═══════════════════════════════════════════

var selected = null;

function selectShape(el) {
  if (selected === el) return;
  if (selected) selected.classList.remove('selected');
  selected = el;
  el.classList.add('selected');
  editPanelDesktop.classList.add('is-active');
  editPanelMobile.classList.add('is-active');
  shapeMenuMobileEl.classList.add('is-hidden');
  setEditColorsOpen(false);
  updateSelFrame();
  decideEditPanelPlacement();
}

function deselect() {
  if (!selected) return;
  selected.classList.remove('selected');
  selected = null;
  selFrame.style.display   = 'none';
  selFrame.style.transform = '';
  editPanelDesktop.classList.remove('is-active');
  editPanelMobile.classList.remove('is-active');
  shapeMenuMobileEl.classList.remove('is-hidden');
  setEditColorsOpen(false);
}

function updateSelFrame() {
  var left = parseFloat(selected.style.left);
  var top  = parseFloat(selected.style.top);
  var w    = selected.offsetWidth  || parseInt(selected.style.width,  10);
  var h    = selected.offsetHeight || parseInt(selected.style.height, 10);

  selFrame.style.left    = left + 'px';
  selFrame.style.top     = top  + 'px';
  selFrame.style.width   = w    + 'px';
  selFrame.style.height  = h    + 'px';
  selFrame.style.display = 'block';

  // Synchroniser la rotation du cadre avec celle de la forme
  var rot = parseFloat(selected.dataset.rotation || '0');
  selFrame.style.transform       = rot ? 'rotate(' + rot + 'deg)' : '';
  selFrame.style.transformOrigin = 'center center';

  // Mettre à jour le curseur de chaque poignée selon la rotation
  var CURSORS = ['ns-resize', 'nesw-resize', 'ew-resize', 'nwse-resize'];
  selFrame.querySelectorAll('.sel-handle').forEach(function (handle) {
    // Angle de base du diagonal : TL/BR = 135°, TR/BL = 45°
    var base = (handle.classList.contains('sel-tl') || handle.classList.contains('sel-br')) ? 135 : 45;
    // Angle effectif après rotation (ramené dans [0, 180[ car les curseurs sont symétriques)
    var a = ((base + rot) % 180 + 180) % 180;
    handle.style.cursor = CURSORS[Math.round(a / 45) % 4];
  });
}

// ═══════════════════════════════════════════
// PANNEAU D'ÉDITION — positionnement desktop
// ═══════════════════════════════════════════
//
// Le panneau se positionne au-dessus ou en dessous de la forme sélectionnée
// (bord gauche aligné), selon la place disponible UNE FOIS DÉPLIÉ (couleurs
// visibles). Le bord ancré à la forme est fixé via `top` OU `bottom` (jamais
// les deux) : ouvrir/fermer les couleurs change la hauteur du panneau sans
// jamais déplacer ce bord, seul le bord opposé bouge — pas de recalcul requis.
//
// Stabilité pendant les gestes :
//  - rotation : le panneau ne bouge pas du tout pendant le drag (recalcul
//    complet seulement au relâchement)
//  - redimensionnement : seul l'ancrage vertical (Y) suit en direct la forme,
//    le placement et la position X restent figés jusqu'au relâchement
//  - déplacement (drag simple) : suit entièrement en direct

var EDIT_PANEL_GAP     = 8;
var editPanelPlacement = 'up';
var editColorsOpen     = false;
var editPanelHeights    = null; // { collapsed, expanded } — mesuré une fois puis mis en cache

function measureEditPanelHeights() {
  if (editPanelHeights) return editPanelHeights;

  var wasActive = editPanelDesktop.classList.contains('is-active');
  if (!wasActive) editPanelDesktop.classList.add('is-active');

  var collapsed = editPanelDesktop.offsetHeight;
  editDividerDesktop.hidden = false;
  editColorsDesktop.hidden  = false;
  var expanded = editPanelDesktop.offsetHeight;
  editDividerDesktop.hidden = true;
  editColorsDesktop.hidden  = true;

  if (!wasActive) editPanelDesktop.classList.remove('is-active');

  editPanelHeights = { collapsed: collapsed, expanded: expanded };
  return editPanelHeights;
}

function shapeBounds(shape) {
  var corners = cornerPositions(shape);
  var xs = corners.map(function (c) { return c.x; });
  var ys = corners.map(function (c) { return c.y; });
  return {
    left:   Math.min.apply(null, xs),
    right:  Math.max.apply(null, xs),
    top:    Math.min.apply(null, ys),
    bottom: Math.max.apply(null, ys),
  };
}

// Recalcul complet : décide au-dessus/en dessous + position X, puis ancre Y
function decideEditPanelPlacement() {
  if (!selected) return;

  var heights = measureEditPanelHeights();
  var bounds  = shapeBounds(selected);
  var availH  = canvas.offsetHeight - toolbar.offsetHeight;

  var spaceAbove  = bounds.top;
  var spaceBelow  = availH - bounds.bottom;
  var neededSpace = heights.expanded + EDIT_PANEL_GAP;

  editPanelPlacement = (spaceAbove >= neededSpace || spaceAbove >= spaceBelow) ? 'up' : 'down';
  editPanelDesktop.classList.toggle('placement-up', editPanelPlacement === 'up');

  var panelW  = editPanelDesktop.offsetWidth || 248;
  var canvasW = canvas.offsetWidth;
  var left = bounds.left;
  if (left + panelW > canvasW - 8) left = canvasW - panelW - 8;
  if (left < 8) left = 8;
  editPanelDesktop.style.left = left + 'px';

  applyEditPanelAnchor();
}

// Recalcul Y seul : ancre le bord du panneau collé à la forme, sans toucher X ni le placement
function applyEditPanelAnchor() {
  if (!selected) return;
  var bounds  = shapeBounds(selected);
  var canvasH = canvas.offsetHeight;

  if (editPanelPlacement === 'up') {
    editPanelDesktop.style.top    = 'auto';
    editPanelDesktop.style.bottom = (canvasH - bounds.top + EDIT_PANEL_GAP) + 'px';
  } else {
    editPanelDesktop.style.bottom = 'auto';
    editPanelDesktop.style.top    = (bounds.bottom + EDIT_PANEL_GAP) + 'px';
  }
}

// ═══════════════════════════════════════════
// PANNEAU D'ÉDITION — couleurs & actions
// ═══════════════════════════════════════════

function setEditColorsOpen(open) {
  editColorsOpen = open;

  editDividerDesktop.hidden = !open;
  editColorsDesktop.hidden  = !open;
  btnColorDesktop.classList.toggle('is-active', open);

  editColorsMobile.hidden = !open;
  btnColorMobile.classList.toggle('is-open', open);

  updateActiveSwatches();
}

function toggleEditColors() {
  setEditColorsOpen(!editColorsOpen);
}

function updateActiveSwatches() {
  var current = selected ? selected.querySelector('path').getAttribute('fill') : null;
  document.querySelectorAll('.color-swatch').forEach(function (sw) {
    sw.classList.toggle('active', sw.dataset.color === current);
  });
}

function buildColorSwatch(color) {
  var btn = document.createElement('button');
  btn.className        = 'color-swatch';
  btn.style.background = color;
  btn.dataset.color    = color;
  btn.title            = color;
  btn.addEventListener('click', function () {
    if (!selected) return;
    selected.querySelector('path').setAttribute('fill', color);
    updateActiveSwatches();
  });
  return btn;
}

function buildColorSwatches() {
  var row1 = document.createElement('div');
  row1.className = 'edit-colors-row';
  var row2 = document.createElement('div');
  row2.className = 'edit-colors-row';
  PALETTE_COLORS.forEach(function (color, i) {
    (i < 6 ? row1 : row2).appendChild(buildColorSwatch(color));
  });
  editColorsDesktop.appendChild(row1);
  editColorsDesktop.appendChild(row2);

  PALETTE_COLORS.forEach(function (color) {
    editColorsMobile.appendChild(buildColorSwatch(color));
  });
}

function bringToFront() {
  if (!selected) return;
  canvas.appendChild(selected);
}

function sendToBack() {
  if (!selected) return;
  var firstShape = canvas.querySelector('.canvas-shape');
  if (firstShape && firstShape !== selected) {
    canvas.insertBefore(selected, firstShape);
  }
}

function deleteSelected() {
  if (!selected) return;
  var toRemove = selected;
  deselect();
  toRemove.remove();
}

document.getElementById('panel-color').addEventListener('click', toggleEditColors);
document.getElementById('panel-front').addEventListener('click', bringToFront);
document.getElementById('panel-back').addEventListener('click', sendToBack);
document.getElementById('panel-delete').addEventListener('click', deleteSelected);

document.getElementById('panel-color-mobile').addEventListener('click', toggleEditColors);
document.getElementById('panel-front-mobile').addEventListener('click', bringToFront);
document.getElementById('panel-back-mobile').addEventListener('click', sendToBack);
document.getElementById('panel-delete-mobile').addEventListener('click', deleteSelected);
btnCloseEditMobile.addEventListener('click', deselect);

// Flash bref du fond au tap/clic : confirme que l'action a été reçue, même
// quand elle n'a pas d'effet visuel immédiat sur la toile (ex. premier plan
// quand la forme est déjà devant). Classe ajoutée puis retirée deux frames
// plus tard pour laisser peindre l'état "flash" avant que la transition CSS
// ne le fasse s'estomper.
var tapFlashButtons = [
  document.getElementById('panel-color'),
  document.getElementById('panel-front'),
  document.getElementById('panel-back'),
  document.getElementById('panel-delete'),
  document.getElementById('panel-color-mobile'),
  document.getElementById('panel-front-mobile'),
  document.getElementById('panel-back-mobile'),
  document.getElementById('panel-delete-mobile'),
  btnNewShapeMobile,
  document.getElementById('btn-erase-mobile'),
  document.getElementById('btn-download-mobile'),
];
tapFlashButtons.forEach(function (btn) {
  btn.addEventListener('click', function () {
    btn.classList.add('is-tapped');
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { btn.classList.remove('is-tapped'); });
    });
  });
});

// Empêche un clic sur le panneau d'édition de désélectionner
editPanelDesktop.addEventListener('pointerdown', function (e) { e.stopPropagation(); });
editPanelMobile.addEventListener('pointerdown',  function (e) { e.stopPropagation(); });

// Note : pas d'écouteur « clic à l'extérieur » séparé pour fermer les
// couleurs — désélectionner (clic sur le fond du canvas) ou sélectionner une
// autre forme ferment déjà les couleurs via deselect()/selectShape(), et un
// écouteur `click` global se déclencherait aussi par erreur au relâchement
// d'un geste de rotation/redimensionnement (mousedown et mouseup sur des
// éléments différents → l'événement click résultant cible un ancêtre commun).

// Raccourci clavier Delete / Backspace — et Escape pour fermer les couleurs
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') { setEditColorsOpen(false); return; }
  if (e.key !== 'Delete' && e.key !== 'Backspace') return;
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  if (!selected) return;
  e.preventDefault();
  deleteSelected();
});

// ═══════════════════════════════════════════
// REDIMENSIONNEMENT — poignées de coin
// ═══════════════════════════════════════════

var resize         = null; // { signX, signY, anchorX, anchorY }
var MIN_SHAPE_SIZE = 40;

selFrame.querySelectorAll('.sel-handle').forEach(function (handle) {
  handle.addEventListener('pointerdown', function (e) {
    if (!selected) return;
    e.preventDefault();
    e.stopPropagation();

    // Utilise les coins réels (pivotés) pour l'ancre et l'axe de resize.
    // Ordre cornerPositions : TL=0, TR=1, BL=2, BR=3
    var corners = cornerPositions(selected);
    var anchorIdx, activeIdx;
    if (handle.classList.contains('sel-tl'))      { anchorIdx = 3; activeIdx = 0; }
    else if (handle.classList.contains('sel-tr')) { anchorIdx = 2; activeIdx = 1; }
    else if (handle.classList.contains('sel-bl')) { anchorIdx = 1; activeIdx = 2; }
    else                                           { anchorIdx = 0; activeIdx = 3; }

    var anchor = corners[anchorIdx];
    var active = corners[activeIdx];
    var dx = active.x - anchor.x;
    var dy = active.y - anchor.y;
    var len = Math.sqrt(dx * dx + dy * dy); // diagonale courante = size * sqrt(2)

    resize = { pointerId: e.pointerId, anchor: anchor, axisX: dx / len, axisY: dy / len };
    document.documentElement.style.cursor = handle.style.cursor;
  });
});

// ═══════════════════════════════════════════
// ROTATION — poignée latérale dédiée
// ═══════════════════════════════════════════

var rotation = null; // { cx, cy, startAngle, startRotation }

// Curseur SVG circulaire (flèche de rotation, hotspot centré)
var ROTATE_CURSOR = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24'%3E%3Cpath fill='%23272323' d='M15.55 5.55L11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11c-.17-1.39-.72-2.73-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42l1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z'/%3E%3C/svg%3E\") 11 11, alias";

// Calcule les positions canvas des 4 coins en tenant compte de la rotation CSS
// Formule : x' = cx + ox*cos - oy*sin,  y' = cy + ox*sin + oy*cos
function cornerPositions(shape) {
  var left = parseFloat(shape.style.left);
  var top  = parseFloat(shape.style.top);
  var w    = shape.offsetWidth;
  var h    = shape.offsetHeight;
  var cx   = left + w / 2;
  var cy   = top  + h / 2;
  var rad  = parseFloat(shape.dataset.rotation || '0') * Math.PI / 180;
  var cos  = Math.cos(rad);
  var sin  = Math.sin(rad);
  // Offsets avant rotation : TL, TR, BL, BR
  return [
    { ox: -w / 2, oy: -h / 2 },
    { ox: +w / 2, oy: -h / 2 },
    { ox: -w / 2, oy: +h / 2 },
    { ox: +w / 2, oy: +h / 2 },
  ].map(function (o) {
    return {
      x: cx + o.ox * cos - o.oy * sin,
      y: cy + o.ox * sin + o.oy * cos,
    };
  });
}

var rotateHandle = selFrame.querySelector('.sel-rotate');
rotateHandle.style.cursor = ROTATE_CURSOR;

rotateHandle.addEventListener('pointerdown', function (e) {
  if (!selected) return;
  e.preventDefault();
  e.stopPropagation();

  var canvasRect = canvas.getBoundingClientRect();
  var mx = e.clientX - canvasRect.left;
  var my = e.clientY - canvasRect.top;
  var cx = parseFloat(selected.style.left) + selected.offsetWidth  / 2;
  var cy = parseFloat(selected.style.top)  + selected.offsetHeight / 2;

  rotation = {
    pointerId:     e.pointerId,
    cx:            cx,
    cy:            cy,
    startAngle:    Math.atan2(my - cy, mx - cx) * 180 / Math.PI,
    startRotation: parseFloat(selected.dataset.rotation || '0'),
  };
  document.documentElement.style.cursor = ROTATE_CURSOR;
});

// ═══════════════════════════════════════════
// GLISSER-DÉPOSER + SÉLECTION AU CLIC
// ═══════════════════════════════════════════

var drag           = null;
var dragStartX     = 0;
var dragStartY     = 0;
var dragMoved      = false;
var DRAG_THRESHOLD = 4;

// ═══════════════════════════════════════════
// GESTE TACTILE À DEUX DOIGTS — pincer-zoomer + rotation
// ═══════════════════════════════════════════
//
// Un doigt pose et déplace la forme (drag classique ci-dessous). Dès qu'un
// second doigt se pose pendant ce drag, on bascule sur ce geste combiné :
// l'écart entre les deux doigts pilote la taille, l'angle entre eux pilote
// la rotation — les deux à la fois, comme le pinch d'une photo sur iPhone.
// Le centre de la forme reste fixe pendant tout le geste (même point
// d'ancrage que la poignée de rotation ; le pincer-zoomer est proportionnel,
// comme les poignées de coin).
//
// `touchPoints` ne suit que les doigts posés sur #canvas (pas ceux sur les
// poignées, qui ont leur propre logique mono-doigt plus haut) afin de savoir,
// à l'arrivée d'un 2e doigt, où se trouve déjà le 1er.

var touchPoints = new Map(); // pointerId -> {x, y} en coordonnées canvas
var pinch       = null;      // { idA, idB, initialDist, initialAngle, initialSize, initialRotation, cx, cy }

function canvasPoint(e) {
  var r = canvas.getBoundingClientRect();
  return { x: e.clientX - r.left, y: e.clientY - r.top };
}

function twoFingerGeometry(a, b) {
  var dx = b.x - a.x;
  var dy = b.y - a.y;
  return {
    dist:  Math.sqrt(dx * dx + dy * dy),
    angle: Math.atan2(dy, dx) * 180 / Math.PI,
  };
}

function startPinch() {
  // Le drag mono-doigt s'arrête net, sans saut : la forme reste où elle est.
  if (drag) {
    drag.el.classList.remove('dragging');
    drag = null;
    dragMoved = false;
  }

  var ids = Array.from(touchPoints.keys());
  var geo = twoFingerGeometry(touchPoints.get(ids[0]), touchPoints.get(ids[1]));

  pinch = {
    idA: ids[0],
    idB: ids[1],
    initialDist:     geo.dist,
    initialAngle:    geo.angle,
    initialSize:     selected.offsetWidth,
    initialRotation: parseFloat(selected.dataset.rotation || '0'),
    cx: parseFloat(selected.style.left) + selected.offsetWidth  / 2,
    cy: parseFloat(selected.style.top)  + selected.offsetHeight / 2,
  };
}

canvas.addEventListener('pointerdown', function (e) {
  if (e.target.closest('#edit-panel-desktop')) return;

  // Un 3e doigt (ou plus) pendant un pincer-zoomer en cours : ignoré.
  if (pinch) return;

  // 2e doigt posé pendant un drag mono-doigt en cours : bascule en pincer-zoomer.
  if (drag && selected && touchPoints.size === 1) {
    e.preventDefault();
    touchPoints.set(e.pointerId, canvasPoint(e));
    startPinch();
    return;
  }

  var shape = e.target.closest('.canvas-shape');
  if (!shape) {
    deselect();
    if (!mobileTray.hidden) setMobileTrayOpen(false);
    return;
  }

  if (selected && selected !== shape) deselect();

  e.preventDefault();
  touchPoints.clear();
  touchPoints.set(e.pointerId, canvasPoint(e));
  dragStartX = e.clientX;
  dragStartY = e.clientY;
  dragMoved  = false;

  // On calcule l'offset depuis style.left/top (coordonnées canvas) et non
  // depuis getBoundingClientRect(), dont le top-left change quand la forme
  // est pivotée (boîte englobante axis-aligned ≠ position CSS de l'élément).
  var canvasRect = canvas.getBoundingClientRect();
  drag = {
    el:           shape,
    pointerId:    e.pointerId,
    offsetX:      e.clientX - canvasRect.left - parseFloat(shape.style.left),
    offsetY:      e.clientY - canvasRect.top  - parseFloat(shape.style.top),
    originalLeft: shape.style.left,
    originalTop:  shape.style.top,
  };
  shape.classList.add('dragging');
});

document.addEventListener('pointermove', function (e) {
  if (touchPoints.has(e.pointerId)) touchPoints.set(e.pointerId, canvasPoint(e));

  // ── Pincer-zoomer + rotation à deux doigts ──
  if (pinch) {
    if (e.pointerId !== pinch.idA && e.pointerId !== pinch.idB) return;

    var pA = touchPoints.get(pinch.idA);
    var pB = touchPoints.get(pinch.idB);
    if (!pA || !pB) return;

    var geo    = twoFingerGeometry(pA, pB);
    var scale  = geo.dist / pinch.initialDist;
    var size   = Math.max(pinch.initialSize * scale, MIN_SHAPE_SIZE);
    var newRot = pinch.initialRotation + (geo.angle - pinch.initialAngle);

    selected.style.width      = size + 'px';
    selected.style.height     = size + 'px';
    selected.style.left       = (pinch.cx - size / 2) + 'px';
    selected.style.top        = (pinch.cy - size / 2) + 'px';
    selected.dataset.rotation = newRot;
    selected.style.transform  = 'rotate(' + newRot + 'deg)';

    // Le panneau d'édition reste figé pendant le geste, comme pour la
    // rotation à la poignée — recalcul complet seulement au relâchement.
    updateSelFrame();
    return;
  }

  // ── Rotation ──
  if (rotation) {
    if (e.pointerId !== rotation.pointerId) return;
    var canvasRect = canvas.getBoundingClientRect();
    var mx    = e.clientX - canvasRect.left;
    var my    = e.clientY - canvasRect.top;
    var angle = Math.atan2(my - rotation.cy, mx - rotation.cx) * 180 / Math.PI;
    var newRot = rotation.startRotation + (angle - rotation.startAngle);
    selected.dataset.rotation = newRot;
    selected.style.transform  = 'rotate(' + newRot + 'deg)';
    // Le panneau d'édition reste totalement figé pendant la rotation.
    updateSelFrame();
    return;
  }

  // ── Resize ──
  if (resize) {
    if (e.pointerId !== resize.pointerId) return;
    var canvasRect = canvas.getBoundingClientRect();
    var mx = e.clientX - canvasRect.left;
    var my = e.clientY - canvasRect.top;

    // Projection de la souris sur l'axe ancre→poignée active.
    // Pour un carré, diag = s*sqrt(2), donc s = proj/sqrt(2).
    var proj = (mx - resize.anchor.x) * resize.axisX + (my - resize.anchor.y) * resize.axisY;
    var s    = Math.max(proj / Math.SQRT2, MIN_SHAPE_SIZE);

    // Recalcule le centre en gardant l'ancre fixe, puis déduit left/top.
    var halfDiag = s * Math.SQRT2 / 2;
    selected.style.width  = s + 'px';
    selected.style.height = s + 'px';
    selected.style.left   = (resize.anchor.x + resize.axisX * halfDiag - s / 2) + 'px';
    selected.style.top    = (resize.anchor.y + resize.axisY * halfDiag - s / 2) + 'px';

    updateSelFrame();
    // Le panneau suit verticalement en direct, mais jamais horizontalement pendant le resize.
    applyEditPanelAnchor();
    return;
  }

  // ── Drag ──
  if (!drag || e.pointerId !== drag.pointerId) return;

  var canvasRect = canvas.getBoundingClientRect();
  drag.el.style.left = (e.clientX - canvasRect.left - drag.offsetX) + 'px';
  drag.el.style.top  = (e.clientY - canvasRect.top  - drag.offsetY) + 'px';
  if (selected === drag.el) {
    updateSelFrame();
    decideEditPanelPlacement();
  }

  if (!dragMoved) {
    var dx = e.clientX - dragStartX;
    var dy = e.clientY - dragStartY;
    if (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD) {
      dragMoved = true;
    }
  }
});

function endPointer(e) {
  touchPoints.delete(e.pointerId);

  if (pinch) {
    if (e.pointerId !== pinch.idA && e.pointerId !== pinch.idB) return;

    pinch = null;
    decideEditPanelPlacement();

    // S'il reste un doigt posé, reprendre le déplacement simple à partir de
    // sa position actuelle — pas de saut, la forme ne bouge pas au relâchement
    // du 2e doigt.
    var remainingId = Array.from(touchPoints.keys())[0];
    if (remainingId !== undefined && selected) {
      var p = touchPoints.get(remainingId);
      drag = {
        el:           selected,
        pointerId:    remainingId,
        offsetX:      p.x - parseFloat(selected.style.left),
        offsetY:      p.y - parseFloat(selected.style.top),
        originalLeft: selected.style.left,
        originalTop:  selected.style.top,
      };
      dragMoved = true; // le geste a déjà "bougé" la forme (taille/rotation) : pas de recalage au relâchement
      selected.classList.add('dragging');
    }
    return;
  }

  if (rotation) {
    if (e.pointerId !== rotation.pointerId) return;
    rotation = null;
    document.documentElement.style.cursor = '';
    decideEditPanelPlacement();
    return;
  }

  if (resize) {
    if (e.pointerId !== resize.pointerId) return;
    resize = null;
    document.documentElement.style.cursor = '';
    decideEditPanelPlacement();
    return;
  }

  if (!drag || e.pointerId !== drag.pointerId) return;
  drag.el.classList.remove('dragging');

  if (!dragMoved) {
    // Restaurer la position exacte (micro-mouvement de souris pendant le clic annulé)
    drag.el.style.left = drag.originalLeft;
    drag.el.style.top  = drag.originalTop;
    selectShape(drag.el);
  }

  drag      = null;
  dragMoved = false;
}

document.addEventListener('pointerup',     endPointer);
document.addEventListener('pointercancel', endPointer);

// ═══════════════════════════════════════════
// TÉLÉCHARGEMENT DU COLLAGE
// ═══════════════════════════════════════════

function collageFilename() {
  var d = new Date();
  var pad = function (n) { return String(n).padStart(2, '0'); };
  var stamp = d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate())
    + '_' + pad(d.getHours()) + '-' + pad(d.getMinutes()) + '-' + pad(d.getSeconds());
  return 'mon-collage-matisse-' + stamp + '.jpg';
}

function downloadCollage() {
  // Désélectionner avant la capture : masque le cadre de sélection et le
  // panneau d'édition desktop, tous deux enfants de #canvas.
  deselect();

  html2canvas(canvas, {
    backgroundColor: '#ffffff',
    ignoreElements: function (el) {
      return el.id === 'selection-frame'
        || el.id === 'edit-panel-desktop'
        || el.id === 'canvas-placeholder';
    },
  }).then(function (renderedCanvas) {
    var link = document.createElement('a');
    link.download = collageFilename();
    link.href = renderedCanvas.toDataURL('image/jpeg', 0.92);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

document.getElementById('btn-download-desktop').addEventListener('click', downloadCollage);
document.getElementById('btn-download-mobile').addEventListener('click', downloadCollage);

// ═══════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════

buildShapeGrids();
buildColorSwatches();
