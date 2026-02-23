// ===== Mobile Menu Toggle =====
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  menuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
});

// Close mobile menu on link click
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  });
});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 80;
      const pos = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  });
});

// ===== Active Nav Highlight on Scroll =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function activateNav() {
  const scrollY = window.pageYOffset;
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach(link => {
        link.classList.remove('text-yellow-400', 'font-bold');
        link.classList.add('text-gray-200');
        if (link.getAttribute('href') === '#' + id) {
          link.classList.add('text-yellow-400', 'font-bold');
          link.classList.remove('text-gray-200');
        }
      });
    }
  });
}
window.addEventListener('scroll', activateNav);

// ===== Sticky Navbar Shadow =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.add('shadow-lg');
  } else {
    navbar.classList.remove('shadow-lg');
  }
});

// ===== Back to Top Button =====
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.remove('opacity-0', 'pointer-events-none');
    backToTop.classList.add('opacity-100');
  } else {
    backToTop.classList.add('opacity-0', 'pointer-events-none');
    backToTop.classList.remove('opacity-100');
  }
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Contact Form Validation =====
const form = document.getElementById('contact-form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  let valid = true;
  const name = document.getElementById('form-name');
  const phone = document.getElementById('form-phone');
  const email = document.getElementById('form-email');
  const message = document.getElementById('form-message');

  // Clear previous errors
  document.querySelectorAll('.form-error').forEach(el => el.textContent = '');

  if (name.value.trim().length < 2) {
    document.getElementById('err-name').textContent = 'Please enter your name.';
    valid = false;
  }
  if (!/^[0-9]{9,15}$/.test(phone.value.trim().replace(/[\s\-\+]/g, ''))) {
    document.getElementById('err-phone').textContent = 'Please enter a valid phone number.';
    valid = false;
  }
  if (email.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
    document.getElementById('err-email').textContent = 'Please enter a valid email address.';
    valid = false;
  }
  if (message.value.trim().length < 5) {
    document.getElementById('err-message').textContent = 'Please enter your message (min 5 characters).';
    valid = false;
  }

  if (valid) {
    document.getElementById('form-success').classList.remove('hidden');
    form.reset();
    setTimeout(() => {
      document.getElementById('form-success').classList.add('hidden');
    }, 5000);
  }
});

// ===== Dynamic Year =====
document.getElementById('current-year').textContent = new Date().getFullYear();

// ===== Scroll Reveal Animation =====
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 60) {
      el.classList.add('revealed');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);
