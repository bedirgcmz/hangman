/** DOM element */
const wordArea = document.querySelector(".word-area")
const popupContainer = document.querySelector(".popup-container")
const popupBackground = document.querySelector(".popup-background")

/**  Variables */
const correctLetters = []
const wrongLetters = []

const getRandomWord = () => {
    const wordList = ["Javascript", "java", "css"]
    return wordList[Math.floor(Math.random() * wordList.length)]
}
const selectedWord = getRandomWord();

const displayWord = () => {

    wordArea.innerHTML = `
    ${selectedWord.split('').map(letter => `
    <div class="letter">${correctLetters.includes(letter) ? letter : ''}</div>
    `).join('')}
    `;

    const guessWord = wordArea.innerText.replace(/\n/g, '');
    if (guessWord === selectedWord) {
        popupContainer.style.display =  'flex';
        popupBackground.style.display =  'flex';
    }
}

window.addEventListener('keydown', function (e) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        const enteredLetter = e.key;

        if (selectedWord.includes(enteredLetter)) {
            if (!correctLetters.includes(enteredLetter)) {
                correctLetters.push(enteredLetter)
                displayWord();
            }else {
                console.log('tiklandi');
            }   
        } else {
            wrongLetters.push(enteredLetter)
            console.log('hatali harfleri guncelle')
        }
    } 
})


displayWord()


console.log(getRandomWord());


