const circle = document.querySelector('.circle');
const square = document.querySelector('.square');
const triangle = document.querySelector('.triangle');

let angle = 0;

setInterval(() => {
    angle += 1;
    circle.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
    square.style.transform = `translate(-50%, -50%) rotate(${angle * 2}deg)`;
    triangle.style.transform = `translate(-50%, -50%) rotate(${angle * 3}deg)`;
}, 16); // 16ms = 60fps