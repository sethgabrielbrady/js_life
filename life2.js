const MoveDist = 10;
const BaseSpeed = 200;

let bugg = document.getElementById("bugg");
let yPos = document.getElementById("yPos");
let xPos = document.getElementById("xPos");
let windowDim = document.getElementById("windowDim");
let viewportOffset = bugg.getBoundingClientRect();
let buggXPos = viewportOffset.top;
let buggYPos = viewportOffset.left;
let x = window.innerWidth;
let y = window.innerHeight;
let buggCount = 0;
let startCount = 0;
let buggyCount = 0;

bugg.setAttribute('style', 'background-color:#052428;');//hides bugg initially
windowDim.innerHTML = "Width:  " + x +"  Height:  " + y;

//Bugg Constuctor
function Bugg (name){
  buggyCount = buggyCount + 1;
  let rngSpeedModifier;
  let rngX;
  let rngy;

  if (buggyCount > 1 ||  buggyCount < 1){
    console.log("Youve already made this bug");
  }else{
    rngX = rngControl(x);
    rngY = rngControl(y);
    rngSpeedModifier = rngControl(10);
    buggCount = buggCount + 1;
    // bugg.setAttribute("style", "top:"+rngY+"; left:"+rngX+"; background-color: green;");
  }

  this.name = name;
  this.number = buggCount;
  this.buggSpeed = BaseSpeed * (rngSpeedModifier/10);
  this.startXY = [rngX, rngY];
  this.stats = name +'s stats are: Speed: ['+ this.buggSpeed +'], ID:['+ this.number+'], XY POS: ['+ this.startXY + ']';
  console.log(this.stats);
}

//RNG Controller
function rngControl(number){
  let newNum = Math.floor((Math.random() * number) + 1);
  return newNum;
}

//Start Function
function startFunction(){
  startCount = startCount + 1;

  //BUGG movement and starting position.
  if (startCount > 1 ||  startCount <1){
    console.log("You've already started.");
  }else{
    let moveSpeed = BaseSpeed;
    //set the random position inside start
    buggYPos = rngControl(x);
    buggXPos= rngControl(y);
    console.log(buggXPos + ':' + buggYPos);

    setInterval(function(){

      let rngMove = rngControl(4);

      yPos.innerHTML = "Y pos: " + buggYPos;
      xPos.innerHTML = "X pos: " + buggXPos;

      //will stop everything if the bugg manages to go beyond the boundaries
      //may want to expand this and move into a fucntion
      if (buggYPos >= x || buggYPos <= 0){
        return 0;
      }
      if (buggXPos >= y || buggXPos <= 0){
        return 0;
      }
      //convert this to a switch statement
      if (rngMove === 1){
        if (buggYPos <= 50){
          buggYPos = buggYPos + MoveDist;
        }else{
          buggYPos = buggYPos - MoveDist;
        }
        bugg.setAttribute("style","left:" + (buggYPos) + "px; top:"+ buggXPos+"px; border-left:4px solid yellow;");
      }else if (rngMove === 2){
        if (buggYPos >= x - 50){
          buggYPos = buggYPos - MoveDist;
        }else{
          buggYPos = buggYPos + MoveDist;
        }
        bugg.setAttribute("style","left:" + (buggYPos) + "px; top:"+ buggXPos+"px; border-right:4px solid yellow;");
      }else if (rngMove === 3){
        if (buggXPos >= y - 50){
          buggXPos = buggXPos - MoveDist;
        }else {
          buggXPos = buggXPos + MoveDist;
        }
        bugg.setAttribute("style","top:" + (buggXPos) + "px; left:"+ buggYPos+"px; border-bottom:4px solid yellow;");
      }else if (rngMove === 4){
        if (buggXPos <= 50){
          buggXPos = buggXPos + MoveDist;
        }else{
          buggXPos = buggXPos - MoveDist;
        }
        bugg.setAttribute("style","top:"+ (buggXPos) + "px; left:"+ buggYPos+"px; border-top:4px solid yellow;");
      }

    }, moveSpeed);
  }

}



//The startFucntion should call the bugg Constructor (making a new bug).
//Bugg movement should be moved to the Bugg Constructor. 
//
//
//
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
