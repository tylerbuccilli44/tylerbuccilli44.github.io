'use strict';
// Keep previously shared links working.
if(location.hash === '#/gtg') location.replace('gtg/');
document.querySelector('#year').textContent = new Date().getFullYear();
