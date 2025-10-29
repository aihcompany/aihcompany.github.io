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



  // test Project Section

// const projects = [
//   {
//     title: "AI-Powered Chatbot",
//     description: "Developed a chatbot solution for customer support automation.",
//     images: [
//       "https://i.postimg.cc/LXdkp4cd/f-INALe-XPORTg-IG-1.png",
//       "https://i.postimg.cc/PfSLbrSP/Beige-Floral-Phone-Mockup-User-Review-5-Stars-Twitter-Post-3.png",
//       "https://i.postimg.cc/x881pMtw/White-and-Green-Modern-Business-Trend-You-Tube-Thumbnail-1.png"
//     ]
//   },
//   {
//     title: "Big Data Analytics Platform",
//     description: "Built a platform for real-time data processing and insights.",
//     images: [
//       "https://i.postimg.cc/LXdkp4cd/f-INALe-XPORTg-IG-1.png",
//       "https://i.postimg.cc/PfSLbrSP/Beige-Floral-Phone-Mockup-User-Review-5-Stars-Twitter-Post-3.png",
//       "https://i.postimg.cc/x881pMtw/White-and-Green-Modern-Business-Trend-You-Tube-Thumbnail-1.png"
//     ]
//   },
//   {
//     title: "ML Model Deployment",
//     description: "Deployed machine learning models for predictive analytics.",
//     images: [
//       "https://i.postimg.cc/LXdkp4cd/f-INALe-XPORTg-IG-1.png",
//       "https://i.postimg.cc/PfSLbrSP/Beige-Floral-Phone-Mockup-User-Review-5-Stars-Twitter-Post-3.png",
//       "https://i.postimg.cc/x881pMtw/White-and-Green-Modern-Business-Trend-You-Tube-Thumbnail-1.png"
//     ]
//   }
// ];


// Projects Array
const projects = [
  {
    title: "AI-Powered Chatbot",
    description: "Developed a chatbot solution for customer support automation.",
    images: [
      "https://i.postimg.cc/LXdkp4cd/f-INALe-XPORTg-IG-1.png",
      "https://i.postimg.cc/PfSLbrSP/Beige-Floral-Phone-Mockup-User-Review-5-Stars-Twitter-Post-3.png",
      "https://i.postimg.cc/x881pMtw/White-and-Green-Modern-Business-Trend-You-Tube-Thumbnail-1.png"
    ]
  },
  {
    title: "Big Data Analytics Platform",
    description: "Built a platform for real-time data processing and insights.",
    images: [
      "https://i.postimg.cc/LXdkp4cd/f-INALe-XPORTg-IG-1.png",
      "https://i.postimg.cc/PfSLbrSP/Beige-Floral-Phone-Mockup-User-Review-5-Stars-Twitter-Post-3.png",
      "https://i.postimg.cc/x881pMtw/White-and-Green-Modern-Business-Trend-You-Tube-Thumbnail-1.png"
    ]
  },
  {
    title: "ML Model Deployment",
    description: "Deployed machine learning models for predictive analytics.",
    images: [
      "https://i.postimg.cc/LXdkp4cd/f-INALe-XPORTg-IG-1.png",
      "https://i.postimg.cc/PfSLbrSP/Beige-Floral-Phone-Mockup-User-Review-5-Stars-Twitter-Post-3.png",
      "https://i.postimg.cc/x881pMtw/White-and-Green-Modern-Business-Trend-You-Tube-Thumbnail-1.png"
    ]
  }
];

// Function to create project card with carousel
function createProjectCard(project, index) {
  const carouselId = `carouselProject${index}`;
  let carouselInner = '';

  project.images.forEach((img, i) => {
    carouselInner += `
      <div class="carousel-item ${i === 0 ? 'active' : ''}">
        <img src="${img}" class="d-block w-100" alt="Project Image ${i+1}">
      </div>
    `;
  });

  return `
    <div class="col-md-4">
      <div class="card h-100">
        <div id="${carouselId}" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            ${carouselInner}
          </div>
          <!-- Controls -->
          <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-text">${project.description}</p>
        </div>
      </div>
    </div>
  `;
}

// Inject project cards
const projectsRow = document.getElementById('projectsRow');
if (projectsRow) {
  projects.forEach((project, idx) => {
    projectsRow.innerHTML += createProjectCard(project, idx + 1);
  });
}

// Initialize all carousels with 3s interval
document.querySelectorAll('.carousel').forEach(carousel => {
  new bootstrap.Carousel(carousel, {
    interval: 3000,
    ride: 'carousel'
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
