var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score = 0;
var particle;
var turn = 0;
var gameState = "PLAY";

function setup() {
  createCanvas(800, 800);
  colorMode(HSB)
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 20);

  side1 = new Side(810,400,20,height)
  side2 = new Side(-10,400,20,height)

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
  }


  for (var j = 55; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 30; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 55; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 30; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 375));
  }




}



function draw() {
  background(0,0,0);

 
  
  Engine.update(engine);


  for (var i = 0; i < plinkos.length; i++) {

    plinkos[i].display();

  }

  for (var j = 0; j < particles.length; j++) {

    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {

    divisions[k].display();
  }
    /*posx = 15,
    posy = 520;
  for (var a = 0; a < 10; a++, posx += 80) {
    if (a <= 3)
      text("500", posx, posy);
    if (a > 3 && a <= 6)
      text("100", posx, posy);
    if (a > 6 && a < 10)
      text("200", posx, posy);
  }*/

  text("100",15,520)
  text("500",95,520)
  text("300",175,520)
  text("200",255,520)
  text("400",335,520)
  text("400",415,520)
  text("200",495,520)
  text("300",575,520)
  text("500",655,520)
  text("100",735,520)


  if (particle != null) {
    particle.display();
    if (particle.body.position.y > 600) {
      turn++;
      if (particle.body.position.x > 0 && particle.body.position.x < 80) {
        score += 100;
        if (turn >= 5) {
          gameState = "END";
        }
      }
      if (particle.body.position.x > 80 && particle.body.position.x < 160) {
        score += 500;
        if (turn >= 5) {
          gameState = "END";
        }
      }
      if (particle.body.position.x > 160 && particle.body.position.x < 240) {
        score += 300;
        if (turn >= 5) {
          gameState = "END";
        }
      }
      if (particle.body.position.x >240 && particle.body.position.x < 320) {
        score += 200;
        if (turn >= 5) {
          gameState = "END";
        }
      }
      if (particle.body.position.x > 320 && particle.body.position.x < 400) {
        score += 400;
        if (turn >= 5) {
          gameState = "END";
        }
      }
      if (particle.body.position.x > 400 && particle.body.position.x < 480) {
        score += 400;
        if (turn >= 5) {
          gameState = "END";
        }
      }if (particle.body.position.x > 480 && particle.body.position.x < 560) {
        score += 200;
        if (turn >= 5) {
          gameState = "END";
        }
      }if (particle.body.position.x > 560 && particle.body.position.x < 640) {
        score += 300;
        if (turn >= 5) {
          gameState = "END";
        }
      }if (particle.body.position.x > 640 && particle.body.position.x < 720) {
        score += 500;
        if (turn >= 5) {
          gameState = "END";
        }
      }

      if (particle.body.position.x > 720 && particle.body.position.x < 800) {
        score += 100;
        if (turn >= 5) {
          gameState = "END";
        }
      }
      particle = null;
    }
  }
  if (gameState === "END") {
    textSize(60);
    text("Game Over !!!", 210, 250);
    text("Press space to play again",30,340)
    if(keyCode === 32){
      gameState = "PLAY"
      score = 0
      turn = 0
    }
  }

  textFont("cooper")
  textSize(30)
  text("Score : " + score, 20, 30);

  
    
}

function mousePressed() {
  if (gameState !== "END") {
    particle = new Particle(mouseX, 10, 10, 10);
  }
}