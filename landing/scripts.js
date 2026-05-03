/* ============================================================
   TECH NOW — LP shared scripts
   - Custom cursor
   - Reveal on scroll
   - Header scroll state
   - Parallax orbs
   ============================================================ */
(function () {
  // ---------- Custom cursor ----------
  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  const ring = document.createElement('div');
  ring.className = 'cursor-ring';
  document.body.appendChild(dot);
  document.body.appendChild(ring);

  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let rx = mx, ry = my;
  window.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
  });
  function ringLoop() {
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
    requestAnimationFrame(ringLoop);
  }
  ringLoop();

  // hover effect on interactive
  const hoverables = 'a, button, .card, .interactive, [data-hover]';
  document.querySelectorAll(hoverables).forEach(el => {
    el.addEventListener('mouseenter', () => { dot.classList.add('hover'); ring.classList.add('hover'); });
    el.addEventListener('mouseleave', () => { dot.classList.remove('hover'); ring.classList.remove('hover'); });
  });

  // ---------- Header scroll state ----------
  const header = document.querySelector('.tn-header');
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 8) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---------- Reveal on scroll ----------
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => io.observe(el));

  // ---------- Parallax orbs ----------
  const orbs = document.querySelectorAll('[data-parallax]');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    orbs.forEach(o => {
      const speed = parseFloat(o.dataset.parallax) || 0.2;
      o.style.transform = `translate3d(0, ${y * speed}px, 0)`;
    });
  }, { passive: true });

  // ---------- Magnetic buttons ----------
  document.querySelectorAll('[data-magnetic]').forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${x * 0.18}px, ${y * 0.25}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });

  // ---------- Tilt cards ----------
  document.querySelectorAll('[data-tilt]').forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateX(${-py * 6}deg) rotateY(${px * 8}deg) translateY(-4px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });

  // ---------- Word-by-word headline reveal ----------
  document.querySelectorAll('[data-split]').forEach(el => {
    const text = el.innerHTML;
    // split only top-level text/em — keep <em> intact
    const wrap = document.createElement('span');
    wrap.innerHTML = text;
    const out = [];
    wrap.childNodes.forEach(node => {
      if (node.nodeType === 3) {
        node.textContent.split(/(\s+)/).forEach(w => {
          if (w.trim() === '') { out.push(w); }
          else out.push(`<span class="word">${w}</span>`);
        });
      } else {
        // wrap whole element as a single word group
        out.push(`<span class="word">${node.outerHTML}</span>`);
      }
    });
    el.innerHTML = out.join('');
    el.querySelectorAll('.word').forEach((w, i) => {
      w.style.display = 'inline-block';
      w.style.opacity = '0';
      w.style.transform = 'translateY(30px)';
      w.style.transition = `opacity .8s cubic-bezier(.2,.8,.2,1) ${i * 0.06}s, transform .8s cubic-bezier(.2,.8,.2,1) ${i * 0.06}s`;
    });
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.querySelectorAll('.word').forEach(w => {
          w.style.opacity = '1';
          w.style.transform = 'translateY(0)';
        });
      });
    });
  });

  // ---------- Counters ----------
  const counterIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      const dur = parseInt(el.dataset.dur) || 1400;
      const start = performance.now();
      function step(now) {
        const t = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - t, 3);
        const v = target * eased;
        const display = target % 1 === 0 ? Math.round(v) : v.toFixed(1);
        el.textContent = prefix + display + suffix;
        if (t < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      counterIO.unobserve(el);
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('[data-count]').forEach(el => counterIO.observe(el));
})();
