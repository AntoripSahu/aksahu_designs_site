let mobileAnimationInterval;
let isAnimationActive = false;

function initMobileAnimation() {
  const subtitles = document.querySelectorAll(".mobile-animated-text span");

  if (window.innerWidth < 768) {
    if (!isAnimationActive && subtitles.length > 0) {
      isAnimationActive = true;
      let index = 0;

      function showNext() {
        subtitles.forEach((s, i) => s.classList.toggle("active", i === index));
        index = (index + 1) % subtitles.length;
      }

      showNext();
      mobileAnimationInterval = setInterval(showNext, 5000);
    }
  } else {
    if (isAnimationActive) {
      clearInterval(mobileAnimationInterval);
      subtitles.forEach(s => s.classList.remove("active"));
      isAnimationActive = false;
    }
  }
}

document.addEventListener("DOMContentLoaded", initMobileAnimation);
window.addEventListener("resize", initMobileAnimation);