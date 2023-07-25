class OverworldMap {
  constructor(config) {
    this.gameObjects = config.gameObjects;

    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;

    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;
  }

  drawLowerImage(ctx) {
    ctx.drawImage(this.lowerImage, 0, 0);
  }

  drawUpperImage(ctx) {
    ctx.drawImage(this.upperImage, 0, 0);
  }
}

window.OverworldMaps = {
  Cherry: {
    lowerSrc: "/images/maps/cherry.png",
    upperSrc: "",
    gameObjects: {
      hero: new GameObject({
        x: 4,
        y: 12.5,
      }),
      lishou: new GameObject({
        x: 15,
        y: 12.5,
        src: "/images/characters/people/lishou.png",
      }),
    },
  },
  Kitchen: {
    lowerSrc: "/images/maps/KitchenLower.png",
    upperSrc: "/images/maps/KitchenUpper.png",
    gameObjects: {
      npc1: new GameObject({
        x: 8,
        y: 12.5,
        src: "/images/characters/people/npc1.png",
      }),
      npc2: new GameObject({
        x: 1,
        y: 12.5,
        src: "/images/characters/people/npc2.png",
      }),
    },
  },
};
