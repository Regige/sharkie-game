class Coin extends MovableObject {
    height = 40;
    width = 40;
    collectible = "Coin";
    collecting_sound = new Audio('audio/coin.mp3');
    IMAGES_SIZEING = [
        'img_Sharkie/4. Marcadores/1. Coins/1.png',
        'img_Sharkie/4. Marcadores/1. Coins/2.png',
        'img_Sharkie/4. Marcadores/1. Coins/3.png',
        'img_Sharkie/4. Marcadores/1. Coins/4.png'
    ];
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };

    constructor(x, y) {
        super().loadImage(this.IMAGES_SIZEING[0]);
        this.loadImages(this.IMAGES_SIZEING);
        this.x = x;
        this.y = y;

        this.animate();
    }
    

    /**
     * sets an interval and calls the playAnimation function to start the animation
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_SIZEING);
        }, 100);
    }
}