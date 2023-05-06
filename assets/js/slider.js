const slider = document.querySelector('.slider__inner');
let isDown = false;
let startX;
let scrollLeft;
let pageX;
let pageY;

slider?.addEventListener('mousedown', (e) => {
    pageX = e.pageX;
    pageY = e.pageY;

    isDown = true;
    slider.classList.add('active');
    slider.style.cursor = 'grabbing';
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});


slider?.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider?.addEventListener('mouseup', (e) => {
    isDown = false;
    slider.classList.remove('active');
    slider.style.cursor = 'grab';
})

slider?.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
});