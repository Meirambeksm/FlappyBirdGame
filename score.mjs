import { config } from "./config.mjs";

class Score {
  // Начальные данные очков
  constructor() {
    this.best = parseInt(localStorage.getItem("best")) || 0;
    this.value = 0;
  }

  // Отрисовка очков и результатов
  draw() {
    config.ctx.fillStyle = "#FFF";
    config.ctx.strokeStyle = "#FFF";

    if (config.game.current == config.game.game) {
      config.ctx.lineWidth = 1;
      config.ctx.font = "35px Serif";
      config.ctx.fillText(this.value, config.cvs.width / 2, 50);
      config.ctx.strokeText(this.value, config.cvs.width / 2, 50);
    } else if (config.game.current == config.game.over) {
      config.ctx.font = "25px Serif";
      config.ctx.fillText(this.value, 305, 245);
      config.ctx.strokeText(this.value, 305, 245);
      config.ctx.fillText(this.best, 305, 290);
      config.ctx.strokeText(this.best, 305, 290);
    }
  }

  // Перезагрузка игры
  reset() {
    this.value = 0;
  }
}

export const score = new Score();
