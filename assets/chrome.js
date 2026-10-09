// Shared header, contact strip, and footer. One source for every page.
(function(){
  var M = window.MTC;
  var sms = 'sms:' + M.phoneRaw;
  var here = (location.pathname.split('/').pop() || 'index.html').replace('.html','') || 'index';
  var links = [
    ['index','Home'],
    ['how-it-works','How it works'],
    ['escrow-explained','Escrow, explained'],
    ['pricing','Pricing'],
    ['california','California'],
    ['about','About'],
    ['faq','FAQ']
  ];
  var nav = links.map(function(l){ return '<a href="'+l[0]+'.html"'+(here===l[0]?' class="on" aria-current="page"':'')+'>'+l[1]+'</a>'; }).join('');
  var head = document.createElement('header');
  head.className = 'site-head';
  head.innerHTML = '<div class="topline"><div class="wrap"><span>Text support '+M.hours+'</span><a href="'+sms+'">Text '+M.phone+'</a></div></div>'+
    '<div class="wrap bar">'+
    '<a class="brand" href="index.html" aria-label="My TC Club home"><span class="mark">M</span>My TC Club</a>'+
    '<nav id="site-nav" aria-label="Main">'+nav+'<a class="mob" href="portal.html">Client login</a><a class="mob" href="'+sms+'">Text '+M.phone+'</a></nav>'+
    '<div class="acts"><a class="btn btn-line btn-sm login" href="portal.html">Client login</a>'+(here==='signup'?'':'<a class="btn btn-dark btn-sm" href="signup.html">Sign up</a>')+'</div>'+
    '<button class="menu-btn" aria-label="Menu" aria-expanded="false" aria-controls="site-nav"><span></span><span></span><span></span></button>'+
  '</div>';
  document.body.insertBefore(head, document.body.firstChild);
  var mb = head.querySelector('.menu-btn');
  mb.onclick = function(){ var o = document.body.classList.toggle('menu-open'); mb.setAttribute('aria-expanded', o); };
  var main = head.nextElementSibling;
  while(main && main.classList && (main.classList.contains('demo-bar') || main.classList.contains('draft'))) main = main.nextElementSibling;
  if(main){ main.id = main.id || 'main'; main.setAttribute('tabindex','-1'); }
  var skip = document.createElement('a'); skip.className = 'skip'; skip.href = '#' + (main ? main.id : ''); skip.textContent = 'Skip to content';
  document.body.insertBefore(skip, head);

  // Fill phone, hours and email anywhere a page asks for them.
  document.querySelectorAll('.js-hours').forEach(function(e){ e.textContent = M.hours; });
  document.querySelectorAll('.js-sms').forEach(function(e){ e.href = sms; if(!e.textContent) e.textContent = M.phone; });
  document.querySelectorAll('.js-mail').forEach(function(e){ e.href = 'mailto:' + M.email; if(!e.textContent) e.textContent = M.email; });

  if(document.body.dataset.nofoot) return;

  if(!document.body.dataset.nocontact){
    var strip = document.createElement('section');
    strip.className = 'contact-strip';
    strip.innerHTML = '<div class="wrap"><div><span class="eyebrow">Rather not fill out a form?</span><h2>Just text me.</h2><p class="lead">Text support '+M.hours+'. Texting is the fastest way to reach me. You can even open a file by text.</p></div>'+
      '<div class="cs-btns"><a class="btn btn-dark" href="'+sms+'">Text '+M.phone+'</a><a class="btn btn-line" href="mailto:'+M.email+'">Email me</a><a class="btn btn-line" href="signup.html">Sign up in 2 minutes</a></div></div>';
    document.body.appendChild(strip);
  }

  var foot = document.createElement('footer');
  foot.className = 'site-foot';
  foot.setAttribute('role','contentinfo');
  foot.innerHTML = '<div class="wrap">'+
    '<div class="cols">'+
      '<div><a class="brand" href="index.html"><span class="mark">M</span>My TC Club</a>'+
        '<p style="margin:18px 0 0;max-width:22em">Human-first transaction coordination for California real estate agents. Send the contract. Let go of the rest.</p></div>'+
      '<div><h4>The service</h4><ul><li><a href="how-it-works.html">How it works</a></li><li><a href="pricing.html">Pricing</a></li><li><a href="calculator.html">Hours calculator</a></li><li><a href="california.html">Where I work</a></li></ul></div>'+
      '<div><h4>Free for agents</h4><ul><li><a href="make-it-yours.html">Your branded escrow guide</a></li><li><a href="escrow-explained.html">Escrow, explained</a></li><li><a href="faq.html">FAQ</a></li><li><a href="about.html">About Allison</a></li></ul></div>'+
      '<div><h4>Reach me</h4><ul><li><a href="'+sms+'">Text '+M.phone+'</a></li><li><a href="mailto:'+M.email+'">'+M.email+'</a></li><li>'+M.hours+'</li><li><a href="portal.html">Client login</a></li></ul></div>'+
    '</div>'+
    '<div class="legal"><span>Allison Fulbright · California DRE #'+M.dre+'</span><span class="sig">Prepared by My TC Club</span></div>'+
  '</div>';
  document.body.appendChild(foot);
})();
