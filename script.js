const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
    const label = menuButton.querySelector('.sr-only');
    if (label) label.textContent = open ? 'Menu openen' : 'Menu sluiten';
  });
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
      const label = menuButton.querySelector('.sr-only');
      if (label) label.textContent = 'Menu openen';
    });
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
