//Create variables here
var dog,dogImg,happydogImg;
var foodS, foodStock;
var x;


function preload()
{
	//load images here
  happydogImg = loadImage("images/dogImg1.png");
  dogImg = loadImage("images/dogImg.png");
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);

  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale="0.1";
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  
}

function readStock(data){
foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}

function draw() {  
background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happydogImg);

  }

  drawSprites();
  //add styles here
  fill ("white");
text("Note: Press UP_ARROW key to feed the phill Milk!",100,20)
text("Food in stock "+foodS,100,50);

}



