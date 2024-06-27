import { config } from "./config.mjs";
import DrawEngine from "./drawEngine.mjs";

class StartGame {
  // Начальные данные начала игры
  constructor() {
    this.startX = 0;
    this.startY = 228;
    this.width = 173;
    this.height = 152;
    this.x = config.cvs.width / 2 - 86;
    this.y = 150;
    this.drawEngine = new DrawEngine(config.sprite, this.width, this.height);
  }

  // Отрисовка начала игры
  draw() {
    if (config.game.current == config.game.ready) {
      this.drawEngine.draw(this.startX, this.startY, this.x, this.y, 0);
    }
  }
}

export const startGame = new StartGame();
