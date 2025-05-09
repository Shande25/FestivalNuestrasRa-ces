function search() {
    alert("Search functionality not implemented.");
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const slide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
  
    let counter = 0;
    const total = images.length;
  
    function updateSlide() {
      slide.style.transform = `translateX(-${counter * 100}%)`;
    }
  
    nextBtn.addEventListener('click', () => {
      counter = (counter + 1) % total;
      updateSlide();
    });
  
    prevBtn.addEventListener('click', () => {
      counter = (counter - 1 + total) % total;
      updateSlide();
    });
  
    // Movimiento automático cada 4 segundos
    setInterval(() => {
      counter = (counter + 1) % total;
      updateSlide();
    }, 4000);
  });

  document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight) {
      el.classList.add('visible');
    }
  });
});

window.addEventListener('scroll', () => {
  const button = document.querySelector('.back-to-top');
  if (window.scrollY > 500) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
});

document.querySelector('.back-to-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

