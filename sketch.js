const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {

    backgroundImg = loadImage("sunrise1.png");
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    
   if(backgroundImg)

    background(backgroundImg);



    Engine.update(engine);

    // write code to display time in correct format here
    


}

async function getBackgroundImg(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;

    var hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if (hour>=4 && hour<=6) {

        bgMain = "sunrise3.png";

    }

    else if (hour>=6 && hour<=8) {

        bgMain = "sunrise4.png";

    }

    else if (hour>=8 && hour<=10) {

        bgMain = "sunrise5.png";

    }

    else if (hour>=10 && hour<=12) {

        bgMain = "sunrise6.png";

    }

    else if (hour>=12 && hour<=14) {

        bgMain = "sunset7.png";

    }

    else if (hour>=14 && hour<=16) {

        bgMain = "sunset8.png";

    }

    else if (hour>=16 && hour<=18) {

        bgMain = "sunset9.png";

    }

    else if (hour>=18 && hour<=20) {

        bgMain = "sunset10.png";
        
    }
    
    else if (hour>=20 && hour<=22) {

        bgMain = "sunset11.png";
        
    }

    else if (hour>=22 && hour<=24) {

        bgMain = "sunset12.png";
        
    }

    else if (hour>=24 && hour<=2) {

        bgMain = "sunrise1.png";
        
    }

    else {

        bgMain = "sunrise2.png";
        
    }
    
    backgroundImg = loadImage(bgMain);

}
