setInterval(annoy, 60000);

function annoy() {
  var audio = new Audio('/sounds/elk.mp3');
  audio.play();
}
