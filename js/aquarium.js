
(()=>{
const box=document.getElementById('desktop-pet'),toggle=document.getElementById('tank-toggle');
if(matchMedia('(max-width:700px)').matches){box.classList.add('collapsed');toggle.textContent='+';toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Expand aquarium')}
toggle.onclick=()=>{const off=box.classList.toggle('collapsed');toggle.textContent=off?'+':'−';toggle.setAttribute('aria-expanded',String(!off));toggle.setAttribute('aria-label',off?'Expand aquarium':'Minimize aquarium')};
const canvas=document.getElementById('fish-tank'),g=canvas.getContext('2d');
const fish=Array.from({length:8},(_,i)=>({species:i%4,x:40+Math.random()*420,y:45+Math.random()*150,v:(i%2?1:-1)*(.6+Math.random()*.6),size:12+Math.random()*8,color:['#ff7624','#ffe237','#1475ed','#215fc9'][i%4]}));
let food=[],bubbles=Array.from({length:16},()=>({x:Math.random()*500,y:Math.random()*290,r:2+Math.random()*5,s:.4+Math.random()})),time=0;
function feed(x=250,y=45){if(food.length>45)return;for(let i=0;i<7;i++)food.push({x:x+(Math.random()-.5)*32,y:y+(Math.random()-.5)*12})}
canvas.onclick=e=>{const r=canvas.getBoundingClientRect();feed((e.clientX-r.left)*500/r.width,(e.clientY-r.top)*290/r.height)};
canvas.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();feed()}};document.getElementById('feed-fish').onclick=()=>{feed();if(matchMedia('(prefers-reduced-motion: reduce)').matches)draw()};
function draw(){time+=.025;g.clearRect(0,0,500,290);let bg=g.createLinearGradient(0,0,0,290);bg.addColorStop(0,'#5af0f4');bg.addColorStop(.25,'#139dc6');bg.addColorStop(1,'#034b87');g.fillStyle=bg;g.fillRect(0,0,500,290);
for(let i=0;i<6;i++){g.fillStyle='#c9ffff14';g.beginPath();g.moveTo(i*100+Math.sin(time)*25,0);g.lineTo(i*100+110,290);g.lineTo(i*100+30,290);g.closePath();g.fill()}
g.fillStyle='#e3d9a5';g.beginPath();g.moveTo(0,270);g.quadraticCurveTo(220,245,500,270);g.lineTo(500,290);g.lineTo(0,290);g.fill();
for(let i=0;i<13;i++){let x=15+i*39;g.strokeStyle=i%2?'#76cd6a':'#3bb990';g.lineWidth=4+i%3;g.beginPath();g.moveTo(x,275);g.bezierCurveTo(x+20,230,x-20+Math.sin(time+i)*13,220,x+Math.sin(time+i)*15,195-(i%4)*13);g.stroke()}
for(const b of bubbles){b.y-=b.s;if(b.y<0)b.y=280;g.strokeStyle='#d7ffff88';g.lineWidth=1;g.beginPath();g.arc(b.x+Math.sin(time+b.y/50)*5,b.y,b.r,0,7);g.stroke();g.fillStyle='#ffffff99';g.beginPath();g.arc(b.x-1,b.y-2,1,0,7);g.fill()}
food.forEach(f=>{f.y+=.25;g.fillStyle='#86501f';g.fillRect(f.x,f.y,4,4)});food=food.filter(f=>f.y<266);
for(const f of fish){if(food.length){let target=food.reduce((a,b)=>Math.hypot(a.x-f.x,a.y-f.y)<Math.hypot(b.x-f.x,b.y-f.y)?a:b);let dx=target.x-f.x,dy=target.y-f.y;f.v=dx>=0?Math.abs(f.v):-Math.abs(f.v);f.y+=Math.sign(dy)*Math.min(.85,Math.abs(dy));if(Math.hypot(dx,dy)<15)food.splice(food.indexOf(target),1)}
f.x+=f.v;if(f.x<20||f.x>480)f.v=-f.v;g.save();g.translate(f.x,f.y+Math.sin(time*2+f.size)*3);g.scale(f.v>0?1:-1,1);
const sz=f.size*1.2,kind=f.species,h=sz*(kind===0?.58:kind===3?.90:.83),wag=Math.sin(time*8+sz);
// Soft underwater shadow and curved, translucent ray fins.
g.save();g.translate(-3,h+8);g.scale(1,.22);g.fillStyle='#002e5b25';g.filter='blur(3px)';g.beginPath();g.ellipse(0,0,sz*1.05,h,0,0,Math.PI*2);g.fill();g.restore();
function fin(points){let fg=g.createLinearGradient(0,-h*1.5,0,h*1.7);fg.addColorStop(0,'#e3faffbb');fg.addColorStop(.4,(kind===2?'#ffe52f':f.color)+'d9');fg.addColorStop(1,'#064b7c88');g.fillStyle=fg;g.strokeStyle='#d6ffff88';g.lineWidth=.65;g.beginPath();points();g.closePath();g.fill();g.stroke()}
fin(()=>{g.moveTo(-sz*.78,0);g.bezierCurveTo(-sz*1.1,-h*.25,-sz*1.32,-h*.9+wag*2,-sz*1.62,-h*.95+wag*3);g.quadraticCurveTo(-sz*1.42,0,-sz*1.62,h*.95+wag*3);g.quadraticCurveTo(-sz*1.1,h*.55,-sz*.78,0)});
for(let r=-2;r<=2;r++){g.strokeStyle='#ffffff44';g.beginPath();g.moveTo(-sz*.85,0);g.lineTo(-sz*1.53,r*h*.35+wag*2);g.stroke()}
fin(()=>{g.moveTo(-sz*.65,-h*.38);g.quadraticCurveTo(-sz*.35,-h*1.7,sz*.15,-h*1.45);g.quadraticCurveTo(sz*.45,-h*.95,sz*.65,-h*.45)});
fin(()=>{g.moveTo(-sz*.5,h*.4);g.quadraticCurveTo(-sz*.15,h*1.6,sz*.45,h*.7);g.lineTo(sz*.6,h*.3)});
// A radial material gives the body the rounded, shiny plastic look of old CGI.
let body=g.createRadialGradient(sz*.2,-h*.42,1,-sz*.12,h*.16,sz*1.35);body.addColorStop(0,'#fffbd7');body.addColorStop(.2,f.color);body.addColorStop(.58,f.color);body.addColorStop(.82,'#235570');body.addColorStop(1,'#06283d');
g.fillStyle=body;g.beginPath();g.moveTo(sz,0);g.bezierCurveTo(sz*.8,-h, -sz*.45,-h*1.3,-sz*.92,0);g.bezierCurveTo(-sz*.55,h*1.2,sz*.78,h,sz,0);g.fill();
g.save();g.clip();
if(kind===0){
// Clownfish: three white bands, outlined in dark brown.
for(let j=0;j<3;j++){g.save();g.translate(-sz*.58+j*sz*.56,0);g.rotate(-.12);g.fillStyle='#fff9eb';g.fillRect(-sz*.095,-h*1.3,sz*.2,h*2.6);g.strokeStyle='#382d28';g.lineWidth=1.7;g.strokeRect(-sz*.095,-h*1.3,sz*.2,h*2.6);g.restore()}
}else if(kind===1){
// Yellow tang: clean lemon-yellow disk and bright tail peduncle.
g.fillStyle='#fff5a488';g.beginPath();g.ellipse(-sz*.65,0,sz*.12,h*.12,0,0,7);g.fill();
}else if(kind===2){
// Blue tang: dark palette marking and yellow caudal fin.
g.strokeStyle='#071e50';g.lineWidth=h*.31;g.beginPath();g.moveTo(sz*.32,-h*.45);g.bezierCurveTo(-sz*.25,-h*.9,-sz*.85,-h*.4,-sz*.62,h*.16);g.bezierCurveTo(-sz*.35,h*.6,sz*.18,h*.35,sz*.04,-h*.04);g.bezierCurveTo(-sz*.04,-h*.3,-sz*.5,-h*.13,-sz*.52,h*.08);g.stroke();g.fillStyle='#ffe831';g.beginPath();g.moveTo(-sz*.95,-h*.22);g.lineTo(-sz*.6,0);g.lineTo(-sz*.95,h*.22);g.fill();
}else{
// Adult emperor angelfish: blue body, narrow yellow horizontal lines and dark facial mask.
g.strokeStyle='#ffe34b';g.lineWidth=1.4;for(let j=-3;j<=3;j++){g.beginPath();g.moveTo(-sz,j*h*.22);g.bezierCurveTo(-sz*.4,j*h*.24,sz*.15,j*h*.19,sz*.57,j*h*.24);g.stroke()}
g.save();g.translate(sz*.55,0);g.rotate(-.25);g.fillStyle='#071b43';g.fillRect(-sz*.14,-h*1.15,sz*.27,h*2.3);g.strokeStyle='#9cecff';g.lineWidth=1.5;g.strokeRect(-sz*.14,-h*1.15,sz*.27,h*2.3);g.restore();
}
// Small scale glints and a broad specular reflection.
for(let j=0;j<4;j++)for(let k=0;k<3;k++){g.strokeStyle='#ffffff1f';g.lineWidth=.5;g.beginPath();g.arc(-sz*.55+j*sz*.3,-h*.35+k*h*.33,2,0,Math.PI);g.stroke()}
let shine=g.createRadialGradient(sz*.15,-h*.5,0,sz*.15,-h*.5,sz*.8);shine.addColorStop(0,'#ffffffc9');shine.addColorStop(.35,'#ffffff44');shine.addColorStop(1,'#ffffff00');g.fillStyle=shine;g.fillRect(-sz,-h*1.5,sz*2,h*3);g.restore();
// Curved gill, clear pectoral fin, glassy eye, and a tiny mouth.
g.strokeStyle='#14495b88';g.lineWidth=.8;g.beginPath();g.ellipse(sz*.45,0,sz*.14,h*.63,-.2,-1.1,1.25);g.stroke();
fin(()=>{g.moveTo(sz*.15,h*.06);g.quadraticCurveTo(-sz*.35,h*(.75+wag*.08),-sz*.38,h*.36);g.quadraticCurveTo(-sz*.1,h*.05,sz*.15,h*.06)});
let ex=sz*.69,ey=-h*.2,er=sz*.155;g.fillStyle='#162c30';g.beginPath();g.arc(ex,ey,er+1,0,7);g.fill();let eye=g.createRadialGradient(ex-er*.3,ey-er*.4,0,ex,ey,er);eye.addColorStop(0,'#fffde1');eye.addColorStop(.6,'#d6b741');eye.addColorStop(1,'#65551d');g.fillStyle=eye;g.beginPath();g.arc(ex,ey,er,0,7);g.fill();g.fillStyle='#050f19';g.beginPath();g.arc(ex+.7,ey,er*.62,0,7);g.fill();g.fillStyle='#fff';g.beginPath();g.arc(ex,ey-er*.35,er*.28,0,7);g.fill();g.strokeStyle='#173d4c';g.beginPath();g.moveTo(sz*.87,h*.12);g.quadraticCurveTo(sz*.97,h*.22,sz*1.02,h*.1);g.stroke();g.restore()}
g.fillStyle='#ffffff2b';g.fillRect(0,0,500,5);
}
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
let last=0;function animate(t){if(!box.classList.contains('collapsed')&&!document.hidden&&t-last>30){if(!reducedMotion.matches||last===0){draw();last=t}}requestAnimationFrame(animate)}requestAnimationFrame(animate);
let player=null;const music=document.getElementById('music-toggle'),status=document.getElementById('music-status');
window.onYouTubeIframeAPIReady=()=>{player=new YT.Player('music-frame',{events:{onReady:e=>e.target.playVideo(),onStateChange:e=>{if(e.data===YT.PlayerState.PLAYING){music.textContent='Ⅱ Pause music';status.textContent='Playing · music loops continuously.'}else if(e.data===YT.PlayerState.PAUSED){music.textContent='▶ Play music';status.textContent='Music paused.'}else if(e.data===YT.PlayerState.ENDED){e.target.seekTo(4);e.target.playVideo()}},onAutoplayBlocked:()=>{status.textContent='Press Play music to start the soundtrack.'},onError:()=>{status.textContent='YouTube could not play this video here. Try the link below.';if(!document.getElementById('music-external')){const a=document.createElement('a');a.id='music-external';a.href='https://www.youtube.com/watch?v=xsdWibwQdZE&t=4s';a.target='_blank';a.rel='noopener';a.textContent='Open song on YouTube';status.append(' ',a)}}}})};
music.onclick=()=>{if(player&&typeof player.getPlayerState==='function'){player.getPlayerState()===YT.PlayerState.PLAYING?player.pauseVideo():player.playVideo()}else{document.getElementById('music-frame').contentWindow.postMessage(JSON.stringify({event:'command',func:'playVideo',args:[]}), 'https://www.youtube.com');status.textContent='Use the video player below if music does not start.'}};
const api=document.createElement('script');api.src='https://www.youtube.com/iframe_api';document.body.appendChild(api);
})();
