const wordEl = document.getElementById('word');
const wronglettersEl = document.getElementById('wrong-letters-container');
const playAgainBtn = document.getElementById('play-again');
const popup = document.getElementById('popup-container');
const finalMessage = document.getElementById('final-message');
const notification = document.getElementById('notification');

const figure = document.querySelectorAll('.figure');

const words = ['application','business','manage','gillian','interface'];

let selectedWord = words[Math.floor(Math.random()*words.length)];
const correctLetters = [];
const wrongLetters = [];

function DisplayWord(){
    wordEl.innerHTML = `${selectedWord.split('').map(letter => `
        <span class="letter">
            ${correctLetters.includes(letter) ? letter : ''}
        </span>`).join('')
    }`;
    const innerWord = wordEl.innerText.replace(/\n/g,'');
    if (innerWord === selectedWord){
        finalMessage.innerText = 'Congratulations! You Won 😎';
        popup.style.display = 'flex';
    }
}
DisplayWord();

function updateWrongLetters(){
    wronglettersEl.innerHTML = `
        ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
        ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;

    figure.forEach((part,index) => {
        const error = wrongLetters.length;
        if(index < error){
            part.style.display = 'block';
        }
        else{
            part.style.display = 'none';
        }
    })

    if(wrongLetters.length == figure.length){
        finalMessage.innerText = 'Sorry, You lost. 😥';
        popup.style.display = 'flex';
    }
}

function showNotification(){
    notification.classList.add('show');
    setTimeout(()=>{
        notification.classList.remove('show');
    },3000);
}

window.addEventListener('keydown', (e) => {
    if(e.keyCode >= 65 && e.keyCode <= 90){
        const letter = e.key;
        if(selectedWord.includes(letter)){
            if(!correctLetters.includes(letter)){
                correctLetters.push(letter);
                DisplayWord();
            }
            else{
                showNotification();
            }
        }else{
            // displayFigure();
            if(!wrongLetters.includes(letter)){
                wrongLetters.push(letter);
                updateWrongLetters();
            }else{
                showNotification();
            }
            
        }
        
    }
})

playAgainBtn.addEventListener('click', () => {
    correctLetters.splice(0);
    wrongLetters.splice(0);

    selectedWord = words[Math.floor(Math.random()*words.length)];

    DisplayWord();
    updateWrongLetters();

    popup.style.display = 'none';
})

