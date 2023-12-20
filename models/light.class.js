class Light extends MovableObject {
    y = 0;
    height = 300;
    width = 600;
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };

    constructor(path, x) {
        super().loadImage(path);

        this.x = x;
        this.animate();
    }

    /**
     * Sets the intervals to start the animations of the light
     */
    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

    }
    
}