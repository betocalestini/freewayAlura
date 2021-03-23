
//variáveis ator
let xAtor = 90;
let yAtor = 366;
let colidiu = false;
let diametroAtor = 30;

function inicio(){
  yAtor = 366;
  xAtor = 90;
  start = false;
}

function mostraAtor(){
    image(imagemAtor, xAtor, yAtor, diametroAtor, diametroAtor);
}

function movimentaAtor(){
  if (start == true) {
    
   if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
   else if (keyIsDown(DOWN_ARROW) && yAtor < 366){
    yAtor += 3;
  }
   else if (keyIsDown(RIGHT_ARROW)){
    xAtor += 3;
  }
  else if (keyIsDown(LEFT_ARROW)){
    xAtor -= 3;
  }
}
  }


function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colidiu = collideRectCircle(xCarro[i], yCarro[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15 )
    if (colidiu) {
image(imagemAtor3, xAtor - 10, yAtor - 10, diametroAtor * 2, diametroAtor * 2);      
      somDaColisao.play();
      inicio();
      minhasVidas -= 1;
      start = false;
      } else if(minhasVidas == 0){
       gameOver()
      }
    } 
  }




