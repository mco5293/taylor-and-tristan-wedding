/* Calendar-day countdown in the wedding's Pennsylvania time zone.
   Date-only arithmetic avoids daylight-saving and visitor-time-zone errors. */
function weddingDaysRemaining(now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York', year: 'numeric', month: 'numeric', day: 'numeric'
  }).formatToParts(now);
  const part = (name) => Number(parts.find((p) => p.type === name).value);
  const today = Date.UTC(part('year'), part('month') - 1, part('day'));
  return Math.round((Date.UTC(2027, 6, 24) - today) / 86400000);
}
function updateCountdown() {
  const number = document.getElementById('days-left');
  const label = document.getElementById('countdown-label');
  if (!number || !label) return;
  const days = weddingDaysRemaining();
  number.textContent = days > 0 ? String(days) : days === 0 ? 'Today' : 'Married';
  label.textContent = days > 0 ? (days === 1 ? 'day until we say I do' : 'days until we say I do') : days === 0 ? 'Our wedding day is here!' : 'July 24, 2027 • Forever begins';
}
updateCountdown();
setInterval(updateCountdown, 60000);
document.addEventListener('visibilitychange', updateCountdown);
document.querySelectorAll('details').forEach((current) => {
  current.addEventListener('toggle', () => {
    if (!current.open) return;
    document.querySelectorAll('details').forEach((other) => {
      if (other !== current) other.open = false;
    });
  });
});

/* EDIT: Map locations are configured in index.html, not here.
   Empty locations deliberately remain inactive until you supply real details. */
document.querySelectorAll('[data-map-query]').forEach((link) => {
  const query = link.dataset.mapQuery.trim();
  if (!query) return;
  link.href = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(query);
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.removeAttribute('aria-disabled');
  link.textContent = 'Explore this place ↗';
});

/* Progressive photo animation. Respect the visitor's motion preference. */
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !motionPreference.matches) {
  const photoObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('photo-arrived');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('main img:not(.hero-photo)').forEach((photo) => photoObserver.observe(photo));
}

/* Full-size album: native touch scrolling, buttons, keyboard, Escape, focus return.
   EDIT: Photos/captions live in gallery.html. No duplicate photo list to maintain. */
(() => {
  const dialog = document.querySelector('.photo-dialog');
  const links = [...document.querySelectorAll('[data-gallery]')];
  if (!dialog || !links.length || typeof dialog.showModal !== 'function') return;
  const track = dialog.querySelector('.viewer-track');
  const previous = dialog.querySelector('.viewer-prev');
  const next = dialog.querySelector('.viewer-next');
  const counter = dialog.querySelector('.viewer-count');
  let index = 0;
  let opener;
  let scrollFrame;
  links.forEach((link, position) => {
    const source = link.querySelector('img');
// Captions are optional. Photos work with or without a figcaption.
const caption =
  link.closest('figure')
    ?.querySelector('figcaption')
    ?.textContent.trim() || '';    const slide = document.createElement('figure');
    slide.className = 'viewer-slide';
    slide.setAttribute('aria-label', `Photo ${position + 1} of ${links.length}`);
    const photo = document.createElement('img');
    photo.src = link.href;
    photo.alt = source.alt;
    photo.loading = 'lazy';
    photo.decoding = 'async';
    const label = document.createElement('figcaption');
    label.textContent = caption;
    slide.append(photo, label);
    track.append(slide);
    // Without JavaScript these links still open their full-size image normally.
    link.addEventListener('click', (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;
      dialog.showModal();
      document.body.classList.add('gallery-open');
      goTo(position, false);
      dialog.querySelector('.viewer-close').focus();
    });
  });
  function updateControls() {
    counter.textContent = `${index + 1} / ${links.length}`;
    previous.disabled = index === 0;
    next.disabled = index === links.length - 1;
  }
  function goTo(position, animate = true) {
    index = Math.max(0, Math.min(links.length - 1, position));
    track.scrollTo({ left: index * track.clientWidth,
      behavior: animate && !motionPreference.matches ? 'smooth' : 'instant' });
    updateControls();
  }
  previous.addEventListener('click', () => goTo(index - 1));
  next.addEventListener('click', () => goTo(index + 1));
  dialog.querySelector('.viewer-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      goTo(index + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  track.addEventListener('scroll', () => {
    cancelAnimationFrame(scrollFrame);
    scrollFrame = requestAnimationFrame(() => {
      if (!track.clientWidth) return;
      index = Math.max(0, Math.min(links.length - 1, Math.round(track.scrollLeft / track.clientWidth)));
      updateControls();
    });
  }, { passive: true });
  window.addEventListener('resize', () => { if (dialog.open) goTo(index, false); });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('gallery-open');
    opener?.focus({ preventScroll: true });
  });
})();

/* Subtle scroll animations across all wedding pages.
   Each element fades in once. No HTML classes need to be added manually. */
(function initializeWeddingFades() {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  if (reduceMotion.matches || !("IntersectionObserver" in window)) {
    return;
  }

  const selectors = [
    ".section-heading",
    ".story-side",
    ".our-story-signature",
    ".countdown-display",
    ".calendar-button",
    ".event-content",
    ".venue-map-panel",
    ".day-timeline li",
    ".party-heading",
    ".party-card",
    ".travel-intro",
    ".hotel-copy",
    ".travel-info-card",
    ".place-card",
    ".memory-grid .photo-frame",
    ".faq details",
    ".look-card",
    ".registry > h2",
    ".registry > p",
    ".registry > a",
    ".rsvp-inner > h2",
    ".rsvp-inner > p",
    ".rsvp-inner > a"
  ].join(", ");

  const elements = document.querySelectorAll(selectors);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0,
    rootMargin: "0px 0px -15px 0px"
  });

  elements.forEach((element) => {
    // Small stagger for groups of cards; never a long delay.
    if (element.matches(
      ".party-card, .look-card, .travel-info-card, .place-card"
    )) {
      const siblings = [...element.parentElement.children];
      const position = siblings.indexOf(element);

      element.style.setProperty(
        "--fade-delay",
        `${Math.min(position % 5, 3) * 70}ms`
      );
    }

    element.classList.add("fade-in-ready");
    observer.observe(element);
  });
})();