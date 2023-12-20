class Fish extends MovableObject {
    height = 60;
    width = 60;
    IMAGES_WALKING = [
        'img_Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'img_Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'img_Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'img_Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'img_Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
        'img_Sharkie/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png',
        'img_Sharkie/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png',
        'img_Sharkie/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
        'img_Sharkie/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png',
        'img_Sharkie/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png',
        'img_Sharkie/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim1.png',
        'img_Sharkie/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim2.png',
        'img_Sharkie/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim3.png',
        'img_Sharkie/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim4.png',
        'img_Sharkie/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim5.png',
    ];
    IMAGES_DIE = [
        'img_Sharkie/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 1 (can animate by going up).png',
        'img_Sharkie/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 2 (can animate by going down to the floor after the Fin Slap attack).png',
        'img_Sharkie/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 3 (can animate by going down to the floor after the Fin Slap attack).png'
    ];
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 20,
    };
    isDead = false;
    type = 'Fish';


    constructor() {
        super().loadImage('img_Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DIE);

        this.x = 200 + Math.random() * 3850; // Zahl zwischen 200 und 700
        this.y = 40 + Math.random() * 360; // Zahl zwischen 45 und 400
        this.speed = 0.15 + Math.random() * 0.25;

        this.animate();
    }

    /**
     * Sets the intervals to start the animations of the fish
     */
    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
            if(this.isDead) {
                this.loadImage(this.IMAGES_DIE[1]);
                this.applyGravityBubble();
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            };
        }, 100);
    }
}