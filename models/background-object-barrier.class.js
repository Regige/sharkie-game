class BackgroundObjectBarrier extends MovableObject {

    width = 130;
    height = 380;
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };

    constructor(imagePath, x, y, offsetTop, offsetLeft, offsetRight, offsetBottom) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
        this.offset.top = offsetTop;
        this.offset.left = offsetLeft;
        this.offset.right = offsetRight;
        this.offset.bottom = offsetBottom;
}
}

