let background_x = 0;
let background_y = 0;


const background = document.getElementById("background");

const isMobile = window.matchMedia("(pointer:coarse)").matches;

if (!isMobile)
{
    document.body.addEventListener('mousemove', (e) =>
    {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const movePower = 5;
        const mouseX = movePower * (e.pageX - windowWidth / 2) / windowWidth / 2;
        let mouseY = movePower * (e.pageY - windowHeight / 2) / windowHeight / 2;

        if (background.classList.contains("moving"))
            mouseY = 0;
        background.style.transform = `translate3d(${mouseX}%, ${mouseY}%, 0)`;

        if (canvas)
        {
            canvas.style.transform = `translate3d(${0.3 * mouseX}%, ${0.5 * mouseY}%, 0)`;
        }
    });
}