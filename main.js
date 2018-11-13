//canvas area

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

console.log(canvas);

//create raindrop

function Raindrop(x, y, radius, xSpeed, ySpeed) {
  this.x = x;
  this.y = y;
  this.color = "white";
  this.radius = radius;
  this.xSpeed = xSpeed;
  this.ySpeed = ySpeed;

  //update raindrop
  this.update = function() {
    //create new rain when touching bottom
    if (this.y + this.radius >= innerHeight) {
      this.y = Math.random() * 40 - 30;
    }
    //velocity
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    this.draw();
  };
  //draw raindrop
  this.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  };
}

//create array for the raindrops then push them into it
let raindropArray = [];

for (let i = 0; i < 900; i++) {
  let x = Math.random() * innerWidth;
  let y = Math.random() * innerHeight;
  let xSpeed = Math.random() * 2 - 1;
  let ySpeed = Math.random() * 5 + 3;
  let radius = 2;

  raindropArray.push(new Raindrop(x, y, radius, xSpeed, ySpeed));
}
//animation
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  for (let i = 0; i < raindropArray.length; i++) {
    raindropArray[i].update();
  }
}
animate();
