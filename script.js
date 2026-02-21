
// ═══════════════════════════════════════════════
// GSAP REGISTRATION
// ═══════════════════════════════════════════════
gsap.registerPlugin(ScrollTrigger, TextPlugin);

const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ═══════════════════════════════════════════════
// CUSTOM CURSOR
// ═══════════════════════════════════════════════
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');
if (isFinePointer && !prefersReducedMotion) {
  document.body.classList.add('cursor-enabled');
  let mx = 0;
  let my = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    gsap.to(cursor, { x: mx, y: my, duration: 0.05 });
    gsap.to(follower, { x: mx, y: my, duration: 0.18 });
  });
  document.querySelectorAll('a, button, .program-card, .trainer-card, .why-card, .gallery-item').forEach(el => {
    el.addEventListener('mouseenter', () => {
      gsap.to(cursor, { scale: 2.5, duration: 0.3 });
      gsap.to(follower, { scale: 1.5, borderColor: 'rgba(0,255,136,0.8)', duration: 0.3 });
    });
    el.addEventListener('mouseleave', () => {
      gsap.to(cursor, { scale: 1, duration: 0.3 });
      gsap.to(follower, { scale: 1, borderColor: 'rgba(0,255,136,0.5)', duration: 0.3 });
    });
  });
}

// ═══════════════════════════════════════════════
// LOADER
// ═══════════════════════════════════════════════
const loaderTl = gsap.timeline({
  onComplete: () => {
    gsap.to('#loader', {
      opacity: 0, y: -30, duration: 0.6, ease: 'power2.in',
      onComplete: () => { document.getElementById('loader').style.display = 'none'; heroIntro(); }
    });
  }
});
loaderTl
  .from('#loaderLogo', { opacity: 0, y: 30, duration: 0.6, ease: 'power3.out' })
  .to('#loaderBar', { width: '100%', duration: 1.2, ease: 'power2.inOut' }, '-=0.2')
  .to('#loaderLogo', { color: 'transparent', webkitTextStroke: '1px #00ff88', duration: 0.4 });

// ═══════════════════════════════════════════════
// HERO INTRO
// ═══════════════════════════════════════════════
function heroIntro() {
  const heroTl = gsap.timeline();
  heroTl
    .to('#heroTag', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
    .to('.hero-line span', {
      y: 0, duration: 0.9, stagger: 0.12, ease: 'power4.out'
    }, '-=0.2')
    .to('#heroSub', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4')
    .to('#heroActions', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
    .to('#heroMedia', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.45')
    .to('#heroScroll', { opacity: 1, duration: 0.5 }, '-=0.2')
    .to('#heroStats', { opacity: 1, duration: 0.3 }, '-=0.35')
    .fromTo(
      '.hero-stat',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.55, stagger: 0.1, ease: 'power3.out' },
      '-=0.15'
    );
}

// ═══════════════════════════════════════════════
// FLOATING SHAPES PARALLAX
// ═══════════════════════════════════════════════
gsap.to('.shape-1', { y: -120, ease: 'none', scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: 1 } });
gsap.to('.shape-2', { y: -80, ease: 'none', scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: 1.5 } });
gsap.to('.shape-3', { y: -60, ease: 'none', scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: 2 } });

// ═══════════════════════════════════════════════
// SCROLL REVEALS
// ═══════════════════════════════════════════════
gsap.utils.toArray('.reveal').forEach(el => {
  gsap.to(el, {
    opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
    scrollTrigger: {
      trigger: el, start: 'top 88%', toggleActions: 'play none none none'
    }
  });
});

// ═══════════════════════════════════════════════
// ANIMATED COUNTERS
// ═══════════════════════════════════════════════
document.querySelectorAll('.counter').forEach(counter => {
  const target = parseInt(counter.dataset.target);
  ScrollTrigger.create({
    trigger: counter, start: 'top 85%', once: true,
    onEnter: () => {
      gsap.to({ val: 0 }, {
        val: target, duration: 2.5, ease: 'power2.out',
        onUpdate: function() {
          counter.textContent = Math.round(this.targets()[0].val).toLocaleString();
        }
      });
    }
  });
});

// ═══════════════════════════════════════════════
// NAVBAR SCROLL EFFECT
// ═══════════════════════════════════════════════
const navbar = document.getElementById('navbar');
ScrollTrigger.create({
  start: 80, onUpdate: self => {
    if (self.scroll() > 80) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }
});

// ═══════════════════════════════════════════════
// BACK TO TOP
// ═══════════════════════════════════════════════
const btt = document.getElementById('btt');
ScrollTrigger.create({
  start: 500, onUpdate: self => {
    if (self.scroll() > 500) btt.classList.add('visible');
    else btt.classList.remove('visible');
  }
});

// ═══════════════════════════════════════════════
// TESTIMONIALS AUTO-SCROLL
// ═══════════════════════════════════════════════
const track = document.getElementById('testimonialsTrack');
const clone = track.innerHTML;
track.innerHTML += clone;
gsap.to(track, {
  x: () => -track.scrollWidth / 2,
  duration: 40, ease: 'none', repeat: -1,
  modifiers: { x: gsap.utils.unitize(x => parseFloat(x) % (track.scrollWidth / 2)) }
});

// ═══════════════════════════════════════════════
// PRICING TOGGLE
// ═══════════════════════════════════════════════
let isYearly = false;
const toggleWrap = document.getElementById('toggleWrap');
toggleWrap.addEventListener('click', () => {
  isYearly = !isYearly;
  toggleWrap.classList.toggle('active', isYearly);
  document.querySelectorAll('.price-val').forEach(el => {
    const from = isYearly ? parseInt(el.dataset.monthly) : parseInt(el.dataset.yearly);
    const to = isYearly ? parseInt(el.dataset.yearly) : parseInt(el.dataset.monthly);
    gsap.to({ val: from }, {
      val: to, duration: 0.5, ease: 'power2.out',
      onUpdate: function() { el.textContent = Math.round(this.targets()[0].val); }
    });
  });
});

// ═══════════════════════════════════════════════
// GALLERY LIGHTBOX
// ═══════════════════════════════════════════════
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightboxContent');
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    const imgSrc = item.dataset.img;
    if (!imgSrc) return;
    lightboxContent.innerHTML = `<img src="${imgSrc}" alt="Gallery preview" style="max-width:80vw;max-height:80vh;object-fit:cover;border-radius:6px;border:1px solid rgba(255,255,255,0.15)">`;
    lightbox.classList.add('open');
    gsap.from(lightboxContent, { scale: 0.8, opacity: 0, duration: 0.4, ease: 'back.out' });
  });
});
document.getElementById('lightboxClose').addEventListener('click', () => {
  gsap.to(lightboxContent, {
    scale: 0.8, opacity: 0, duration: 0.3,
    onComplete: () => lightbox.classList.remove('open')
  });
});
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    gsap.to(lightboxContent, {
      scale: 0.8, opacity: 0, duration: 0.3,
      onComplete: () => lightbox.classList.remove('open')
    });
  }
});

// ═══════════════════════════════════════════════
// MOBILE MENU
// ═══════════════════════════════════════════════
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('open');
  document.body.style.overflow = 'hidden';
  gsap.from('.mob-link', { opacity: 0, y: 30, stagger: 0.08, duration: 0.5, ease: 'power3.out' });
});
closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
});
document.querySelectorAll('.mob-link').forEach(l => {
  l.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ═══════════════════════════════════════════════
// CONTACT FORM VALIDATION
// ═══════════════════════════════════════════════
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const msg = document.getElementById('message');

  function showError(input, errorId) {
    document.getElementById(errorId).style.display = 'block';
    gsap.to(input, { x: [-6, 6, -4, 4, 0], duration: 0.4 });
    valid = false;
  }
  function clearError(errorId) {
    document.getElementById(errorId).style.display = 'none';
  }

  clearError('nameError'); clearError('emailError'); clearError('msgError');
  if (!name.value.trim()) showError(name, 'nameError');
  if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) showError(email, 'emailError');
  if (!msg.value.trim()) showError(msg, 'msgError');

  if (valid) {
    const btn = this.querySelector('button');
    const origText = btn.innerHTML;
    btn.innerHTML = '✓ Message Sent!';
    btn.style.background = '#00cc66';
    gsap.to(btn, { scale: 1.05, duration: 0.2, yoyo: true, repeat: 1 });
    setTimeout(() => { btn.innerHTML = origText; btn.style.background = ''; this.reset(); }, 3000);
  }
});

// ═══════════════════════════════════════════════
// BUTTON MAGNETIC EFFECT
// ═══════════════════════════════════════════════
if (isFinePointer && !prefersReducedMotion) {
  document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(btn, { x: x * 0.25, y: y * 0.25, duration: 0.3, ease: 'power2.out' });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.4, ease: 'elastic.out(1, 0.5)' });
    });
  });
}

// ═══════════════════════════════════════════════
// PROGRAM CARDS STAGGERED REVEAL
// ═══════════════════════════════════════════════
gsap.utils.toArray('.program-card').forEach((card, index) => {
  const img = card.querySelector('.program-img-bg');
  const body = card.querySelector('.program-body');

  ScrollTrigger.create({
    trigger: card,
    start: 'top 90%',
    once: true,
    onEnter: () => {
      const delay = index * 0.04;
      const tl = gsap.timeline({ defaults: { overwrite: 'auto' } });
      tl.fromTo(
        card,
        { autoAlpha: 0, y: 46, scale: 0.97, filter: 'blur(6px)' },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.9,
          ease: 'power4.out',
          delay
        }
      );

      if (img) {
        tl.fromTo(
          img,
          { scale: 1.12, filter: 'grayscale(35%) brightness(0.55)' },
          {
            scale: 1,
            filter: 'grayscale(30%) brightness(0.7)',
            duration: 1.1,
            ease: 'power3.out'
          },
          0
        );
      }

      if (body) {
        tl.fromTo(
          body,
          { y: 22, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.7, ease: 'power3.out' },
          0.18
        );
      }
    }
  });
});

// Smooth nav links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});
