let background_x = 0;
let background_y = 0;

const windowWidth = window.innerWidth / 5;
const windowHeight = window.innerHeight / 5;
const background = document.getElementById("background");

background.addEventListener('mousemove', (e) =>
{
    const mouseX = e.clientX / windowWidth;
    const mouseY = e.clientY / windowHeight;


    background.style.backgroundPosition = `translateX(${mouseX})`; 'backgroundX: -30px';// = mouseX; //`translate3d(-${mouseX}%, -${mouseY}%, 0)`;
});

// document.onload = startBackground();