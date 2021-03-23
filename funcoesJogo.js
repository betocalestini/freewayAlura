let meusPontos = 0;
let minhasVidas = 3;
let level = 1;

function mostraLevel(){
  textAlign(CENTER)
  textSize(25)
  fill(100, 240, 0)
  text(`Level: ${level}`, 250, 27)
}

function incluiVidas(){
  textAlign(CENTER)
  textSize(25)
  fill(255, 240, 0)
  text(`Vidas: ${minhasVidas}`, 400, 27)
}

function incluiPontos(){
  textAlign(CENTER)
  textSize(25)
  fill(255, 240, 0)
  text(`Pontos: ${meusPontos}`, width / 5, 27)
}

function marcaPonto(){
  if (yAtor < 10){
    meusPontos += 1;
    image(imagemAtor2, xAtor, yAtor -5, diametroAtor * 2, diametroAtor *2);
    fill(255, 240, 0)
    textSize(50)
    text(`Parabéns`, xAtor + 30, yAtor + 90)
    somDoPonto.play();
    inicio()
  }
}


function gameOver(){   
  background(139,0,0)
  textAlign(CENTER)
  textSize(80)
  fill(255, 240, 0)
  text(`GAME OVER`, width /2, height /2)
  incluiVidas();
  incluiPontos()
  minhasVidas = 3;
  meusPontos = 0;
  level = 1;
  start = false;
  inicio()
  velocidadeCarro = velocidade1
  }
