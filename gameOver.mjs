import { config } from "./config.mjs";
import DrawEngine from "./drawEngine.mjs";

class GameOver {
  // Изначальные данные окончания игры
  constructor() {
    this.startX = 175;
    this.startY = 228;
    this.width = 225;
    this.height = 202;
    this.x = 127.5;
    this.y = 150;
    this.drawEngine = new DrawEngine(config.sprite, this.width, this.height);
  }

  // Отрисовка Game Over
  draw() {
    if (config.game.current == config.game.over)
      this.drawEngine.draw(this.startX, this.startY, this.x, this.y, 0);
  }
}

export const gameOver = new GameOver();

// console.log(config.cvs.width / 2 - 225 / 2);
