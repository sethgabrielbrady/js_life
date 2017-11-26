const MoveDist = 20;
const MoveSpeed = 50;

let ball = document.getElementById("ball");
let yPos = document.getElementById("yPos");
let xPos = document.getElementById("xPos");
let windowDim = document.getElementById("windowDim");
let viewportOffset = ball.getBoundingClientRect();
let ballTop = viewportOffset.top;
let ballLeft = viewportOffset.left;
let w = window.innerWidth;
let h = window.innerHeight;

windowDim.innerHTML = "Width:  " + w +"  Height:  " + h;

let startFunction = function(){

  setInterval(function(){
    let rand = Math.floor((Math.random() * 4) + 1);
    yPos.innerHTML = "Y pos: " + ballLeft;
    xPos.innerHTML = "X pos: " + ballTop;

    //will stop everything if the bug manages to go beyond the boundaries
    if (ballLeft >= w || ballLeft <= 0){
      return 0;
    }
    if (ballTop >= h || ballTop <= 0){
      return 0;
    }

    if (rand === 1){
      if (ballLeft <= 50){
        ballLeft = ballLeft + MoveDist;
      }else{
        ballLeft = ballLeft - MoveDist;
      }
      ball.setAttribute("style","left:" + (ballLeft) + "px; top:"+ ballTop+"px;");
    }else if (rand === 2){
      if (ballLeft >= w - 50){
        ballLeft = ballLeft - MoveDist;
      }else{
        ballLeft = ballLeft + MoveDist;
      }
      ball.setAttribute("style","left:" + (ballLeft) + "px; top:"+ ballTop+"px;");
    }else if (rand === 3){
      if (ballTop >= h - 50){
        ballTop = ballTop - MoveDist;
      }else {
        ballTop = ballTop + MoveDist;
      }
      ball.setAttribute("style","top:" + (ballTop) + "px; left:"+ ballLeft+"px;");
    }else if (rand === 4){
      if (ballTop <= 50){
        ballTop = ballTop + MoveDist;
      }else{
        ballTop = ballTop - MoveDist;
      }
      ball.setAttribute("style","top:"+ (ballTop) + "px; left:"+ ballLeft+"px;");
    }
  }, MoveSpeed);
};


// Step 1 -COMPLETE
// (X) Get the current coordinates of the ball.
// (X) Move the ball into a random spot based on the its current position
// (X) Do this every 2 seconds

// Step 2
// Notes- the bugs should be turned into objects with constructor
// (X) Add boundaeries
// (:) Add the ability for multiple "bugs"
// (:) Add hit detection on the bugs
