const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const scoreElement = document.getElementById("score");
const bestScoreElement = document.getElementById("bestScore");

const startScreen = document.getElementById("startScreen");
const gameOverScreen = document.getElementById("gameOver");

const finalScoreElement = document.getElementById("finalScore");

const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");


/* GAME SETTINGS */

const gridCount = 20;

let cellSize;

let snake;
let food;

let direction;
let nextDirection;

let score = 0;

let gameRunning = false;
let paused = false;

let gameLoop;

let bestScore =
    Number(localStorage.getItem("snakeBestScore")) || 0;

bestScoreElement.textContent = bestScore;


/* ================================= */
/* RESPONSIVE CANVAS */
/* ================================= */

function resizeCanvas() {

    const gameArea = document.querySelector(".game-area");

    const availableWidth =
        gameArea.clientWidth - 10;

    const availableHeight =
        gameArea.clientHeight - 10;

    /*
       Board will NEVER exceed:
       - available width
       - available height
    */

    const size = Math.min(
        availableWidth,
        availableHeight,
        650
    );

    canvas.width = size;
    canvas.height = size;

    cellSize = size / gridCount;

    drawGame();
}


/* ================================= */
/* INITIAL GAME */
/* ================================= */

function initializeGame() {

    snake = [
        { x: 10, y: 10 },
        { x: 9, y: 10 },
        { x: 8, y: 10 }
    ];

    direction = {
        x: 1,
        y: 0
    };

    nextDirection = {
        x: 1,
        y: 0
    };

    score = 0;

    scoreElement.textContent = score;

    createFood();

    resizeCanvas();
}


/* ================================= */
/* CREATE FOOD */
/* ================================= */

function createFood() {

    let validPosition = false;

    while (!validPosition) {

        food = {
            x: Math.floor(Math.random() * gridCount),
            y: Math.floor(Math.random() * gridCount)
        };

        validPosition = !snake.some(
            part =>
                part.x === food.x &&
                part.y === food.y
        );
    }
}


/* ================================= */
/* START GAME */
/* ================================= */

function startGame() {

    initializeGame();

    gameRunning = true;

    paused = false;

    startScreen.style.display = "none";

    gameOverScreen.style.display = "none";

    clearInterval(gameLoop);

    gameLoop = setInterval(
        updateGame,
        120
    );
}


/* ================================= */
/* UPDATE GAME */
/* ================================= */

function updateGame() {

    if (!gameRunning || paused) {
        return;
    }

    direction = nextDirection;

    const head = {
        x: snake[0].x + direction.x,
        y: snake[0].y + direction.y
    };


    /* WALL COLLISION */

    if (
        head.x < 0 ||
        head.x >= gridCount ||
        head.y < 0 ||
        head.y >= gridCount
    ) {
        endGame();
        return;
    }


    /* SELF COLLISION */

    if (
        snake.some(
            part =>
                part.x === head.x &&
                part.y === head.y
        )
    ) {
        endGame();
        return;
    }


    snake.unshift(head);


    /* FOOD */

    if (
        head.x === food.x &&
        head.y === food.y
    ) {

        score++;

        scoreElement.textContent = score;

        createFood();

    } else {

        snake.pop();
    }


    drawGame();
}


/* ================================= */
/* DRAW GAME */
/* ================================= */

function drawGame() {

    if (!cellSize) {
        return;
    }


    /* BACKGROUND */

    ctx.fillStyle = "#111827";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    /* GRID */

    ctx.strokeStyle = "#172033";

    ctx.lineWidth = 1;

    for (let i = 0; i <= gridCount; i++) {

        const position = i * cellSize;

        ctx.beginPath();

        ctx.moveTo(position, 0);

        ctx.lineTo(
            position,
            canvas.height
        );

        ctx.stroke();

        ctx.beginPath();

        ctx.moveTo(0, position);

        ctx.lineTo(
            canvas.width,
            position
        );

        ctx.stroke();
    }


    /* FOOD */

    drawFood();


    /* SNAKE */

    snake.forEach((part, index) => {

        const padding = 2;

        const x =
            part.x * cellSize + padding;

        const y =
            part.y * cellSize + padding;

        const size =
            cellSize - padding * 2;


        ctx.fillStyle =
            index === 0
                ? "#4ade80"
                : "#22c55e";


        ctx.beginPath();

        ctx.roundRect(
            x,
            y,
            size,
            size,
            Math.max(3, cellSize * 0.2)
        );

        ctx.fill();
    });
}


/* ================================= */
/* DRAW FOOD */
/* ================================= */

function drawFood() {

    const centerX =
        food.x * cellSize +
        cellSize / 2;

    const centerY =
        food.y * cellSize +
        cellSize / 2;

    const radius =
        Math.max(4, cellSize * 0.3);

    ctx.fillStyle = "#ef4444";

    ctx.beginPath();

    ctx.arc(
        centerX,
        centerY,
        radius,
        0,
        Math.PI * 2
    );

    ctx.fill();
}


/* ================================= */
/* KEYBOARD CONTROL */
/* ================================= */

document.addEventListener(
    "keydown",
    function (event) {

        const key = event.key.toLowerCase();


        /* SPACE = PAUSE */

        if (key === " ") {

            if (gameRunning) {

                paused = !paused;
            }

            event.preventDefault();

            return;
        }


        /* R = RESTART */

        if (key === "r") {

            startGame();

            return;
        }


        /* ARROW KEYS */

        if (
            key === "arrowup" &&
            direction.y !== 1
        ) {

            nextDirection = {
                x: 0,
                y: -1
            };
        }


        if (
            key === "arrowdown" &&
            direction.y !== -1
        ) {

            nextDirection = {
                x: 0,
                y: 1
            };
        }


        if (
            key === "arrowleft" &&
            direction.x !== 1
        ) {

            nextDirection = {
                x: -1,
                y: 0
            };
        }


        if (
            key === "arrowright" &&
            direction.x !== -1
        ) {

            nextDirection = {
                x: 1,
                y: 0
            };
        }
    }
);


/* ================================= */
/* MOBILE CONTROLS */
/* ================================= */

document
    .querySelectorAll(".control[data-direction]")
    .forEach(button => {

        button.addEventListener(
            "click",
            function () {

                const dir =
                    this.dataset.direction;


                if (
                    dir === "up" &&
                    direction.y !== 1
                ) {

                    nextDirection = {
                        x: 0,
                        y: -1
                    };
                }


                if (
                    dir === "down" &&
                    direction.y !== -1
                ) {

                    nextDirection = {
                        x: 0,
                        y: 1
                    };
                }


                if (
                    dir === "left" &&
                    direction.x !== 1
                ) {

                    nextDirection = {
                        x: -1,
                        y: 0
                    };
                }


                if (
                    dir === "right" &&
                    direction.x !== -1
                ) {

                    nextDirection = {
                        x: 1,
                        y: 0
                    };
                }
            }
        );
    });


/* ================================= */
/* GAME OVER */
/* ================================= */

function endGame() {

    gameRunning = false;

    clearInterval(gameLoop);

    finalScoreElement.textContent = score;


    if (score > bestScore) {

        bestScore = score;

        localStorage.setItem(
            "snakeBestScore",
            bestScore
        );

        bestScoreElement.textContent =
            bestScore;
    }


    gameOverScreen.style.display = "block";
}


/* ================================= */
/* BUTTONS */
/* ================================= */

startBtn.addEventListener(
    "click",
    startGame
);

restartBtn.addEventListener(
    "click",
    startGame
);


/* ================================= */
/* SCREEN RESIZE */
/* ================================= */

window.addEventListener(
    "resize",
    resizeCanvas
);


/* ================================= */
/* INITIAL LOAD */
/* ================================= */

initializeGame();