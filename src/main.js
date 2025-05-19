document.addEventListener('DOMContentLoaded', () => {
  const burgerCheckbox = document.getElementById('burger-checkbox');
  const menuItems = document.querySelectorAll('.menu-item');

  // Закриття меню при кліку на пункт
  menuItems.forEach(link => {
    link.addEventListener('click', () => {
      burgerCheckbox.checked = false;
      document.body.style.overflow = ''; // Відновлюємо прокрутку
    });
  });

  // Заборона прокрутки при відкритому меню
  burgerCheckbox.addEventListener('change', () => {
    if (burgerCheckbox.checked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
});

// accordion
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const button = item.querySelector('.accordion-button');
  const icon = item.querySelector('.accordion-icon');

  button.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    // Закриває всі
    accordionItems.forEach(i => {
      i.classList.remove('active');
      i.querySelector('.accordion-icon').textContent = '+';
    });

    // Якщо це неактивне — активувати
    if (!isActive) {
      item.classList.add('active');
      icon.textContent = '–';
    }
  });
});
// slider
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.pagination-dots');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentSlide = 0;

// Динамічно створюємо крапки
slides.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => showSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
  currentSlide = index;
}

nextBtn.addEventListener('click', () => {
  let next = (currentSlide + 1) % slides.length;
  showSlide(next);
});

prevBtn.addEventListener('click', () => {
  let prev = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(prev);
});

// form
emailjs.init('vM-HBhsdHZ-9NnKgQ');

document
  .getElementById('contact-form')
  .addEventListener('submit', function (e) {
    e.preventDefault();

    const status = document.getElementById('form-status');
    status.textContent = 'Sending...';

    emailjs.sendForm('service_68l6vl5', 'template_9a5db6i', this).then(
      function () {
        status.textContent = 'Message sent successfully!';
        document.getElementById('contact-form').reset();
      },
      function (error) {
        console.log(error);
        status.textContent = 'Something went wrong. Please try again.';
        status.style.color = 'red';
      }
    );
  });
