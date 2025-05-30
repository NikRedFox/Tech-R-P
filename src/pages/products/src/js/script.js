const container = document.querySelector('.cards-container');
  const btnLeft = document.querySelector('.carrossel-btn.left');
  const btnRight = document.querySelector('.carrossel-btn.right');

  let scrollAmount = 0;
  const cardWidth = 593 + 50; // largura do card + gap

  btnRight.addEventListener('click', () => {
    scrollAmount += cardWidth;
    container.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });

  btnLeft.addEventListener('click', () => {
    scrollAmount -= cardWidth;
    container.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });