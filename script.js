const video = document.getElementById('video');
const btnPlay = document.getElementById('play');
const btnStop = document.getElementById('stop');
const progressBar = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Toggle(play/pause) video
const toggleVideoStatus = function () {
  video.paused ? video.play() : video.pause();
};

const spaceToggleVideoStatus = function (e) {
  if (e.key === ' ') toggleVideoStatus();
};

// Update play/pasue icon
const updatePlayIcon = function () {
  video.paused
    ? (btnPlay.innerHTML = '<i class="fa fa-play fa-2x"></i>')
    : (btnPlay.innerHTML = '<i class="fa fa-pause fa-2x"></i>');
};

// Update progress bar & time stamp
const updateProgress = function () {
  progressBar.value = (video.currentTime / video.duration) * 100;

  // Get minute
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) mins = '0' + mins;

  // Get seconds
  let seconds = Math.floor(video.currentTime % 60);
  if (seconds < 10) seconds = '0' + seconds;

  timestamp.innerHTML = `${mins}:${seconds}`;
};

// Set video time to progress
const setVideoProgress = function () {
  video.currentTime = (+progressBar.value * video.duration) / 100;
};

// Stop video
const stopVideo = function () {
  video.currentTime = 0;
  video.pause();
};

// Event listener
window.addEventListener('keydown', spaceToggleVideoStatus);

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

btnPlay.addEventListener('click', toggleVideoStatus);
btnStop.addEventListener('click', stopVideo);
progressBar.addEventListener('change', setVideoProgress);
