
var slider = document.getElementById("volume-slider");
var output = document.getElementById("volume-number");
var icon = document.getElementById("volume-image");
var submitbtn = document.getElementById("honk-btn");
var honkImage = document.getElementById("sound-image");
var hornSound = document.getElementById("horn-sound");

output.value = slider.value;

slider.oninput = function(){
    output.value = this.value;

    if (output.value == 0){
        icon.src = "./assets/media/icons/volume-level-0.svg"
        submitbtn.disabled = true;
    }
    else if (output.value <= 33){
        icon.src = "./assets/media/icons/volume-level-1.svg";
        submitbtn.disabled = false;
    }
    else if (output.value <= 67){
        icon.src = "./assets/media/icons/volume-level-2.svg";
        submitbtn.disabled = false;
    }
    else{
        icon.src = "./assets/media/icons/volume-level-3.svg";
        submitbtn.disabled = false;
    }
}

output.oninput = function(){
    slider.value = this.value
    if (output.value <= 33){
        icon.src = "./assets/media/icons/volume-level-1.svg";
    }
    else if (output.value <= 67){
        icon.src = "./assets/media/icons/volume-level-2.svg";
    }
    else{
        icon.src = "./assets/media/icons/volume-level-3.svg";
    }
}

document.getElementById("radio-air-horn").oninput = function(){
    honkImage.src = "./assets/media/images/air-horn.svg";
    honkImage.alt = "Air Horn";
    hornSound.src = "./assets/media/audio/air-horn.mp3"
}

document.getElementById("radio-car-horn").oninput = function(){
    honkImage.src = "./assets/media/images/car.svg";
    honkImage.alt = "Car Horn";
    hornSound.src = "./assets/media/audio/car-horn.mp3"
}

document.getElementById("radio-party-horn").oninput = function(){
    honkImage.src = "./assets/media/images/party-horn.svg";
    honkImage.alt = "Party Horn";
    hornSound.src = "./assets/media/audio/party-horn.mp3"
}


submitbtn.addEventListener("click", function(e){
    e.preventDefault();
    hornSound.volume = output.value/100;
    hornSound.play();
});

