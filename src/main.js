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
  button.addEventListener('click', () => {
    item.classList.toggle('active');

    // Закриває інші
    accordionItems.forEach(i => {
      if (i !== item) i.classList.remove('active');
    });
  });
});
