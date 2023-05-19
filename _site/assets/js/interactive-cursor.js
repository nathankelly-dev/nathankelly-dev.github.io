const cursor = document.getElementById('interactive-cursor');
const heroSectionHover = document.querySelector('.section--hero');
const sliderHover = document.querySelectorAll('.section--slider .slider__inner');

document.onmousemove = ((e) => {
    cursor.style.left = e.pageX + -13 + 'px';
    cursor.style.top = e.pageY + -13 + 'px';
})

document.onmousedown = () => {
    cursor.style.transform = 'scale(1.8)';
}

document.onmouseup = () => {
    cursor.style.transform = 'scale(1)';
}

heroSectionHover.addEventListener('mouseover', () => {
    cursor.style.transition = 'color 0.1s ease-in-out, transform 0.1s ease-in-out';
    setTimeout(() => {
        cursor.style.backgroundColor = 'black';
        cursor.innerHTML = 'Scroll down!';
        cursor.style.height = '100px';
        cursor.style.width = '100px';
    }, 10);
});
  
heroSectionHover.addEventListener('mouseleave', () => {
    cursor.style.transition = 'color 0.1s ease-in-out, transform 0.1s ease-in-out';
    setTimeout(() => {
        cursor.style.backgroundColor = 'transparent';
        cursor.innerHTML = '';
        cursor.style.height = '15px';
        cursor.style.width = '15px';
    }, 10);
});

sliderHover.forEach((target) => {
    target.addEventListener('mouseover', () => {
        cursor.style.transition = 'color 0.1s ease-in-out, transform 0.1s ease-in-out';
        setTimeout(() => {
          cursor.style.backgroundColor = 'black';
          cursor.innerHTML = 'Drag me!';
          cursor.style.height = '100px';
          cursor.style.width = '100px';
        }, 10);
    });
});
  
sliderHover.forEach((target) => {
    target.addEventListener('mouseleave', () => {
        cursor.style.transition = 'color 0.1s ease-in-out, transform 0.1s ease-in-out';
        setTimeout(() => {
          cursor.style.backgroundColor = 'transparent';
          cursor.innerHTML = '';
          cursor.style.height = '15px';
          cursor.style.width = '15px';
        }, 10);
    })
});