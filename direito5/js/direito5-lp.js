// Direito 5.0 LP — page interactions
(function(){
  'use strict';

  // === Sympla CTA click tracking (GTM dataLayer) ===
  window.dataLayer = window.dataLayer || [];
  document.addEventListener('click', function(ev){
    const link = ev.target.closest('a.js-cta-sympla');
    if (!link) return;
    window.dataLayer.push({
      event: 'click_inscricao_sympla',
      cta_position: link.dataset.ctaPosition || 'unknown',
      cta_url: link.href
    });
  }, true);

  // === Topbar shadow on scroll ===
  const bar = document.getElementById('bar');
  if (bar) {
    const onScroll = () => {
      if (window.scrollY > 20) bar.classList.add('is-stuck');
      else bar.classList.remove('is-stuck');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // === Reveal on scroll ===
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    });
  }, { threshold: .12, rootMargin: '0px 0px -10% 0px' });
  document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => io.observe(el));

  // === Program rail fill ===
  const program = document.getElementById('program');
  const rail = program ? program.querySelector('.program__rail') : null;
  if (program && rail) {
    const update = () => {
      const r = program.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = r.height;
      const start = -r.top + vh * .3;
      const pct = Math.max(0, Math.min(1, start / total));
      rail.style.setProperty('--rail', (pct * 100) + '%');
    };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  // === Duplicate ticker for seamless loop ===
  const ticker = document.getElementById('ticker');
  if (ticker) {
    ticker.innerHTML += ticker.innerHTML;
  }

  // === HERO connections canvas (subtle network grid) ===
  const cnv = document.getElementById('net');
  if (cnv && cnv.getContext) {
    const ctx = cnv.getContext('2d');
    let w = 0, h = 0, dpr = window.devicePixelRatio || 1;
    let nodes = [];
    const N = 60;

    function resize() {
      const r = cnv.parentElement.getBoundingClientRect();
      w = r.width; h = r.height;
      cnv.width = w * dpr; cnv.height = h * dpr;
      cnv.style.width = w + 'px'; cnv.style.height = h + 'px';
      ctx.setTransform(dpr,0,0,dpr,0,0);
      seed();
    }
    function seed() {
      nodes = [];
      for (let i = 0; i < N; i++) {
        nodes.push({
          x: Math.random()*w, y: Math.random()*h,
          vx: (Math.random()-.5)*.3, vy: (Math.random()-.5)*.3,
          r: Math.random()*1.5 + .5
        });
      }
    }
    function tick() {
      ctx.clearRect(0,0,w,h);
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }
      // links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i+1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx*dx + dy*dy;
          if (d2 < 24000) {
            const alpha = 1 - d2 / 24000;
            ctx.strokeStyle = `rgba(10,136,244,${alpha * .25})`;
            ctx.lineWidth = .6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      // dots
      for (const n of nodes) {
        ctx.fillStyle = 'rgba(232,184,106,.55)';
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI*2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    }
    let raf;
    window.addEventListener('resize', resize);
    resize();
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) tick();
  }
})();
