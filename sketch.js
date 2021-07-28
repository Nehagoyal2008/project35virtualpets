//Create variables here
var dogImage,happyDogImage,database,foodS,foodStock;

function preload(){
 
  dogImage= loadImage("dogImg.png");
  happyDogImage=loadImage("dogImg1.png");
}



function setup() {
	createCanvas(500,500);
  dog=createSprite(250,200,40,40);
 dog.addImage(dogImage);
 dog.scale = 0.5

  database=firebase.database();
  var foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
 background(46,139,87);

 if(keyDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happyDogImage);
 }
 drawSprites();
  fill("black");
  text("Press up-arrow key to feed the pet !",10,20);
 
  
}

function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  database.ref('/').update({
    food:x
  })
}
