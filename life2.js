let ball = document.getElementById("ball");
let yPos = document.getElementById("yPos");
let xPos = document.getElementById("xPos");
let windowDim = document.getElementById("windowDim");

let moveDist = 20;
let viewportOffset = ball.getBoundingClientRect();
let ballTop = viewportOffset.top;
let ballLeft = viewportOffset.left;
let w = window.innerWidth;
let h = window.innerHeight;
let moveSpeed = 50;


windowDim.innerHTML = "Width:  " +w+"  Height:  " + h;
let startFunction = function(){

  setInterval(function(){
    let rand = Math.floor((Math.random() * 4) + 1);
    yPos.innerHTML = "Y pos: " + ballLeft;
    xPos.innerHTML = "X pos: " + ballTop;

    if (ballLeft >= w || ballLeft <= 0){
      return 0;
    }
    if (ballTop >= h || ballTop <= 0){
      return 0;
    }


    // console.log(rand);
    console.log("x:", + ballTop + "y:" + ballLeft);
    if (rand === 1){
      console.log("left");
      if (ballLeft <= 50){
        ballLeft = ballLeft + moveDist;
      }else{
        ballLeft = ballLeft - moveDist;
      }
      ball.setAttribute("style","left:" + (ballLeft) + "px; top:"+ ballTop+"px;");
    }else if (rand === 2){
      console.log("right");
      if (ballLeft >= w - 50){
        ballLeft = ballLeft - moveDist;
      }else{
        ballLeft = ballLeft + moveDist;
      }
      ball.setAttribute("style","left:" + (ballLeft) + "px; top:"+ ballTop+"px;");
    }else if (rand === 3){
      console.log("down");
      if (ballTop >= h - 50){
        ballTop = ballTop - moveDist;
      }else {
        ballTop = ballTop + moveDist;
      }
      ball.setAttribute("style","top:" + (ballTop) + "px; left:"+ ballLeft+"px;");
    }else if (rand === 4){
      console.log("up");
      if (ballTop <= 50){
        ballTop = ballTop + moveDist;
      }else{
        ballTop = ballTop - moveDist;
      }
      ball.setAttribute("style","top:"+ (ballTop) + "px; left:"+ ballLeft+"px;");
    }
  }, moveSpeed);
};


// Step 1 -COMPLETE
// : Get the current coordinates of the ball.
// : Move the ball into a random spot based on the its current position
// : Do this every 2 seconds

// Step 2
// Notes- the bugs should be turned into objects with constructor
// : Add boundaeries
// : Add the ability for multiple "bugs"
// : Add hit detection on the bugs
