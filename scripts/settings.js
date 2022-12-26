function toggleFlying(e)
{
    if (e.checked)
    {
        startMovement();
    } else
    {
        stopMovement();
    }
    console.log(e.checked)
}