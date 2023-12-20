class JellyFish extends MovableObject {
    height = 70;
    width = 70;
    IMAGES_SWIMMING = [
        'img_Sharkie/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        'img_Sharkie/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        'img_Sharkie/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        'img_Sharkie/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png',
    ];
    IMAGES_DEAD = [
        'img_Sharkie/2.Enemy/2 Jelly fish/Dead/Lila/L1.png',
        'img_Sharkie/2.Enemy/2 Jelly fish/Dead/Lila/L2.png',
        'img_Sharkie/2.Enemy/2 Jelly fish/Dead/Lila/L3.png',
        'img_Sharkie/2.Enemy/2 Jelly fish/Dead/Lila/L4.png',
    ];

    offset = {
        top: 5,
        left: 0,
        right: 0,
        bottom: 15,
    };
    speedY = 55;
    acceleration = 4;
    isDead = false;
    type = 'JellyFish';
    downMovement = true;

    constructor(x, y) {
        super().loadImage(this.IMAGES_SWIMMING[0]);
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_DEAD);

        this.y = y;
        this.x = x; 
     
        this.speed = 0.55 + Math.random() * 0.25;

        this.setMovement(y);
        this.animate();
    }


    /**
     * Sets the intervals to start the animations of the jelly-fish
     */
    animate() {
        setInterval(() => {
            if(this.isDead) {
              this.playAnimation(this.IMAGES_DEAD); 
              this.applyGravityBubble();
            } else {
                this.playAnimation(this.IMAGES_SWIMMING);
            }
        }, 100);
    }


    /**
     * Depending on the y value diffrent functions are being called
     * @param {number} y This variable is the number of the y value
     */
    setMovement(y) {
        if(y == -100) {
            setInterval(() => {
                this.moveLeft();
            }, 1000 / 60);
            this.applyGravity();
        } else {
            this.setUpDownMove();
        }
    }


    /**
     * This function sets the y values and therefore the movement on the y axis
     */
    applyGravity() {
        setInterval(() => {
            if(!this.isDead) {
                this.y += this.speedY;
                this.speedY -= this.acceleration;
                if(this.backAtStartPosition()) {
                    this.y = -100;
                    this.speedY = 55;
                }
            }
        }, 160);
    }


    /**
     * This function just proves if y is at a certain position
     * @returns - true, if condition correct
     */
    backAtStartPosition() {
        if(this.y <= -100 ) {
            return true;
        } 
    }


    /**
     * This function sets the y values and therefore the movement on the y axis.
     * This movement is going up and down and is therefore diffrent ot the applyGravity function.
     */
    setUpDownMove() {
        setInterval(() => {
            if(this.downMovement) {
                if(this.y < 400) {
                    this.y += this.speedY;
                } else {
                    this.downMovement = false;
                }
            } else if(!this.downMovement) {
                if(this.y > 20) {
                    this.y -= this.speedY;
                } else {
                    this.downMovement = true;
                }
            }
        }, 160)
    }
}