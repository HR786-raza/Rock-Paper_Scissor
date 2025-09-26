const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
const resultEl = document.getElementById("result");
const roundInfoEl = document.getElementById("round-info");

const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;
const maxRounds = 5;
let gameStarted = false;

function RandomChoice() {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function clearHighlights() {
    choices.forEach(choice => {
        document.getElementById(choice).className = "choice";
    });
}

function start() {
    reset();
    gameStarted = true;
    document.getElementById("start-btn").disabled = true;
    roundInfoEl.textContent = `Round ${roundCount + 1} of ${maxRounds}`;
}

function playerPick(playerChoice) {
    if (!gameStarted || roundCount >= maxRounds) return;

    clearHighlights();

    const computerChoice = RandomChoice();
    document.getElementById(playerChoice).classList.add("player");
    document.getElementById(computerChoice).classList.add("computer");

    if (playerChoice === computerChoice) {
        resultEl.textContent = "🤝 It's a Draw!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        resultEl.textContent = "🎉 You Win!";
    } else {
        computerScore++;
        resultEl.textContent = "💻 Computer Wins!";
    }

    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;

    roundCount++;
    if (roundCount < maxRounds) {
        roundInfoEl.textContent = `Round ${roundCount + 1} of ${maxRounds}`;
    } else {
        endGame();
    }
}

function endGame() {
    gameStarted = false;
    document.getElementById("start-btn").disabled = false;

    if (playerScore > computerScore) {
        alert("🎉 You won the match!");
    } else if (playerScore < computerScore) {
        alert("💻 Computer won the match!");
    } else {
        alert("🤝 Match draw!");
    }

    roundInfoEl.textContent = "Match Over";
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    roundCount = 0;
    gameStarted = false;

    playerScoreEl.textContent = "0";
    computerScoreEl.textContent = "0";
    resultEl.textContent = "";
    roundInfoEl.textContent = "";
    clearHighlights();
    document.getElementById("start-btn").disabled = false;
}
