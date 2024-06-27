import { config } from "./config.mjs";
import DrawEngine from "./DrawEngine.mjs";

class Ground {
  // Начальные данные земли
  constructor() {
    this.startX = 276;
    this.startY = 0;
    this.width = 224;
    this.height = 112;
    this.x = 0;
    this.y = 488;
    this.groundSpeed = 2;
    this.drawEngine = new DrawEngine(config.sprite, this.width, this.height);
  }

  // Отрисовка земли
  draw() {
    this.drawEngine.draw(this.startX, this.startY, this.x, this.y, 0);
    this.drawEngine.draw(this.startX, this.startY, this.x, this.y, this.width);
    this.drawEngine.draw(
      this.startX,
      this.startY,
      this.x,
      this.y,
      this.width * 2
    );
  }

  // Движение земли
  update() {
    if (config.game.current == config.game.game) {
      this.x = (this.x - this.groundSpeed) % (this.width / 2);
    }
  }
}

export const ground = new Ground();
