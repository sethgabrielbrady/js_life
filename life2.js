const MoveDist = 10;
const MoveSpeed = 200;

let bugg = document.getElementById("bugg");
let yPos = document.getElementById("yPos");
let xPos = document.getElementById("xPos");
let windowDim = document.getElementById("windowDim");
let viewportOffset = bugg.getBoundingClientRect();
let buggTop = viewportOffset.top;
let buggLeft = viewportOffset.left;
let w = window.innerWidth;
let h = window.innerHeight;
let buggCount = 0;

windowDim.innerHTML = "Width:  " + w +"  Height:  " + h;

/**
 * Constructor for Bugg
 * @param       {String} type ATM, simply a user defined type-makes no dif
 * @constructor
 */
function Bugg (type){
  let rngSpeedModifier = rngControl(10);
  buggCount = buggCount + 1;

  this.type = type;
  this.number = buggCount;
  this.buggSpeed = MoveSpeed * (rngSpeedModifier/10);
}

/**
 * [Random Generator function for various]
 * @param  {Integer} number [description]
 * @return {[Integer}       [description]
 */
function rngControl(number){
  let newNum = Math.floor((Math.random() * number) + 1);
  return newNum;
}

/**
 * starts the program on button press
 * @return {null} [description]
 */
function startFunction(){
//this will need to be called insde the bugg constructor, I think...
  setInterval(function(){

    let rngMove = rngControl(4);

    yPos.innerHTML = "Y pos: " + buggLeft;
    xPos.innerHTML = "X pos: " + buggTop;

    //will stop everything if the bugg manages to go beyond the boundaries
    //may want to expand this and move into a fucntion
    if (buggLeft >= w || buggLeft <= 0){
      return 0;
    }
    if (buggTop >= h || buggTop <= 0){
      return 0;
    }

    //convert this to a switch statement
    if (rngMove === 1){
      if (buggLeft <= 50){
        buggLeft = buggLeft + MoveDist;
      }else{
        buggLeft = buggLeft - MoveDist;
      }
      bugg.setAttribute("style","left:" + (buggLeft) + "px; top:"+ buggTop+"px; border-left:4px solid yellow;");
    }else if (rngMove === 2){
      if (buggLeft >= w - 50){
        buggLeft = buggLeft - MoveDist;
      }else{
        buggLeft = buggLeft + MoveDist;
      }
      bugg.setAttribute("style","left:" + (buggLeft) + "px; top:"+ buggTop+"px; border-right:4px solid yellow;");
    }else if (rngMove === 3){
      if (buggTop >= h - 50){
        buggTop = buggTop - MoveDist;
      }else {
        buggTop = buggTop + MoveDist;
      }
      bugg.setAttribute("style","top:" + (buggTop) + "px; left:"+ buggLeft+"px; border-bottom:4px solid yellow;");
    }else if (rngMove === 4){
      if (buggTop <= 50){
        buggTop = buggTop + MoveDist;
      }else{
        buggTop = buggTop - MoveDist;
      }
      bugg.setAttribute("style","top:"+ (buggTop) + "px; left:"+ buggLeft+"px; border-top:4px solid yellow;");
    }
  }, MoveSpeed);
}



// NEXT
// add two buggs to the window
// make movespeed a part of each buggs object so that dif buggs can have variable speed


// TODO
// add elements that affect time, move speed, etc.
// add more than one bugg at a time
// Make rngMove out of 100(or more) and divide by 4 to allow for more granularity and changes.
// -- maybe add 8 way direction rather than just 4 way
//Add "food" and a sense for the bugg that increases it chances of finding it
//Add a life timer to the bugg. Food will increase the life(time) of the bugg.