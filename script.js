function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollDice() {
    const die1 = rollDie();
    const die2 = rollDie();
    const total = die1 + die2;

    document.getElementById("die1").textContent = die1;
    document.getElementById("die2").textContent = die2;
    document.getElementById("total").textContent = total;
}

document.getElementById("rollButton").addEventListener("click", rollDice)