import { config } from "./config.mjs";
import DrawEngine from "./drawEngine.mjs";

class Backround {
  // Изначальные данные фона
  constructor() {
    this.startX = 0;
    this.startY = 0;
    this.width = 275;
    this.height = 226;
    this.x = 0;
    this.y = 374;
    this.drawEngine = new DrawEngine(config.sprite, this.width, this.height);
  }

  // Отрисовка фона
  draw() {
    this.drawEngine.draw(this.startX, this.startY, this.x, this.y, 0);
    this.drawEngine.draw(this.startX, this.startY, this.x, this.y, this.width);
  }
}

export const background = new Backround();
