// === Toggle Mobile Menu ===
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

// === Scroll Animation for About Page ===
const animatedElements = document.querySelectorAll('.fade-in-left, .fade-in-right');

function handleScrollAnimation() {
  animatedElements.forEach(el => {
    const elementPosition = el.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3; // triggers earlier
    if (elementPosition < screenPosition) {
      el.classList.add('active');
    }
  });
}
window.addEventListener('scroll', handleScrollAnimation);
handleScrollAnimation(); // trigger on load

// === AUTO-TRANSITION FEATURED ARTWORKS (slideshow images) ===
document.querySelectorAll('.slideshow').forEach(slide => {
  const images = slide.getAttribute('data-images').split(',').map(img => img.trim());
  let index = 0;
  const imgTag = slide.querySelector('img');

  setInterval(() => {
    index = (index + 1) % images.length;
    imgTag.src = images[index];
    imgTag.style.animation = "none";
    void imgTag.offsetWidth; // reset animation
    imgTag.style.animation = "fadeIn 1s ease";
  }, 5000);
});

// === Contact Form ===
const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // simple validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
      formMsg.textContent = "Please fill in all fields.";
      formMsg.style.color = 'red';
    } else {
      formMsg.textContent = "Thank you! Your message has been sent.";
      formMsg.style.color = 'green';
      contactForm.reset();
    }
    // remove after 5s
    setTimeout(() => formMsg.textContent = '', 5000);
  });
}

// === Newsletter Form ===
const newsletterForm = document.getElementById('newsletterForm');
const newsletterMsg = document.getElementById('newsletterMsg');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    newsletterMsg.textContent = "You’ve subscribed successfully!";
    newsletterForm.reset();
    setTimeout(() => newsletterMsg.textContent = '', 5000);
  });
}

// === FAQ Accordion ===
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    question.classList.toggle('active');
    const answer = question.nextElementSibling;
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  });
});
