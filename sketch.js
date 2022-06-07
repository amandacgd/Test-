  let xbolinha = 320;
  let ybolinha = 200;
  let tambolinha = 20;
  let raio = tambolinha /2;
  let velocidadex = 7;
  let velocidadey = 7;
  let xRaquete = 5;
  let yRaquete = 150;
  let raqueteComp = 10;
  let raqueteAltura = 90;
  let velocidadexBolinha = -1;


function setup() {
  createCanvas(640, 400);
}

function draw() {
  background(0);
  mostrabolinha ();
  movimentabolinha ();
  verificacolisao ();
  mostraRaquete ();
  movimentaMinharaquete ();
  verificacolisaoRaquete ();
  colisaoRaquete();
}
  
  
 function verificaColisaoBorda(){
 if (xbolinha + raio > width || xbolinha - raio < 0)
  velocidadex *= -1;
  
 if (ybolinha + raio > height || ybolinha - raio < 0)
  velocidadey *= -1;
  }

  function mostrabolinha () {
  circle(xbolinha, ybolinha, tambolinha);
 }

  function movimentabolinha () {
  xbolinha += velocidadex;
  ybolinha += velocidadey;
  }

  function verificacolisao () {
    if (xbolinha + raio > width || xbolinha - raio < 0) {
        velocidadex *= -1;
    }
    if (ybolinha + raio > height || ybolinha - raio < 0) {
        velocidadey *= -1;
    }
  }

 function mostraRaquete (){
   rect (xRaquete, yRaquete, raqueteComp, raqueteAltura);
}
 
 function movimentaMinharaquete () {
 if (keyIsDown(UP_ARROW)) {
   yRaquete -= 10;
 }
   if (keyIsDown(DOWN_ARROW)) {
   yRaquete += 10;
   }
 }

 function verificacolisaoRaquete (){
   if (xbolinha - raio < xRaquete + raqueteComp && ybolinha - raio < yRaquete + raqueteAltura && ybolinha + raio > yRaquete) {
     velocidadex *= -1;
   }
 }

  function colisaoRaquete(x , y) {
  colidiu = collideRectCircle(x, y,raqueteComp,raqueteAltura,xbolinha,ybolinha,raio);
  if (colidiu) {
    velocidadexBolinha *= -1;
  }
  
  
  }

    
  
  
