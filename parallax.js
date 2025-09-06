(() => {
  const els = Array.from(document.querySelectorAll('[data-parallax-speed]'));
  if (!els.length) return;

  let ticking = false;
  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY || window.pageYOffset || 0;

      for (const el of els) {
        const s = parseFloat(el.dataset.parallaxSpeed || '1');
        const k = clamp(s, 0.2, 2);
        const translateY = y * (1 - k);
        el.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0)`;
      }

      ticking = false;
    });
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();
