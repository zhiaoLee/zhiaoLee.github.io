(function () {
  var root = document.querySelector('.home-page');
  if (!root) return;

  function typeLoop(el, texts, hold) {
    if (!el || !texts || !texts.length) return;
    var i = 0, ch = 0, deleting = false;
    function tick() {
      var text = texts[i];
      if (!deleting) {
        ch++;
        el.textContent = text.slice(0, ch);
        if (ch === text.length) {
          deleting = true;
          setTimeout(tick, hold);
          return;
        }
        setTimeout(tick, 90 + Math.random() * 60);
      } else {
        ch--;
        el.textContent = text.slice(0, ch);
        if (ch === 0) {
          deleting = false;
          i = (i + 1) % texts.length;
          setTimeout(tick, 350);
          return;
        }
        setTimeout(tick, 40);
      }
    }
    tick();
  }

  var role = document.getElementById('hp-role');
  if (role) {
    try { typeLoop(role, JSON.parse(role.dataset.roles || '[]'), 2200); } catch (e) {}
  }
  var caption = document.getElementById('hp-caption');
  if (caption) {
    try { typeLoop(caption, JSON.parse(caption.dataset.captions || '[]'), 3000); } catch (e) {}
  }

  var cards = root.querySelectorAll('.hp-card');
  if ('IntersectionObserver' in window && cards.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    cards.forEach(function (card, idx) {
      card.style.transitionDelay = (idx % 3) * 0.08 + 's';
      io.observe(card);
    });
  } else {
    cards.forEach(function (card) { card.classList.add('show'); });
  }

  cards.forEach(function (card) {
    card.addEventListener('mousemove', function (ev) {
      var rect = card.getBoundingClientRect();
      card.style.setProperty('--sx', ((ev.clientX - rect.left) / rect.width * 100).toFixed(1) + '%');
      card.style.setProperty('--sy', ((ev.clientY - rect.top) / rect.height * 100).toFixed(1) + '%');
    });
  });

  var canvas = document.getElementById('home-particles');
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext('2d');
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = 0, h = 0, particles = [], running = true;
    var COUNT = 64, LINK = 120;

    function resize() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function init() {
      particles = [];
      for (var i = 0; i < COUNT; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: Math.random() * 1.6 + 0.4
        });
      }
    }

    function frame() {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 229, 255, 0.5)';
        ctx.fill();
      }
      for (var a = 0; a < particles.length; a++) {
        for (var b = a + 1; b < particles.length; b++) {
          var dx = particles[a].x - particles[b].x;
          var dy = particles[a].y - particles[b].y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK) {
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.strokeStyle = 'rgba(0, 229, 255, ' + (0.14 * (1 - dist / LINK)).toFixed(3) + ')';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(frame);
    }

    resize();
    init();
    frame();

    var resizeTimer = null;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () { resize(); init(); }, 200);
    });
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        running = false;
      } else if (!running) {
        running = true;
        frame();
      }
    });
  }
})();
