
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

    // פתיחה/סגירה בלחיצה על הכפתור
    menuBtn?.addEventListener('click', toggleMenu);
    // תמיכה טובה למובייל (למנוע דאבל-טריגר)
    menuBtn?.addEventListener('touchend', (e) => { e.preventDefault(); toggleMenu(); }, { passive:false });

    // סגירה בלחיצה על קישור בתוך התפריט
    mobileMenu.addEventListener('click', (e) => {
      const a = e.target.closest('a');
      if (a) closeMenu();
    });

    // סגירה בלחיצה מחוץ לתפריט
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) closeMenu();
    });

    // ESC סוגר
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

    // אם עוברים למסך רחב (>= md) – סוגרים אוטומטית
    const mql = window.matchMedia('(min-width: 768px)');
    (mql.addEventListener || mql.addListener).call(mql, 'change' in mql ? 'change' : (cb => mql.addListener(cb)), (e) => {
      if (e.matches) closeMenu();
    });
  });
