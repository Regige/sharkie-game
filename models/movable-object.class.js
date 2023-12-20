class MovableObject extends DrawableObject {
    speed = 0.05;
    otherDirection = false;
    speedY = 0;
    accelerationBubble = 5;
    energy = 100;
    lastHit = 0;


    /**
     * Sets the y value
     */
    applyGravityBubble() {
        this.y -= this.speedY;
        this.speedY += this.accelerationBubble;
    }


    /**
     * This function compares the send objects x and y values with the calling objects x and y values.
     * @param {object} obj - The object to compare the values with
     * @returns true or false
     */
    isColliding(obj) {
        return (
            this.x + this.offset.left + this.width - this.offset.right >=
            obj.x + obj.offset.left &&
            this.y + this.offset.top + this.height - this.offset.bottom >=
            obj.y + obj.offset.top &&
            this.x + this.offset.left <= obj.x + obj.offset.left + obj.width - obj.offset.right &&
            this.y + this.offset.top <= obj.y + obj.offset.top + obj.height - obj.offset.bottom
        );
    }


    /**
     * This function checks if the objects position is at a certain position
     * @returns true or false
     */
    checkBarrier() {
        return (this.x + this.offset.left + this.width - this.offset.right < 4075 || 
            this.x + this.offset.left > 4175 || 
            this.y + this.offset.top > 180 && this.y + this.offset.top + this.height - this.offset.bottom < 290);
    }


    /**
     * This funcition reduces the energy value by 5 and sets the time each time
     */
    hit() {
        this.energy -= 5;
        if(this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * This function checks if the time diffrence is less than one second
     * @returns - true or false
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // Difference in ms
        timepassed = timepassed / 1000; // Difference in s
        return timepassed < 1;
    }

    /**
     * This function checks if the variable energy is equal to 0 and returns a boolean
     * @returns - true or false
     */
    isDead() {
        return this.energy == 0;
    }


    /**
     * This function sets the x value and moves the object in the right direction when the conditions are accordingly
     */
    moveRight() {
        if(this instanceof Character || this instanceof Fish || this instanceof JellyFish || this instanceof Endboss || this instanceof ThrowableObject) {
            if(this.checkBarrier()) {
                this.x += this.speed;
            } else if(this.x + this.offset.left > 4160) {
                this.x += this.speed;
            } else if(this.y + this.offset.top + this.height - this.offset.bottom < 305 && this.y + this.offset.top > 165) {
                this.x += this.speed;
            }
        } else {
            this.x += this.speed;
        }
    }


    /**
     * This function sets the x value and moves the object in the left direction when the conditions are accordingly
     */
    moveLeft() {
        if(this instanceof Character || this instanceof Fish || this instanceof JellyFish || this instanceof Endboss || this instanceof ThrowableObject) {
            if(this.checkBarrier()) {
                this.x -= this.speed;
            } else if(this.x + this.offset.left + this.width - this.offset.right < 4090) {
                this.x -= this.speed;
            } else if(this.y + this.offset.top + this.height - this.offset.bottom < 305 && this.y + this.offset.top > 165) {
                this.x -= this.speed;
            }
        } else {
            this.x -= this.speed;
        }
    }


    /**
     * This function sets the y value and moves the object up the y axis when the conditions are accordingly
     */
    moveUp() {
        if(this.checkBarrier()) {
            this.y -= this.speed;
        } else if(this.y + this.offset.top + this.height - this.offset.bottom < 305 && this.y + this.offset.top > 180 || this.x + this.offset.left > 4160 || this.x + this.offset.left + this.width - this.offset.right < 4090) {
            this.y -= this.speed;
        }
    } 

    /**
     * This function sets the y value and moves the object down the y axis when the conditions are accordingly
     */
    moveDown() {
        if(this.checkBarrier()) {
            this.y += this.speed;
        } else if(this.y + this.offset.top > 165 && this.y + this.offset.top + this.height - this.offset.bottom < 290 || this.x + this.offset.left > 4160 || this.x + this.offset.left + this.width - this.offset.right < 4090) {
            this.y += this.speed;
        }
    }


    /**
     * This function is run every 50 ms and defines each time a new img
     * @param {Array} - array with strings of image paths
     */
    playAnimation(images) {
        let i = this.currentImage % images.length; 
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}
