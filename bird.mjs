import { config } from "./config.mjs";
import { ground } from "./ground.mjs";
import DrawEngine from "./drawEngine.mjs";

class Bird {
  // Изначальные данные птицы
  constructor() {
    this.animation = [
      { startX: 276, startY: 112 },
      { startX: 276, startY: 139 },
      { startX: 276, startY: 164 },
      { startX: 276, startY: 139 },
    ];

    this.x = 50;
    this.y = 150;
    this.width = 34;
    this.height = 26;

    this.radius = 12;
    this.frame = 0;

    this.gravity = 0.25;
    this.jump = 4.6;
    this.birdSpeed = 0;
    this.rotation = 0;

    this.drawEngine = new DrawEngine(config.sprite, this.width, this.height);
  }

  // Отрисовка птицы
  draw() {
    let bird = this.animation[this.frame];
    config.ctx.save();
    config.ctx.translate(this.x, this.y);
    config.ctx.rotate(this.rotation);
    this.drawEngine.draw(
      bird.startX,
      bird.startY,
      -this.width / 2,
      -this.height / 2,
      0
    );
    config.ctx.restore();
  }

  // Логика размаха и полета птицы
  flap() {
    this.birdSpeed = -this.jump;
  }

  // Движение птицы
  update() {
    this.period = config.game.current == config.game.ready ? 10 : 5;
    this.frame += config.frames % this.period == 0 ? 1 : 0;
    this.frame = this.frame % this.animation.length;

    if (config.game.current == config.game.ready) {
      this.y = 150;
      this.rotation = (0 * Math.PI) / 180;
    } else {
      this.birdSpeed += this.gravity;
      this.y += this.birdSpeed;

      if (this.y + this.height / 2 >= config.cvs.height - ground.height) {
        this.y = config.cvs.height - ground.height - this.height / 2;
        if (config.game.current == config.game.game) {
          config.game.current = config.game.over;
          config.die.play();
        }
      }

      if (this.birdSpeed >= this.jump) {
        this.rotation = (90 * Math.PI) / 180;
        this.frame = 1;
      } else {
        this.rotation = (-25 * Math.PI) / 180;
      }
    }
  }

  // Перезагрузка игры
  speedReset() {
    this.birdSpeed = 0;
  }
}

export const bird = new Bird();
