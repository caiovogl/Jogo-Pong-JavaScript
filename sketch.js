//bola
let ballx = 200
let bally = 200
let spdx = 3
let spdy = 4
let frame = 0

//placar
let scorep = 0
let scoree = 0
let cena = "title";

//title
let cimab = false;
let cimac = false;
let sair = false;
let efeisono = true;
let mus = true;
let player_2 = false;

//player
let x = 10
let y = 160

//enemy
let ex = 375;
let ey = 155;
let spde = 5;

//wait
let sec = 0
let waitt = false;

//sons
let ponto;
let raquetada;
let trilha;
let ganhou;
let perdeu;
let efeito;
let semefeito;
let musica;
let titulo;

function wait(){
  if(sec!=0){
    waitt = false
    sec--
  }else{
    waitt = true
  }
}

function preload(){
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
  trilha = loadSound("trilha.mp3")
  ganhou = loadSound("ganhou.m4a")
  perdeu = loadSound("perdeu.m4a")
  efeito = loadImage("som.png")
  semefeito = loadImage("sem_som.png")
  musica = loadImage("nota_musica.png")
  titulo = loadSound("titulo.mp3")
}

function setup() {
  createCanvas(400, 400);
}

function remake(){
    ballx = 200;
    bally = 200;
    frame = 0
    spdx = 4;
    if(player_2)spdx = 4*random([1,-1])
}

function placar(){
  textSize(32)
  fill(255)
  text(str(scorep)+" | "+str(scoree),165,30)
  if(scoree == 5 || scorep == 5){
    cena="fim"
    trilha.stop()
    fill('rgba(0,0,0, 0.25)')
    rect(0,0,width,height)
    textSize(45)
    fill(255)
    if(scoree==5){
      text("VOCÊ PERDEU",35,150)
      if(!perdeu.isPlaying())
        perdeu.play()
    }else{
      text("VOCÊ GANHOU",35,150)
      if(!ganhou.isPlaying())
        ganhou.play()
    }
    textSize(32)
    text("aperte espaço",100,250)
  }
}

function title(){
  if(cena=="title"){
    fill('rgba(0,0,0, 0.25)')
    rect(0,0,width,height)
    fill(255)
    textSize(65)
    text("PONG",105,120)
    
    if(!titulo.isLooping()) titulo.loop()
    
    //botão começar
    if(mouseX>110 && mouseX<290 && mouseY>250 && mouseY<290){
      cimab = true
      if(mouseIsPressed){
        cena="jogo"
        trilha.loop()
        titulo.stop()
        sec = 30
      }
    }else cimab = false
    
    if(!cimab)fill(100)
    else fill(180)
    rect(110,290,180,-40)
    if(!cimab)fill(200)
    else fill(220)
    rect(112,288,176,-36)
    textSize(31)
    fill(0)
    text("COMEÇAR",117,280)
    textSize(30)
    fill(255)
    text("COMEÇAR",120,280)
    
    //botão sair
    if(mouseX>155 && mouseX<249 && mouseY>310 && mouseY<350){
      cimac = true
      if(mouseIsPressed && sec==0){
        sair = true;
      }
    }else cimac = false
    
    if(!cimac)fill(100)
    else fill(180)
    rect(155,350,94,-40)
    if(!cimac)fill(200)
    else fill(220)
    rect(157,348,90,-36)
    textSize(32)
    fill(0)
    text("SAIR",163,340)
    textSize(30)
    fill(255)
    text("SAIR",165,340)
    
    //botão de 2 jogadores
    
    if(mouseX>10 && mouseX<50 && mouseY>10 && mouseY<50 && mouseIsPressed && sec == 0){
      if(player_2) player_2 = false
      else player_2 = true
      sec = 10
    }
    
    fill(150)
    rect(10,10,50,50)
    fill(180)
    rect(12,12,48,48)
    textSize(30)
    fill(255)
    if(!player_2)text("1P",18,45)
    else text("2P",18,45)
    
  }
}

function paused(){
  if(cena=="pause"){
    fill('rgba(0,0,0, 0.25)')
    rect(0,0,width,height)
    fill(255)
    textSize(65)
    text("PAUSADO",55,120)
    
    //botão continuar
    if(mouseX>110 && mouseX<290 && mouseY>250 && mouseY<290){
      cimab = true
      if(mouseIsPressed){
        cena="jogo"
      }
    }else cimab = false
    
    if(!cimab)fill(100)
    else fill(180)
    rect(110,290,180,-40)
    if(!cimab)fill(200)
    else fill(220)
    rect(112,288,176,-36)
    textSize(28)
    fill(0)
    text("CONTINUAR",117,280)
    textSize(27)
    fill(255)
    text("CONTINUAR",120,280)
    
    //botão menu
    if(mouseX>155 && mouseX<249 && mouseY>310 && mouseY<350){
      cimac = true
      if(mouseIsPressed){
        cena = "title"
        remake()
        scoree = 0
        scorep = 0
        sec = 60
        trilha.stop()
      }
    }else cimac = false
    
    if(!cimac)fill(100)
    else fill(180)
    rect(155,350,94,-40)
    if(!cimac)fill(200)
    else fill(220)
    rect(157,348,90,-36)
    textSize(28)
    fill(0)
    text("MENU",163,340)
    textSize(26)
    fill(255)
    text("MENU",165,340)
  }
}

function sound(){
  if(cena!="jogo"){
    //efeito sonoro
    if(efeisono){
      image(efeito,350,10,40,40)
      raquetada.setVolume(0.5)
      ponto.setVolume(0.5)
      ganhou.setVolume(0.5)
      perdeu.setVolume(0.5)
    }else{
      image(semefeito,350,10,40,40)
      raquetada.setVolume(0)
      ponto.setVolume(0)
      ganhou.setVolume(0)
      perdeu.setVolume(0)
    }

    if(mouseX>350 && mouseX<390 && mouseY>10 && mouseY<50 && mouseIsPressed && sec == 0){
      if(efeisono) efeisono = false
      else efeisono = true
      sec = 10
    }

    //musica
    image(musica,300,10,220,220)
    if(mus){
      trilha.setVolume(0.4)
      titulo.setVolume(0.4)
    }else{
      trilha.setVolume(0)
      titulo.setVolume(0)
      strokeWeight(3)
      stroke("red")
      line(305,10,340,45)
      line(340,10,305,45)
      noStroke()
    }

    if(mouseX>300 && mouseX<340 && mouseY>10 && mouseY<50 && mouseIsPressed && sec == 0){
      if(mus) mus = false
      else mus = true
      sec = 10
    }
    
  }
}

function ball(){
  fill(255)
  circle(ballx,bally,25)
  
  if(waitt && cena=="jogo"){
  ballx+=spdx;
  bally+=spdy;
  }
  
  if(ballx > 400-12 || ballx < 0+12){
    if(ballx>200) scorep++
    else scoree++
    remake()
    sec = 60;
    ponto.play()
  }
  if(bally > 400-12 || bally < 0+12){
    if(bally>400-12 && spdy>0)spdy*=-1;
    else if(bally<0+12 && spdy<0) spdy*=-1
  }
  
  
  frame++;
  if(frame/60>=30){
    if(spdx>0)spdx=6
    if(spdy>0)spdy=6
  }else if(frame/60>=15){
    if(spdx>0)spdx=5
    if(spdy>0)spdy=5
  }else{
    if(spdx>0)spdx=4
    else spdx=-4
    if(spdy>0)spdy=4
    else spdy=-4
  }
}

function player(){
  fill(255)
  rect(x,y,15,90)
  
  if(cena=="jogo"){
    if(keyIsDown(87) && y>0){
      y-=5;
    }if(keyIsDown(83) && y<310){
      y+=5;
    }
    if(keyIsDown(27)) cena = "pause"
  }else if(cena=="fim"){
    if(keyIsDown(32)){
      scoree = 0
      scorep = 0
      cena = "title"
      perdeu.stop()
      ganhou.stop()
      sec = 90
    }
  }
  
  if(ballx<=x+28 && bally>=y && bally<=y+102 && spdx<0){
    spdx*=-1;
    spdy*=random(0.5,1.5)
    raquetada.play()
  }
  
}

function enemy(){
  fill(255)
  rect(ex,ey,15,90);
  
  if(cena=="jogo"){
    if(!player_2){
      if(bally-ey > 6) ey+=spde;
      else if(bally-ey < -6) ey-=spde;
    }else{
      if(keyIsDown(38) && ey>0){
        ey-=5;
      }if(keyIsDown(40) && ey<310){
        ey+=5;
      }
    }
  }
    
  if(ballx>=ex-12 && bally>=ey-12 && bally<=ey+102 && spdx>0){
    spdx*=-1;
    spdy*=random(0.5,1.5)
    raquetada.play()
 }
}


function draw() {
  background(0);
  ball();
  player();
  enemy();
  placar();
  wait();
  title();
  paused();
  sound();
  if(sair){
    titulo.stop()
    remove()
  }
}