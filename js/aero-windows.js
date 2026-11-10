'use strict';
// Real minimize/restore controls, without hiding the title needed to restore.
document.querySelectorAll('.window, .hero>div').forEach((panel, index) => {
  const title = panel.querySelector('.titlebar, .window-caption');
  const content = panel.querySelector('.window-body, h1');
  if (!title || !content) return;
  const label = title.textContent.trim();
  const button = document.createElement('button');
  button.className = 'aero-minimize';
  button.type = 'button';
  button.textContent = '−';
  button.setAttribute('aria-expanded', 'true');
  button.setAttribute('aria-label', `Minimize ${label}`);
  title.append(button);
  button.addEventListener('click', () => {
    const collapsed = panel.classList.toggle('is-minimized');
    button.textContent = collapsed ? '□' : '−';
    button.setAttribute('aria-expanded', String(!collapsed));
    button.setAttribute('aria-label', `${collapsed ? 'Restore' : 'Minimize'} ${label}`);
  });
});
document.querySelectorAll('.band').forEach(panel => {
  const heading = panel.querySelector(':scope > h2');
  if (!heading) return;
  const title = document.createElement('div');
  title.className = 'aero-caption';
  title.append(document.createTextNode(heading.textContent));
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'aero-minimize';
  button.textContent = '−';
  button.setAttribute('aria-label', `Minimize ${heading.textContent}`);
  button.setAttribute('aria-expanded', 'true');
  title.append(button);
  const body = document.createElement('div');
  body.className = 'band-body';
  body.append(...panel.childNodes);
  panel.append(title, body);
  button.addEventListener('click', () => {
    const collapsed = panel.classList.toggle('is-minimized');
    button.textContent = collapsed ? '□' : '−';
    button.setAttribute('aria-expanded', String(!collapsed));
    button.setAttribute('aria-label', `${collapsed ? 'Restore' : 'Minimize'} ${heading.textContent}`);
  });
});
