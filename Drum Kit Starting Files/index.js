var key;

let obj = {
    "w": "./sounds/crash.mp3",
    "s": "./sounds/kick-bass.mp3",
    "a": "./sounds/snare.mp3",
    "d": "./sounds/tom-1.mp3",
    "j": "./sounds/tom-2.mp3",
    "k": "./sounds/tom-3.mp3",
    "l": "./sounds/tom-4.mp3",
   
   
}

let alll = document.querySelectorAll(".drum");

let n = alll.length;

for (let i = 0; i < n; i++) {
    // var element = document.querySelectorAll(".drum")[i];
    alll[i].addEventListener("click", function () {
        MakeSound(this.innerHTML);
    }
    );
}


document.addEventListener("keypress", function (event) {
    MakeSound(event.key);
})

function MakeSound(key) {
    var sound1 = new Audio(obj[key]);
        sound1.play();
}