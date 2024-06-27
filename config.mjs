class Config {
  constructor() {
    // Канвас
    this.cvs = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");

    // Режим игры
    this.game = {
      current: 0,
      ready: 0,
      game: 1,
      over: 2,
    };

    // Отрисовка кнопки старт
    this.button = {
      x: 200,
      y: 325,
      width: 83,
      height: 29,
    };

    this.frames = 0;
  }

  // Картинка спрайт
  image() {
    this.sprite = new Image();
    this.sprite.src = "img/sprite.png";
  }

  // Звуки игры
  sounds() {
    this.score = new Audio();
    this.score.src = "audio/sfx_point.wav";

    this.flap = new Audio();
    this.flap.src = "audio/sfx_flap.wav";

    this.hit = new Audio();
    this.hit.src = "audio/sfx_hit.wav";

    this.lose = new Audio();
    this.lose.src = "audio/sfx_swooshing.wav";

    this.die = new Audio();
    this.die.src = "audio/sfx_die.wav";
  }
}

export const config = new Config();
