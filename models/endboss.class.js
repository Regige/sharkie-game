class Endboss extends MovableObject {
    height = 350;
    width = 350;
    y = - 20;
    type = 'endboss';

    IMAGES_SWIMMING_INTRO = [
        'img_Sharkie/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        'img_Sharkie/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        'img_Sharkie/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        'img_Sharkie/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        'img_Sharkie/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        'img_Sharkie/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        'img_Sharkie/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        'img_Sharkie/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        'img_Sharkie/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        'img_Sharkie/2.Enemy/3 Final Enemy/1.Introduce/10.png'
    ];
    IMAGES_SWIMMING = [
        'img_Sharkie/2.Enemy/3 Final Enemy/2.floating/1.png',
        'img_Sharkie/2.Enemy/3 Final Enemy/2.floating/2.png',
        'img_Sharkie/2.Enemy/3 Final Enemy/2.floating/3.png',
        'img_Sharkie/2.Enemy/3 Final Enemy/2.floating/4.png',
        'img_Sharkie/2.Enemy/3 Final Enemy/2.floating/5.png',
        'img_Sharkie/2.Enemy/3 Final Enemy/2.floating/6.png',
        'img_Sharkie/2.Enemy/3 Final Enemy/2.floating/7.png',
        'img_Sharkie/2.Enemy/3 Final Enemy/2.floating/8.png',
        'img_Sharkie/2.Enemy/3 Final Enemy/2.floating/9.png',
        'img_Sharkie/2.Enemy/3 Final Enemy/2.floating/10.png',
        'img_Sharkie/2.Enemy/3 Final Enemy/2.floating/11.png',
        'img_Sharkie/2.Enemy/3 Final Enemy/2.floating/12.png',
        'img_Sharkie/2.Enemy/3 Final Enemy/2.floating/13.png'
    ];
    IMAGES_ATTACK = [
        'img_Sharkie/2.Enemy/3 Final Enemy/Attack/1.png',
        'img_Sharkie/2.Enemy/3 Final Enemy/Attack/2.png',
        'img_Sharkie/2.Enemy/3 Final Enemy/Attack/3.png',
        'img_Sharkie/2.Enemy/3 Final Enemy/Attack/4.png',
        'img_Sharkie/2.Enemy/3 Final Enemy/Attack/5.png',
        'img_Sharkie/2.Enemy/3 Final Enemy/Attack/6.png',
    ];
    IMAGES_HURT = [
    'img_Sharkie/2.Enemy/3 Final Enemy/Hurt/1.png',
    'img_Sharkie/2.Enemy/3 Final Enemy/Hurt/2.png',
    'img_Sharkie/2.Enemy/3 Final Enemy/Hurt/3.png',
    'img_Sharkie/2.Enemy/3 Final Enemy/Hurt/4.png',
    ]; 
    IMAGES_DEAD = [
    'img_Sharkie/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
    'img_Sharkie/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
    'img_Sharkie/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
    'img_Sharkie/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
    'img_Sharkie/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png'
    ];
    hurt_sound = new Audio('audio/electricity.mp3');
    success_sound = new Audio('audio/success.mp3');
    hadFirstContact = false;
    offset = {
        top: 120,
        left: 20,
        right: 40,
        bottom: 180,
    };
    isDead = false;
    hurtEndboss = 0;
    goToStartPosition = false;
    type = 'endboss';


    constructor() {
        super().loadImage(this.IMAGES_SWIMMING_INTRO[0]);
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_SWIMMING_INTRO);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 5000;
        this.speed = 20;
        this.animate();
    }


    /**
     * Sets the intervals to start the animations of the endboss
     */
    animate() {
        let i = 0;
        setInterval(() => {
            if(i < 10) {
                this.playAnimation(this.IMAGES_SWIMMING_INTRO);  
            } else {
                this.playAnimation(this.IMAGES_SWIMMING);
            }
            i++;
        }, 200);


        let extraAnimations = setInterval(() => {
            if(this.isDead) {
                this.endbossIsDead(extraAnimations);
            } else if(this.isCharacterCloseEnough()) {
                i = 0;
                this.hadFirstContact = true;
            } else if(this.isCharacterTooClose(i)) {
                this.playAnimation(this.IMAGES_ATTACK);
                this.moveTowardsCharacter();
            } else if(this.isCharacterTooFarAway()) {
                this.goToStartPosition = true;
            } else if(this.goToStartPosition) {
                this.moveBackToStartPosition();
            }
        }, 100);
    }


    /**
     * If isDead is true, the playAnimation is being called and the applyGravityBubble() added. 
     * Last the interval is cleared
     * @param {number} extraAnimations - The id of the setInterval
     */
    endbossIsDead(extraAnimations) {
        this.success_sound.play();
        this.playAnimation(this.IMAGES_DEAD);
        this.applyGravityBubble();
        setTimeout(() => {
            clearInterval(extraAnimations);
        }, 1500);
    }


    isCharacterCloseEnough() {
        return world?.character.x > 4080 && !this.hadFirstContact;     
    }

    isCharacterTooClose(i) {
        return i >= 10  && this.hadFirstContact && this.tooClose() && this.x > 4600 && !this.goToStartPosition;
    }

    isCharacterTooFarAway() {
        return !this.tooClose() && !this.goToStartPosition || this.x <= 4600 && !this.goToStartPosition;
    }


    /**
     * This function calles playAnimation within an setInterval and clears the interval after one second
     */
    showHurtAnimation() { 
        let hurtInterval = setInterval(() => {
            this.hurt_sound.play();
            this.playAnimation(this.IMAGES_HURT);
        }, 100)
        setTimeout(() => {
            clearInterval(hurtInterval);
        }, 1000);    
    }


    /**
     * This functin checks how far appart the character and the endboss are and returns a boolean
     * @returns - true if the distnance is less than 220
     */
    tooClose() {
        let positionEndboss = this.x + this.offset.left;
        let positionCharacter = world?.character.x + world?.character.offset.left + world?.character.width - world?.    character.offset.right;
        let distance = positionEndboss - positionCharacter;
        return distance < 220;
    }


    /**
     * This function changes the x and y values of the endboss towards the characters x and y values to create
     * a movement towards the character
     */
    moveTowardsCharacter() {
        let sharkie = world?.character;
        let aimedX = sharkie.x + sharkie.offset.left + sharkie.width - sharkie.offset.right;
        let aimedY = sharkie.y + (sharkie.offset.top + sharkie.height - sharkie.offset.bottom) / 2;

        if(aimedX < this.x + this.offset.left) {
            this.x -= this.speed;
        } else if(aimedX > this.x + this.offset.left) {
            this.x += this.speed;
        };
        if(aimedY < this.y + (this.offset.top + this.height - this.offset.bottom) / 2) {
            this.y -= this.speed;
        } else if(aimedY > this.y + (this.offset.top + this.height - this.offset.bottom) / 2) {
            this.y += this.speed;
        }
    }


    /**
     * This function checks the position of the endboss and depending on the values it adjust its values. 
     * When the positon hits a certain value, the endboss moves back to the original position
     */
    moveBackToStartPosition() {
        if(this.x < 5000) {
            this.x += this.speed;
        } else if(this.x > 5000) {
            this.x -= this.speed;
        } if(this.y < - 20) {
            this.y += this.speed;
        } else if(this.y > - 20) {
            this.y -= this.speed;
        }
        if(this.x >= 5000 && this.y >= - 20) {
            this.goToStartPosition = false;
        }
    }
}
