'use strict';
const portfolio = document.querySelector('#portfolio');
const secret = document.querySelector('#secret-view');
const frame = document.querySelector('#secret-frame');
function route() {
  const isSecret = location.hash === '#/gtg';
  portfolio.hidden = isSecret;
  secret.hidden = !isSecret;
  document.title = isSecret ? 'UConn Shy Pooper · Tyler Buccilli' : 'Tyler Buccilli';
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
