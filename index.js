var key;

let obj = {
    "w": "crash.mp3",
    "s": "kick-bass.mp3",
    "a": "snare.mp3",
    "d": "tom-1.mp3",
    "j": "tom-2.mp3",
    "k": "tom-3.mp3",
    "l": "tom-4.mp3",
   
   
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
