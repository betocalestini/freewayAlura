function setup() {
  createCanvas(500, 400);
  // somDaTrilha.loop();
}

let start = false;
let primeiroJogo = true;

function draw() {
  if(primeiroJogo == true) {
    telaDeInício()
  }
  if (start == true) {
  background(imagemEstrada);
  incluiPontos();
  incluiVidas();
  mostraLevel();
  mostraAtor();
  mostraCarro();
  movimentaCarroVai();
  movimentaCarroVem()
  voltaPosicaoInicialDoCarroVai();
  voltaPosicaoInicialDoCarroVem();
  verificaColisao();
  marcaPonto();
  movimentaAtor(); 
  aumentaDificuldade();
}
  restart();
  
}

function restart(){
  if(keyIsDown(ENTER)){
      start = true;
    imagemAtor = imagemAtor1;
}
}

function telaDeInício(){
  background(50,50,100)
  textAlign(CENTER)
  textSize(75)
  fill(255, 240, 0)
  text(`Ajude o Pug a 
atravessar a 
Rua`, width /2, height / 3)
  primeiroJogo = false;
}


