
// - - - - - - - - - - || IMPORT OBJECTS || - - - - - - - - - - //
import { Keyboard } from "./keyboard.js";
import { Hangman } from "./hangman.js";
import { Word } from "./word.js";

// - - - - - - - - - - || CALLING CLASSES || - - - - - - - - - - //
const keyboard = new Keyboard();
const hangman = new Hangman();
const word = new Word();

var wrongGuesses = 0;
var maxGuesses = 6;
var currentWord;

// - - - - - - - - - - || FUNCTIONS || - - - - - - - - - - //
function displayWord()
{
    const wordContainer = document.getElementById('word_container');
    const hintContainer = document.getElementById('hint_container');

    //Get a random word and hint . . . 
    const randomWord = word.wordList[Math.floor(Math.random() * word.wordList.length)];

    currentWord = randomWord.word;
    console.log(randomWord.word);

    //Display word . . .
    wordContainer.innerHTML = randomWord.word.split("").map(() => `<div class="word_letter">_</div>`).join("");

    //Display hint . . .
    const span = document.createElement("span");
    span.textContent = "(" + randomWord.hint + ")";
    hintContainer.appendChild(span);
}


// function displayKeyboard()
// {
//     const keyboardContainer = document.getElementById('keyboard_container');
//     const generatedKeyboard = keyboard.createKeyboard();

//     generatedKeyboard.map(keyboard => {

//         const div = document.createElement("div");
//         div.classList = "letter_box";
    
//         const span = document.createElement("span");
//         span.textContent = keyboard.letter;
    
//         div.appendChild(span);
//         keyboardContainer.appendChild(div);
    
//         //Click letter . . .
//         div.addEventListener("click", function(){
    
//             console.log("Clicking", "(" + span.textContent + ")");
//             clickCounter++;

//             if(keyboard.status === true)
//             {
//                 span.textContent = "done";
//                 div.classList = "true_letter";
//                 span.classList = "material-icons";
//             }
//             else
//             {
//                 span.textContent = "close";
//                 div.classList = "false_letter";
//                 span.classList = "material-icons";
//             }
    
//             if(clickCounter === 7)
//             {

//                 setTimeout(() => {

//                     if (confirm("- - - > GAME OVER < - - -"))
//                     {
//                         location.reload(true);
//                     }
        
//                 }, 500);

//                 clickCounter = 0;
//             }
    
//         });
    
//         /*
//         div.addEventListener("click", (e) => {

//             console.log(e.target);
    
//         });
//         */

//     });
// }

const initGame = (button, clickedLetter) => {

    const wordContainer = document.getElementById('word_container');
    const imgContainer = document.getElementById('img_container');
    const tryContainer = document.getElementById('try_container');

    if(currentWord.includes(clickedLetter))
    {
        [...currentWord].forEach((letter,index) => {

            if(letter === clickedLetter)
            {
                wordContainer.querySelectorAll("div")[index].innerText = letter;
            }
        });
    }
    else
    {
        wrongGuesses++;
        imgContainer.src = hangman.images[wrongGuesses];
    }

    button.disabled = true;
    tryContainer.textContent = `${wrongGuesses} / ${maxGuesses}`;
}

function displayKeyboard()
{
    const keyboardContainer = document.getElementById('keyboard_container');

    for(let counter = 97; counter <= 122; counter++)
    {
        const button = document.createElement("button");
        button.innerHTML = String.fromCharCode(counter);
        keyboardContainer.appendChild(button);

        button.addEventListener("click", e => initGame(e.target, String.fromCharCode(counter)));
    }
}

displayWord();

//displayHangman();
displayKeyboard();
