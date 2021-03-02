var gun,gunImage
var gun1,gunImage1
var fire
var zoom
var violet,indigo,blue,green,yellow,orange,red
var shooter
var colour
var car1,car1Image
var backgroundImage
var fire1,fire1Image
var firePressed=false
var resetPressed=false
function preload(){
car1Image=loadImage("images/car1.png")
dinoImage=loadImage("images/dino.png")

bluecarImage=loadImage("images/bluecar.png")
redcarImage=loadImage("images/redcar.png")
violetcarImage=loadImage("images/violetcar.png")
indigocarImage=loadImage("images/indigocar.png")
greencarImage=loadImage("images/greencar.png")
yellowcarImage=loadImage("images/yellowcar.png")
orangecarImage=loadImage("images/orangecar.png")

bluedinoImage=loadImage("images/bluedino.png")
reddinoImage=loadImage("images/reddino.png")
violetdinoImage=loadImage("images/violetdino.png")
indigodinoImage=loadImage("images/indigodino.png")
greendinoImage=loadImage("images/greendino.png")
yellowdinoImage=loadImage("images/yellowdino.png")
orangedinoImage=loadImage("images/orangedino.png")


gunImage1=loadImage("images/gun.png")

fire1Image=loadImage("images/fire.png")

gunImage=loadImage("images/4th part.png")

backgroundImage=loadImage("images/background.jpg")
}
function setup() {
  createCanvas(1200,800);

gun=createSprite(400, 650, 5, 5);
gun.scale=0.4
gun.addImage(gunImage1)

  violet=createSprite(380, 150, 20, 20);
  violet.shapeColor="violet"

  indigo=createSprite(420, 150, 20, 20);
  indigo.shapeColor="indigo"

  blue=createSprite(460, 150, 20, 20);
  blue.shapeColor="blue"

  green=createSprite(500, 150, 20, 20);
  green.shapeColor="green"

  yellow=createSprite(400, 200, 20, 20);
  yellow.shapeColor="yellow"

  orange=createSprite(440, 200, 20, 20);
  orange.shapeColor="orange"

  red=createSprite(480, 200, 20, 20);
  red.shapeColor="red"

  car1=createSprite(400,350, 20, 20)
  car1.addImage(car1Image)
  car1.scale=0.4

  shooter=createSprite(380,460,5,5)

zoom=createButton('zoom')
zoom.position(250,580,50,50)
zoom.style('border-radius','50%')
zoom.style('height','5%')
zoom.style('width','3%')
zoom.style('background-image','fire1Image')

fire=createButton('fire')
fire.position(500,580,50,50)
fire.style('border-radius','50%')
fire.style('height','5%')
fire.style('width','3%')

reset=createButton('reset')
reset.position(475,350,50,50)
reset.style('border-radius','50%')
fire.style('height','5%')
fire.style('width','3%')
}

function draw() {
  background(backgroundImage);  
  
  zoom.mousePressed(()=>{
    firePressed=true
  })
  
  if(firePressed===true){
shooter.debug=true
shooter.x=mouseX
shooter.y=mouseY
//shooter.x=gun.x
//shooter.y=gun.y-150
  }
  drawSprites();

  fire.mousePressed(()=>{

        gun.addAnimation("gun",gunImage)

        if(resetPressed===false){

            if(colour==="blue"){
            car1.addImage(bluecarImage)
            }
        
            else if(colour==="red"){
              car1.addImage(redcarImage)
            }
            else if(colour==="violet"){
              car1.addImage(violetcarImage)
            }
        
            else if(colour==="indigo"){
              car1.addImage(indigocarImage)
            }
            else if(colour==="green"){
              car1.addImage(greencarImage)
            }
            else if(colour==="yellow"){
              car1.addImage(yellowcarImage)
            }
            else if(colour==="orange"){
              car1.addImage(orangecarImage)
            }
    }
     //colouring for dino
    else{
      if(colour==="blue"){
        car1.addImage(bluedinoImage)
        }
        else if(colour==="red"){
          car1.addImage(reddinoImage)
        }
        else if(colour==="violet"){
          car1.addImage(violetdinoImage)
        }
        else if(colour==="indigo"){
          car1.addImage(indigodinoImage)
        }
        else if(colour==="green"){
          car1.addImage(greendinoImage)
        }
        else if(colour==="yellow"){
          car1.addImage(yellowdinoImage)
        }
        else if(colour==="orange"){
          car1.addImage(orangedinoImage)
        }
    }
    
    })

    reset.mousePressed(()=>{
      resetPressed=true
    car1.addImage(dinoImage)
    })
    
}

function mouseClicked(){
//picking the colours

if(shooter.isTouching(violet)){
  colour="violet"
}
else if(shooter.isTouching(blue)){
  colour="blue"
}else if(shooter.isTouching(red)){
  colour="red"
}
else if(shooter.isTouching(indigo)){
  colour="indigo"
}
else if(shooter.isTouching(green)){
  colour="green"
}
else if(shooter.isTouching(yellow)){
  colour="yellow"
}
else if(shooter.isTouching(orange)){
  colour="orange"
}

}