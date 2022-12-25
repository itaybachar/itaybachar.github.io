let background_x = 0;
let background_y = 0;


const background = document.getElementById("background");

const isMobile = window.matchMedia("(pointer:coarse)").matches;

if (!isMobile) {
    document.body.addEventListener('mousemove', (e) => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const movePower = 5;
        const mouseX = movePower * (e.pageX - windowWidth / 2) / windowWidth / 2;
        const mouseY = movePower * (e.pageY - windowHeight / 2) / windowHeight / 2;
        background.style.transform = `translate3d(${mouseX}%, ${mouseY}%, 0)`;
    });
}