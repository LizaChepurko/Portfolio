
(function () {
    const stars = document.querySelector('.stars');
    if (!stars) return;

    let ticking = false;
    function onScroll() {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            const y = window.scrollY || window.pageYOffset || 0;

            stars.style.setProperty('--parallaxY1', `${y * 0.15}px`);
            stars.style.setProperty('--parallaxY2', `${y * 0.06}px`);
            // stars.style.setProperty('--parallaxY3', `${y * 0.02}px`);

            ticking = false;
        });
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
})();

