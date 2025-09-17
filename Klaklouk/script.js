
function rollDice(){
    const diceNumber = document.getElementById("diceNumber").value;
    const diceResult = document.getElementById("diceResult");
    const diceImage = document.getElementById("diceImage");

let values = [];
let images = [];

    for(let i = 0; i < diceNumber ; i++){
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="icons/${value}.png" alt="Dice">`);
    }

    diceResult.textContent = `គ្រាប់​លេខ ${values.join(", ")}`;
    diceImage.innerHTML = images.join('');
}