function backHome()
{
    document.getElementById("navbar").classList.remove("off-screen");
    document.getElementById("about").classList.add("off-screen");
    document.getElementById("about").classList.remove("show");

}

function openAboutMe()
{
    document.getElementById("navbar").classList.add("off-screen");
    document.getElementById("about").classList.remove("hide");
    document.getElementById("about").classList.remove("off-screen");
    document.getElementById("about").classList.add("show");

}