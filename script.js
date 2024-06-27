import { config } from "./config.mjs";
import { game } from "./game.mjs";

// Главные логики и отрисовки игры
config.image();
config.sounds();

function loop() {
  game.updateGame();
  game.drawGame();
  config.frames++;
  requestAnimationFrame(loop);
}
loop();

config.cvs.addEventListener("click", game.controlMouse);
