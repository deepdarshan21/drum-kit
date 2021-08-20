

// for (var i = 0; i < (document.querySelectorAll("button")).length; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function () {
//         alert("Clicked "+i);
//     })
// }

// sound[0].addEventListener("click", function () {
//     alert("Clicked on button: " + sound[0].innerText);
// })
// sound[1].addEventListener("click", function () {
//     alert("Clicked on button: " + sound[1].innerText);
// })
// sound[2].addEventListener("click", function () {
//     alert("Clicked on button: " + sound[2].innerText);
// })
// sound[3].addEventListener("click", function () {
//     alert("Clicked on button: " + sound[3].innerText);
// })
// sound[4].addEventListener("click", function () {
//     alert("Clicked on button: " + sound[4].innerText);
// })
// sound[5].addEventListener("click", function () {
//     alert("Clicked on button: " + sound[5].innerText);
// })
// sound[6].addEventListener("click", function () {
//     alert("Clicked on button: " + sound[6].innerText);
// })

var sound;
sound = document.querySelectorAll(".drum");
for (var i = 0; i < sound.length; i++) {
    sound[i].addEventListener("click", function () {
        switch (this.innerHTML) {
            case "w":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case "a":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
            case "s":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;
            case "d":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "j":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case "k":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "l":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            default:
                break;
        }
        buttonAnimation(this.innerHTML)
    });
}

document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        default:
            break;
    }
    buttonAnimation(event.key);
});

function buttonAnimation(currentKey){
    document.querySelector("."+currentKey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+currentKey).classList.remove("pressed");
    }, 500);
}