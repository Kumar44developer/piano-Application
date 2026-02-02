const keys = document.querySelectorAll(".key");

const whiteKeys = document.querySelectorAll(".key.white");

const blackKeys = document.querySelectorAll(".key.black");

keys.forEach(key => key.addEventListener("click",handleKeyClick));

function handleKeyClick(){
    playKey(this);
}

function playKey(key){

    const keyAudio = document.getElementById(key.dataset.note); 
