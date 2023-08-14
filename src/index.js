// - - - - - - - - - - || IMPORT OBJECTS || - - - - - - - - - - //

import { Keyboard } from "./keyboard.js";
import { Image } from "./image.js";
import { Word } from "./word.js";

// - - - - - - - - - - || CALLING CLASSES || - - - - - - - - - - //

const keyboard = new Keyboard();
const image = new Image();
const word = new Word();

// - - - - - - - - - - || CALLING HTML || - - - - - - - - - - //

const keyboardContainer = document.getElementById("keyboard_container");
const attemptsContainer = document.getElementById("attempts_container");

const popUpContainer = document.getElementById("popup_container");
const imageContainer = document.getElementById("img_container");
const wordContainer = document.getElementById("word_container");

const popUpResetBtn = document.getElementById("reset_popup_btn");
const popUpCloseBtn = document.getElementById("close_popup_btn");
const resetButton = document.getElementById("reset_btn");
const closeButton = document.getElementById("close_btn");

// - - - - - - - - - - || VARIABLES || - - - - - - - - - - //

const attempts = 6;
var failedAttempts;
var correctLetters;
var currentWord;

// - - - - - - - - - - || FUNCTIONS || - - - - - - - - - - //

//Reset values . . .
const resetGame = () => {

    correctLetters = [];
    failedAttempts = 0;

    //Add source to image . . .
    imageContainer.querySelector("img").src = image.images[failedAttempts];

    //Change attempts counter . . .
    attemptsContainer.textContent = `${failedAttempts}-${attempts}`;

    //Enable each button . . .
    keyboardContainer.querySelectorAll("button").forEach(btn => btn.disabled = false);

    //Display word . . .
    wordContainer.innerHTML = currentWord.split("").map(() => `<div id="word_letter"></div>`).join("");

    //Hide popup . . .
    popUpContainer.classList.remove("show");
}

//Choose word . . .
function generateWord()
{
    //Get a random word . . .
    const randomWord = word.wordList[Math.floor(Math.random() * word.wordList.length)];

    //Put word in a variable . . .
    currentWord = randomWord.word;

    console.log(randomWord.word);

    //Reset game . . .
    resetGame();
}

//Game functionality . . .
const gameOver = (isVictory) => {

    //Delay message . . .
    setTimeout(() => {

        //Game status validation . . .
        const popUpText = isVictory ? "You found the word:" : "The correct word was:";

        //Show game status . . .
        popUpContainer.querySelector("h3").innerText = `${isVictory ? "CONGRATS!" : "GAME OVER"}`;

        //Show popup message . . .
        popUpContainer.querySelector("p").innerText = `${popUpText} ${currentWord}`;

        //Show popup . . .
        popUpContainer.classList.add("show");

    }, 300);
}

//Game functionality . . .
const setGame = (button, clickedLetter) => {

    //Check letter inside the word . . .
    if(currentWord.includes(clickedLetter))
    {
        //Create duplicate . . .
        [...currentWord].forEach((letter, index) => {

            if(letter === clickedLetter)
            {
                //Add letter to array . . .
                correctLetters.push(letter);

                //Add letter to each div . . .
                wordContainer.querySelectorAll("div")[index].innerText = letter;
            }
        });
    }
    else
    {
        //Increase counter . . .
        failedAttempts++;

        //Add source to image . . .
        imageContainer.querySelector("img").src = image.images[failedAttempts];
    }

    //Disable button . . .
    button.disabled = true;

    //Change attempts counter . . .
    attemptsContainer.textContent = `${failedAttempts}-${attempts}`;

    // - - - - - - - - - - || GANE STATUS || - - - - - - - - - - //

    //Lose condition . . .
    if(failedAttempts === attempts) return gameOver(false);

    //Win condition . . .
    if(correctLetters.length === currentWord.length) return gameOver(true);
}

//Create Keyboard . . .
function generateKeyboard()
{
    //Loop array . . .
    for(let counter of keyboard.letter)
    {
        //Create a new button . . .
        const button = document.createElement("button");

        //Add letter to button . . .
        button.innerHTML = counter;

        //Add ID to button . . .
        button.id = "keyboard_btn";

        //Add button to container. . .
        keyboardContainer.appendChild(button);

        //Add an event to button . . .
        button.addEventListener("click", e => setGame(e.target, counter));
    }
}

//Close game . . .
function closeGame()
{
    window.close();
}

// - - - - - - - - - - || CALLING FUNCTIONS || - - - - - - - - - - //

generateWord();
generateKeyboard();

// - - - - - - - - - - || BUTTONS EVENTS || - - - - - - - - - - //

popUpResetBtn.addEventListener("click", generateWord);
resetButton.addEventListener("click", generateWord);
popUpCloseBtn.addEventListener("click", closeGame);
closeButton.addEventListener("click", closeGame);