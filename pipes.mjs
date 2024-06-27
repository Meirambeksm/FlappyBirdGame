import { config } from "./config.mjs";
import { bird } from "./bird.mjs";
import { score } from "./score.mjs";
import DrawEngine from "./drawEngine.mjs";

class Pipes {
  // Начальные данные труб
  constructor() {
    this.position = [];
    this.top = {
      startX: 553,
      startY: 0,
    };
    this.bottom = {
      startX: 502,
      startY: 0,
    };
    this.width = 53;
    this.height = 400;
    this.gap = 85;
    this.maxYPos = -150;
    this.speed = 3;
    this.drawEngine = new DrawEngine(config.sprite, this.width, this.height);
  }

  // Отрисовка труб
  draw() {
    for (let i = 0; i < this.position.length; i++) {
      let position = this.position[i];

      let topYPos = position.y;
      let bottomYPos = position.y + this.height + this.gap;

      this.drawEngine.draw(
        this.top.startX,
        this.top.startY,
        position.x,
        topYPos,
        0
      );
      this.drawEngine.draw(
        this.bottom.startX,
        this.bottom.startY,
        position.x,
        bottomYPos,
        0
      );
    }
  }

  // Движение труб
  update() {
    if (config.game.current !== config.game.game) return;

    if (config.frames % 100 == 0) {
      this.position.push({
        x: config.cvs.width,
        y: this.maxYPos * (Math.random() + 1),
      });
    }
    for (let i = 0; i < this.position.length; i++) {
      let p = this.position[i];

      let bottomPipeYPos = p.y + this.height + this.gap;

      if (
        bird.x + bird.radius > p.x &&
        bird.x - bird.radius < p.x + this.width &&
        bird.y + bird.radius > p.y &&
        bird.y - bird.radius < p.y + this.height
      ) {
        config.game.current = config.game.over;
        config.hit.play();
      }
      if (
        bird.x + bird.radius > p.x &&
        bird.x - bird.radius < p.x + this.width &&
        bird.y + bird.radius > bottomPipeYPos &&
        bird.y - bird.radius < bottomPipeYPos + this.height
      ) {
        config.game.current = config.game.over;
        config.hit.play();
      }

      p.x -= this.speed;
      if (p.x + this.width <= 0) {
        this.position.shift();
        score.value += 1;
        config.score.play();
        score.best = Math.max(score.value, score.best);
        localStorage.setItem("best", score.best);
      }
    }
  }

  // Перезагрузка игры
  reset() {
    this.position = [];
  }
}

export const pipes = new Pipes();
