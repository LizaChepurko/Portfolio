
document.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('doorAnim');
    if (!el) return;

    const frames = Array.from({ length: 9 }, (_, i) => `assets/sprite-${i + 1}.png`);
    frames.forEach(src => new Image().src = src); // preload

    let idx = 0, timer = null, dir = 0;
    const last = frames.length - 1;
    const show = (i) => { idx = i; el.src = frames[i]; };
    const stop = () => { clearInterval(timer); timer = null; dir = 0; };
    const step = () => { const n = idx + dir; if (n < 0 || n > last) return stop(); show(n); };

    const play = (d) => { if (dir === d) return; stop(); dir = d; timer = setInterval(step, 75); };

    show(0);
    el.addEventListener('mouseenter', () => play(1));
    el.addEventListener('mouseleave', () => play(-1));


    el.addEventListener('click', () => { if (idx === last || dir === 1) play(-1); else play(1); });
});
