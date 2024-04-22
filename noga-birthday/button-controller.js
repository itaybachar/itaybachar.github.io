var songCover= document.querySelector(".song-cover");
var photos= document.getElementById("album");
var cheese= document.querySelector('.sandwich');
var albumIndex = 0;

function cheeser() {
  cheese.classList.remove('hide');
  songCover.classList.add('hide');
  photos.classList.add('hide');
}

function song() {
  cheese.classList.add('hide')
  songCover.classList.remove('hide');
  photos.classList.add('hide');
}

let visibleChild = null;
function shuffle() {

  if(!photos.classList.contains("hide")) {
    const nextSibling = visibleChild ? visibleChild.nextElementSibling?visibleChild.nextElementSibling:photos.firstElementChild : photos.firstElementChild;

    if (nextSibling) {
      if (visibleChild) {
          visibleChild.style.display = 'none';
      }
      nextSibling.style.display = null;
    }
    if(visibleChild.play)
      visibleChild.pause()

    if(nextSibling.play)
      nextSibling.play()

    visibleChild = nextSibling;
  } else {
    if(visibleChild == null)
      visibleChild = photos.firstElementChild
    visibleChild.style.display = null

    if(visibleChild.play)
      visibleChild.play()
  }

  cheese.classList.add('hide')
  songCover.classList.add('hide');
  photos.classList.remove('hide');

  albumIndex++
}