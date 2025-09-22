const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}


// Slideshow functionality for each artist
document.querySelectorAll('.artist-slideshow').forEach(slideshow => {
  const images = slideshow.getAttribute('data-images').split(',');
  let index = 0;
  const imgTag = slideshow.querySelector('img');

  setInterval(() => {
    index = (index + 1) % images.length;
    imgTag.src = images[index];
    imgTag.style.animation = "none"; // reset animation
    void imgTag.offsetWidth; // trigger reflow
    imgTag.style.animation = "fadeIn 1s ease"; // reapply animation
  }, 3000); // every 3 seconds
});