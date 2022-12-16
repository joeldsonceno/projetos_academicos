//Implementando a classe jogador
class Helicopter {
    constructor(posX, posY, size) {
      this.posX = posX;
      this.posY = posY/2;
      this.size = size;
    }
  
    //Desenho do Helicóptero
    draw() {  
        image(imgHelicopter,this.posX, this.posY, 100, 100);
    }
  
    //Movimentando
    move() {
      if (keyIsDown(LEFT_ARROW) && this.posX >= 5) {
        this.posX -= 5;
      }
      if (keyIsDown(RIGHT_ARROW) && this.posX <= width - helicopterPlayer.size) {
        console.log(this.posX);
        this.posX += 5;
      }
      if (keyIsDown(UP_ARROW) && this.posY >= 5 + helicopterPlayer.size) {
        this.posY -= 5;
      }
      if (keyIsDown(DOWN_ARROW) && this.posY <= height - helicopterPlayer.size) {
        this.posY += 5;
      }
    }
  }