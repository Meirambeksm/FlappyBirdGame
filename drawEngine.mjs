import { config } from "./config.mjs";

// Логика рисования для всех компонентов игры
export default class DrawEngine {
  constructor(sprite, width, height) {
    this.sprite = sprite;
    this.width = width;
    this.height = height;
  }

  draw(x1, y1, x2, y2, add) {
    config.ctx.drawImage(
      config.sprite,
      x1,
      y1,
      this.width,
      this.height,
      x2 + add,
      y2,
      this.width,
      this.height
    );
  }
}
