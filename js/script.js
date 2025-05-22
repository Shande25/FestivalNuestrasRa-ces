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

