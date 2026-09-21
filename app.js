const modalTriggers = document.querySelectorAll('[data-modal]');
const modals = document.querySelectorAll('.modal');
modalTriggers.forEach(trigger => trigger.addEventListener('click', event => { event.preventDefault(); const modal = document.getElementById(trigger.dataset.modal); if (modal) { modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false'); } }));
document.querySelectorAll('.modal-close').forEach(button => button.addEventListener('click', () => { const modal = button.closest('.modal'); modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); }));
modals.forEach(modal => modal.addEventListener('click', event => { if (event.target === modal) { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); } }));
const grid = document.getElementById('playerGrid');
const cards = [...grid.querySelectorAll('.player-card')];
const input = document.getElementById('searchInput');
const position = document.getElementById('positionFilter');
const modality = document.getElementById('modalityFilter');
const count = document.getElementById('resultsCount');
function filterPlayers() { const term = input.value.toLowerCase().trim(); const selectedPosition = position.value; const selectedModality = modality.value; let visible = 0; cards.forEach(card => { const matchesTerm = !term || card.dataset.name.includes(term) || card.dataset.position.toLowerCase().includes(term); const matchesPosition = selectedPosition === 'all' || card.dataset.position === selectedPosition || (selectedPosition === 'Delantero' && card.dataset.position === 'Delantera'); const matchesModality = selectedModality === 'all' || card.dataset.modality === selectedModality; const show = matchesTerm && matchesPosition && matchesModality; card.style.display = show ? '' : 'none'; if (show) visible++; }); count.textContent = `Mostrando ${visible} jugador${visible === 1 ? '' : 'es'}`; }
[input, position, modality].forEach(control => control.addEventListener('input', filterPlayers));
document.getElementById('applyFilters').addEventListener('click', filterPlayers);
document.querySelectorAll('.favorite').forEach(button => button.addEventListener('click', () => { button.classList.toggle('selected'); button.textContent = button.classList.contains('selected') ? '♥' : '♡'; }));
document.querySelector('.menu-toggle').addEventListener('click', () => document.querySelector('.main-nav').classList.toggle('mobile-open'));
