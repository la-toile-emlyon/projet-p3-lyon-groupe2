const track = document.getElementById("track");
const slides = Array.from(track.children);
const prevBtn = document.getElementById("precedent");
const nextBtn = document.getElementById("suivant");

let index = 0;

function updateSlide() {
const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${index * slideWidth}px)`;
}

nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
      updateSlide();
    });

prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlide();
    });

window.addEventListener("resize", updateSlide);
    updateSlide();
