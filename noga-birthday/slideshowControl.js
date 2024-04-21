var lst = ["000085510023.jpg", "5b659af3-a4bc-4aef-a7a1-b3dfdea20326.mp4", "000085510004.jpg", "IMG_1259.JPEG", "IMG_2051.MP4", "IMG_7058.MOV", "IMG_3052.MOV", "IMG_1984.JPEG", "IMG_0433.MOV", "IMG_2462.MP4", "IMG_9827.JPEG", "IMG_1297.MP4", "IMG_9857.JPEG", "IMG_0040.JPG", "IMG_1680.JPG", "IMG_1932.JPEG", "dji_fly_20240208_125230_738_1707433023484_photo.jpg", "IMG_0073.JPEG", "IMG_0433.JPG", "IMG_0049.JPG", "4d886805-f494-476e-9290-e11a4ab3c684.jpg", "IMG_1556.JPEG", "IMG_2070.MOV", "IMG_0043.JPEG", "e85d41ae-a767-467b-a807-e98034914d10.jpg", "dji_fly_20240208_125236_739_1707433019352_photo.JPG", "IMG_0842.JPEG", "41772eeb-8854-41ec-8d26-b30c45be3798.jpg", "IMG_1984.MOV", "IMG_1932.MOV", "IMG_1656.MOV", "IMG_3052.JPEG", "IMG_0858.JPEG", "IMG_0595.JPEG", "IMG_0014.JPEG", "IMG_2070.JPEG", "IMG_1556.MOV", "IMG_1041.JPEG", "IMG_0396.MP4", "IMG_1784.JPG", "IMG_0073.MOV", "d270db13-9213-4365-a7f4-00582e9fc3b9.jpg", "IMG_9800.JPEG", "IMG_0386.JPEG", "A806CA12-7D63-4201-A92F-5A56DCA22278.JPG", "IMG_0303.JPEG", "IMG_0244.JPEG", "IMG_2366.MP4", "IMG_7058.JPEG", "IMG_6874.MP4", "IMG_0475.JPEG", "49FB2770-AD1F-43D0-A1C6-67E2D04CF51A.JPG", "IMG_0359.MP4", "IMG_0255.MP4", "IMG_0049.MOV", "IMG_9985.JPEG", "IMG_0152.JPEG", "IMG_1317.JPEG", "IMG_1680.MOV", "IMG_1656.JPEG", "IMG_0040.MOV", "IMG_1878.MP4", "IMG_0557.JPEG"]

function isImageFileName(fileName) {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'];
  const lowerCaseFileName = fileName.toLowerCase();
  return imageExtensions.some(extension => lowerCaseFileName.endsWith(extension));
}

function shuffleAr(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

function populateImageAndVideo() {
  var album = document.getElementById("album");

  lst.forEach(media => {
    if(isImageFileName(media)) {
      const img = document.createElement('img');
      img.classList.add("album")
      img.src = `photos/bday/${media}`;
      img.style.display = "none"
      album.appendChild(img)
    } else {
      var vid = document.createElement('video');
      vid.classList.add("album")
      vid.src = `photos/bday/${media}`;
      vid.autoplay = false;
      vid.controls = true;
      vid.style.display = "none"
      album.appendChild(vid)
    }
  })

  // album.childNodes[0].style.display = null

}

shuffleAr(lst)
populateImageAndVideo()