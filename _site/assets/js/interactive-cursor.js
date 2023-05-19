const cursor = document.getElementById('interactive-cursor');
console.log(cursor)

document.onmousemove = ((e) => {
    cursor.style.left = e.pageX + -13 + 'px';
    cursor.style.top = e.pageY + -13 + 'px';
})