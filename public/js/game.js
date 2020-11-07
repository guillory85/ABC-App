// Game Page

for (let i = 0; i < document.querySelectorAll(".letter").length; i++) {
    document.querySelectorAll(".letter")[i].addEventListener("click", function(){ //listened to for the div to be click
        // let sounds = new Audio('sounds/snare.mp3'); // sound that will happened once the div is clicked
        // sounds.play();

        let spanText = document.querySelectorAll("span")[i].innerText;

        let sounds = new Audio('sounds/Letter ' + spanText + '.m4a'); // sound that will happened once the div is clicked
        sounds.play();
        
        console.log(spanText);
    });
    
}
