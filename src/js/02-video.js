import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle((data) => {
   localStorage.setItem("videoplayer-current-time", data.seconds)
}, 1000));
player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function (seconds) {
});

