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