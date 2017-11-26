let ball = document.getElementById("ball");
let moveDist = 20;
let viewportOffset = ball.getBoundingClientRect();
let ballTop = viewportOffset.top;
let ballLeft = viewportOffset.left;
let w = window.innerWidth;
let h = window.innerHeight;
let moveSpeed = 100;
let rand = function(){
  return Math.floor((Math.random() * 4) + 1);
};

let startFunction = function(){

  setInterval(function(){
    console.log("x:", + ballTop + "y:" + ballLeft);
    rand();

    if (rand() === 1){
      console.log("left");
      ballLeft = ballLeft - moveDist;
      if(ballLeft <= 0){
        rand();
      } else {
        ball.setAttribute("style","left:" + (ballLeft) + "px; top:"+ ballTop+"px;");
      }
    }else if (rand() === 2){
      console.log("right");
      ballLeft = ballLeft + moveDist;
      if(ballLeft >= w){
        rand();
      } else {
        ball.setAttribute("style","left:" + (ballLeft) + "px; top:"+ ballTop+"px;");
      }
    }else if (rand() === 3){
      console.log("down");
      ballTop = ballTop + moveDist;
      if(ballTop >= h){
        rand();
      } else {
        ball.setAttribute("style","top:" + (ballTop) + "px; left:"+ ballLeft+"px;");
      }
    }else if (rand() === 4){
      console.log("up");
      ballTop = ballTop - moveDist;
      if(ballTop <= 0){
        rand();
      } else {
        ball.setAttribute("style","top:"+ (ballTop) + "px; left:"+ ballLeft+"px;");
      }
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
