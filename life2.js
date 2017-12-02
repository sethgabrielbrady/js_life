const MoveDist = 10;
const BaseSpeed = 600;
const BuggPopulation = 10;

let buggC = document.getElementsByClassName("bugg");
let yPos = document.getElementById("yPos");
let xPos = document.getElementById("xPos");
let windowDim = document.getElementById("windowDim");
let buggField = document.getElementById("buggField");
let x = window.innerWidth;
let y = window.innerHeight;
let buggCount = 0;
let startCount = 0;
let buggyCount = 0;
let newBugg = 1;
windowDim.innerHTML = "Width:  " + x +"  Height:  " + y;

//Bugg Constuctor
function Bugg (name){
  buggyCount = buggyCount + 1;
  let rngSpeedModifier;
  let rngX;
  let rngy;

  rngX = rngControl(x);
  rngY = rngControl(y);
  rngSpeedModifier = rngControl(10);
  buggCount = buggCount + 1;

  this.name = name;
  this.number = buggCount;
  this.buggSpeed = BaseSpeed * (rngSpeedModifier/10);
  this.health = rngControl(10);
  this.startXY = [rngX, rngY];
  this.stats = name +'s stats are: Speed: ['+ this.buggSpeed +'], ID:['+ this.number+'], XY POS: ['+ this.startXY + '],  health: ['+ this.health + ']';
  console.log(this.stats);
  document.getElementById("count").innerHTML = buggCount;
}

//RNG Controller
function rngControl(number){
  let newNum = Math.floor((Math.random() * number) + 1);
  return newNum;
}

//Controls the random movement
function buggMovement(buggID){
  let buggMade = buggID;
  buggEL = buggID;
  buggMade = new Bugg(buggID);
  let buggNew = document.getElementById(buggEL);
  let moveSpeed = buggMade.buggSpeed;

  //set the random position inside start
  let buggYPos = rngControl(x);
  let buggXPos = rngControl(y);
  console.log(buggXPos + ':' + buggYPos);

  setInterval(function(){
    //keep this inside the setInterval function.
    let rngMove = rngControl(4);
    //stops everything if a bugs goes out of bounds
    if (buggYPos >= x || buggYPos <= 0){
      return 0;
    }
    if (buggXPos >= y || buggXPos <= 0){
      return 0;
    }

    if (rngMove === 1){
      if (buggYPos <= 50){
        buggYPos = buggYPos + MoveDist;
      }else{
        buggYPos = buggYPos - MoveDist;
      }
      buggNew.setAttribute("style","left:" + (buggYPos) + "px; top:"+ buggXPos+"px; border-left:4px solid rgb(132, 238, 159)");
    }else if (rngMove === 2){
      if (buggYPos >= x - 50){
        buggYPos = buggYPos - MoveDist;
      }else{
        buggYPos = buggYPos + MoveDist;
      }
      buggNew.setAttribute("style","left:" + (buggYPos) + "px; top:"+ buggXPos+"px; border-right:4px solid rgb(132, 238, 159)");
    }else if (rngMove === 3){
      if (buggXPos >= y - 50){
        buggXPos = buggXPos - MoveDist;
      }else {
        buggXPos = buggXPos + MoveDist;
      }
      buggNew.setAttribute("style","top:" + (buggXPos) + "px; left:"+ buggYPos+"px; border-bottom:4px solid rgb(132, 238, 159)");
    }else if (rngMove === 4){
      if (buggXPos <= 50){
        buggXPos = buggXPos + MoveDist;
      }else{
        buggXPos = buggXPos - MoveDist;
      }
      buggNew.setAttribute("style","top:"+ (buggXPos) + "px; left:"+ buggYPos+"px; border-top:4px solid rgb(132, 238, 159)");
    }

  }, moveSpeed);
}

//Start Function
function startFunction(count){
  count = BuggPopulation;
  startCount = startCount + 1;
  if (startCount > 1 ||  startCount <1){
    console.log("You've already started.");
  }else{
    let newBugg;
     for (let i = 1; i<=count; i++){
       newBugg = '<div id="bugg' + i +  '" class="bugg"><p class="buggMark">'+i+'</p></div>';
       buggField.insertAdjacentHTML('beforeend', newBugg);
       buggMovement("bugg".concat(i));
    }
  }
}
