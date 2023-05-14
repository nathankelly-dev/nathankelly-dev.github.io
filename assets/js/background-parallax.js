const parallaxBackground = document.querySelectorAll('.section--parallax-bg');

parallaxBackground.forEach((section, index) => {
  window.addEventListener('scroll', function() {
    const sectionPos = section.getBoundingClientRect();
    const scrollPosition = window.scrollY;

    if (sectionPos.top + sectionPos.height > 0 && sectionPos.top < window.innerHeight) {
      let newPos;

      switch (index) {
        case 0:
          newPos = -scrollPosition * 0.1 + 'px';
          section.style.backgroundPositionY = newPos;
          break;
        case 1:
          newPos = -(scrollPosition - sectionPos.top) * 0.05 + 'px';
          section.style.backgroundPositionY = newPos;
          break;
        case 2:
          newPos = -(scrollPosition - sectionPos.top) * 0.05 + 100 + 'px';
          section.style.backgroundPositionY = newPos;
          break;
        default:
          newPos = 'center';
          break;
      }
    }
  });
});
