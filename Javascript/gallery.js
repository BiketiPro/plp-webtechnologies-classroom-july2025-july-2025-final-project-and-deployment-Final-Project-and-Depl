const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}


// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

const images = document.querySelectorAll('.gallery-grid img');

images.forEach((img) => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'block';
    lightboxImg.src = img.src;
    captionText.innerHTML = img.alt;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Close when clicking outside image
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

// === FILTERING WITH FADE ANIMATION ===
const filterButtons = document.querySelectorAll('.filter-btn');
const categoryTitles = document.querySelectorAll('.category-title');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const category = button.getAttribute('data-filter');

    categoryTitles.forEach(title => {
      const titleCategory = title.getAttribute('data-category');
      const grid = title.nextElementSibling;

      // Add fade-out to all first
      if (category !== 'all' && titleCategory !== category) {
        title.classList.add('fade-out');
        grid.classList.add('fade-out');
      } else {
        // show with fade-in
        title.classList.remove('fade-out');
        grid.classList.remove('fade-out');
      }
    });
  });
});



