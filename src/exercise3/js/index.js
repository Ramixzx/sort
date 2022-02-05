let pintaL = document.querySelector('#card-span1')
let pintaR = document.querySelector('#card-span2')
let numberCard = document.querySelector('#numberCard')

let pintas = ['♦', '♥', '♠', '♣'];
let cards = ['As', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const newCard = (callback) => {
    let random1 = callback(0, (cards.length));
    let random2 = callback(0, (pintas.length));

    for(let i = 0; i < cards.length; i++){
        if(i == random1){
            numberCard.textContent = cards[random1];
        }
    }

    for(let i = 0; i < pintas.length; i++){
        if(i == random2){
            if(random2 == 0 || random2 == 1){
                pintaL.textContent = pintas[random2];
                pintaR.textContent = pintas[random2];
                pintaL.style.color = 'red'            
                pintaR.style.color = 'red'            
            }
            pintaL.textContent = pintas[random2];
            pintaR.textContent = pintas[random2];  
        }
    }
}

function loading (){
    newCard(randomNumber);
}

