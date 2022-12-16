//Tela de jogar
function startFase1(){
  background(imgFloresta);
  //soundBackground.stop();
  //soundHelicopter.play();
  helicopterPlayer.draw();
  helicopterPlayer.move();
    
  //Gerando as balas
  for (let i = 0; i < bullets.length; i++) {
    bullets[i].draw();
  }
  
  //Gerando os inimigos
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].draw();
  }
  
  //Matando os inimigos
  checkHit();
  if (frameCount % 60 == 0 && timer > 0) {
    timer--;
    if (timer == 0) {
      generateEnemy();
      timer = 1;
    }
  }
  
  //Apresentando a pontuação
  fill('#fff');
  textSize(15);
  text("FASE 1 - Pontos (Meta = 50%): " + points+" %", 10, 30);
    
  //Apresentando o tempo
  fill('#fff');    
  textSize(15);
  text('Tempo:'+seconds, 540, 30);
  
  //Acionando próxima fase
  if(points==5){
    transicao();
  }else if(seconds==0){ //Game over
     gameOver();
  }
}