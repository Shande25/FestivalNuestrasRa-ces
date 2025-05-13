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



document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.getElementById("toggle-theme");
  const icon = themeToggleBtn.querySelector("i");
  const body = document.body;
  const header = document.querySelector("header");

  themeToggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-theme");

    // Cambiar ícono
    if (body.classList.contains("dark-theme")) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
      header.classList.add("light-navbar");
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
      header.classList.remove("light-navbar");
    }
  });
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
    'image/diapositiva1/1.jpg',
    'image/diapositiva1/2.jpg',
    'image/diapositiva1/3.jpg',
    'image/diapositiva1/4.jpg',
    'image/diapositiva1/5.jpg',
    'image/diapositiva1/6.jpg',
    'image/diapositiva1/7.jpg'
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



