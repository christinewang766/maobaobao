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
      hero: new Cat({
        isPlayerControlled: true,
        x: utils.withGrid(4),
        y: utils.withGrid(12.5),
      }),
      lishou: new Cat({
        x: utils.withGrid(15),
        y: utils.withGrid(12.5),
        src: "/images/characters/people/lishou.png",
      }),
    },
  },
  Kitchen: {
    lowerSrc: "/images/maps/KitchenLower.png",
    upperSrc: "/images/maps/KitchenUpper.png",
    gameObjects: {
      npc1: new Cat({
        x: 8,
        y: 12.5,
        src: "/images/characters/people/npc1.png",
      }),
      npc2: new Cat({
        x: 1,
        y: 12.5,
        src: "/images/characters/people/npc2.png",
      }),
    },
  },
};
