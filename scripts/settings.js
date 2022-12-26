function toggleFlying(e)
{
    if (e.checked)
    {
        startMovement();
        document.getElementById("background").classList.add("moving");
    } else
    {
        stopMovement();
        document.getElementById("background").classList.remove("moving");
    }
}

function resetToStartScreen()
{
    if (document.getElementById("title-name").classList.contains("small"))
    {

        stopMovement();
        document.getElementById("background").classList.add("moving");

        document.getElementById("title-name").classList.remove("small");
        document.getElementById("start-container").classList.remove("hide");
        document.getElementById("flying-setting").classList.add("hide");

        //uncheck flying
        document.getElementById("flying-input").checked = false;

        //Check if its animating the opening
        if (terrainStartAnimator)
        {
            clearInterval(terrainStartAnimator);
            terrainStartAnimator = undefined;
        }
        clearFrame();
    }

}