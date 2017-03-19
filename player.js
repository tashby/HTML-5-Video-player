window.addEventListener('load', function() {
//Video Container
    video = document.getElementById('video');
//Progress bar container

pbarContainer = document.getElementById('pbar-container');
pbar = document.getElementById('pbar');

//Buttons container
    playButton = document.getElementById('play-button');

    video.load();
    video.addEventListener('canplay',function(){
    playButton.addEventListener('click', playOrPause, false);
    pbarContainer.addEventListener('click', skip, false);
},false);

}, false);

function playOrPause() {
    if (video.paused) {
        video.play();
        playButton.src = 'pause.png';
        update = setInterval(updatePlayer,30);
    } else {
        video.pause();
        playButton.src= 'play.png'
        window.clearInterval(update);
    }

}

function updatePlayer(){
  var percentage = (video.currentTime/video.duration)*100;
  pbar.style.width= percentage + '%';
  if(video.ended) {
    window.clearInterval(update);
    playButton.src = 'replay.png';
  }
}

function skip(ev){
    var mouseX = ev.pageX - pbarContainer.offsetLeft;
    var width = window.getComputerStyle(pbarContainer).getPropertyValue('width');

    width = parseFloat (width.substr(0, width.length - 2));

    video.currentTime = (mouseX/width)*video.duration;
}

function getFormattedTime(){
var seconds = Math.round(video.currentTime);
return seconds;

}
