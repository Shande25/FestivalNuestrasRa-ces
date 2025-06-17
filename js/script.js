function search() {
    alert("Search functionality not implemented.");
  }
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

function showPreview(element) {
    const previewBox = document.getElementById('previewBox');
    const previewImg = document.getElementById('previewImg');
    previewImg.src = element.src;
    previewBox.style.display = 'block';
  }

  function closePreview() {
    const previewBox = document.getElementById('previewBox');
    previewBox.style.display = 'none';
  }
  const images = [
    'image/diapositivas/SOLANDA_page-0001.jpg',
    'image/diapositivas/CALDERON_page-0001.jpg',
    'image/diapositivas/LLOA_page-0001.jpg',
    'image/diapositivas/CARCELEN_page-0001.jpg',
    'image/diapositivas/SANBARTOLO_page-0001.jpg',
    'image/diapositivas/LLANOCHICO_page-0001.jpg'
  ];
  let current = 0;
  function openLightbox(index) {
    current = index;
    document.getElementById('lightbox-img').src = images[current];
    document.getElementById('lightbox').style.display = 'block';
  }
  function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
  }
  function changeImage(step) {
    current += step;
    if (current < 0) current = images.length - 1;
    if (current >= images.length) current = 0;
    document.getElementById('lightbox-img').src = images[current];
  }
  
//Modal inscripciones
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal-inscripcion");
  const openBtn = document.querySelector(".btn-inscribirse");
  const closeBtn = document.querySelector(".close-modal");

  openBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

   const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  let currentSlide = 0;
  const intervalTime = 3000; // 3 segundos
  let slideInterval;

  function updateCarousel() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = 'translateX(-' + (slideWidth * currentSlide) + 'px)';
  }

  function startAutoplay() {
    slideInterval = setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      updateCarousel();
    }, intervalTime);
  }

  function stopAutoplay() {
    clearInterval(slideInterval);
  }

  nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  // Opcional: pausa al pasar el ratón sobre el carrusel
  const carouselContainer = document.querySelector('.carousel-container');
  carouselContainer.addEventListener('mouseenter', stopAutoplay);
  carouselContainer.addEventListener('mouseleave', startAutoplay);

  window.addEventListener('resize', updateCarousel);
  updateCarousel(); // posición inicial
  startAutoplay();  // inicia autoplay
 const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });