const audio = document.getElementById('audio');
const img = document.getElementById('img');
const title = document.getElementById('title');
const play = document.getElementById('play');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const music_container = document.getElementById('music-container');

const songs = ['Baa Maleye Baa','Motherboard','Tu Tu Hai Wahi'];
let songIndex = 1;

function loadSong(song){
    // title.innerText = song;
    audio.src = `music/${song}.mp3`;
    img.src = `images/${song}.png`;
}

loadSong(songs[songIndex]);

function playsong(){
    music_container.classList.add('play');
    audio.play();
    play.innerHTML = `&#x23F8`;
}
function pauseSong(){
    music_container.classList.remove('play');
    audio.pause();
    play.innerHTML = `&#9654`;
}

function playPrevious(){
    songIndex --;
    if(songIndex < 0)
        songIndex = songs.length - 1;
    loadSong(songs[songIndex]);
    playsong();
}
function playNext(){
    songIndex++;
    if(songIndex > songs.length - 1)
        songIndex = 0;
    loadSong(songs[songIndex]);
    playsong();
}

play.addEventListener('click', () => {
    const isPlaying = music_container.classList.contains('play');
    if(isPlaying){
        pauseSong();
    }
    else{
        playsong();
    }
});

previous.addEventListener('click',playPrevious);
next.addEventListener('click',playNext);
audio.addEventListener('ended',playNext);
