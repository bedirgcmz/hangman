/** DOM element */
const wordArea = document.querySelector(".word-area")
const popupContainer = document.querySelector(".popup-container")
const popup = document.querySelector(".popup")
const successMessage = document.querySelector(".success-message")
const popupBackground = document.querySelector(".popup-background")
const errorArea = document.querySelector(".error-area")
const partOfPicture = document.querySelectorAll(".part-of-picture")
const repeatLetter = document.getElementById('repeat-letter')
const playAgainButton = document.querySelector(".play-again")

/**  Variables */
const correctLetters = []
const wrongLetters = []

const getRandomWord = () => {
    const wordList = ["javascript", "java", "css", "html", "bootstrap", "react", "angular"]
    return wordList[Math.floor(Math.random() * wordList.length)]
}
let selectedWord = getRandomWord();

const displayWord = () => {

    wordArea.innerHTML = `
    ${selectedWord.split('').map(letter => `
    <div class="letter">${correctLetters.includes(letter) ? letter : ''}</div>
    `).join('')}
    `;

    const guessWord = wordArea.innerText.replace(/\n/g, '');
    if (guessWord === selectedWord) {
        successMessage.innerText = 'Congratulations, You Won';
        popup.classList.remove('lost')
        popup.classList.add('win')
        popupContainer.style.display =  'flex';
        popupBackground.style.display =  'flex';
    }
}

const updateWrongLetter = () => {
    errorArea.innerHTML = `
    ${wrongLetters.length > 0 ? `<h3>Wrong Letter</h3>`: ''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`).join(' - ')}
    `
    partOfPicture.forEach((item, index) => {
        const errorCount = wrongLetters.length;
        if (index < errorCount) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
    
    if (wrongLetters.length === partOfPicture.length) {
        successMessage.innerText = "I'm sorry, you lost";
        popup.classList.remove('win')
        popup.classList.add('lost')
        popupContainer.style.display =  'flex';
        popupBackground.style.display =  'flex';
        
    }

}

const repeatLetterMessage = () => {
    repeatLetter.classList.add('show')

    setTimeout (() => {
    repeatLetter.classList.remove('show')
    }, 2000)
}

playAgainButton.addEventListener("click", () => {
    correctLetters.splice(0)
    wrongLetters.splice(0)
    selectedWord = getRandomWord()
    displayWord()
    updateWrongLetter()
    popupContainer.style.display = 'none'
    popupBackground.style.display = 'none'
})

window.addEventListener('keydown', function (e) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        const enteredLetter = (e.key).toLowerCase();

        if (selectedWord.includes(enteredLetter)) {
            if (!correctLetters.includes(enteredLetter)) {
                correctLetters.push(enteredLetter)
                displayWord();
            }else {
                repeatLetterMessage()
            }   
        } else {
            if (!wrongLetters.includes(enteredLetter)){
                wrongLetters.push(enteredLetter)
                updateWrongLetter()
            }else {
                repeatLetterMessage()

            }   
        }
    } 
})


displayWord()