import { config } from "./config.mjs";
import { background } from "./background.mjs";
import { pipes } from "./pipes.mjs";
import { ground } from "./ground.mjs";
import { bird } from "./bird.mjs";
import { startGame } from "./startGame.mjs";
import { gameOver } from "./gameOver.mjs";
import { score } from "./score.mjs";

class Game {
  // Отрисовка игры
  drawGame() {
    config.ctx.fillStyle = "#70c5ce";
    config.ctx.fillRect(0, 0, config.cvs.width, config.cvs.height);
    background.draw();
    pipes.draw();
    ground.draw();
    bird.draw();
    startGame.draw();
    gameOver.draw();
    score.draw();
  }

  // Движение игры
  updateGame() {
    bird.update();
    ground.update();
    pipes.update();
  }

  // Клик событие мыши игры
  controlMouse(e) {
    switch (config.game.current) {
      case config.game.ready:
        config.game.current = config.game.game;
        config.lose.play();
        break;
      case config.game.game:
        if (bird.y - bird.radius <= 0) return;
        bird.flap();
        config.flap.play();
        break;
      case config.game.over:
        let rect = config.cvs.getBoundingClientRect();
        let clickX = e.clientX - rect.left;
        let clickY = e.clientY - rect.top;

        if (
          clickX >= config.button.x &&
          clickX <= config.button.x + config.button.width &&
          clickY >= config.button.y &&
          clickY <= config.button.y + config.button.height
        ) {
          pipes.reset();
          bird.speedReset();
          score.reset();
          config.game.current = config.game.ready;
        }
        break;
    }
  }
}

export const game = new Game();
