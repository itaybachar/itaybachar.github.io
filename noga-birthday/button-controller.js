var songCover= document.querySelector(".song-cover");
var photos= document.querySelector(".album");
var cheese= document.querySelector('.sandwich');

photos.addEventListener('click', function() {
  const randomNumber = Math.floor(Math.random() * 100);
  const imageNumber = randomNumber % 10 

  const imageString = `image${imageNumber}.png`;
  photos.style.backgroundImage = `url('${imageString}')`;
});


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

function shuffle() {
  const randomNumber = Math.floor(Math.random() * 100);
  const imageNumber = randomNumber % 10 

  const imageString = `image${imageNumber}.png`;
  photos.style.backgroundImage = `url('${imageString}')`;
  cheese.classList.add('hide')
  songCover.classList.add('hide');
  photos.classList.remove('hide');

  songCover.pause()
}