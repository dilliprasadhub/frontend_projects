
let cards =[]



let hasBlackJack = false;
let isAlive=true;
let message=""

let ele = document.getElementById("message")

let sum_el = document.getElementById("sum_el")

let card_el = document.getElementById("card_el")

let player = {
    name:"dilli",
    chips:145
}

let player_el = document.getElementById("player_el")
player_el.textContent = player.name+ " : $"+player.chips

function getRandomCard(){
    let randomnumber = Math.floor(Math.random()*13)+1
    if (randomnumber > 10){
        return 10
    }
    else if (randomnumber == 1) {
        return 11
    }
    else {
        return randomnumber
    }
}

function start_game(){
    isAlive = true
    let first_card = getRandomCard()
    let second_card = getRandomCard()
    cards = [first_card,second_card]
    sum = first_card+second_card
    render_game()
}


function render_game(){

    card_el.textContent = "Cards :"
    for (let i=0; i<cards.length;i++){
        card_el.textContent+=cards[i]+" "
    }

    sum_el.textContent="Sum : "+sum
    if(sum<=20){
    message="Do you want to draw a new card ?"
    }
    else if (sum===21){
        message = "You got a Black jack"
        hasBlackJack=true
    }
    else {
        message="You're out of the game !"
        isAlive=false
    }
    ele.textContent=message

}
function new_card() {
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        render_game()
    }
    

}
