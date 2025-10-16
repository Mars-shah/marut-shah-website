const carouselImages = document.querySelectorAll(".carousel img");
let currentImage = 0;

function showNextImage() {
  carouselImages[currentImage].classList.remove("active");
  currentImage = (currentImage + 1) % carouselImages.length;
  carouselImages[currentImage].classList.add("active");
}

setInterval(showNextImage, 4000); // change image every 4s


// ======================
// FADE-IN ON SCROLL
// ======================
const fadeEls = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // only animate once
      }
    });
  },
  { threshold: 0.2 } // triggers when 20% of element is visible
);

fadeEls.forEach((el) => observer.observe(el));
