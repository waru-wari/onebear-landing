(function(){
  var t=document.getElementById('bill-toggle'); if(!t) return;
  var knob=document.getElementById('bill-knob');
  var mo=document.getElementById('bill-monthly'), yr=document.getElementById('bill-yearly');
  function set(yearly){
    t.setAttribute('aria-checked', yearly ? 'true':'false');
    knob.style.transform = yearly ? 'translateX(20px)' : 'translateX(0)';
    mo.className = 'text-sm font-medium ' + (yearly ? 'text-on-surface-variant' : 'text-on-surface');
    yr.className = 'text-sm font-medium ' + (yearly ? 'text-on-surface' : 'text-on-surface-variant');
    document.querySelectorAll('#pricing [data-m]').forEach(function(el){ el.textContent = yearly ? el.getAttribute('data-y') : el.getAttribute('data-m'); });
  }
  t.addEventListener('click', function(){ set(t.getAttribute('aria-checked') !== 'true'); });
  set(false);
})();
(function(){
  var tl=document.getElementById('feature-tabs'); if(!tl) return;
  var tabs=[].slice.call(tl.querySelectorAll('[role=tab]'));
  function sel(i,focus){ tabs.forEach(function(t,j){ var on=j===i;
    t.setAttribute('aria-selected',on?'true':'false'); t.tabIndex=on?0:-1;
    var p=document.getElementById(t.getAttribute('aria-controls')); if(p) p.hidden=!on;
    if(on&&focus) t.focus(); }); }
  tabs.forEach(function(t,i){
    t.addEventListener('click',function(){ sel(i); });
    t.addEventListener('keydown',function(e){ var n=tabs.length, ni=null, k=e.key;
      if(k==='ArrowRight'||k==='ArrowDown') ni=(i+1)%n;
      else if(k==='ArrowLeft'||k==='ArrowUp') ni=(i-1+n)%n;
      else if(k==='Home') ni=0; else if(k==='End') ni=n-1;
      if(ni!==null){ e.preventDefault(); sel(ni,true); } });
  });
})();

(function(){
  var nav=document.querySelector('nav');
  if(nav){ var onScroll=function(){ nav.classList.toggle('nav-scrolled', window.scrollY>8); }; addEventListener('scroll',onScroll,{passive:true}); onScroll(); }
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var revEls=document.querySelectorAll('[data-reveal]');
  var stagEls=document.querySelectorAll('[data-stagger]');
  if(!('IntersectionObserver' in window)) return;
  revEls.forEach(function(el){ el.classList.add('reveal'); });
  var io=new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} }); }, {threshold:0.15, rootMargin:'0px 0px -6% 0px'});
  revEls.forEach(function(el){ io.observe(el); });
  stagEls.forEach(function(el){ io.observe(el); });
})();

(function(){
  var root=document.getElementById('ai'); if(!root) return;
  var items=[].slice.call(root.querySelectorAll('.ai-item'));
  var panels=[].slice.call(root.querySelectorAll('.ai-panel'));
  var bars=items.map(function(it){return it.querySelector('.ai-bar');});
  var n=items.length, DUR=12000, cur=-1, timer=null, t0=0, remaining=DUR, paused=false;
  function fill(b,ms){ if(!b) return; b.style.transition='none'; b.style.transform='scaleX(0)'; void b.offsetWidth; b.style.transition='transform '+ms+'ms linear'; b.style.transform='scaleX(1)'; }
  function schedule(ms){ clearTimeout(timer); timer=setTimeout(function(){ activate((cur+1)%n); }, ms); }
  function activate(i){
    if(cur>=0 && bars[cur]){ bars[cur].style.transition='none'; bars[cur].style.transform='scaleX(0)'; }
    cur=i; remaining=DUR; t0=Date.now(); paused=false;
    items.forEach(function(it,j){ it.classList.toggle('ai-active', j===i); });
    panels.forEach(function(p,j){ p.classList.toggle('ai-show', j===i); });
    fill(bars[i], DUR); schedule(DUR);
  }
  function pause(){ if(paused||cur<0) return; paused=true; clearTimeout(timer);
    var b=bars[cur]; if(b){ var sx=new DOMMatrixReadOnly(getComputedStyle(b).transform).a; b.style.transition='none'; b.style.transform='scaleX('+sx+')'; remaining=Math.max(0, DUR-(Date.now()-t0)); } }
  function resume(){ if(!paused||cur<0) return; paused=false; t0=Date.now()-(DUR-remaining);
    var b=bars[cur]; if(b){ void b.offsetWidth; b.style.transition='transform '+remaining+'ms linear'; b.style.transform='scaleX(1)'; }
    schedule(remaining); }
  items.forEach(function(it,i){ it.addEventListener('click',function(){ activate(i); }); });
  activate(0);
  // pause ONLY when hovering the currently-active card (others keep running) or its visual
  items.forEach(function(it,i){
    it.addEventListener('mouseenter', function(){ if(i===cur) pause(); });
    it.addEventListener('mouseleave', function(){ if(i===cur) resume(); });
  });
  if(panels[0] && panels[0].parentElement){ var vz=panels[0].parentElement; vz.addEventListener('mouseenter', pause); vz.addEventListener('mouseleave', resume); }
})();

(function(){
  var track = document.getElementById('feat-mob-track');
  var dots = Array.from(document.querySelectorAll('.feat-mob-dot'));
  if(!track || !dots.length) return;

  function setActive(i){
    dots.forEach(function(d,j){
      d.style.background = j===i ? '#41C3A8' : 'rgba(49,57,55,0.18)';
    });
  }
  setActive(0);
  track.addEventListener('scroll', function(){
    var pos = snapPositions();
    var best = 0, bestDist = Infinity;
    pos.forEach(function(p,i){ var d = Math.abs(track.scrollLeft - p); if(d < bestDist){ bestDist = d; best = i; } });
    setActive(best);
  }, {passive:true});
  dots.forEach(function(d,i){
    d.addEventListener('click', function(){
      var pos = snapPositions();
      track.scrollTo({left: pos[i] !== undefined ? pos[i] : 0, behavior:'smooth'});
    });
  });

  // Mouse drag — direction-locked, momentum, snap
  track.style.cursor = 'grab';
  var isDown = false, moved = false, dirLocked = null;
  var startX, startY, scrollStart;
  var rafId = null, velocity = 0, positions = [];

  function snapPositions(){
    return Array.from(track.querySelectorAll('.feat-mob-card')).map(function(c){
      return Math.max(0, c.offsetLeft - track.offsetLeft - 20);
    });
  }

  function snapToNearest(){
    var pos = snapPositions();
    var best = 0, bestDist = Infinity;
    pos.forEach(function(p, i){ var d = Math.abs(track.scrollLeft - p); if(d < bestDist){ bestDist = d; best = i; } });
    track.scrollTo({left: pos[best], behavior: 'smooth'});
    setTimeout(function(){ track.style.scrollSnapType = ''; }, 500);
  }

  function applyMomentum(){
    cancelAnimationFrame(rafId);
    var maxL = track.scrollWidth - track.offsetWidth;
    (function loop(){
      velocity *= 0.92;
      var next = Math.max(0, Math.min(track.scrollLeft + velocity, maxL));
      track.scrollLeft = next;
      if(Math.abs(velocity) > 0.5 && next > 0 && next < maxL){
        rafId = requestAnimationFrame(loop);
      } else {
        velocity = 0;
        snapToNearest();
      }
    })();
  }

  track.addEventListener('mousedown', function(e){
    cancelAnimationFrame(rafId);
    isDown = true; moved = false; dirLocked = null;
    velocity = 0; positions = [];
    startX = e.pageX; startY = e.pageY;
    scrollStart = track.scrollLeft;
    track.style.userSelect = 'none';
  });

  document.addEventListener('mousemove', function(e){
    if(!isDown) return;
    var dx = e.pageX - startX, dy = e.pageY - startY;
    if(!dirLocked){
      if(Math.abs(dx) > Math.abs(dy) + 3){ dirLocked = 'h'; track.style.scrollSnapType = 'none'; track.style.cursor = 'grabbing'; }
      else if(Math.abs(dy) > Math.abs(dx) + 3){ dirLocked = 'v'; isDown = false; track.style.cursor = 'grab'; track.style.userSelect = ''; }
      return;
    }
    if(dirLocked !== 'h') return;
    e.preventDefault();
    if(Math.abs(dx) > 4) moved = true;
    track.scrollLeft = scrollStart - dx;
    var now = Date.now();
    positions.push({x: e.pageX, t: now});
    positions = positions.filter(function(p){ return now - p.t < 80; });
  }, {passive: false});

  document.addEventListener('mouseup', function(){
    if(!isDown) return;
    isDown = false;
    track.style.cursor = 'grab'; track.style.userSelect = '';
    if(dirLocked !== 'h'){ return; }
    if(positions.length >= 2){
      var a = positions[0], b = positions[positions.length - 1];
      var dt = b.t - a.t;
      if(dt > 0) velocity = Math.max(-35, Math.min(35, -(b.x - a.x) / dt * 16));
    }
    if(Math.abs(velocity) > 1.5){ applyMomentum(); } else { snapToNearest(); }
  });

  track.addEventListener('click', function(e){
    if(moved){ e.preventDefault(); e.stopPropagation(); moved = false; }
  }, true);
})();

(function(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var icons=[
    {el:document.getElementById('hsf-ig'),   tx:180,  ty:50},
    {el:document.getElementById('hsf-line'), tx:150,  ty:-40},
    {el:document.getElementById('hsf-fb'),   tx:-180, ty:50}
  ];
  if(!icons[0].el) return;

  // Reveal after page load with spring-bounce stagger
  function reveal(){
    icons.forEach(function(o,i){
      setTimeout(function(){
        o.el.classList.add('hsf-t','hsf-in');
        o.el.addEventListener('transitionend',function(){ o.el.classList.remove('hsf-t'); },{once:true});
      }, 450+i*200);
    });
  }
  if(document.readyState==='complete'){ reveal(); } else { window.addEventListener('load',reveal); }

  // Scroll: drift behind hero with cubic-ease curve
  function easeInCubic(t){ return t*t*t; }
  var band=document.querySelector('.hero-band');
  addEventListener('scroll',function(){
    if(!band) return;
    var t=Math.min(window.scrollY/320,1), e=easeInCubic(t);
    icons.forEach(function(o){
      if(!o.el) return;
      o.el.style.transform='translate('+(o.tx*e)+'px,'+(o.ty*e)+'px) scale('+(1-0.2*e)+')';
      o.el.style.opacity=String(Math.max(0,1-e*1.3));
    });
  },{passive:true});
})();

(function(){
  document.querySelectorAll('.faq-item').forEach(function(el){
    var s=el.querySelector('summary'), b=el.querySelector('div');
    s.style.pointerEvents='none';
    el.addEventListener('click',function(e){
      e.preventDefault();
      if(el.open){
        b.style.height=b.scrollHeight+'px';
        requestAnimationFrame(function(){
          b.style.height='0';
          b.style.opacity='0';
        });
        b.addEventListener('transitionend',function d(ev){ if(ev.propertyName!=='height')return; b.removeEventListener('transitionend',d); el.removeAttribute('open'); b.style.height=''; b.style.opacity=''; });
      } else {
        el.setAttribute('open','');
        var h=b.scrollHeight; b.style.height='0'; b.style.opacity='0';
        requestAnimationFrame(function(){
          b.style.height=h+'px'; b.style.opacity='1';
          b.addEventListener('transitionend',function d(ev){ if(ev.propertyName!=='height')return; b.removeEventListener('transitionend',d); b.style.height=''; });
        });
      }
    });
  });
})();