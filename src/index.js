// card options
const cardArray = [
    {
        name:"fries",
        img:"src/images/fries.png",
    },
    {
        name:"cheeseburger",
        img:"src/images/cheeseburger.png"
    },
    {
        name:"ice-cream",
        img:"src/images/ice-cream.png",
    },
    {
        name:"pizza",
        img:"src/images/pizza.png",
    },
    {
        name:"milkshake",
        img:"src/images/milkshake.png",
    },
    {
        name:"hotdog",
        img:"src/images/hotdog.png",
    },
    {
        name:"fries",
        img:"src/images/fries.png",
    },
    {
        name:"cheeseburger",
        img:"src/images/cheeseburger.png"
    },
    {
        name:"ice-cream",
        img:"src/images/ice-cream.png",
    },
    {
        name:"pizza",
        img:"src/images/pizza.png",
    },
    {
        name:"milkshake",
        img:"src/images/milkshake.png",
    },
    {
        name:"hotdog",
        img:"src/images/hotdog.png",
    },
]

cardArray.sort(() => 0.5 - Math.random());
console.log(cardArray);

const grid = document.querySelector(".grid");
let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];

function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const choiceOneId = cardsChosenIds[0];
    const choiceTwoId = cardsChosenIds[1];
    const choiceOne = cardsChosen[0];
    const choiceTwo = cardsChosen[1];

    if (choiceOneId == choiceTwoId) {
        alert("You have clicked the same image!");
        cards[choiceOneId].setAttribute('src', 'src/images/blank.png');
        cards[choiceTwoId].setAttribute('src', 'src/images/blank.png');
    } 
    else if (choiceOne === choiceTwo) {
        alert("You have found a match!");
        cards[choiceOneId].setAttribute('src', 'src/images/match-opaque.png');
        cards[choiceTwoId].setAttribute('src', 'src/images/match-opaque.png');
        cards[choiceOneId].removeEventListener('click', flipCard);
        cards[choiceTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    }
    else {
        cards[choiceOneId].setAttribute('src', 'src/images/blank.png');
        cards[choiceTwoId].setAttribute('src', 'src/images/blank.png');
        alert("Sorry, try again!");
    }
    cardsChosen = [];
    cardsChosenIds = [];

    console.log(cardsChosen);
    console.log(cardsWon);
}

function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
    }
    console.log(cardsChosenIds);
}

function createBoard() {
    for (let i = 0; i < cardArray.length; ++i) {
        const card = document.createElement("img");
        const border = document.createElement("border");
        card.setAttribute("border", "2px solid black");
        card.setAttribute("src","src/images/blank.png");
        card.setAttribute("data-id", i);
        card.addEventListener("click", flipCard)
        grid.appendChild(card);
    }
}

createBoard();