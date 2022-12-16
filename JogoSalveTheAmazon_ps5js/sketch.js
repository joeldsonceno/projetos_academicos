
//Imagens
var imgBackground, imgHelicopter, imgFloresta, imgFire, imgWater, imgGameOver;
//Sons
//var soundHelicopter, soundBackground;
//Coordenadas dos botões menu
var xbotao1, ybotao1;
var xbotao2, ybotao2;
var xcursor, ycursor, pos_cursor, estado;

//Variaveis
var seconds = 10;
var bullets = []; //Vetor para balas
let enemies = []; //Vetor de inimigos
let timer = 1;
let points = 0;

//Jogador
var helicopterPlayer;

//Carregando imagens e sons
function preload(){
  soundHelicopter=loadSound('assets/sounds/sound_helicopter.mp3');

  soundBackground=loadSound('assets/sounds/sound_war_background.mp3');  
  imgBackground=loadImage('assets/img/imgFundo.png');
  imgFloresta=loadImage('assets/img/background.jpg');
  imgFire=loadImage('assets/img/fire.gif');
  imgWater=loadImage('assets/img/water.gif');
  imgHelicopter=loadImage('assets/img/Chopper_transp.gif');
  imgGameOver=loadImage('assets/img/fundo_gameover.png');
}

function setup() {
  createCanvas(700, 450);
  //Posições do menu
  xbotao1 = 280;
  ybotao1 = 200;
  xbotao2 = 280;
  ybotao2 = 270;
  xcursor = 280;
  ycursor = 270;

  //Iniciando variaveis
  estado = 1;
  pos_cursor = 1;

  //Som de fundo
  soundBackground.play();
 
  //Jogador/helicopter
  helicopterPlayer = new Helicopter(300, 700, 30);
  generateRandomEnemies();
  //Timer
  setInterval(showSeconds, 1000);
}

//Desenhando o menu
function draw() {
  if(estado==1){
    menu();
  }else if(estado==2){
    startFase1();
  }else{
    creditos();
  }     
}

//Função de acesso ao menu
function keyPressed(){
  if(keyCode==UP_ARROW){
    ycursor = ybotao1;
    pos_cursor=1;
  }
  if(keyCode==DOWN_ARROW){
    ycursor = ybotao2;
    pos_cursor=2;
  }
  if(keyCode==ENTER){
    if(pos_cursor == 1){
      estado=2;
    }else if(pos_cursor == 2){
      estado=3;
    }
  }
  if(keyCode==ESCAPE){
    estado=1;
  }
}

//Tela de menu
function menu(){
  background(imgBackground);
  fill(0);
  stroke(0);    

  fill(255);
  textSize(48);
  text("SALVE THE AMAZON", 100, 150);

  //desenho do botão 1
  fill(255,192,0);
  rect(xbotao1, ybotao1, 120, 50);
  fill(0);
  textSize(12);
  text("INICIAR", xbotao1 + 50 - 15, ybotao1 + 30 + 1);

  //desenho do botão 2
  fill(255,192,0);
  rect(xbotao2, ybotao2, 120, 50);
  fill(0);
  text("CRÉDITOS", xbotao2 + 50 - 20, ybotao2 + 30 + 1);

  //desenho a seleção
  noFill();
  stroke(255);
  rect(xcursor, ycursor,120, 50);
}

//Tela de gameOver
function gameOver(){
  background(imgGameOver);
  if(keyCode==ESCAPE){
    stop();
    menu();
  }
}

//Contagem dos inimigos eliminados
function checkHit() {
  for (let i = 0; i < bullets.length; i++) {
    for (let j = 0; j < enemies.length; j++) {
      let d = dist(
        bullets[i].posX,
        bullets[i].posY,
        enemies[j].posX,
        enemies[j].posY
      );
      if (d < enemies[j].size) {
        enemies.splice(j, 1);
        points++;
      }
    }
  }
}

//Função de atirar
function keyReleased(event) {
  if (event.code == "Space") {
    shoot();
  }
  return false;
}

//Criando o inimigo
class Enemy {
  constructor(posX, posY, size) {
    this.posX = posX;
    this.posY = posY;
    this.size = size;
  }
  draw() {
    image(imgFire,this.posX, this.posY, 50, 50);
    this.posY++;
  }
}

//Geração automática dos inimigos
function generateRandomEnemies() {
  for (let i = 0; i < 5; i++) {
    enemies.push(
      new Enemy(
        floor(random(20, width - 50)),
        floor(random(20, height / 3 - 50)),20
      )
    );
  }
}

//Gerando os inimigos
function generateEnemy() {
  enemies.push(
    new Enemy(
      floor(random(20, width - 50)),
      floor(random(20, height / 3 - 50)),20
    )
  );
}

//Tempo
function showSeconds() {
    if(seconds > 0){
      seconds--;
    }
}

//Finalizando as funções
function stop() {
  checkHit.stop();
  showSeconds();
  generateEnemy.stop();
  generateRandomEnemies.stop();
  keyReleased.stop();
  checkHit.stop();
  shoot.stop();
  startFase1.stop();
  helicopter.stop();
  transicao.stop();
  shoot.stop();
  bullets.stop();
  //soundHelicopter.stop();
  creditos.stop();
  Enemy.stop();
}