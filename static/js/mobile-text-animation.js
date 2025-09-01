document.addEventListener("DOMContentLoaded", function() {
  if (window.innerWidth < 768) {
    const subtitles = document.querySelectorAll(".mobile-animated-text span");
    if (subtitles.length > 0) {
      let index = 0;

      function showNext() {
        subtitles.forEach((s, i) => s.classList.toggle("active", i === index));
        index = (index + 1) % subtitles.length;
      }

      showNext();
      setInterval(showNext, 3000); 
    }
  }
});
