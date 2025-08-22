document.addEventListener('DOMContentLoaded',() => {
  const el = document.getElementById('CandyAnim');
  if (!el) return;

  const frames = Array.from({ length: 3 }, (_, i) => `assets/candy_sprite-${i+1}.png`);
  const frameDuration = 120;

  // Preload
  frames.forEach(src => { const img = new Image(); img.src = src; });

  let idx = 0;
  el.src = frames[0];

  let nextAt = 0;
  let running = true;
  let inView = true;

  const io = new IntersectionObserver(([e]) => { inView = e.isIntersecting; });
  io.observe(el);

  const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  function loop(ts) {
    if (!running) return;
    if (!document.hidden && inView && !prefersReduced && ts >= nextAt) {
      idx = (idx + 1) % frames.length; // 1→2→3→1...
      el.src = frames[idx];
      nextAt = ts + frameDuration;
    }
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  el.style.touchAction = 'manipulation';
})();