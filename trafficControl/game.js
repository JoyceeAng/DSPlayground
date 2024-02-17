// game.js
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let x1Pos = 0;
let y1Pos = 390;
let xSpeed = 2;
let ySpeed = 2;

let x2Pos = 1000;
let y2Pos = 420;


function draw1() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "red";
    ctx.fillRect(x1Pos, y1Pos, 20, 20);

    requestAnimationFrame(update1);
}

// function draw2() {
//     ctx2.fillStyle = "yellow";
//     ctx2.fillRect(x2Pos, y2Pos, 20, 20);

//     requestAnimationFrame(update2);
// }

function update1() {
    if (x1Pos < 300) {
        x1Pos += xSpeed;
    }

    // x2Pos += xSpeed;

    if (x1Pos + 20 > canvas.width || x1Pos < 0) {
        xSpeed = -xSpeed;
    }
    if (y1Pos + 20 > canvas.height || y1Pos < 0) {
        ySpeed = -ySpeed;
    }

  draw1();
}

function update2() {

    // x2Pos += xSpeed;

    if (x2Pos + 20 > canvas.width || x2Pos < 0) {
        xSpeed = -xSpeed;
    }
    if (y2Pos + 20 > canvas.height || y2Pos < 0) {
        ySpeed = -ySpeed;
    }

  draw2();
}


update1();
update2();