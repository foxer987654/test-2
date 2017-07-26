setInterval(annoy, 60000);

function annoy() {
  var audio = new Audio('/sounds/elk.mp3');
  audio.play();
}

var button = document.getElementById("start_noise")
button.addEventListener("click", annoy)
