//Função para atirar
function shoot() {
    let bullet = new Bullet(helicopterPlayer.posX + 12, helicopterPlayer.posY - 20, 5, 20);
    this.bullets.push(bullet);
    for (let i = 0; i < bullets.length; i++) {
      if (this.bullets[i].posY < 0) {
        bullets.splice(i, 1);
      }
    }
    console.log(bullets);
  }