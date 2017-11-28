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

function Bug (type){
  this.type = type;
}
var spaceBug = new Bug("Space Bug");
console.log(spaceBug.type);

let startFunction = function(){

  setInterval(function(){
    let rngMove = Math.floor((Math.random() * 4) + 1);
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
    if (rngMove === 1){
      if (bugLeft <= 50){
        bugLeft = bugLeft + MoveDist;
      }else{
        bugLeft = bugLeft - MoveDist;
      }
      bug.setAttribute("style","left:" + (bugLeft) + "px; top:"+ bugTop+"px; border-left:4px solid yellow;");
    }else if (rngMove === 2){
      if (bugLeft >= w - 50){
        bugLeft = bugLeft - MoveDist;
      }else{
        bugLeft = bugLeft + MoveDist;
      }
      bug.setAttribute("style","left:" + (bugLeft) + "px; top:"+ bugTop+"px; border-right:4px solid yellow;");
    }else if (rngMove === 3){
      if (bugTop >= h - 50){
        bugTop = bugTop - MoveDist;
      }else {
        bugTop = bugTop + MoveDist;
      }
      bug.setAttribute("style","top:" + (bugTop) + "px; left:"+ bugLeft+"px; border-bottom:4px solid yellow;");
    }else if (rngMove === 4){
      if (bugTop <= 50){
        bugTop = bugTop + MoveDist;
      }else{
        bugTop = bugTop - MoveDist;
      }
      bug.setAttribute("style","top:"+ (bugTop) + "px; left:"+ bugLeft+"px; border-top:4px solid yellow;");
    }
  }, MoveSpeed);
};







// (:) Add "food" and a sense for the bug that increases it chances of finding it
// (:) Add a life timer to the bug. Food will increase the life(time) of the bug.

// TODO
// add rngMoveom elements that affect time, move speed, etc.
// add more than one bug at a time
// Make rngMove out of 100(or more) and divide by 4 to allow for more granularity and changes.
// -- maybe add 8 way direction rather than just 4 way
