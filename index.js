import prompt from "readline-sync";
import wordBank from "./word-bank.js";
/*console.log(wordBank[0]);
let feedback = prompt.question("How's it going? ");
console.log(feedback);
if (feedback === "Good") {
  console.log("I'm glad!");
} else {
  console.log("I'm sorry to hear that");
}*/

console.log("\nWelcome to Hangman!\n\nTo play this game you will need to guess letters in a word - after each guess please hit the ENTER key.\nYou will get 6 tries to complete the word and build the hangman.\nIf you would like to stop the game at any point you can:\nPRESS ctrl+c to stop the game.\n\nGood Luck & Enjoy!!\n");


/*pick a ramdom word from the wordbank.......display underscores in place of the letters that equal the string lenght*/
let pickRandomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(pickRandomWord);

const answer = [];
/*input = answer.toLowerCase();*/
for (let a = 0; a < pickRandomWord.length; a++) {
  answer[a] = "_";

}

const guess = [];
const guesses = [];
const correctGuess = [];
const guessesRemaining = [];
const remainingLetters = [];
const hasWon = [];


/*let picked = pickRandomWord;................how many letters...*/
/*const pickedS = pickRandomWord[];*/
/*for (let a = 0; a = pickRandomWord.length; a++) {
  answer[a] = "_";*/
  /*console.log(`${a+1}  ${answer}`);
}*/

const pickedRandomWord = (pickedRandomWord, a) => {
  console.log(`${a+1}  ${picked}`);

};

let picked = pickRandomWord;
const countNumberOfLetters = (picked) => {
  let str = '${picked}';
  return str.length + "_ ";
  
  };

/*display how many letters are left for the guesser and display a message...maybe at the end of the loop??*/
/*const guessedWrong =*/ 
const lettersLeftToGuess = pickRandomWord.length;

let numberOfIncorrectGuesses = [];

/*Now create a loop for the letters left based on what was guessed but they have to have a space in between so it looks like the hangman game*/
while (lettersLeftToGuess <= 6) {
/*while (lettersLeftToGuess || numberOfIncorrectGuesses <=6 ) {*/
/*while (lettersLeftToGuess >= 6 && guessedWrong <= 6)*/ 
    console.log(answer.join(" "));
    (answer.join(" "));
    let guess = prompt.question("\n\nRandom word has been selected - now you can guess a letter & hit enter.  \nPlease remember..... you can PRESS ctrl+c to stop the game at anytime.\n\n");
    guess = guess.toLowerCase();


/*account for conditions that are unexpected??  - nothing entered/two things entered? what am i forgetting??*.....how to exit out of game if error occurs?*/

    if (guess === null) {
      break;
    }
    else if (guess.length !== 1) {
      prompt.question("please enter a single letter only:  ");
    }
    else {
      for (let g = 0; g < pickRandomWord.length; g++) {
          if (pickRandomWord[g] === guess && answer[g] === "_");
            /*updating the answer with the letter they guessed (which is "g") when it is in the randomly picked word*/
            answer[g] = guess;
            /*could I use indexof.() + 1
            /*This counts as their first guess but they get 6 guess....count down from 6 & display a message??
            in addition...I need to start building the hangman when they are correct quesses put in place.....
            so when the letter matches and goes into place a piece of the hangman is displayed as well...substract the remaining letters...*/
            lettersLeftToGuess-1;
          }
      }
      if (correctGuess == 1) {
        console.log("Great job! + 'guess' + is in the word.\n");
      } else {
          guesses-1;
          console.log("\nSo Sorry + 'guess' + is not in the word.\n");
          console.log("You have + 'guesses' + left to use.\n");
        }
    if (lettersLeftToGuess == 0) {
        console.log ("\nYou Won!! ~~ Great Job!!\n");
        break;
    }
    /*if (guessesRemaining = 0) {
        console.log("\nSorry ~ you have lost the game\n");

    }*/
}

/*prompt.answer.join(" ");
console.log("Great Job - you guessed the word: + pickedRandomWord");*/


/*need to add in ....when the guesser gets the word correct or they did not get the word correct?..
I believe this would be invoked outside of the loop once the word is correct and they built the hangman or they lost with too many guesses??*/





/*let L = 0;
while (L <= 6) { L++;
  console.log ("Please guess a letter:")

}
console.log(L);*/

/*const incorrectGuess = 0;
while */

/*const pickedGuess = (picked) => {
  console.log(picked)*/


