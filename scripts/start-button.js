let terrainStartAnimator = undefined;

function startButton()
{
    document.getElementById("title-name").classList.add("small");
    document.getElementById("start-container").classList.add("hide");
    document.getElementById("flying-setting").classList.remove("hide");
    document.getElementById("flying-input").disabled = true;
    initCanvas();

    height = 0;
    terrainStartAnimator = setInterval(expandTerrain, 50);

    // Load Nav
    document.getElementById("navbar").classList.remove("off-screen")
    document.getElementById("navbar").classList.remove("hide")
}

function expandTerrain()
{
    height++;

    if (height >= reachHeight)
    {
        clearInterval(terrainStartAnimator);
        terrainStartAnimator = undefined;
        document.getElementById("flying-input").disabled = false;
        document.getElementById("background").classList.remove("moving");
    }
    else
    {
        flying += flyingDelta;
        drawTerrain();
    }
}

//Temp function
function fastStart()
{
    document.getElementById("title-name").classList.add("small");
    document.getElementById("start-container").classList.add("hide");
    document.getElementById("flying-setting").classList.remove("hide");
    initCanvas();

    height = reachHeight;
    drawTerrain();
    document.getElementById("flying-input").disabled = false;
    document.getElementById("background").classList.remove("moving");
}

// document.addEventListener('DOMContentLoaded', function ()
// {
//     fastStart();
// }, false);