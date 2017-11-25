let ball = document.getElementById("ball");
let moveDist = 20;
var xPos = 0;
var yPos = 0;

var startFunction = function(){

  var rec = ball.getBoundingClientRect();
  // var right = rec.y - (rec.y - moveDist);
  // var left = rec.y - (rec.y + moveDist);
  // var top = rec.x - (rec.x + moveDist);
  // var bottom = rec.x - (rec.x - moveDist);

  let rand = Math.floor((Math.random() * 4) + 1);
    console.log(rand);

  if (rand === 1){
    // rec = ball.getBoundingClientRect();
    var right = rec.y - (rec.y - moveDist);
    ball.setAttribute("style","left:" + right +"px;");
    console.log("right", right);
    console.log(rec);
  }else if (rand === 2){
    // rec = ball.getBoundingClientRect();
    var left = rec.y - (rec.y + moveDist);
    ball.setAttribute("style","left:" + left +"px;");
    console.log("left", left);
    console.log(rec);
  }else if (rand === 3){
    // rec = ball.getBoundingClientRect();
    var bottom = rec.x - (rec.x - moveDist);
    ball.setAttribute("style","top:" + bottom +"px;");
    console.log("down", bottom);
    console.log(rec);
  }else if (rand === 4){
    var top = rec.x - (rec.x + moveDist);
    ball.setAttribute("style","top:"+ top +"px;");
    // rec = ball.getBoundingClientRect();
    console.log("up", top);
    console.log(rec);}

};


// To DO

// : Get the current coordinates of the ball.
// : Move the ball into a random spot based on the its current position
// : Do this every 2 seconds


// Helper function to get an element's exact position
function getPosition(ball) {
  while (ball) {
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
window.addEventListener("scroll", updatePosition, false);
window.addEventListener("resize", updatePosition, false);

function updatePosition() {
  // add your code to update the position when your browser
  // is resized or scrolled
}
