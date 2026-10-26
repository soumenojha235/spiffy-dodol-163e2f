console.log( "Spofy Music JavaScript Loaded");
let songIndex = 0;
let audioElement = new Audio('song/jhol.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');


let songs = [
    {songsName: "JHOL", filepath: "song/jhol.mp3", coverpath: "covers/jhol.jpeg"},
    {songsName: "Sukoon", filepath: "song/sukoon.mp3", coverpath: "covers/sukoon.jpeg"},
    {songsName: "KHAT", filepath: "song/Khat.mp3", coverpath: "covers/khat.jpeg"},
    {songsName: "BulBuli", filepath: "song/BulBuli.mp3", coverpath: "covers/BulBuli.jpeg"},
    {songsName: "na bole esechi", filepath: "song/na bole esechi.mp3", coverpath: "na bole esechi .jpeg"},
    {songsName: "Tumi onno groher chand", filepath: "song/tumi onno groher chand.mp3", coverpath: "covers/Tumi onno groher chand.jpeg"},
    {songsName: "Arz Kiya Hai", filepath: "song/Arz kiya hay.mp3", coverpath: "covers/Arz kiya hay.jpeg"},
    {songsName: "Tum Ho Toh(Saiyaara)", filepath: "song/Tum ho to(saiyaara).mp3", coverpath: "covers/Tum Ho Toh.jpg"},
    {songsName: "Dooron Dooron", filepath: "song/Dooron Dooron.mp3", coverpath: "covers/Dooron Dooron.jpeg"},
    {songsName: "Gehera Hua", filepath: "song/Gehera hua.mp3", coverpath: "covers/Gehera Hua.jpeg"}
]


masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
         masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
          gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', ()=>{
    

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;

})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;

})
    const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
         element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllplays();
        songIndex= parseInt(e.target.id);
        audioElement.src=songs[songIndex].filepath;
        masterSongName.innerText = songs[songIndex].songsName;
        audioElement.play();
        gif.style.opacity = 1;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
       

    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=songs.length - 1){
        songIndex = 0;
    }else{
        songIndex += 1;
    }
audioElement.src = songs[songIndex].filepath;
masterSongName.innerText = songs[songIndex].songsName;
audioElement.currentTime = 0;
audioElement.play();
   
});
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex>=songs.length - 1){
        songIndex = 0;
    }else{
        songIndex -= 1;
    }
audioElement.src = songs[songIndex].filepath;
masterSongName.innerText = songs[songIndex].songsName;
audioElement.currentTime = 0;
audioElement.play();
   
});



