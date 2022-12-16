//Tela transição
function transicao(){
    background(imgBackground);
    fill(0);
    stroke(0);    
  
    fill(255);
    textSize(48);
    text("PARABÉNS!", 185, 150);
  
    textSize(24);
    text("Você conseguiu reduzir 80% dos focos de incêndios!", 50, 180);
  
    //desenho do botão 1
    fill(255,192,0);
    rect(xbotao1, ybotao1, 115, 50);
    fill(0);
    textSize(12);
    text("PRÓXIMA", xbotao1 + 40 - 15, ybotao1 + 30 + 1);
  
    if(keyCode==ESCAPE){
      stop();
      startFase1();
    }
  }