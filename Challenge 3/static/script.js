function rpsGame(yourChoice) {
    console.log(`Your choice ${yourChoice.id}`);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    
    botChoice = numberToChoice(randToRpsInt());
    console.log(`Computer choice: ${botChoice}`)

    const results = decideWinner(humanChoice, botChoice);
    console.log(results);

    const message = finalMessage(results);
    console.log(message);

    rpsFrontEnd(humanChoice, botChoice, message)
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ["rock", "paper", "scissors"][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        "rock": {"scissors": 1, "rock": 0.5, "paper": 0},
        "paper": {"rock": 1, "paper": 0.5, "scissors": 0},
        "scissors": {"paper": 1, "scissors": 0.5, "rock": 0}
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return {yourScore, computerScore};
}

function finalMessage({yourScore, computerScore}) {
    if (yourScore === 0) {
        return {"message": "You Lost!", "color": "red"};
    } else if (yourScore === 0.5) {
        return {"message": "You Tied!", "color": "yellow"};
    } else {
        return {"message": "You Won!", "color": "green"};
    }
}

function rpsFrontEnd(humanImageChoice, computerImageChoice, finalMessage) {
    var imagesDatabase = {
        "paper": document.getElementById("paper").src,
        "rock": document.getElementById("rock").src,
        "scissors": document.getElementById("scissors").src
    }

    // Remove todas as imagens
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();

    var humanDiv = document.createElement("div");
    var botDiv = document.createElement("div");
    var messageDiv = document.createElement("div");

    humanDiv.innerHTML = `<img src='${imagesDatabase[humanImageChoice]}' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 223, 1);'>`;
    messageDiv.innerHTML = `<h2 style='color: ${finalMessage.color}; font-size: 50px;'>${finalMessage.message}</h2>`
    botDiv.innerHTML = `<img src='${imagesDatabase[computerImageChoice]}' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>`;

    document.querySelector(".flex-box-container").appendChild(humanDiv);
    document.querySelector(".flex-box-container").appendChild(messageDiv);
    document.querySelector(".flex-box-container").appendChild(botDiv);

}
