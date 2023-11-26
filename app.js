/** DOM element */
const wordArea = document.querySelector(".word-area")



const getRandomWord = () => {
    const wordList = ["Javascript", "java", "css"]
    return wordList[Math.floor(Math.random() * wordList.length)]
}

const correctLetters = ['j', 'a']
const displayWord = () => {
    const selectedWord = getRandomWord();

    wordArea.innerHTML = `
    ${selectedWord.split('').map(letter => `
    <div class="letter">${correctLetters.includes(letter) ? letter : ''}</div>
    `).join('')}
    `;

    const guessWord = wordArea.innerText(/\n/g, '');
    if (guessWord === selectedWord) {
        console.log("win")
    }
}

displayWord()


console.log(getRandomWord());


