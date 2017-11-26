let ball = document.getElementById("ball");
let moveDist = 20;
let viewportOffset = ball.getBoundingClientRect();
let ballTop = viewportOffset.top;
let ballLeft = viewportOffset.left;
let w = window.innerWidth;
let h = window.innerHeight;
let moveSpeed = 50;



let startFunction = function(){

  setInterval(function(){
    let rand = Math.floor((Math.random() * 4) + 1);
    // console.log(rand);
    console.log("x:", + ballTop + "y:" + ballLeft);
    if (rand === 1){
      console.log("left");
      ballLeft = ballLeft - moveDist;
      ball.setAttribute("style","left:" + (ballLeft) + "px; top:"+ ballTop+"px;");
    }else if (rand === 2){
      console.log("right");
      ballLeft = ballLeft + moveDist;
      ball.setAttribute("style","left:" + (ballLeft) + "px; top:"+ ballTop+"px;");
    }else if (rand === 3){
      console.log("down");
      ballTop = ballTop + moveDist;
      ball.setAttribute("style","top:" + (ballTop) + "px; left:"+ ballLeft+"px;");
    }else if (rand === 4){
      console.log("up");
      ballTop = ballTop - moveDist;
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
