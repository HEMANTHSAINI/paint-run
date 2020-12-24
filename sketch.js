var START=1
var END=0
var PLAY = 2;
var END2=3;
var gamestate = 1;
var ground
var text
var stickBB,stickB
var stickBll,stickBl
var stickRR,stickR
var stickOO,stickO
var stickYY,stickY
var stickGG,stickG
var stickPP,stickP
var stickPii,stickPi
var stickWW,stickW

var backk,back
var hole111
var color1
var time=0
var EatT=0
var deaths=0
var back2,back22
function preload()
{
 
  
  backk=loadImage("max.png")
  
  back22=loadImage("download (12).jpg")
  
  back33=loadImage("download (13).jpg")
 
  text11=loadImage("text2image_M6244002_20201114_183703.png")
  
  hole111=loadImage("Blob-removebg-preview.png")
  
  color11=loadImage("1263376404656157971Spot-R.svg.med-removebg-preview.png")
   color22=loadImage("output-onlinepngtools.png")
  color33=loadImage("output-onlinepngtools (1).png")
  color44=loadImage("output-onlinepngtools (2).png")
  color55=loadImage("output-onlinepngtools (3).png")
  color66=loadImage("output-onlinepngtools (4).png")
   color77=loadImage("output-onlinepngtools (5).png")
  
   song=loadSound("best_music_mix_2018_1h_gaming_music_dubstep_electro_house_edm_trap_67_-1258698013838321518 (mp3cut.net) (1).mp3")
  
   stickBB=loadAnimation("frame_1_delay-0.03s.gif","frame_2_delay-0.03s.gif","frame_5_delay-0.03s.gif","frame_6_delay-0.03s.gif","frame_8_delay-0.03s.gif")
  
 stickRR=loadAnimation("imageedit_7_7057520651.gif","imageedit_9_8206707545.gif","imageedit_17_5655933924.gif","imageedit_19_9765711988.gif","imageedit_21_7017445045.gif")
  
  stickOO=loadAnimation("imageedit_23_7682771065.gif","imageedit_25_8974584761.gif","imageedit_27_3667931476.gif","imageedit_29_4272173364.gif","imageedit_31_6322718448.gif")
  
   stickYY=loadAnimation("imageedit_33_9395297206.gif","imageedit_35_2014701283.gif","imageedit_38_9763374208.gif","imageedit_40_9384499467.gif","imageedit_42_6899525920.gif")
  
stickGG=loadAnimation("imageedit_45_8135152801.gif","imageedit_47_4211027743.gif","imageedit_49_7798750947.gif","imageedit_51_4670420206.gif","imageedit_53_3153158323.gif")
  
  stickBll=loadAnimation("imageedit_55_5682416126.gif","imageedit_57_6772331745.gif","imageedit_59_9108495068.gif","imageedit_61_7708109762.gif","imageedit_63_7414103654.gif")
  
  stickPP=loadAnimation("imageedit_65_2391884325.gif","imageedit_67_9959199912.gif","imageedit_69_8284284841.gif","imageedit_71_6384424086.gif","imageedit_73_7891434691.gif")
  
 stickPii=loadAnimation("imageedit_75_7388878996.gif","imageedit_77_9720181343.gif","imageedit_79_6374122578.gif","imageedit_81_4162950852.gif","imageedit_83_4539973353.gif")
}



function setup() {
  createCanvas(600, 400);
  
    back=createSprite(300,200,7000,500);
    back.addImage(backk);
    back.scale = 2.8;
  
   
    back2=createSprite(300,200,7000,500);
    back2.addImage(back22);
    
  
     back3=createSprite(300,200,7000,500);
    back3.addImage(back33);
    back3.scale = 3.3;

    stickB=createSprite(70,300,50,50);
            stickB.addAnimation("movingBlack",stickBB);
  stickB.addAnimation("red",stickRR);
  stickB.addAnimation("orange",stickOO);
  stickB.addAnimation("yellow",stickYY);
  stickB.addAnimation("green",stickGG);
  stickB.addAnimation("blue",stickBll);
  stickB.addAnimation("purple",stickPP);
   stickB.addAnimation("pink",stickPii);
    stickB.scale = 0.2;
  
   ground=createSprite(300,390,600,10);
  ground.shapeColor="black"
  
    text1=createSprite(300,200,20,20);
  text1.addImage(text11);
  text1.scale = 1.3
  
  holeG = new Group();
  color1G = new Group();
   color2G = new Group();
    color3G = new Group();
    color4G = new Group();
    color5G = new Group();
   color6G = new Group();
   color7G = new Group();
}


function draw() {
  background(220);
  
    if (back.x <0){
        back.x = back.width/2 }
  
    
  stickB.collide(ground)
  
    if(keyDown("space")&&stickB.y>=200)
       { stickB.velocityY=-16 
         
       
       }
  
  

     if(gamestate===START)
    {back.velocityX=0
     text1.visible=true
       color1G.destroyEach()
        color2G.destroyEach()
        color3G.destroyEach()
        color4G.destroyEach()
        color5G.destroyEach()
        color6G.destroyEach()
        color7G.destroyEach()
      holeG.destroyEach()
     
     
     back2.visible=false
     back3.visible=false
     
     
      if(keyDown("s"))
     {
     gamestate=PLAY  
       
       song.play()
     }
    }
  
  
  //stickB.collide(color1G)
  
  
  
 
  
  
    
    if (frameCount % 20 == 0 && time < 10000) { 
    time=time+1
  
    } 
    if(gamestate===PLAY)
    { back.velocityX=-5
    if (back.x <0){
      back.x = back.width/2 }
       text1.visible=false
     
       back2.visible=false
      back3.visible=false
     if(stickB.isTouching(color1G)){
    
    stickB.changeAnimation("red",stickRR)
       color1G.destroyEach()
       EatT=EatT+1
  }
     
     if(stickB.isTouching(color2G)){
    
    stickB.changeAnimation("orange",stickOO)
       color2G.destroyEach()
          EatT=EatT+1
  }
     
          if(stickB.isTouching(color3G)){
    
    stickB.changeAnimation("yellow",stickYY)
            color3G.destroyEach()
               EatT=EatT+1
  }
     
     
          if(stickB.isTouching(color4G)){
    
    stickB.changeAnimation("green",stickGG)
            color4G.destroyEach()
               EatT=EatT+1
  }
     
     
          if(stickB.isTouching(color5G)){
    
    stickB.changeAnimation("blue",stickBll)
            color5G.destroyEach()
               EatT=EatT+1
  }
     
     
          if(stickB.isTouching(color6G)){
    
    stickB.changeAnimation("purple",stickPP)
            color6G.destroyEach()
               EatT=EatT+1
  }
     
       if(stickB.isTouching(color7G)){
  
    stickB.changeAnimation("pink",stickPii)
         color7G.destroyEach()
            EatT=EatT+1
         
  }
     
     
      if(stickB.isTouching(holeG)){
       
       gamestate=END
        holeG.destroyEach()
          
     }
    }
  
  if(gamestate===END){
    background("gray")
    back.visible=false
    stickB.visible=false
    color1G.destroyEach()
        color2G.destroyEach()
        color3G.destroyEach()
        color4G.destroyEach()
        color5G.destroyEach()
        color6G.destroyEach()
        color7G.destroyEach()
      holeG.destroyEach()
       back2.visible=false
    // back3.visible=true
     fill("black")
  textSize(30)
 
  text("Colors collected - "+ EatT,150,150);
    
    
    fill("black")
  textSize(20)
 
  text("Press r to play again",180,210);
    
      
    fill("red")
  textSize(15)
 
  
  
 
 
 reset();
    
    
    song.stop()
    

   }
       

   stickB.velocityY = stickB.velocityY + 0.8;
  
    hole();
  color1();
   color2();
   color3();
   color4();
   color5();
   color6();
  color7();
  
  
 drawSprites();

  fill("white")
  textSize(15)
  text("Time: "+ time, width-100,75);
  text("Colors collected: "+ EatT, width-180,50);
  text("Deaths "+ deaths, 20,50);
     
}

function hole(){
  if(frameCount % 100 === 0){
    var hole = createSprite(650,200.10,10);
    hole.addImage(hole111);
    hole.y = Math.round(random(50,330))
   // hole.velocityX = -7;
    hole.scale = 0.2;
    hole.setCollider("rectangle",0,0,200,200)
    hole.velocityX = -(7+EatT*1.5/10);
    holeG.add(hole);
 }
}

  function color1(){
  if(frameCount % 290 === 0){
    var color1 = createSprite(650,200.10,10);
    color1.addImage(color11);
    color1.y = Math.round(random(50,330))
   // hole.velocityX = -7;
    color1.scale = 0.2;
    color1.setCollider("rectangle",0,0,200,200)
  color1.velocityX = -(7+EatT*1.5/10);
    color1G.add(color1);
 }
  
  }




function color2(){
  if(frameCount % 600 === 0){
    var color2 = createSprite(650,200.10,10);
    color2.addImage(color22);
    color2.y = Math.round(random(50,330))
   // hole.velocityX = -7;
    color2.scale = 0.2;
    color2.setCollider("rectangle",0,0,200,200)
  color2.velocityX = -(7+EatT*1.5/10);
    color2G.add(color2);
 }
  
  }


function color3(){
  if(frameCount % 980 === 0){
    var color3 = createSprite(650,200.10,10);
    color3.addImage(color33);
    color3.y = Math.round(random(50,330))
   // hole.velocityX = -7;
    color3.scale = 0.2;
    color3.setCollider("rectangle",0,0,200,200)
  color3.velocityX = -(7+EatT*1.5/10);
    color3G.add(color3);
 }
  
  }


function color4(){
  if(frameCount % 470 === 0){
    var color4 = createSprite(650,200.10,10);
    color4.addImage(color44);
    color4.y = Math.round(random(50,330))
   // hole.velocityX = -7;
    color4.scale = 0.2;
    color4.setCollider("rectangle",0,0,200,200)
  color4.velocityX = -(7+EatT*1.5/10);
    color4G.add(color4);
 }
  
  }


function color5(){
  if(frameCount % 1008 === 0){
    var color5 = createSprite(650,200.10,10);
    color5.addImage(color55);
    color5.y = Math.round(random(50,330))
   // hole.velocityX = -7;
    color5.scale = 0.2;
    color5.setCollider("rectangle",0,0,200,200)
  color5.velocityX = -(7+EatT*1.5/10);
    color5G.add(color5);
 }
  
  }


function color6(){
  if(frameCount % 1200 === 0){
    var color6 = createSprite(650,200.10,10);
    color6.addImage(color66);
    color6.y = Math.round(random(50,330))
   // hole.velocityX = -7;
    color6.scale = 0.2;
    color6.setCollider("rectangle",0,0,200,200)
  color6.velocityX = -(7+EatT*1.5/10);
    color6G.add(color6);
 }
  
  }




function color7(){
  if(frameCount % 803 === 0){
    var color7 = createSprite(650,200.10,10);
    color7.addImage(color77);
    color7.y = Math.round(random(50,330))
   // hole.velocityX = -7;
    color7.scale = 0.2;
    color7.setCollider("rectangle",0,0,200,200)
  color7.velocityX = -(7+EatT*1.5/10);
    color7G.add(color7);
 }
  
  }




function reset(){
  
if(keyDown("r"))
 {  
   gamestate=START
     back.visible=true
    stickB.visible=true
  stickB.changeAnimation("movingBlack",stickBB);
   text1.visible=true
   EatT=0
   time=0
   
   deaths=deaths+1
        
   }
}