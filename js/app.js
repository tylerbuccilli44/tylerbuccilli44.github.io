'use strict';
const portfolio = document.querySelector('#portfolio');
const secret = document.querySelector('#secret-view');
const frame = document.querySelector('#secret-frame');
function route() {
  const isSecret = location.hash === '#/gtg';
  portfolio.hidden = isSecret;
  secret.hidden = !isSecret;
  document.title = isSecret ? 'UConn Shy Pooper · Tyler Buccilli' : 'Tyler Buccilli · Marine Science & More';
  if (isSecret && !frame.getAttribute('src')) frame.src = 'secret/gtg.html';
  if (!isSecret && (location.hash === '#/' || !location.hash)) window.scrollTo({top:0});
}
let typed = '', lastKey = 0;
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && location.hash === '#/gtg') { location.hash = '/'; return; }
  if (event.ctrlKey || event.metaKey || event.altKey || event.isComposing || event.repeat || event.key.length !== 1) return;
  if (event.target.closest('input,textarea,select,[contenteditable]:not([contenteditable="false"])')) { typed = ''; return; }
  const now = Date.now();
  if (now - lastKey > 1800) typed = '';
  lastKey = now;
  typed = (typed + event.key.toLowerCase()).slice(-3);
  if (typed === 'gtg') { typed = ''; location.hash = '/gtg'; }
});
window.addEventListener('hashchange', route);
route();
document.querySelector('#year').textContent = new Date().getFullYear();
const daylight = document.querySelector('#soundscape');
daylight.addEventListener('click', () => {
  const evening = document.body.classList.toggle('evening');
  daylight.textContent = evening ? '☾ Evening' : '☀ Daylight';
  daylight.setAttribute('aria-pressed', String(evening));
});
const notes = {
  claspers: {title:'Shark clasper allometry', text:[
    'My research asks how clasper length changes with shark body length, with particular interest in the rapid growth associated with sexual maturity.',
    'The project aims to collect images representing about 50 male sharks, depending on what is available. Measurements use consistent landmarks: body length from snout to tail tip and clasper length from the posterior edge of the vent to the clasper tip.',
    'Species, specimen ID, image scale, and any bending or damage matter for interpreting the measurements. This project is in progress; results are not available yet.'
  ]},
  flounder: {title:'Flounder & food webs', text:[
    'My lab experience has included dissections, examining stomach contents, and collecting data for work on flounder food webs in Long Island Sound.',
    'I’ve also worked with fish scale images and the RFishBC package in R, including digitizing radii and organizing exported measurements.',
    'I’m interested in how these small observations help us understand a fish’s life and its place in the ecosystem.'
  ]}
};
const dialog = document.querySelector('#project-dialog');
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const note = notes[button.dataset.project];
  document.querySelector('#dialog-title').textContent = note.title;
  document.querySelector('#dialog-caption').textContent = note.title + ' · Field notes';
  document.querySelector('#dialog-copy').replaceChildren(...note.text.map(text => { const p = document.createElement('p'); p.textContent = text; return p; }));
  dialog.showModal();
}));
document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog && (event.clientX < dialog.getBoundingClientRect().left || event.clientX > dialog.getBoundingClientRect().right || event.clientY < dialog.getBoundingClientRect().top || event.clientY > dialog.getBoundingClientRect().bottom)) dialog.close(); });
document.querySelector('#bubble-party').addEventListener('click', () => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const layer = document.querySelector('#bubble-layer');
  if (layer.childElementCount) return;
  for (let i = 0; i < 24; i++) {
    const bubble = document.createElement('span'); bubble.className = 'party-bubble';
    bubble.style.setProperty('--size', `${15 + Math.random()*55}px`);
    bubble.style.setProperty('--left', `${Math.random()*100}%`);
    bubble.style.setProperty('--delay', `${Math.random()*1.5}s`);
    bubble.addEventListener('animationend', () => bubble.remove(), {once:true}); layer.append(bubble);
  }
});
