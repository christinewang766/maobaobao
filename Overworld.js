class Overworld {
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d");
  }

  init() {
    const background = new Image();
    background.onload = () => {
      this.ctx.drawImage(background, 0, 0);
    };
    background.src = "/images/maps/cherry.png";

    // place Game Objects!
    const hero = new GameObject({
      x: 4,
      y: 12.5,
    });

    const lishou = new GameObject({
      x: 15,
      y: 12.5,
      src: "/images/characters/people/lishou.png",
    });

    // temp !!!!
    setTimeout(() => {
      hero.sprite.draw(this.ctx);
      lishou.sprite.draw(this.ctx);
    }, 200)
  }
}
