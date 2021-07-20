var spoon, gameOver, background
var cereal1,cereal2,cereal3,cereal4,cereal5,cereal6,cereal7

var spoonImage,gameOverImage, backgroundImage
var cereal1Image,cereal2Image,cereal3Image,cereal4Image,cereal5Image,cereal6Image,cereal7Image

function preload(){
	cereal1Image = loadImage("images/applejackscroppedcover.png")
	cereal2Image = loadImage("images/cheerioscroppedcover.png")
	cereal3Image = loadImage("images/cocoapuffscropcover.png")
	cereal4Image = loadImage("images/frostedflakescropcover.png")
	cereal5Image = loadImage("images/fruitloopscropcover.png")
	cereal6Image = loadImage("images/luckycharmscropcover.png")
	cereal7Image = loadImage("images/miniwheatscroppedcover.png")

	backgroundImage = loadImage("images/diningtablebackgroundforcerealgame.jpg")
	spoonImage = loadImage("images/spoonforcerealgame.png")
	gameOverImage = loadImage("images/gameoverpictureforcerealgame.png")
}

function setup(){

	createCanvas(1200,500)

	backGround = createSprite(50,50,600,300)
	backGround.addImage("background",backgroundImage)
	backGround.scale=(5);
	backGround.velocityX=-1

	spoon = createSprite(85,250,50,50)
	spoon.addImage("spoonpicture",spoonImage)
	spoon.scale=(0.29)

}

function draw(){
	background(0)

	if(backGround.x<0){
		backGround.x=50
	}

	drawSprites()
}