const MoveDist = 10;
const MoveSpeed = 200;

let bug = document.getElementById("bug");
let yPos = document.getElementById("yPos");
let xPos = document.getElementById("xPos");
let windowDim = document.getElementById("windowDim");
let viewportOffset = bug.getBoundingClientRect();
let bugTop = viewportOffset.top;
let bugLeft = viewportOffset.left;
let w = window.innerWidth;
let h = window.innerHeight;

windowDim.innerHTML = "Width:  " + w +"  Height:  " + h;

let startFunction = function(){

  setInterval(function(){
    let rand = Math.floor((Math.random() * 4) + 1);
    yPos.innerHTML = "Y pos: " + bugLeft;
    xPos.innerHTML = "X pos: " + bugTop;

    //will stop everything if the bug manages to go beyond the boundaries
    if (bugLeft >= w || bugLeft <= 0){
      return 0;
    }
    if (bugTop >= h || bugTop <= 0){
      return 0;
    }

    //convert this to a switch statement
    if (rand === 1){
      if (bugLeft <= 50){
        bugLeft = bugLeft + MoveDist;
      }else{
        bugLeft = bugLeft - MoveDist;
      }
      bug.setAttribute("style","left:" + (bugLeft) + "px; top:"+ bugTop+"px; border-left:4px solid yellow;");
    }else if (rand === 2){
      if (bugLeft >= w - 50){
        bugLeft = bugLeft - MoveDist;
      }else{
        bugLeft = bugLeft + MoveDist;
      }
      bug.setAttribute("style","left:" + (bugLeft) + "px; top:"+ bugTop+"px; border-right:4px solid yellow;");
    }else if (rand === 3){
      if (bugTop >= h - 50){
        bugTop = bugTop - MoveDist;
      }else {
        bugTop = bugTop + MoveDist;
      }
      bug.setAttribute("style","top:" + (bugTop) + "px; left:"+ bugLeft+"px; border-bottom:4px solid yellow;");
    }else if (rand === 4){
      if (bugTop <= 50){
        bugTop = bugTop + MoveDist;
      }else{
        bugTop = bugTop - MoveDist;
      }
      bug.setAttribute("style","top:"+ (bugTop) + "px; left:"+ bugLeft+"px; border-top:4px solid yellow;");
    }
  }, MoveSpeed);
};


// Step 2
// Notes- the bugs should be turned into objects with constructor

// (:) Add "food" and a sense for the bug that increases it chances of finding it
// (:) Add a life timer to the bug. Food will increase the life(time) of the bug.

// Step 3
// ADding random elements that affect time, move speed, etc.
//Adding more than one bug at a time
