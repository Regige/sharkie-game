class ThrowableObject extends MovableObject {
    width = 40;
    height = 40;
    IMAGE;
    bubbleType; 
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };

    constructor(x, y, bubbleType) {
        super();
        this.bubbleType = bubbleType;
        this.setBubbleTypeImage(bubbleType);
        this.loadImage(this.IMAGE);
        this.x = x;
        this.y = y;
        this.throw();
    }


    /**
     * This function sets the x value depending on the direction and calls the applyGravityBubble function
     */
    throw() {
        this.speedY = 10;
        setInterval(() => {
            if(world?.character.otherDirection == false) {
                this.applyGravityBubble();
                this.x += 20;
            } else if(world?.character.otherDirection == true) {
                this.applyGravityBubble();
                this.x -= 20;
            }
        }, 50);
    };


    /**
     * This function sets the IMAGE variable depending on the value of bubbleType
     * @param {string} bubbleType - This variable is a string and it is either 'normal' or 'poison'
     */
    setBubbleTypeImage(bubbleType) {
        if(bubbleType == 'normal') {
            this.IMAGE = 'img_Sharkie/1.Sharkie/4.Attack/Bubble trap/Bubble.png';
        } else if(bubbleType == 'poison') {
            this.IMAGE = 'img_Sharkie/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble.png';
        }
    }
}
