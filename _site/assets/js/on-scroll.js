const sectionElements = document.querySelectorAll('.slider--fade-in');
const heroSection = document.querySelector('.section--hero');
const scrollArrow = document.querySelector('.icon--scroll-down');

window.addEventListener('scroll', () => {
    const viewportHeight = window.innerHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const viewportTop = scrollTop;
    const viewportBottom = scrollTop + viewportHeight;

    sectionElements.forEach((element) => {
        const elementRect = element.getBoundingClientRect();
        const elementTop = elementRect.top + scrollTop;
        const elementBottom = elementTop + elementRect.height;

        if (elementTop < viewportBottom && elementBottom > viewportTop) {
            element.classList.add('is-visible')
        };
    })

    if (heroSection.getBoundingClientRect().top < -80) {
        scrollArrow.classList.add('hide');
    }
});