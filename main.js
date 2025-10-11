// naver scrooll color set
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

  
  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: true,
  });


  // Contact form success message
  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');
  successMessage.style.display = 'none';

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Normally here you would handle form submission (e.g., AJAX)
    // For demo, just show success message
    successMessage.style.display = 'block';
    form.reset();
  });

  // FAQ toggle
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const isVisible = answer.style.display === 'block';
      answer.style.display = isVisible ? 'none' : 'block';
    });

    question.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        question.click();
      }
    });
  });













document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".hero-slide");
  let currentSlide = 0;

  // Lazy load images
  slides.forEach(slide => {
    const img = new Image();
    const url = slide.style.backgroundImage.replace('url("','').replace('")','');
    img.src = url;
  });

  setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }, 6000); // Every 6 seconds
});
