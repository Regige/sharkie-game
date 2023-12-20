class DrawableObject {
    x = 120;
    y = 250;
    img;
    height = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;


    /**
     * This function creates a new image object and sets the source of the image
     * @param {string} path This variable is the image path as a string
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    /**
     * The drawImage function is being called with all the parameters to add the image to the context
     * @param {*} ctx 
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    /**
     * This function adds a frame to the object. The function defines all parameters for the frame
     * @param {*} ctx 
     */
    drawFrame(ctx) {
        if(this instanceof Character || this instanceof Fish || this instanceof JellyFish || this instanceof Endboss || this instanceof Coin || this instanceof Poison || this instanceof Heart || this instanceof ThrowableObject || this instanceof BackgroundObjectBarrier) {
        ctx.beginPath();
        ctx.lineWidth = '5';
        ctx.strokeStyle = 'blue';
        ctx.rect(
            this.x + this.offset.left, 
            this.y + this.offset.top, 
            this.width - this.offset.right,
            this.height - this.offset.bottom);
        ctx.stroke();
        }
    }


    /**
     * When called this function saves each element from the array inside the object imageCache. It creates a new image element, sets the arrays element string to the img.src and sets the imageCache acordingly.
     * 
     * @param {Array} arr - an array of image paths 
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
}