/* Tork Car Center — interações */

// ====== Dados de contato: ajuste aqui e o site inteiro atualiza ======
const TORK = {
  whatsapp: '5547988249993',              // DDI + DDD + número, só dígitos
  phoneDisplay: '(47) 98824-9993',
  address: ['R. São Paulo, 4619 — Petrópolis', 'Joinville/SC · CEP 89208-545'], // uma linha por item
  mapsQuery: 'Tork Car Center, R. São Paulo, 4619 - Petrópolis, Joinville - SC, 89208-545', // texto buscado no Google Maps
  instagram: 'https://www.instagram.com/torkcarcenter/',
};

// ====== Galeria: a ordem aqui é a ordem no site ======
// Foto:          { src, title, cat, size }
// Antes/depois:  { before, after, title, cat: 'antes-depois', size: 'big' }
// cat:  'antes-depois' | 'servicos' | 'oficina'
// size: 'big' (2x2) | 'wide' (2x1) | 'tall' (1x2) | omitido (1x1)
const GALLERY = [
  { before: 'assets/img/audi-antes.jpg', after: 'assets/img/audi-depois.jpg', title: 'Polimento e espelhamento', cat: 'antes-depois', size: 'big' },
  // { before: 'assets/img/polimento2-antes.jpg', after: 'assets/img/polimento2-depois.jpg', title: 'Polimento', cat: 'antes-depois', size: 'big' },
  { src: 'assets/img/galeria-oficina.jpg', title: 'Boxes de serviço', cat: 'oficina', size: 'wide' },
  { src: 'assets/img/galeria-freio.jpg', title: 'Freios', cat: 'servicos' },
  { src: 'assets/img/galeria-roda.jpg', title: 'Rodas e pneus', cat: 'servicos' },
  { src: 'assets/img/galeria-ferramentas.jpg', title: 'Ferramental', cat: 'oficina', size: 'tall' },
  { src: 'assets/img/galeria-motor.jpg', title: 'Limpeza de motor', cat: 'servicos', size: 'wide' },
  { src: 'assets/img/galeria-lavagem.jpg', title: 'Lavagem detalhada', cat: 'servicos', size: 'tall' },
  { src: 'assets/img/estetica.jpg', title: 'Polimento', cat: 'servicos' },
  { src: 'assets/img/mecanica.jpg', title: 'Mecânica', cat: 'servicos' },
  { src: 'assets/img/galeria-recepcao.jpg', title: 'Recepção', cat: 'oficina', size: 'wide' },
  { src: 'assets/img/ar-condicionado.jpg', title: 'Ar-condicionado', cat: 'servicos' },
  { src: 'assets/img/eletrica.jpg', title: 'Diagnóstico elétrico', cat: 'servicos' },
  { src: 'assets/img/galeria-interior.jpg', title: 'Interior higienizado', cat: 'servicos', size: 'wide' },
  { src: 'assets/img/hero.jpg', title: 'Elevadores', cat: 'oficina', size: 'wide' },
];
// Itens visíveis em "Todos" antes de "Ver todas as fotos".
// Com 1 antes/depois use 4; com 2 antes/depois use 5 (fecha a grade sem buracos).
const GALLERY_INITIAL = 4;

document.documentElement.classList.add('js');

const waLink = (text) =>
  `https://wa.me/${TORK.whatsapp}?text=${encodeURIComponent(text)}`;

// Links de WhatsApp, telefone, endereço, mapa e Instagram
document.querySelectorAll('[data-whatsapp]').forEach((a) => {
  a.href = waLink(a.dataset.whatsapp);
  a.target = '_blank';
  a.rel = 'noopener';
});
document.querySelectorAll('[data-phone-link]').forEach((a) => {
  a.href = `tel:+${TORK.whatsapp}`;
});
document.querySelectorAll('[data-phone-text]').forEach((el) => {
  el.textContent = TORK.phoneDisplay;
});
document.querySelectorAll('[data-address]').forEach((el) => {
  el.replaceChildren(...TORK.address.flatMap((line, i) => (i ? [document.createElement('br'), line] : [line])));
});
document.querySelectorAll('[data-maps]').forEach((a) => {
  a.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(TORK.mapsQuery)}`;
});
document.querySelectorAll('[data-instagram]').forEach((a) => {
  a.href = TORK.instagram;
  a.target = '_blank';
  a.rel = 'noopener';
});
document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// Nav: fundo ao rolar + botão flutuante depois do hero
const nav = document.querySelector('[data-nav]');
const waFloat = document.querySelector('[data-wa-float]');
const hero = document.querySelector('.hero');

const onScroll = () => {
  nav.classList.toggle('is-scrolled', window.scrollY > 40);
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

if (hero && waFloat) {
  new IntersectionObserver(([entry]) => {
    waFloat.classList.toggle('is-visible', !entry.isIntersecting);
  }, { threshold: 0.15 }).observe(hero);
}

// Menu mobile
const menu = document.querySelector('[data-menu]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const menuClose = document.querySelector('[data-menu-close]');

const setMenu = (open) => {
  menu.hidden = !open;
  menuToggle.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
  (open ? menuClose : menuToggle).focus();
};
menuToggle.addEventListener('click', () => setMenu(true));
menuClose.addEventListener('click', () => setMenu(false));
menu.addEventListener('click', (e) => {
  if (e.target.closest('a')) setMenu(false);
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !menu.hidden) setMenu(false);
});

// Entrada das seções e Linha do Horizonte acendendo
const revealer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-in');
    revealer.unobserve(entry.target);
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .horizon').forEach((el, i) => {
  // pequeno escalonamento entre irmãos (cards, passos, números)
  const siblings = el.parentElement ? [...el.parentElement.children].filter((c) => c.classList.contains('reveal')) : [];
  const idx = siblings.indexOf(el);
  if (idx > 0) el.style.transitionDelay = `${Math.min(idx, 4) * 80}ms`;
  revealer.observe(el);
});

// ====== Galeria ======
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const galleryEl = document.querySelector('[data-gallery]');
const moreWrap = document.querySelector('[data-gallery-more-wrap]');
const moreBtn = document.querySelector('[data-gallery-more]');
const moreLabel = document.querySelector('[data-gallery-more-label]');
const filterBtns = document.querySelectorAll('[data-filter]');
const arrowIcon = '<svg class="icon" aria-hidden="true"><use href="#i-arrow"/></svg>';

const tileClass = (item) => `tile${item.size ? ` tile--${item.size}` : ''}`;

const compareMarkup = (item) => `
  <div class="compare" data-compare>
    <img src="${item.after}" alt="${item.title}: depois" loading="lazy" draggable="false">
    <img class="compare__before" src="${item.before}" alt="${item.title}: antes" loading="lazy" draggable="false">
    <span class="compare__tag compare__tag--before" data-tag-before>Antes</span>
    <span class="compare__tag compare__tag--after" data-tag-after>Depois</span>
    <span class="compare__line" aria-hidden="true"></span>
    <span class="compare__handle" role="slider" tabindex="0" aria-label="Comparar antes e depois: ${item.title}"
      aria-valuemin="0" aria-valuemax="100" aria-valuenow="50">${arrowIcon}${arrowIcon}</span>
    <span class="compare__badge">${item.title}</span>
    <span class="compare__hint">Arraste</span>
  </div>`;

const photoMarkup = (item, i) => `
  <button class="tile__open" type="button" data-lb-open="${i}" aria-label="Ampliar foto: ${item.title}">
    <img src="${item.src}" alt="${item.title}" loading="lazy">
    <span class="tile__caption">${item.title}</span>
  </button>`;

galleryEl.innerHTML = GALLERY.map((item, i) => `
  <figure class="${tileClass(item)}" data-cat="${item.cat}" data-index="${i}">
    ${item.before ? compareMarkup(item) : photoMarkup(item, i)}
  </figure>`).join('');

const tiles = [...galleryEl.children];
let currentFilter = 'todos';
let expanded = false;

const visibleInFilter = (tile) => currentFilter === 'todos' || tile.dataset.cat === currentFilter;

const renderGallery = () => {
  let shown = 0;
  tiles.forEach((tile) => {
    const inFilter = visibleInFilter(tile);
    const limited = currentFilter === 'todos' && !expanded && shown >= GALLERY_INITIAL;
    tile.hidden = !inFilter || limited;
    if (!tile.hidden) shown += 1;
  });
  const hasMore = currentFilter === 'todos' && tiles.length > GALLERY_INITIAL;
  moreWrap.hidden = !hasMore;
  moreLabel.textContent = expanded ? 'Mostrar menos' : `Ver todas as fotos (${tiles.length})`;
};

filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    currentFilter = btn.dataset.filter;
    filterBtns.forEach((b) => b.setAttribute('aria-selected', String(b === btn)));
    renderGallery();
  });
});

moreBtn.addEventListener('click', () => {
  expanded = !expanded;
  renderGallery();
  if (!expanded) galleryEl.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
});

renderGallery();

// Slider antes/depois: arrastar com mouse/dedo ou setas do teclado
const initCompare = (el) => {
  const handle = el.querySelector('.compare__handle');
  const tagBefore = el.querySelector('[data-tag-before]');
  const tagAfter = el.querySelector('[data-tag-after]');
  let dragging = false;

  const setPos = (pct) => {
    const p = Math.max(0, Math.min(100, pct));
    el.style.setProperty('--pos', `${p}%`);
    handle.setAttribute('aria-valuenow', String(Math.round(p)));
    tagBefore.style.opacity = p < 18 ? 0 : 1;
    tagAfter.style.opacity = p > 82 ? 0 : 1;
  };
  const fromEvent = (e) => {
    const r = el.getBoundingClientRect();
    setPos(((e.clientX - r.left) / r.width) * 100);
  };

  el.addEventListener('pointerdown', (e) => {
    if (e.button !== 0) return;
    dragging = true;
    el.classList.add('is-dragging', 'is-touched');
    el.setPointerCapture(e.pointerId);
    if (e.pointerType === 'mouse') fromEvent(e);
  });
  el.addEventListener('pointermove', (e) => { if (dragging) fromEvent(e); });
  const stop = () => { dragging = false; el.classList.remove('is-dragging'); };
  el.addEventListener('pointerup', stop);
  el.addEventListener('pointercancel', stop);

  handle.addEventListener('keydown', (e) => {
    const now = Number(handle.getAttribute('aria-valuenow'));
    const step = e.shiftKey ? 10 : 4;
    const keys = { ArrowLeft: now - step, ArrowRight: now + step, Home: 0, End: 100 };
    if (!(e.key in keys)) return;
    e.preventDefault();
    el.classList.add('is-touched');
    setPos(keys[e.key]);
  });

  setPos(50);

  // Dica de movimento na primeira vez que aparece na tela
  if (!reduceMotion) {
    new IntersectionObserver(([entry], obs) => {
      if (!entry.isIntersecting) return;
      obs.disconnect();
      el.classList.add('is-hinting');
      const frames = [[0, 34], [550, 64], [1100, 50]];
      frames.forEach(([t, p]) => setTimeout(() => {
        if (!el.classList.contains('is-touched')) setPos(p);
      }, t + 300));
      setTimeout(() => el.classList.remove('is-hinting'), 1950);
    }, { threshold: 0.6 }).observe(el);
  }
};
document.querySelectorAll('[data-compare]').forEach(initCompare);

// Lightbox (só fotos, respeitando o filtro atual)
const lb = document.querySelector('[data-lightbox]');
const lbStage = lb.querySelector('[data-lb-stage]');
const lbCaption = lb.querySelector('[data-lb-caption]');
const lbCount = lb.querySelector('[data-lb-count]');
let lbList = [];
let lbPos = 0;
let lbReturnFocus = null;

const lbShow = (pos) => {
  lbPos = (pos + lbList.length) % lbList.length;
  const item = GALLERY[lbList[lbPos]];
  lbStage.innerHTML = `<img src="${item.src}" alt="${item.title}">`;
  lbCaption.textContent = item.title;
  lbCount.textContent = `${String(lbPos + 1).padStart(2, '0')} / ${String(lbList.length).padStart(2, '0')}`;
};
const lbOpen = (index) => {
  lbList = tiles
    .filter((t) => visibleInFilter(t) && !GALLERY[t.dataset.index].before)
    .map((t) => Number(t.dataset.index));
  lbReturnFocus = document.activeElement;
  lb.hidden = false;
  document.body.style.overflow = 'hidden';
  lbShow(lbList.indexOf(index));
  lb.querySelector('[data-lb-close]').focus();
};
const lbClose = () => {
  lb.hidden = true;
  document.body.style.overflow = '';
  if (lbReturnFocus) lbReturnFocus.focus();
};

galleryEl.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-lb-open]');
  if (btn) lbOpen(Number(btn.dataset.lbOpen));
});
lb.querySelector('[data-lb-close]').addEventListener('click', lbClose);
lb.querySelector('[data-lb-prev]').addEventListener('click', () => lbShow(lbPos - 1));
lb.querySelector('[data-lb-next]').addEventListener('click', () => lbShow(lbPos + 1));
lb.addEventListener('click', (e) => { if (e.target === lb || e.target === lbStage) lbClose(); });
document.addEventListener('keydown', (e) => {
  if (lb.hidden) return;
  if (e.key === 'Escape') lbClose();
  if (e.key === 'ArrowLeft') lbShow(lbPos - 1);
  if (e.key === 'ArrowRight') lbShow(lbPos + 1);
});
// deslizar no celular
let touchX = null;
lb.addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; }, { passive: true });
lb.addEventListener('touchend', (e) => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 50) lbShow(lbPos + (dx < 0 ? 1 : -1));
  touchX = null;
});

// Formulário de orçamento → mensagem pronta no WhatsApp
const form = document.querySelector('[data-quote-form]');

const validators = {
  nome: (v) => v.trim().length >= 2,
  whatsapp: (v) => v.replace(/\D/g, '').length >= 10,
  carro: (v) => v.trim().length >= 2,
  servico: (v) => v !== '',
};

const validateField = (name) => {
  const input = form.elements[name];
  const ok = validators[name](input.value);
  input.closest('.field').classList.toggle('is-invalid', !ok);
  input.setAttribute('aria-invalid', String(!ok));
  return ok;
};

Object.keys(validators).forEach((name) => {
  const input = form.elements[name];
  const errorId = `err-${name}`;
  form.querySelector(`[data-error-for="${name}"]`).id = errorId;
  input.setAttribute('aria-describedby', errorId);
  input.addEventListener('blur', () => {
    if (input.value) validateField(name);
  });
  input.addEventListener('input', () => {
    if (input.closest('.field').classList.contains('is-invalid')) validateField(name);
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const invalid = Object.keys(validators).filter((name) => !validateField(name));
  if (invalid.length) {
    form.elements[invalid[0]].focus();
    return;
  }
  const d = Object.fromEntries(new FormData(form));
  const lines = [
    'Olá, Tork! Quero um orçamento.',
    '',
    `*Nome:* ${d.nome.trim()}`,
    `*WhatsApp:* ${d.whatsapp.trim()}`,
    `*Carro:* ${d.carro.trim()}`,
    `*Serviço:* ${d.servico}`,
  ];
  if (d.mensagem && d.mensagem.trim()) lines.push(`*Mensagem:* ${d.mensagem.trim()}`);
  window.open(waLink(lines.join('\n')), '_blank', 'noopener');
});
