var canvas = document.getElementById("gameCanvas");
ctx = canvas.getContext("2d");


var counter = 0;
class Car {
    constructor(f, x, y, order) {
        this.f = f;
        this.x = x;
        this.y = y;
        this.order = order;
        this.width = 400;
        this.height = 250;
        this.myImg = new Image();
    }
}

var change = false;
var pinkCar = new Car('pinkCar.png', 340, 600, 2);
var blueCar = new Car('blueCar.png', 225, -300, 1);
var purpleCar = new Car('purpleCar.png', -300, 165, 3);
var yellowCar = new Car('yellowCar.png', 950, 85, 4);

var cars = [pinkCar, blueCar, purpleCar, yellowCar];

function draw(curr) {
  curr.myImg.onload = function() {
    ctx.drawImage(curr.myImg, curr.x, curr.y, curr.width, curr.height);
  }

  curr.myImg.src = curr.f;
}

function moveMyImg(curr) {
    //pink
    if (curr.f == "pinkCar.png"){
        if (curr.y >= 280) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            draw(blueCar);
            draw(purpleCar);
            draw(yellowCar);
            curr.y -= 5;
        }
    }
    //blue
    if (curr.f == "blueCar.png") {
        if (curr.y <= -35) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            draw(pinkCar);
            draw(purpleCar);
            draw(yellowCar);
            curr.y += 5;
        }
    }
    //purple
    if (curr.f == "purpleCar.png") {
        if (curr.x <= 100) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            draw(blueCar);
            draw(pinkCar);
            draw(yellowCar);
            curr.x += 5;
        }
    }
    //yellow
    if (curr.f == "yellowCar.png") {
        if (curr.x >= 485) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            draw(blueCar);
            draw(purpleCar);
            draw(pinkCar);
            curr.x -= 5;
        }
    }
}

function animateCar(curr) {
    var interval = setInterval(function() {
        draw(curr);
        moveMyImg(curr);
        if ((curr.f == "pinkCar.png" && curr.y < 280) ||
            (curr.f == "blueCar.png" && curr.y > -35) ||
            (curr.f == "purpleCar.png" && curr.x > 100) ||
            (curr.f == "yellowCar.png" && curr.x < 485)) {
            clearInterval(interval);
        }
    }, 50);
}

var count = 0;

var button = document.getElementById("start");
button.onclick = function(){
    if (count == 0) {
        canvas.style.backgroundImage = "url('./instructions.jpg')";
        button.innerHTML = "START"; 
    }
    else {
        counter = 1;
        canvas.style.backgroundImage = "url('./trafficBackground.jpg')";
        var num;
        var curr;
        for (var i = 0; i < 4; i++){
            num = Math.floor(Math.random() * (4 - i));
            curr = cars[num];
            console.log(curr);
            cars.splice(num, 1);
            animateCar(curr)
        }
    }
    count++;
}

//bleh
function moveToEnd(curr) {
    //pink
    if (curr.f == "pinkCar.png"){
        if (curr.y >= -300) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            draw(blueCar);
            draw(purpleCar);
            draw(yellowCar);
            curr.y -= 5;
        }
    }
    //blue
    if (curr.f == "blueCar.png") {
        if (curr.y <= 600) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            draw(pinkCar);
            draw(purpleCar);
            draw(yellowCar);
            curr.y += 5;
        }
    }
    //purple
    if (curr.f == "purpleCar.png") {
        if (curr.x <= 950) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            draw(blueCar);
            draw(pinkCar);
            draw(yellowCar);
            curr.x += 5;
        }
    }
    //yellow
    if (curr.f == "yellowCar.png") {
        if (curr.x >= -300) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            draw(blueCar);
            draw(purpleCar);
            draw(pinkCar);
            curr.x -= 5;
        }
    }
}

function animateCar2(curr) {
    console.log("bye")
    var interval = setInterval(function() {
        draw(curr);
        moveToEnd(curr);
        if ((curr.f == "pinkCar.png" && curr.y < -300) ||
            (curr.f == "blueCar.png" && curr.y > 600) ||
            (curr.f == "purpleCar.png" && curr.x > 950)) {
            clearInterval(interval);
        }
        else if (curr.f == "yellowCar.png" && curr.x < -300) {
            congratsText("CONGRATS! You successfully learned about Queues!");
        }
    }, 50);
}

function popupText(text) {
    ctx.fillStyle = "black";
    ctx.fillRect(canvas.width / 2 - 300,  canvas.height / 2 -24, 600, 50);

    ctx.font = "30px Britannic"; // Set font size and style
    ctx.fillStyle = "white"; // Set text color
    ctx.textAlign = "center"; // Set text alignment to center
    ctx.textBaseline = "middle"; // Set text baseline to middle
    ctx.fillText(text + "\n" + "Try again.", canvas.width / 2, canvas.height / 2); // Render the text in the center of the canvas
}

function congratsText(text) {
    ctx.fillStyle = "black";
    ctx.fillRect(canvas.width / 2 -350,  canvas.height / 2 -24, 700, 50);

    ctx.font = "30px Britannic"; // Set font size and style
    ctx.fillStyle = "white"; // Set text color
    ctx.textAlign = "center"; // Set text alignment to center
    ctx.textBaseline = "middle"; // Set text baseline to middle
    ctx.fillText(text, canvas.width / 2, canvas.height / 2); // Render the text in the center of the canvas
}

document.getElementById("blueCar").onclick = function(){
    if (counter != 0) {
        if (counter == blueCar.order) {
            animateCar2(blueCar);
            counter++;
        }
        else {
            popupText("Blue car is not next in queue.")
        }
    }
}

document.getElementById("pinkCar").onclick = function(){
    if (counter != 0) {
        if (counter == pinkCar.order) {
            animateCar2(pinkCar);
            counter++;
        }
        else {
            popupText("Pink car is not next in queue.")
        }
    }
}

document.getElementById("purpleCar").onclick = function(){
    if (counter != 0) {
        if (counter == purpleCar.order) {
            animateCar2(purpleCar);
            counter++;
        }
        else {
            popupText("Purple car is not next in queue.")
        }
    }
}

document.getElementById("yellowCar").onclick = function(){
    if (counter != 0) {
        if (counter == yellowCar.order) {
            counter++;
            animateCar2(yellowCar);
        }
        else {
            popupText("Yellow car is not next in queue.")
        }
    }
}
// if (counter == 4) {
//     popupText("CONGRATS! You successfully learned about Queues!");
// }