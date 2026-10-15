/* ==========================================================================
   Longèva · Interações
   GSAP + ScrollTrigger para animações, Lenis para scroll suave.
   ========================================================================== */

/* --------------------------------------------------------------------------
   Avaliações do Google
   Preencha `text` com o depoimento exato do Google. Enquanto estiver vazio,
   o card mostra apenas o tema da avaliação (sem aspas, para não criar citação).
   -------------------------------------------------------------------------- */
const REVIEWS = [
  {
    name: 'Karina Vieira',
    topic: 'Reabilitação completa após lesão e cirurgia de joelho, com atendimento individualizado do Dr. Pedro e da Dra. Lívia.',
    text: '',
    featured: true,
  },
  {
    name: 'Rejane Russo',
    topic: 'Musculação Terapêutica, estrutura e equipe de atendimento.',
    text: '',
  },
  {
    name: 'Leilinha Beuttenmüller',
    topic: 'Acolhimento, competência e aparelhos de última geração.',
    text: '',
  },
  {
    name: 'Thais Pereira',
    topic: 'Faz Pilates com a Letícia há mais de um ano, junto com o marido.',
    text: '',
  },
  {
    name: 'Glória Crisostomo',
    topic: 'Indica a Longèva para os amigos.',
    text: '',
  },
];

/* Nota média e total de avaliações no Google. Deixe null enquanto não confirmar. */
const GOOGLE_SUMMARY = { rating: null, total: null, url: null };

(() => {
  'use strict';

  document.documentElement.classList.remove('no-js');

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;
  const hasGSAP = typeof window.gsap !== 'undefined';
  const hasLenis = typeof window.Lenis !== 'undefined';
  const NAV_OFFSET = -96;

  /* ---------- Ano no rodapé ---------- */
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Avaliações ---------- */
  renderReviews();

  function renderReviews() {
    const wrap = document.querySelector('[data-reviews]');
    if (!wrap) return;

    const star = '<svg aria-hidden="true"><use href="#i-star"/></svg>';
    const stars = `<div class="stars" aria-label="5 estrelas">${star.repeat(5)}</div>`;

    const cards = REVIEWS.map((r) => {
      const initial = r.name.trim().charAt(0).toUpperCase();
      const body = r.text
        ? `<span class="review__quote-mark" aria-hidden="true">“</span><p class="review__text">${escapeHTML(r.text)}</p>`
        : `<p class="review__topic">${escapeHTML(r.topic)}</p>`;

      return `
        <article class="review glass${r.featured ? ' review--featured' : ''}">
          ${body}
          <footer class="review__footer">
            <div class="review__author">
              <span class="review__avatar" aria-hidden="true">${initial}</span>
              <div>
                <p class="review__name">${escapeHTML(r.name)}</p>
                <p class="review__source">Avaliação no Google</p>
              </div>
            </div>
            ${stars}
          </footer>
        </article>`;
    });

    if (GOOGLE_SUMMARY.rating && GOOGLE_SUMMARY.total) {
      const link = GOOGLE_SUMMARY.url
        ? `<a class="btn btn--violet btn--sm" href="${GOOGLE_SUMMARY.url}" target="_blank" rel="noopener">Ver no Google</a>`
        : '';
      cards.push(`
        <div class="reviews__summary glass">
          <div><strong>${GOOGLE_SUMMARY.rating}</strong> de 5 no Google · ${GOOGLE_SUMMARY.total} avaliações</div>
          ${link}
        </div>`);
    }

    wrap.innerHTML = cards.join('');
  }

  function escapeHTML(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  /* ---------- Vidro líquido: reflexo acompanha o cursor ---------- */
  if (finePointer) {
    let raf = 0;
    let lastEvent = null;
    document.addEventListener('pointermove', (e) => {
      lastEvent = e;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const el = lastEvent.target.closest && lastEvent.target.closest('.glass');
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty('--mx', `${lastEvent.clientX - r.left}px`);
        el.style.setProperty('--my', `${lastEvent.clientY - r.top}px`);
      });
    }, { passive: true });
  }

  /* ---------- Scroll suave (Lenis) ---------- */
  let lenis = null;
  if (hasLenis && !prefersReducedMotion) {
    lenis = new Lenis({ lerp: 0.1, smoothWheel: true });

    if (hasGSAP && window.ScrollTrigger) {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    } else {
      const loop = (time) => { lenis.raf(time); requestAnimationFrame(loop); };
      requestAnimationFrame(loop);
    }
  }

  /* ---------- Menu mobile ---------- */
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');

  function openMenu() {
    menu.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Fechar menu');
    if (hasGSAP && !prefersReducedMotion) {
      gsap.fromTo(menu, { autoAlpha: 0, y: -12 }, { autoAlpha: 1, y: 0, duration: 0.35, ease: 'power3.out' });
      gsap.fromTo(menu.children, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.04, ease: 'power3.out', delay: 0.05 });
    }
  }
  function closeMenu() {
    if (!toggle || toggle.getAttribute('aria-expanded') !== 'true') return;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
    menu.hidden = true;
  }
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      toggle.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu();
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
    window.addEventListener('resize', () => { if (window.innerWidth > 960) closeMenu(); });
  }

  /* ---------- Links âncora via Lenis, com compensação da navbar ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      closeMenu();
      if (lenis) {
        lenis.scrollTo(target, { offset: NAV_OFFSET, duration: 1.4 });
      } else {
        const y = target.getBoundingClientRect().top + window.scrollY + NAV_OFFSET;
        window.scrollTo({ top: y, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      }
      history.replaceState(null, '', id);
    });
  });

  /* ---------- Navbar: fixa sempre; ao rolar encaixa no topo e afina ---------- */
  const nav = document.querySelector('[data-nav]');
  const updateNav = () => { if (nav) nav.classList.toggle('is-scrolled', window.scrollY > 24); };
  window.addEventListener('scroll', updateNav, { passive: true });
  if (lenis) lenis.on('scroll', updateNav);
  updateNav();

  /* ---------- Dúvidas (accordion) ---------- */
  const faqButtons = document.querySelectorAll('[data-faq] button[aria-controls]');
  faqButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      faqButtons.forEach((other) => { if (other !== btn) setFaq(other, false); });
      setFaq(btn, !isOpen);
    });
  });

  function setFaq(btn, open) {
    const panel = document.getElementById(btn.getAttribute('aria-controls'));
    if (!panel) return;
    if ((btn.getAttribute('aria-expanded') === 'true') === open) return;
    btn.setAttribute('aria-expanded', String(open));

    const done = () => { if (window.ScrollTrigger) ScrollTrigger.refresh(); };
    if (hasGSAP && !prefersReducedMotion) {
      gsap.to(panel, { height: open ? 'auto' : 0, duration: 0.45, ease: 'power3.inOut', onComplete: done });
    } else {
      panel.style.height = open ? 'auto' : '0px';
      done();
    }
  }

  /* ==========================================================================
     Animações
     ========================================================================== */
  if (!hasGSAP || prefersReducedMotion) return;

  gsap.registerPlugin(ScrollTrigger);

  /* Quebra um elemento em palavras, preservando <em> e outros filhos */
  function splitWords(el, innerClass) {
    const words = [];
    const walk = (node) => {
      Array.from(node.childNodes).forEach((child) => {
        if (child.nodeType === Node.TEXT_NODE) {
          const frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
            const outer = document.createElement('span');
            outer.className = 'word';
            if (innerClass) {
              const inner = document.createElement('span');
              inner.className = innerClass;
              inner.textContent = part;
              outer.appendChild(inner);
              words.push(inner);
            } else {
              outer.textContent = part;
              words.push(outer);
            }
            frag.appendChild(outer);
          });
          child.replaceWith(frag);
        } else if (child.nodeType === Node.ELEMENT_NODE) {
          walk(child);
        }
      });
    };
    walk(el);
    return words;
  }

  function prepDraw(path) {
    const len = path.getTotalLength();
    gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
  }

  /* Luzes de fundo: deriva lenta contínua */
  gsap.utils.toArray('.ambient__blob').forEach((blob, i) => {
    gsap.to(blob, {
      x: gsap.utils.random(-80, 80), y: gsap.utils.random(-60, 60), scale: gsap.utils.random(0.9, 1.15),
      duration: 10 + i * 3, ease: 'sine.inOut', repeat: -1, yoyo: true,
    });
  });

  /* Hero: entrada */
  const heroTitle = document.querySelector('[data-hero-title]');
  const heroWords = heroTitle ? splitWords(heroTitle, 'word__inner') : [];
  if (heroTitle) heroTitle.classList.add('is-split');
  const heroPath = document.querySelector('.hero__scribble [data-draw]');
  const heroHelena = document.querySelector('.helena--hero');

  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
  tl.from('.nav', { y: -24, autoAlpha: 0, duration: 0.8 }, 0.1)
    .from(heroWords, { yPercent: 110, duration: 1, stagger: 0.035 }, 0.2)
    .from('[data-hero-item]', { y: 24, autoAlpha: 0, duration: 0.8, stagger: 0.08 }, 0.55)
    .from('.hero__photo', { clipPath: 'inset(12% 0% 12% 30% round 34px)', scale: 1.06, autoAlpha: 0, duration: 1.4, ease: 'expo.out' }, 0.3)
    .from('.hero__float', { y: 20, autoAlpha: 0, scale: 0.92, duration: 0.8, stagger: 0.12, ease: 'back.out(1.6)' }, 0.95);

  if (heroHelena) {
    tl.from(heroHelena.querySelector('img'), { y: 80, autoAlpha: 0, duration: 1.1, ease: 'expo.out' }, 0.7)
      .from(heroHelena.querySelector('.speech'), { scale: 0.5, autoAlpha: 0, transformOrigin: '0% 100%', duration: 0.7, ease: 'back.out(2)' }, 1.4)
      .add(() => breathe(heroHelena.querySelector('img')));
  }
  if (heroPath) {
    prepDraw(heroPath);
    tl.to(heroPath, { strokeDashoffset: 0, duration: 2.2, ease: 'power2.inOut' }, 0.4);
  }

  /* Hero: parallax suave em camadas ao rolar */
  const heroScroll = { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true };
  gsap.to('.hero__photo img', { yPercent: 8, scale: 1.06, ease: 'none', scrollTrigger: heroScroll });
  gsap.to('.helena--hero', { y: -60, ease: 'none', scrollTrigger: heroScroll });
  gsap.to('.hero__float--top', { y: -90, ease: 'none', scrollTrigger: heroScroll });
  gsap.to('.hero__float--bottom', { y: -40, ease: 'none', scrollTrigger: heroScroll });

  /* Flutuação contínua dos cartões de vidro */
  gsap.utils.toArray('[data-float]').forEach((el, i) => {
    gsap.to(el, { y: '+=8', duration: 2.6 + i * 0.4, ease: 'sine.inOut', repeat: -1, yoyo: true, delay: 1.6 });
  });

  /* Dona Helena nas seções: entra, balão aparece e fica respirando */
  gsap.utils.toArray('[data-helena]').forEach((fig) => {
    if (fig === heroHelena) return;
    const img = fig.querySelector('img');
    const speech = fig.querySelector('.speech');
    const t = gsap.timeline({ scrollTrigger: { trigger: fig, start: 'top 85%', once: true }, onComplete: () => breathe(img) });
    t.from(img, { y: 70, autoAlpha: 0, rotate: -3, duration: 1, ease: 'expo.out' });
    if (speech) t.from(speech, { scale: 0.5, autoAlpha: 0, duration: 0.6, ease: 'back.out(2)' }, '-=0.45');
  });

  function breathe(img) {
    if (img) gsap.to(img, { y: -8, duration: gsap.utils.random(2.6, 3.4), ease: 'sine.inOut', repeat: -1, yoyo: true });
  }

  /* Blocos com revelação simples */
  gsap.utils.toArray('[data-reveal]').forEach((el) => {
    gsap.from(el, {
      y: 32, autoAlpha: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    });
  });

  /* Grupos com stagger */
  gsap.utils.toArray('[data-stagger]').forEach((group) => {
    if (!group.children.length) return;
    gsap.from(group.children, {
      y: 40, autoAlpha: 0, duration: 0.9, ease: 'power3.out', stagger: 0.08,
      scrollTrigger: { trigger: group, start: 'top 85%', once: true },
    });
  });

  /* Musculação: fotos em camadas com profundidade */
  if (document.querySelector('.gym__visual')) {
    const gymScroll = { trigger: '.gym', start: 'top bottom', end: 'bottom top', scrub: true };
    gsap.fromTo('.gym__photo--main img', { yPercent: -6, scale: 1.12 }, { yPercent: 6, ease: 'none', scrollTrigger: gymScroll });
    gsap.fromTo('.gym__photo--side', { y: 40 }, { y: -40, ease: 'none', scrollTrigger: gymScroll });
    gsap.fromTo('.gym__orb--a', { x: -40 }, { x: 60, ease: 'none', scrollTrigger: gymScroll });
  }

  /* Manifesto: palavras acendem conforme o scroll */
  const manifesto = document.querySelector('[data-split]');
  if (manifesto) {
    const words = splitWords(manifesto);
    gsap.fromTo(words, { opacity: 0.15 }, {
      opacity: 1, ease: 'none', stagger: 0.05,
      scrollTrigger: { trigger: manifesto, start: 'top 80%', end: 'bottom 45%', scrub: true },
    });
  }

  /* Jornada: passos entram em sequência e os números saltam */
  const steps = document.querySelector('[data-steps]');
  if (steps) {
    const t = gsap.timeline({ scrollTrigger: { trigger: steps, start: 'top 80%', once: true } });
    t.from(steps.querySelectorAll('.step'), { y: 30, autoAlpha: 0, duration: 0.8, ease: 'power3.out', stagger: 0.12 })
      .from(steps.querySelectorAll('.step__num'), { scale: 0.4, duration: 0.7, ease: 'back.out(2)', stagger: 0.12 }, 0.1);
  }

  /* Galeria: parallax sutil dentro de cada moldura */
  gsap.utils.toArray('.gallery__item img').forEach((img) => {
    gsap.fromTo(img, { yPercent: -6, scale: 1.12 }, {
      yPercent: 6, ease: 'none',
      scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });

  /* CTA final: traço desenhado no scroll */
  const ctaPath = document.querySelector('.cta__scribble [data-draw]');
  if (ctaPath) {
    prepDraw(ctaPath);
    gsap.to(ctaPath, {
      strokeDashoffset: 0, ease: 'none',
      scrollTrigger: { trigger: '.cta', start: 'top 85%', end: 'center 50%', scrub: true },
    });
  }

  /* Botão flutuante do WhatsApp entra depois do hero */
  gsap.from('.wa-float', {
    scale: 0, autoAlpha: 0, duration: 0.6, ease: 'back.out(2)',
    scrollTrigger: { trigger: '#para-quem-cuida', start: 'top 90%', once: true },
  });

  /* Recalcula posições após carregar imagens e fontes */
  window.addEventListener('load', () => ScrollTrigger.refresh());
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => ScrollTrigger.refresh());
})();
