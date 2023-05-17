(function() {
  const slides = document.querySelector('.slides');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');
  const containerDots = document.querySelector('.container-dots');

  let slideIndex = 1;
  const slidesCount = slides.children.length;

  const updateImageAndDot = () => {
    const activeSlide = slides.querySelector('img.active');
    activeSlide && activeSlide.classList.remove('active');
    slides.children[slideIndex - 1].classList.add('active');

    const activeDot = containerDots.querySelector('div.active');
    activeDot && activeDot.classList.remove('active');
    containerDots.children[slideIndex - 1].classList.add('active');
  };

  const moveDot = index => {
    slideIndex = index;

    updateImageAndDot();
  };

  const nextSlide = () => {
    if (slideIndex !== slidesCount) {
      ++slideIndex;
    } else if (slideIndex === slidesCount) {
      slideIndex = 1;
    }

    updateImageAndDot();
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      --slideIndex;
    } else if (slideIndex === 1) {
      slideIndex = slidesCount;
    }

    updateImageAndDot();
  };

  for (let i = 1; i <= slidesCount; i++) {
    const dotElement = document.createElement('div');
    dotElement.classList.add('dot');
    dotElement.addEventListener('click', () => moveDot(i));
    containerDots.appendChild(dotElement);
  }

  nextBtn.onclick = nextSlide;
  prevBtn.onclick = prevSlide;

  updateImageAndDot();  
})();
