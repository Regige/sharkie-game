class Heart extends MovableObject {
    height = 55;
    width = 55;
    collectible = "Heart";
    collecting_sound = new Audio('audio/heart.mp3');
    offset = {
        top: 15,
        left: 8,
        right: 18,
        bottom: 20,
    };

    constructor(x, y) {
        super().loadImage('img_Sharkie/4. Marcadores/green/heart_sgl.png');
        this.x = x;
        this.y = y;
    }
}