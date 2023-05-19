const cursor = document.getElementById('interactive-cursor');
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

sliderHover.forEach((target) => {
    target.addEventListener('mouseover', () => {
        cursor.style.transition = 'color 0.1s ease-in-out, transform 0.1s ease-in-out';
        setTimeout(() => {
          cursor.style.backgroundColor = 'blue';
          cursor.innerHTML = '>';
          cursor.style.transform = 'scale(1.8)';
        }, 10);
    });
});
  
sliderHover.forEach((target) => {
    target.addEventListener('mouseleave', () => {
        cursor.style.transition = 'color 0.1s ease-in-out, transform 0.1s ease-in-out';
        setTimeout(() => {
          cursor.style.borderColor = 'white';
          cursor.style.backgroundColor = 'transparent';
          cursor.innerHTML = '';
          cursor.style.transform = 'scale(1)';
        }, 10);
    })
});