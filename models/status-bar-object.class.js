class StatusBarObject extends DrawableObject {
    height = 50;
    width = 50;
    amount = 0;
    statusBarIcon;

    constructor(path, x, y, collectible, height, width) {
        super().loadImage(path);
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.statusBarIcon = collectible;
    }

}