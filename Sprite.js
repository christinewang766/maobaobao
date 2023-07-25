class Sprite {
  constructor(config) {
    // set up the image
    this.image = new Image();
    this.image.src = config.src;
    this.image.onload = () => {
      this.isLoaded = true;
    };

    // shadow
    this.shadow = new Image();
    this.useShadow = true; // config.useShadow || false
    if (this.useShadow) {
      this.shadow.src = "/images/characters/shadow.png";
    }
    this.shadow.onload = () => {
      this.isShadowLoaded = true;
    };

    // configure animation and initial state
    this.animations = config.animations || {
      idleDown: [[0, 0]],
    };
    this.currentAnimation = config.currentAnimation || "idleDown";
    this.currentAnimationFrame = 0;

    // reference the game object
    this.gameObject = config.gameObject;
  }

  draw(ctx) {
    const x = this.gameObject.x;
    const y = this.gameObject.y;

    this.isShadowLoaded && ctx.drawImage(this.shadow, x, y + 7);

    this.isLoaded && ctx.drawImage(this.image, 0, 0, 66, 66, x, y, 66, 66);
  }
}
