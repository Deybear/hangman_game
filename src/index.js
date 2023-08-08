
// - - - - - - - - - - || IMPORT OBJECTS || - - - - - - - - - - //


import { Keyboard } from "./keyboard.js";
import { Hangman } from "./hangman.js";
//import { Panel } from "./panel.js";

// - - - - - - - - - - || CALLING CLASSES || - - - - - - - - - - //
const keyboard = new Keyboard();
const hangman = new Hangman();
//const panel = new Panel();

var clickCounter = 0;

// - - - - - - - - - - || FUNCTIONS || - - - - - - - - - - //
function displayHangman()
{
    const hangmanContainer = document.getElementById('img_container');
    const generatedHangman = hangman.changeImage();

    const img = document.createElement("img");
    img.src = hangman.images[0];
    img.classList = "generated_img";
    hangmanContainer.appendChild(img);

}

function displayKeyboard()
{
    const keyboardContainer = document.getElementById('keyboard_container');
    const generatedKeyboard = keyboard.createKeyboard();

    generatedKeyboard.map(keyboard => {

        const div = document.createElement("div");
        div.classList = "letter_box";
    
        const span = document.createElement("span");
        span.textContent = keyboard.letter;
    
        div.appendChild(span);
        keyboardContainer.appendChild(div);
    
        //Click letter . . .
        div.addEventListener("click", function(){
    
            console.log("Clicking", "(" + span.textContent + ")");
            clickCounter++;

            if(keyboard.status === true)
            {
                div.classList = "true_letter";
                span.textContent = "°o°";
            }
            else
            {
                div.classList = "false_letter";
                span.textContent = "°-°";
            }
    
            if(clickCounter === 7)
            {

                setTimeout(() => {

                    if (confirm("- - - > GAME OVER < - - -"))
                    {
                        location.reload(true);
                    }
        
                }, 500);

                clickCounter = 0;
            }
    
        });
    
        /*
        div.addEventListener("click", (e) => {

            console.log(e.target);
    
        });
        */

    });
}

displayHangman();
displayKeyboard();
