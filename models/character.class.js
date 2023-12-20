class Character extends MovableObject{
    height = 180;
    width = 180;
    x = 10;
    y = 100;
    speed = 10;
    IMAGES_SLEEPY = [
        'img_Sharkie/1.Sharkie/2.Long_IDLE/i1.png',
        'img_Sharkie/1.Sharkie/2.Long_IDLE/I2.png',
        'img_Sharkie/1.Sharkie/2.Long_IDLE/I3.png',
        'img_Sharkie/1.Sharkie/2.Long_IDLE/I4.png',
        'img_Sharkie/1.Sharkie/2.Long_IDLE/I5.png',
        'img_Sharkie/1.Sharkie/2.Long_IDLE/I6.png',
        'img_Sharkie/1.Sharkie/2.Long_IDLE/I7.png',
        'img_Sharkie/1.Sharkie/2.Long_IDLE/I8.png',
        'img_Sharkie/1.Sharkie/2.Long_IDLE/I9.png',
        'img_Sharkie/1.Sharkie/2.Long_IDLE/I10.png',
        'img_Sharkie/1.Sharkie/2.Long_IDLE/I11.png',
        'img_Sharkie/1.Sharkie/2.Long_IDLE/I12.png',
        'img_Sharkie/1.Sharkie/2.Long_IDLE/I13.png',
        'img_Sharkie/1.Sharkie/2.Long_IDLE/I14.png',
    ];
    IMAGES_FLOATING = [
        'img_Sharkie/1.Sharkie/1.IDLE/1.png',
        'img_Sharkie/1.Sharkie/1.IDLE/2.png',
        'img_Sharkie/1.Sharkie/1.IDLE/3.png',
        'img_Sharkie/1.Sharkie/1.IDLE/4.png',
        'img_Sharkie/1.Sharkie/1.IDLE/5.png',
        'img_Sharkie/1.Sharkie/1.IDLE/6.png',
        'img_Sharkie/1.Sharkie/1.IDLE/7.png',
        'img_Sharkie/1.Sharkie/1.IDLE/8.png',
        'img_Sharkie/1.Sharkie/1.IDLE/9.png',
        'img_Sharkie/1.Sharkie/1.IDLE/10.png',
        'img_Sharkie/1.Sharkie/1.IDLE/11.png',
        'img_Sharkie/1.Sharkie/1.IDLE/12.png',
        'img_Sharkie/1.Sharkie/1.IDLE/13.png',
        'img_Sharkie/1.Sharkie/1.IDLE/14.png',
        'img_Sharkie/1.Sharkie/1.IDLE/15.png',
        'img_Sharkie/1.Sharkie/1.IDLE/16.png',
        'img_Sharkie/1.Sharkie/1.IDLE/17.png',
        'img_Sharkie/1.Sharkie/1.IDLE/18.png'
    ];
    IMAGES_SWIMMING = [
        'img_Sharkie/1.Sharkie/3.Swim/1.png',
        'img_Sharkie/1.Sharkie/3.Swim/2.png',
        'img_Sharkie/1.Sharkie/3.Swim/3.png',
        'img_Sharkie/1.Sharkie/3.Swim/4.png',
        'img_Sharkie/1.Sharkie/3.Swim/5.png',
        'img_Sharkie/1.Sharkie/3.Swim/6.png'
    ];
    IMAGES_ELECTRIC_SHOCK = [
        'img_Sharkie/1.Sharkie/5.Hurt/2.Electric_shock/o1.png',
        'img_Sharkie/1.Sharkie/5.Hurt/2.Electric_shock/o2.png'
    ];
    IMAGES_BUBBLE_ATTACK = [
        'img_Sharkie/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png',
        'img_Sharkie/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        'img_Sharkie/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        'img_Sharkie/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        'img_Sharkie/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        'img_Sharkie/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        'img_Sharkie/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        'img_Sharkie/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
    ];
    IMAGES_BUBBLE_ATTACK_POISON = [
        'img_Sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png',
        'img_Sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        'img_Sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        'img_Sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        'img_Sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        'img_Sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        'img_Sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        'img_Sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png'
    ];
    IMAGES_DEAD = [
        'img_Sharkie/1.Sharkie/6.dead/2.Electro_shock/1.png',
        'img_Sharkie/1.Sharkie/6.dead/2.Electro_shock/2.png',
        'img_Sharkie/1.Sharkie/6.dead/2.Electro_shock/3.png',
        'img_Sharkie/1.Sharkie/6.dead/2.Electro_shock/4.png',
        'img_Sharkie/1.Sharkie/6.dead/2.Electro_shock/5.png',
        'img_Sharkie/1.Sharkie/6.dead/2.Electro_shock/6.png',
        'img_Sharkie/1.Sharkie/6.dead/2.Electro_shock/7.png',
        'img_Sharkie/1.Sharkie/6.dead/2.Electro_shock/8.png',
        'img_Sharkie/1.Sharkie/6.dead/2.Electro_shock/9.png',
        'img_Sharkie/1.Sharkie/6.dead/2.Electro_shock/10.png',
    ];
    world;
    swimming_sound = new Audio('audio/swimming.mp3');
    hurt_sound = new Audio('audio/electricity.mp3');
    lose_sound = new Audio('audio/lost.mp3');
    offset = {
        top: 90,
        left: 35,
        right: 70,
        bottom: 130,
    };


    constructor() { 
        super().loadImage(this.IMAGES_FLOATING[0]);
        this.loadImages(this.IMAGES_FLOATING);
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_SLEEPY);
        this.loadImages(this.IMAGES_ELECTRIC_SHOCK);
        this.loadImages(this.IMAGES_BUBBLE_ATTACK);
        this.loadImages(this.IMAGES_BUBBLE_ATTACK_POISON);
        this.loadImages(this.IMAGES_DEAD);
 
        this.animate();
        this.moveCharacter();
    }


    /**
     * Sets the intervals to start the animations of the character
     */
    animate() {
        let extraAnimations = setInterval(() => {
            this.playExtraAnimations(extraAnimations);
        }, 150);
    }


    /**
     * Sets the interval to change the characters position
     */
    moveCharacter() {
        setInterval(() => {
            this.changePosition();
        }, 1000 / 60);
    }

    /**
     * Depending on the keyboard values, the character moves towards the designated direction
     */
    changePosition() {   
        this.swimming_sound.pause();
        if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
            this.moveRight();
            this.otherDirection = false;
            this.swimming_sound.play();
        }
        if(this.world.keyboard.LEFT && this.x > 0) {
            this.moveLeft();
            this.otherDirection = true;
            this.swimming_sound.play();
        }
        if(this.world.keyboard.UP && this.y > -80) {
            this.moveUp();
            this.swimming_sound.play();
        }
        if(this.world.keyboard.DOWN && this.y < 280) {
            this.moveDown();
            this.swimming_sound.play();
        }
        this.world.camera_x = -this.x + 130;
    }

    /**
     * playAnimation function is called.
     * Depending on the conditions diffrent image souces are used
     * @param {number} extraAnimations id of the setInterval
     */
    playExtraAnimations(extraAnimations) {
        if(this.isDead()) {
            this.characterIsDead(extraAnimations);
        } else if(this.isHurt()) {
            this.hurt_sound.play();
            this.playAnimation(this.IMAGES_ELECTRIC_SHOCK);
        } else if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
            this.playAnimation(this.IMAGES_SWIMMING);
        } else if(this.world.keyboard.D || this.world.keyboard.SPACE  && this.world.statusBarObjects[1].amount > 0) {
            this.characterIsAttacking(extraAnimations);
        } else if(this.pausedMovement(lastMovement)) {
            this.playAnimation(this.IMAGES_SLEEPY);
        } else {
            this.playAnimation(this.IMAGES_FLOATING);  
        }
    }


    /**
     * This function sets the interval for the bubble attack animation and calls the createThrowObject
     * function to create a new throwable-object
     * @param {number} extraAnimations - id of the interval 
     */
    characterIsAttacking(extraAnimations) {
        clearInterval(extraAnimations);
        let bubbleType = this.world.setBubbleType();
        let attackAnimation = setInterval(() => {
            if(bubbleType == 'normal') {
                this.playAnimation(this.IMAGES_BUBBLE_ATTACK);  
            } else if(bubbleType == 'poison') {
                this.playAnimation(this.IMAGES_BUBBLE_ATTACK_POISON);      
            }    
        }, 80);
        setTimeout(() => {
            this.world.createThrowObject(bubbleType)
            clearInterval(attackAnimation);
            this.animate();
        },600);
    }


    /**
     * playAnimation function for the dead animation is being called.
     * EventListener is removed from the key events.
     * The try again button is added to the page and the control buttons are being removed
     * @param {number} extraAnimations - id of the interval 
     */
    characterIsDead(extraAnimations) {
        this.playAnimation(this.IMAGES_DEAD);
        window.removeEventListener("keydown", keyDownEvent);
        window.removeEventListener("keyup", keyUpEvent);
        document.getElementById('try-again-bt').classList.remove('d-none');
        document.getElementById('ctrl-bt-main-con').classList.add('d-none');
        this.lose_sound.play();
        setTimeout(() => {
            clearInterval(extraAnimations);
        }, 1500);
    }

    /**
     * 
     * @param {number} lastTime this number is the time the character moved the last time
     * @returns if the time difference is bigger than 3, the function returns true
     */
    pausedMovement(lastTime) {
        let timepassed = new Date().getTime() - lastTime;
        timepassed = timepassed / 1000;
    
        return timepassed > 3;
    }   
}
