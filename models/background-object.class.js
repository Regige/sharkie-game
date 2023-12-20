class BackgroundObject extends MovableObject {

    width = 720;
    height = 480;
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };

    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height;
    }
}