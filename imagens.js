//imagens
let imagemEstrada;
let imagemAtor;
var imagemAtor1;
let imagemAtor2;
let imagemAtor3;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

let somDaTrilha;
let somDaColisao;
let somDoPonto;


function preload(){
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemAtor1 = loadImage("imagens/ator-1.svg");
  imagemAtor = imagemAtor1;
  imagemAtor2 = loadImage("imagens/ator-2.svg");
  imagemAtor3 = loadImage("imagens/ator-3.svg");
  imagemCarro = loadImage("imagens/carro-1.png")
  imagemCarro2 = loadImage("imagens/carro-2.png")
  imagemCarro3 = loadImage("imagens/carro-3.png")
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3]

somDaTrilha = loadSound("sons/trilha.mp3");
somDaColisao = loadSound("sons/colidiu.mp3");
somDoPonto = loadSound("sons/pontos.wav");
}
