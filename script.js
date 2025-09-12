let randomNumber = Math.floor(Math.random() * 100 + 1)

const userInput = document.querySelector("#guessInput")
const submit = document.querySelector("#submitBtn")
const feedback = document.querySelector("#feedback")
const remaining = document.querySelector("#remaining")
const prevGuesses = document.querySelector("#guessList")
const startOver = document.querySelector(".desc")

let count = 0
let playGame = true

const button = document.createElement("button")

if(playGame) {
    submit.addEventListener('click', function(e) {

        e.preventDefault() 
        const guessValue = parseInt(userInput.value)

        // console.log(guessValue);

        validateGuess(guessValue)

    })
}

function validateGuess(guess){

    if(isNaN(guess)){
        alert("Please, Give a Valid Number!")
        userInput.value =''
        return
    } else if(guess <= 0){
        alert("Number must be 1 or greater than 1")
        userInput.value =''
        return
    }else if(guess > 100){
        alert("Number must be 100 or less ")
        userInput.value =''
        return
    } 
    
    else {
        if( count >= 10) {
            displayMessage(`Game Over! . The Correct number is ${randomNumber}`)
            endGame()
        } else {
            
            checkGuess(guess);
            displayGuess(guess)

        }
    }

}


function checkGuess(guess){

    if(guess === randomNumber) {
        displayMessage(`Congrats for guessing the correct no!`)
        endGame()
    } else if(guess < randomNumber) {
        displayMessage(`The Number is Too Low!`)
    } else if(guess > randomNumber) {
        displayMessage(`The Number is Too High!`)
    }
}

function displayMessage(message){
    feedback.innerHTML = `${message}`
}


function displayGuess(guess){
    count++;
    userInput.value = '';
    prevGuesses.innerHTML += `${guess}  `
    remaining.innerHTML = `${ 10 - count}`
}

function endGame(){
    userInput.value = ''
    submit.setAttribute("disabled" ,"")
    userInput.setAttribute("disabled", "")
    button.textContent = `Start Game`
    button.classList.add("newGame")
    startOver.appendChild(button)
    playGame = false
    startGame()
}


function startGame(){
    const startNew = document.querySelector(".newGame")

    startNew.addEventListener('click', (e) => {
        e.preventDefault()
       
       userInput.removeAttribute("disabled", "")
       submit.removeAttribute("disabled", "")
        randomNumber = Math.floor(Math.random() * 100 + 1)

        count = 0
        prevGuesses.innerHTML = ` `
        remaining.innerHTML = `10`
        feedback.innerHTML = ``
        startOver.removeChild(button)
        playGame = true
    })

}


