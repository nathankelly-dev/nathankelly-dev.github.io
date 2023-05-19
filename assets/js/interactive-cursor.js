const cursor = document.getElementById('interactive-cursor');
console.log(cursor)

document.onmousemove = ((e) => {
    console.log('waahhhhh')
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})