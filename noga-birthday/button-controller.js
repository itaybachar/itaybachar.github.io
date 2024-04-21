var songCover= document.querySelector(".song-cover");
var photos= document.getElementById("album");
var cheese= document.querySelector('.sandwich');
var albumIndex = 0;

function cheeser() {
  cheese.classList.remove('hide');
  songCover.classList.add('hide');
  photos.classList.add('hide');
  songCover.pause()
}

function song() {
  cheese.classList.add('hide')
  songCover.classList.remove('hide');
  photos.classList.add('hide');

  songCover.play()
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
    visibleChild = nextSibling;
  } else {
    visibleChild = photos.firstElementChild
    visibleChild.style.display = null
  }

  cheese.classList.add('hide')
  songCover.classList.add('hide');
  photos.classList.remove('hide');

  songCover.pause()
  albumIndex++
}

// photos.addEventListener('click', function() {
//   shuffle()
// });