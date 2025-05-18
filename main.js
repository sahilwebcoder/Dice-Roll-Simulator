const btn = document.getElementById('btn');
const dice = document.getElementById('dice');
const list = document.getElementById('list1');
const outputDiv = document.querySelector('.output')
const outputHeading = document.querySelector('#output-heading')
const outputImg = document.querySelector('#output-dice-image')
const container = document.querySelector('.first-container')

let count = 1;

btn.addEventListener('click', () => {
    handleDiceRoll(count);
    count ++;
})



function handleDiceRoll(rollNum) {
    
    dice.classList.add('animate');
    let imageNumber = random();
    setTimeout(() => {
        dice.src = imageNumber;
        dice.classList.remove('animate');
        setTimeout(() => {
            outputShow(imageNumber, rollNum);
        }, 200)

    }, 1000)
}

function random() {
    let randomNumber = Math.floor((Math.random() * 6) + 1);
    return `./Images/dice${randomNumber}.png`;
}


function outputShow(imgNum, roll) {
    let newDiv = outputDiv.cloneNode(true);
    newDiv.classList.remove('output');
    container.appendChild(newDiv)
    newDiv.querySelector('#output-heading').innerHTML = `Roll ${roll} :-`;
    newDiv.querySelector('#output-dice-image').src = imgNum;
    outputImg.src = imgNum;
}



