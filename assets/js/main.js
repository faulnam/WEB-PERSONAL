// DOM Elements
const themeButton = document.getElementById('theme-button');
const scrollUp = document.getElementById('scroll-up');
const navLinks = document.querySelectorAll('.nav__link');

// DARK/LIGHT THEME TOGGLE
const darkThemeClass = 'dark-theme';
const iconMoon = 'ri-moon-line';
const iconSun = 'ri-sun-line';

// Load saved theme
const savedTheme = localStorage.getItem('selected-theme');
const savedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkThemeClass) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconSun) ? iconSun : iconMoon;

if (savedTheme) {
  if (savedTheme === 'dark') {
    document.body.classList.add(darkThemeClass);
    themeButton.classList.replace(iconMoon, iconSun);
  }
}

// Toggle theme on click
themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkThemeClass);
  if (document.body.classList.contains(darkThemeClass)) {
    themeButton.classList.replace(iconMoon, iconSun);
  } else {
    themeButton.classList.replace(iconSun, iconMoon);
  }
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

// SCROLL SECTIONS ACTIVE LINK
function scrollActive() {
  const scrollY = window.pageYOffset;
  navLinks.forEach(link => {
    if(!link.hash) return;
    const section = document.querySelector(link.hash);
    if(section) {
      const sectionTop = section.offsetTop - 70;
      const sectionHeight = section.offsetHeight;
      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link.classList.add('active-link');
      } else {
        link.classList.remove('active-link');
      }
    }
  });
}
window.addEventListener('scroll', scrollActive);

// SHOW SCROLL UP BUTTON
function showScrollUp() {
  if(window.scrollY >= 300) {
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
}
window.addEventListener('scroll', showScrollUp);

// SCROLL UP BUTTON CLICK
scrollUp.addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({top: 0, behavior: 'smooth'});
});

// SCROLL REVEAL ANIMATION
ScrollReveal().reveal('.home__title, .home__description, .home__scroll-button', {
  origin: 'top',
  distance: '20px',
  duration: 1000,
  delay: 200,
  easing: 'ease-in-out',
  reset: false
});

ScrollReveal().reveal('.home__img-wrapper', {
  origin: 'bottom',
  distance: '30px',
  duration: 1200,
  delay: 600,
  easing: 'ease-in-out',
  reset: false
});

ScrollReveal().reveal('.nav__logo, .nav__list li', {
  origin: 'top',
  distance: '20px',
  duration: 800,
  delay: 800,
  easing: 'ease-in-out',
  reset: false,
  interval: 100
});
