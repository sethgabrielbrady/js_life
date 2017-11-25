let ball = document.getElementById("ball");
let moveDist = 20;
var xPos = 0;
var yPos = 0;

var startFunction = function(){
  let rand = Math.floor((Math.random() * 4) + 1);
  let x = xPos;
  let y = yPos;

  if (rand === 1){
    yPos = y + moveDist;
    ball.setAttribute("style","left:" + (y + moveDist)+"px;");
  }else if (rand === 2){
    yPos = y - moveDist;
    ball.setAttribute("style","left:" + (y - moveDist) +"px;");
  }else if (rand === 3){
    xPos = x - moveDist;
    ball.setAttribute("style","top:" + (x - moveDist) +"px;");
  }else if (rand === 4){
    xPos = x + moveDist;
    ball.setAttribute("style","top:"+ (x + moveDist) +"px;");
  }
};


// To DO

// : Get the current coordinates of the ball.
// : Move the ball into a random spot based on the its current position
// : Do this every 2 seconds


// Helper function to get an element's exact position
function getPosition(el) {
  while (el) {
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = el.scrollTop || document.documentElement.scrollTop;

      xPos += (el.offsetLeft - xScroll + el.clientLeft);
      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      // for all other non-BODY elements
      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }

    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };
}

// deal with the page getting resized or scrolled
// window.addEventListener("scroll", updatePosition, false);
// window.addEventListener("resize", updatePosition, false);
