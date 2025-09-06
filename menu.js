
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const html = document.documentElement, body = document.body;

    function openMenu() {
        mobileMenu.classList.add('open');
        menuBtn.classList.add('active');
        menuBtn.setAttribute('aria-expanded', 'true');
        html.classList.add('overflow-hidden');
        body.classList.add('overflow-hidden');
    }
    function closeMenu() {
        mobileMenu.classList.remove('open');
        menuBtn.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
        html.classList.remove('overflow-hidden');
        body.classList.remove('overflow-hidden');
    }
    function toggleMenu() {
        mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
    }


    menuBtn?.addEventListener('click', toggleMenu);
    menuBtn?.addEventListener('touchend', (e) => { e.preventDefault(); toggleMenu(); }, { passive: false });

    mobileMenu.addEventListener('click', (e) => {
        const a = e.target.closest('a');
        if (a) closeMenu();
    });

    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) closeMenu();
    });


    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

    const mql = window.matchMedia('(min-width: 768px)');
    (mql.addEventListener || mql.addListener).call(mql, 'change' in mql ? 'change' : (cb => mql.addListener(cb)), (e) => {
        if (e.matches) closeMenu();
    });
    
});

document.addEventListener('DOMContentLoaded', () => {
  new Typed('#typed', {
    strings: [
      "Logic meets imagination ✨",
      "From pixels to projects 🚀",
      "Welcome to my portfolio!"
    ],
    typeSpeed: 40,
    backSpeed: 25,
    loop: true
  });
});

