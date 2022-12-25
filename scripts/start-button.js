let terrainStartAnimator = undefined;

function startButton() {
    document.getElementById("title-name").classList.add("small");
    document.getElementById("start-container").classList.add("hide");
    initCanvas();

    height = 0;
    terrainStartAnimator = setInterval(expandTerrain, 50);
}

function expandTerrain() {
    height++;

    if (height >= reachHeight) {
        clearInterval(terrainStartAnimator);
        terrainStartAnimator = undefined;
    }
    else {
        flying += flyingDelta;
        drawTerrain();
    }
}