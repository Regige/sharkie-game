class Poison extends MovableObject {
    height = 65;
    width = 55;
    collectible = "Poison";
    collecting_sound = new Audio('audio/poison.mp3');
    offset = {
        top: 0,
        left: 8,
        right: 16,
        bottom: 0,
    };
    IMAGES_SIZEING = [
        'img_Sharkie/4. Marcadores/Posiขn/Animada/1.png',
        'img_Sharkie/4. Marcadores/Posiขn/Animada/2.png',
        'img_Sharkie/4. Marcadores/Posiขn/Animada/3.png',
        'img_Sharkie/4. Marcadores/Posiขn/Animada/4.png',
        'img_Sharkie/4. Marcadores/Posiขn/Animada/5.png',
        'img_Sharkie/4. Marcadores/Posiขn/Animada/6.png',
        'img_Sharkie/4. Marcadores/Posiขn/Animada/7.png',
        'img_Sharkie/4. Marcadores/Posiขn/Animada/8.png'
    ];

    constructor(x, y) {
        super().loadImage(this.IMAGES_SIZEING[0]);
        this.loadImages(this.IMAGES_SIZEING);
        this.x = x;
        this.y = y;

        this.animate();
    }
    
    /**
     * Sets the intervals to start the animations of the poison object
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_SIZEING);
        }, 100);
    }
}