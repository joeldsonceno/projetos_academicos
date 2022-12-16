//Implementando as balas do helicoptero
class Bullet {
    constructor(posX, posY, sizeX, sizeY) {
      this.posX = posX;
      this.posY = posY;
      this.sizeX = sizeX;
      this.sizeY = sizeY;
    }
    draw() {
      image(imgWater,this.posX, this.posY, 100, 100);
      this.posY = this.posY - 10;
    }
  }