
// - - - - - - - - - - || IMPORT OBJECTS || - - - - - - - - - - //

import { Keyboard } from "./keyboard.js";
import { Hangman } from "./hangman.js";
import { Word } from "./word.js";

// - - - - - - - - - - || CALLING CLASSES || - - - - - - - - - - //

const keyboard = new Keyboard();
const hangman = new Hangman();
const word = new Word();

// - - - - - - - - - - || CALLING HTML || - - - - - - - - - - //

const keyboardContainer = document.getElementById('keyboard_container');
const wordContainer = document.getElementById('word_container');
const hintContainer = document.getElementById('hint_container');
const imgContainer = document.getElementById('img_container');
const tryContainer = document.getElementById('try_container');
const gameModal = document.getElementById("game_modal");
const playAgain = document.getElementById("play_again");

// - - - - - - - - - - || VARIABLES || - - - - - - - - - - //

var wrongGuesses;
const maxGuesses = 6;
var currentWord;
var correctLetters;

// - - - - - - - - - - || FUNCTIONS || - - - - - - - - - - //

const resetGame = () => {

    correctLetters =[];
    wrongGuesses = 0;

    imgContainer.src = hangman.images[wrongGuesses];
    tryContainer.textContent = `${wrongGuesses} / ${maxGuesses}`;

    keyboardContainer.querySelectorAll("button").forEach(btn => btn.disabled = false);

    //Display word . . .
    const wordContainer = document.getElementById('word_container');
    wordContainer.innerHTML = currentWord.split("").map(() => `<div class="word_letter">_</div>`).join("");
    gameModal.classList.remove("show");
}

function displayWord()
{
    //Get a random word and hint . . . 
    const randomWord = word.wordList[Math.floor(Math.random() * word.wordList.length)];

    currentWord = randomWord.word;
    console.log(randomWord.word);

    //Display hint . . .
    const span = document.createElement("span");
    span.textContent = "(" + randomWord.hint + ")";
    hintContainer.appendChild(span);

    resetGame();
}

const gameOver = (isVictory) => {

    setTimeout(() => {

        const modalText = isVictory ? "You found the word:" : "The correct word was:";
        gameModal.querySelector("h4").innerText = `${isVictory ? "Congrats!" : "Game Over"}`;
        gameModal.querySelector("p").innerText = `${modalText} <b>${currentWord}</b>`;
        gameModal.classList.add("show");

    }, 300);

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

    if(currentWord.includes(clickedLetter))
    {
        [...currentWord].forEach((letter,index) => {

            if(letter === clickedLetter)
            {
                correctLetters.push(letter);
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

    if(wrongGuesses === maxGuesses) return gameOver(false);
    if(correctLetters.length === currentWord.length) return gameOver(true);
}

function displayKeyboard()
{
    for(let counter = 97; counter <= 122; counter++)
    {
        const button = document.createElement("button");
        button.innerHTML = String.fromCharCode(counter);
        keyboardContainer.appendChild(button);

        button.addEventListener("click", e => initGame(e.target, String.fromCharCode(counter)));
    }
}

displayWord();
displayKeyboard();
playAgain.addEventListener("click", displayWord);
