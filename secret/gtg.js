if(typeof L === 'undefined'){document.getElementById('warn').hidden=false;document.getElementById('warn').textContent='The map library could not load. Check your connection and reload to use the restroom finder.';}else{

const T={i:{n:'Gender-inclusive',c:'#e0197a'},s:{n:'Single-stall only',c:'#8e8e93',d:1},r:{n:'Residence hall',c:'#ff453a'}};
// [code,name,pixelX,pixelY (on the PDF map),type,locations "floor|where"]
const B=[
['ARJ','Arjona',685,803,'i',['1st floor|RR1C, next to Janitor Closet 135','1st floor|RR1B, next to Janitor Closet 133','3rd floor|RR3B, next to Room 335','4th floor|RR4C, next to CMHS Check-in']],
['ARTB','Art Building',833,961,'i',['2nd floor|RR2B, next to Room 223','2nd floor|RR2C, next to Room 201','2nd floor|RR2D, next to Room 200']],
['ATWR','Atwater',392,520,'i',['1st floor|RR1A, next to Room A106','2nd floor|RR2A, across from Stairwell A']],
['BCH','Beach',630,603,'i',['1st floor|RR1B, across from Room 1278','1st floor|RR1E, across from Room 139','4th floor|RR4C, next to WGSS Department']],
['BISH','Bishop',925,766,'i',['Ground floor|RR0C, in between other restrooms']],
['BOUS','Bousfield',612,757,'i',['2nd floor|RR2E, across from other restrooms','3rd floor|RR3E, across from other restrooms']],
['BUD','Budds',640,704,'s',['1st floor|RR1A, next to Office of the General Counsel','1st floor|RR1B, next to elevator']],
['DODD','Dodd Center',578,833,'s',['1st floor|111, past “Staff” doors','1st floor|112, past “Staff” doors']],
['E2','Engineering II',378,630,'s',['2nd floor|RR2B, next to Room 217','3rd floor|RR3A, across from Room 314']],
['GENT','Gentry',444,659,'i',['Ground floor|RR0C, in restrooms hallway','Ground floor|RR0D, in restrooms hallway','1st floor|RR1B, across from Room 103','1st floor|RR1C, across from Room 131','2nd floor|RR2A, across from Room 215','2nd floor|RR2B, across from Room 215','3rd floor|RR3A, across from Room 315','3rd floor|RR3B, across from Room 315','4th floor|RR4A, across from Room 417']],
['HALL','Hall',535,692,'i',['1st floor|RR1A, next to stair/ramp of “C1B” hallway','1st floor|103, through 104']],
['ITE','ITE',492,787,'i',['C floor|RRCC, past double doors next to other restroom']],
['JONS','Jones',697,330,'i',['1st floor|RR1C, next to Room 120']],
['KNS','Koons Hall',581,664,'i',['Ground floor|007, across from Room 002','Ground floor|RR0D, in restrooms hallway','3rd floor|RR3A, next to Room 301']],
['HBL','Homer Babbidge Library',548,770,'i',['1st floor|RR1C, near the Maker Studio']],
['GSH','Graduate Storrs',683,1014,'i',['1st floor|Next to pool (2)','2nd floor|RR2A, near meeting room “Coventry”','3rd floor|Near meeting room “Tolland”']],
['SU','Student Union',400,745,'i',['1st floor|RR1C, between north elevator and Room 104','3rd floor|RR3C, next to Student Activities Business Office','4th floor|RR4C, next to elevator','4th floor|Rainbow Center','4th floor|Women’s Center','4th floor|African American Cultural Center','4th floor|Puerto Rican/Latin American Cultural Center','4th floor|Asian American Cultural Center']],
['VDM','Von der Mehden',845,882,'i',['1st floor|RR1C, back of building (visible from outside)']],
['WSRH','Wilson Hall',762,897,'r',['1st floor|Between classrooms 112 and 113','1st floor|Across from Room 108']],
['WOOD','Wood',480,619,'i',['Ground floor|005, across from Stair B','Ground floor|RR0B, across from Room 014']],
['TSK','Gordon W. Tasker Admissions Building',293,707,'i',['1st floor|Back hallway']],
['BRH','Buckley Hall',913,843,'r',['1st floor|Near bike room, on the same floor as the dining hall']],
['FSB','Family Studies Building',679,654,'i',['3rd floor|']],
['GRE','Hugh S. Greer Field House',333,761,'i',['Ground floor|Near Business offices']],
['MAN','Manchester Hall',712,692,'i',['Ground floor|005, left of Stair B']],
['MONT','Monteith',658,764,'i',['1st floor|106, across from Room 101','3rd floor|315, across from Room 392']],
['MUSB','Music Building',870,865,'s',['2nd floor|RR2A, next to elevator','2nd floor|RR2B, next to elevator']],
['MLIB','Music Library',889,901,'i',['2nd floor|RR2A, across from conference room','2nd floor|RR2B, across from conference room']],
['PCSB','Phillips Communication Sciences',721,1052,'i',['1st floor|RR1C, next to Speech & Hearing Sciences Clinic Office']],
['RHBA','Ratcliffe Hicks',653,425,'s',['Ground floor|RR0A, next to Room 008']],
['SRC','Recreation Center',518,873,'i',['1st floor|Before entrance gates, down the hall from the front desk (2)','1st floor|125A, in Universal Locker Room','2nd floor|Near Studios A and B','3rd floor|In hallway near lockers (along basketball courts)','4th floor|Same level as the running track']],
['ROWE','Rowe',497,714,'i',['1st floor|RR1A, across from Global Administrative Office','1st floor|RR1C, across from elevator','4th floor|Across from Educational Technologies Office']],
['STRS','Storrs Hall',510,580,'i',['Ground floor|']],
['NWRH','Northwest Residence Halls',192,512,'r',['Ground floor|Each hall includes one']],
['AUST','Phillip E. Austin',574,541,'i',['1st floor|Between building entrance and Hall 110']],
['WSH','Student Health Services',457,568,'i',['1st floor|Next to Room 118','1st floor|Across from the Business Office']],
['WRH','Whitney Hall',757,577,'r',['1st floor|Down the hall in front of dining hall card reader (2)']],
['ARH','Alumni Quad',579,966,'r',['M floor|Each building has guest bathrooms (2)','Brock, 2nd floor|In the dorm portion of the floor']],
['UTEB','UTEB',366,603,'s',['1st floor|Near gendered restrooms','3rd floor|Near stairwell','4th floor|Near roof access door']],
['MCHU','McHugh',468,750,'s',['1st floor|RR1C, right of Union-side doors, next to women’s restroom','1st floor|SHRR0C, across from Room 008','1st floor|WWRRGA, across from WWR','3rd floor|SHRR3A, across from Room 310']],
['BUSN','School of Business',466,833,'i',['3rd floor|Student Union side']]
];
// Convert the printed map's pixel positions to lat/lng (anchored on the Library, ~1.4 m per pixel, north up)
const ll=(x,y)=>[41.8072-(y-770)*1.4*9.0e-6,-72.2537+(x-548)*1.4*1.209e-5];
const esri=p=>L.tileLayer(`https://server.arcgisonline.com/ArcGIS/rest/services/${p}/MapServer/tile/{z}/{y}/{x}`,{maxZoom:19,attribution:'Imagery © Esri, Maxar, Earthstar Geographics'});
const sat=esri('World_Imagery'),lab=esri('Reference/World_Transportation'),pl=esri('Reference/World_Boundaries_and_Places');
const osm=L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'© OpenStreetMap'});
const satGroup=L.layerGroup([sat,lab,pl]);
const map=L.map('map',{layers:[satGroup],zoomControl:false}).setView([41.8075,-72.2535],16);
L.control.zoom({position:'topright'}).addTo(map);
L.control.layers({'Satellite':satGroup,'Map':osm},null,{position:'topright'}).addTo(map);
// Warn if imagery can't load (e.g. file opened in a sandboxed preview or offline)
let ok=0,bad=0;const warn=document.getElementById('warn');
const show=()=>{if(!ok)warn.hidden=false};
sat.on('tileload',()=>{ok++;warn.hidden=true});sat.on('tileerror',()=>{if(++bad>=3)show()});
setTimeout(show,7000);
const state={q:'',on:{i:1,s:1,r:1}},layer=L.layerGroup().addTo(map),markers={};
const cnt=b=>b[5].length;
function card(b){const by={};b[5].forEach(s=>{const[f,d]=s.split('|');(by[f]=by[f]||[]).push(d)});
 let h=`<h2>${b[1]} (${b[0]})</h2><div class="tag">${T[b[4]].n} · ${cnt(b)} restroom${cnt(b)>1?'s':''}</div>`;
 for(const f in by)h+=`<h3>${f}</h3><ul>${by[f].map(d=>`<li>${d||'<i>Exact spot not listed</i>'}</li>`).join('')}</ul>`;return h}
B.forEach(b=>{const t=T[b[4]];
 markers[b[0]]=L.marker(ll(b[2],b[3]),{title:b[1],icon:L.divIcon({className:'',iconSize:[30,30],html:`<div class="mk${t.d?' dash':''}" style="--c:${t.c}">${cnt(b)}</div>`})}).bindPopup(card(b),{autoPanPadding:[340,40]})});
function draw(){layer.clearLayers();const L2=document.getElementById('list');L2.innerHTML='';const q=state.q.toLowerCase();
 B.filter(b=>state.on[b[4]]&&(!q||(b[0]+' '+b[1]+' '+b[5].join(' ')).toLowerCase().includes(q))).forEach(b=>{
  layer.addLayer(markers[b[0]]);const li=document.createElement('li');
  li.innerHTML=`<button><span><span class="dot" style="--c:${T[b[4]].c}"></span>${b[1]}</span><small>${b[0]} · ${cnt(b)}</small></button>`;
  li.firstChild.onclick=()=>{map.flyTo(markers[b[0]].getLatLng(),18,{duration:.6});markers[b[0]].openPopup()};L2.appendChild(li)});
 if(!L2.children.length)L2.innerHTML='<li style="padding:10px;color:#777">No matches. Clear the search or re-enable a filter.</li>'}
const ch=document.getElementById('chips');
for(const k in T){const b=document.createElement('button');b.className='chip';b.style.setProperty('--c',T[k].c);b.textContent=T[k].n;b.setAttribute('aria-pressed','true');
 b.onclick=()=>{state.on[k]=!state.on[k];b.setAttribute('aria-pressed',state.on[k]);draw()};ch.appendChild(b)}
document.getElementById('q').oninput=e=>{state.q=e.target.value;draw()};
draw();

}