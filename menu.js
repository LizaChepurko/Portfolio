// Mobile Menu Logic
const btn = document.getElementById('mobile-menu-button');
const menu = document.getElementById('mobile-menu');
const links = document.querySelectorAll('.mobile-link');


if(btn && menu) {
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        
        const icon = btn.querySelector('.material-symbols-outlined');
        if (menu.classList.contains('hidden')) {
            icon.textContent = 'menu';
        } else {
            icon.textContent = 'close';
        }
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
            btn.querySelector('.material-symbols-outlined').textContent = 'menu';
        });
    });
}