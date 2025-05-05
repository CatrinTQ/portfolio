document.querySelectorAll('.accordion-toggle').forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('active');
      const content = button.nextElementSibling;
      content.classList.toggle('show');
    });
  });
  