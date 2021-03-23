//variaveis do carro

let xCarro = [600, 600, 600, -50, -50, -50];
let yCarro = [40, 96, 150, 210, 260, 310];
let velocidade1 = [1, 3, 2, 4, 1, 3];
let velocidadeCarro = velocidade1;
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
image(imagemCarros[i], xCarro[i], yCarro[i], comprimentoCarro, alturaCarro);
}
}

function movimentaCarroVai(){
  for (let i = 0; i < 3; i++){  
  xCarro[i] -= velocidadeCarro[i];
  }
}

function voltaPosicaoInicialDoCarroVai(){
  for (let i = 0; i < 3; i++)
  if (passouTodaATelaVai(xCarro[i])){
    xCarro[i] = 600;
  }
}
function movimentaCarroVem(){
  for (let i = 3; i < 6; i++){  
  xCarro[i] += velocidadeCarro[i];
  }
}

function voltaPosicaoInicialDoCarroVem(){
  for (let i = 3; i < 6; i++)
  if (passouTodaATelaVem(xCarro[i])){
    xCarro[i] = -50;
  }
}

function passouTodaATelaVai(xCarros){
  return xCarros < -50;
}

function passouTodaATelaVem(xCarros){
  return xCarros > 600;
}

function aumentaDificuldade(){
  let i = 0;
 if (meusPontos == 3 && velocidadeCarro[i] < 3){
   for (i ; i < velocidadeCarro.length; i++)
  velocidadeCarro[i] += 1;
   level = 2;
 }  
   if (meusPontos == 6 && velocidadeCarro[i] < 6){
   for (i ; i < velocidadeCarro.length; i++)
  velocidadeCarro[i] += 1;
     level = 3;
 }  
     if (meusPontos == 9 && velocidadeCarro[i] < 9){
   for (i ; i < velocidadeCarro.length; i++)
  velocidadeCarro[i] += 1;
       level = 4;
 }  
}