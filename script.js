let bass = document.getElementById("bass");
let boom = document.getElementById("boom");
let clap = document.getElementById("clap");
let roar = document.getElementById("roar");
let cymbal = document.getElementById("cymbal");
let harp = document.getElementById("harp");
let musicBox = document.getElementById("musicBox");
let crash = document.getElementById("crash");
let chord = document.getElementById("chord");

const gorilla = document.getElementById("gorilla");
const dagger = document.getElementById("dagger");
const catSlap = document.getElementById("catSlap");
const basilisk = document.getElementById("basilisk");
const foxG = document.getElementById("foxG");
const dog = document.getElementById("dog");
const dapperBaby = document.getElementById("dapperBaby");
const fish = document.getElementById("fish");
const frog = document.getElementById("frog");

document.addEventListener("keydown", (e) => {
    if (e.key == "a"){
        bass.pause();
        bass.currentTime = 0;
        bass.play();
    }    
    else if (e.key == "s"){
        boom.pause();
        boom.currentTime = 0;
        boom.play();
    }
    else if  (e.key == "d") {
        clap.pause();
        clap.currentTime = 0;
        clap.play();
    }
    else if  (e.key == "f") {
        crash.pause();
        crash.currentTime = 0;
        crash.play();
    }
    else if  (e.key == "g") {
        roar.pause();
        roar.currentTime = 0;
        roar.play();
    }
    else if  (e.key == "h") {
        cymbal.pause();
        cymbal.currentTime = 0;
        cymbal.play();
    }
    else if  (e.key == "j") {
        harp.pause();
        harp.currentTime = 0;
        harp.play();
    }
    else if  (e.key == "k") {
        musicBox.pause();
        musicBox.currentTime = 0;
        musicBox.play();
    }
    else if  (e.key == "l") {
        chord.pause();
        chord.currentTime = 0;
        chord.play();
    }
})