const cursor = document.getElementById('interactive-cursor');
console.log(cursor)

document.onmousemove = ((e) => {
    console.log('waahhhhh')
    cursor.style.left = e.pageX + -13 + 'px';
    cursor.style.top = e.pageY + -13 + 'px';
})