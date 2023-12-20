class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    statusBarObjects = [
        new StatusBarObject('img_Sharkie/4. Marcadores/green/coin_sgl.png', 250, 15, "Coin", 50, 50),
        new StatusBarObject('img_Sharkie/4. Marcadores/green/poison_sgl.png', 340, 15, "Poison", 50, 50), ];
    throwableObjects = [];
    endResultImage = [
        new Endresult('img_Sharkie/6.Botones/Tittles/You win/Mesa de trabajo 1.png', 0, 0, 480, 720),
        new Endresult('img_Sharkie/6.Botones/Tittles/Game Over/Recurso 13.png', 30, 150, 180, 660)
    ];
    background_sound = new Audio('audio/background_sound.mp3');
    background_sound_enemy = new Audio('audio/enemy_background.mp3');
    sound = true;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.setBackgroundSound();
        this.setSoundVolume();
    };
    

    /**
     * This function sets the variable world within the character class. The value is this (world) class.
     * This way the character.class.js can get access to variables in the world.class.js like keyboard
     */
    setWorld() {
        this.character.world = this;
    };
    

    /**
     * This function calls several other functions
     */
    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkCollecting();
            this.checkHitEnemies();
        }, 100);
    };


    /**
     * This function checks if the character is colliding with any enemy and calls the hit and the 
     * setPercentage function if that is the case
     */
    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if(this.character.isColliding(enemy) && !enemy.isDead) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
        });
    };


    /**
     * This function checks if one of the enemies is colliding with the last object within the 
     * throwableObjects array and calls either the enemyIsDead or endbossIsHurt function
     */
    checkHitEnemies() {
        this.level.enemies.forEach((enemy) => {
            let index = this.throwableObjects.length - 1;
            if(this.throwableObjects.length > 0 && this.throwableObjects[index].isColliding(enemy)) {
                if(enemy != this.level.enemies[0] || enemy.hurtEndboss == 12) {
                    this.enemyIsDead(enemy);
                } else if(enemy.hurtEndboss < 12) {
                    this.endbossIsHurt(enemy, index);
                }
            }
        });
    };


    /**
     * This function sets the isDead variable to true and calls different functins according to the conditions. 
     * If enemy.type is either Fish or JellyFish new objects are created. If its endboss, the endbossIsDead function
     * is being called.
     * @param {object} enemy - This object is the enemy which was send from the calling function
     */
    enemyIsDead(enemy) {
        enemy.isDead = true;
        if(enemy.type == 'Fish') {
            let newCoin = new Coin(enemy.x, enemy.y);
            this.level.collectibles.push(newCoin);
            this.setSoundForAddedCollectibles(newCoin);
        } else if(enemy.type == 'JellyFish') {
            let newPoison = new Poison(enemy.x, enemy.y);
            this.level.collectibles.push(newPoison);
            this.setSoundForAddedCollectibles(newPoison);
        } else if(enemy.type == 'endboss') {
            this.endbossIsDead();
        }
    }


    /**
     * This functin removes the EventListener form the window and removes the class d-none form the paly again Button
     */
    endbossIsDead() {
        window.removeEventListener("keydown", keyDownEvent);
        window.removeEventListener("keyup", keyUpEvent);
        let playBt = document.getElementById('try-again-bt');
        playBt.classList.remove('d-none');
        playBt.textContent = "PLAY AGAIN";
        document.getElementById('ctrl-bt-main-con').classList.add('d-none');
    }


    /**
     * This function calls the showHurtAnimation function and depending on the bubbleType adds either one or 2 
     * more to the hurtEndboss varibale
     * @param {object} enemy - This object is the enemy which was send as a parameter
     * @param {number} i - This is the index of the object from the throwableObjects array
     */
    endbossIsHurt(enemy, i) {
        enemy.showHurtAnimation();
        if(this.throwableObjects[i].bubbleType == 'normal') {
            enemy.hurtEndboss++;
        } else if(this.throwableObjects[i].bubbleType == 'poison') {
            enemy.hurtEndboss += 2;
        }     
    }
     

    /**
     * This function checks if the character is colliding with any collectible object.
     * Depending on what is defined in iconCollected, either the statusBarObject.amount for that
     * object is increased or the collectingHeart function is calleld. At the end collectible is removed form the 
     * collectibles object.
     */
    checkCollecting() {
        for (let i = 0; i < this.level.collectibles.length; i++) {
            const collectible = this.level.collectibles[i];
            if(this.character.isColliding(collectible)) {
                let iconCollected = collectible.collectible;
                if(iconCollected != "Heart") {
                    this.statusBarObjects.forEach((statusBarObject) => {
                        if(statusBarObject.statusBarIcon == iconCollected) {
                        collectible.collecting_sound.play();
                        statusBarObject.amount++;
                        }
                    });
                } else {
                    this.collectingHeart(collectible);
                }
                this.level.collectibles.splice(i, 1);
            };
        };
    };


    /**
     * This function increases character.energy and calls the setPercentage function
     * @param {object} collectible - This object is a heart class
     */
    collectingHeart(collectible) {
        collectible.collecting_sound.play();
        if(this.character.energy < 100) {
            let energy = this.character.energy;
            if(energy < 100 && energy >=75) {
                this.character.energy = 100; 
            } else if(energy < 75 && energy >=50) {
                this.character.energy = 75;
            } else if(energy < 50 && energy >=25) {
                this.character.energy = 50;
            } else if(energy < 25 && energy > 0) {
                this.character.energy = 25;
            }
            this.statusBar.setPercentage(this.character.energy);
        }
    }


    /**
     * This function creates a new ThrowableObject and adds this to the throwableObjects array
     * @param {string} bubbleType - String with the value of either 'normal' or 'posion'
     */
    createThrowObject(bubbleType) {
        let bubble;
        if(!this.character.otherDirection) {
            bubble = new ThrowableObject(this.character.x + 155, this.character.y + 90, bubbleType);
        } else if(this.character.otherDirection) {
            bubble = new ThrowableObject(this.character.x, this.character.y + 100, bubbleType);
        }
        this.throwableObjects.push(bubble);
    }
    

    /**
     * This function returns diffrent values depending on wheter keyboard.D or keyboard.SPACE is true.
     * If keyboard.SPACE is true, statusBarObjects[1].amount is reduced by one.
     * @returns a string
     */
    setBubbleType() {
        if(this.keyboard.D) {
           return 'normal'; 
        } else if(this.keyboard.SPACE) {
            this.statusBarObjects[1].amount -= 1;
            return 'poison'; 
        }
    }


    /**
     * This function sets the text which is displayed in the canvas next to the statusBarObjects.
     * The fillText function displays the objects amount.
     */
    updateStatusBarAmounts() {
        this.ctx.font = "30px luckiest-guy";
        this.ctx.fillStyle = 'white';
        this.statusBarObjects.forEach(o => {          
        this.ctx.fillText(o.amount, o.x + 50, o.y + 35);         
        })
    };


    /**
     * This function is responsible for adding all the objects to the canvas. 
     * The first clearRect function removes everything from the canvas everytime the function is being run.
     * With translate(this.camera_x, 0) the context is set to the x values of the character. That way all the 
     * objects  are displayed according to the characters position. 
     * With the functions addMovableObjects and addFixedObjects all the objects are being added.
     * Last the requestAnimationFrame funtion is being called to perform the animation.
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); 

        this.ctx.translate(this.camera_x, 0);
        this.addMovableObjects();

        this.ctx.translate(-this.camera_x, 0);
        this.addFixedObjects();

        let self = this;
        requestAnimationFrame(function() { // Draw() is being called all over again
            self.draw();
        })
    };


    /**
     * This function adds and calls all the movable objects
     */
    addMovableObjects() {
        this.addObjectsToMap(this.level.backgroundObjects); 
        this.addToMap(this.character);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.collectibles);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.lights);
        this.addObjectsToMap(this.level.backgroundObjectsBarrier); 
    }


    /**
     * This function adds and calls all the fixed objects 
     */
    addFixedObjects() {
        this.addToMap(this.statusBar);
        this.addObjectsToMap(this.statusBarObjects);
        this.updateStatusBarAmounts();
        if(this.level.enemies[0].isDead) {                 
            this.addToMap(this.endResultImage[0]);
            this.addToMap(new StatusBarObject('img_Sharkie/4. Marcadores/green/coin_sgl.png', 290, 150, "Coin", 70, 70));
            this.addResultOfCoin(); 
        } else if(this.character.energy == 0) {
            this.addToMap(this.endResultImage[1]);
        }
    }


    /**
     * This function set the text within the canvas at the end of the game and displays the amount of 
     * coins which were collected.
     */
    addResultOfCoin() {
        this.ctx.font = "40px luckiest-guy";
        this.ctx.fillStyle = 'white';       
        this.ctx.fillText(this.statusBarObjects[0].amount, 380, 200); 
    }


    /**
     * This function goes through all single objects within the added object and calls the addToMap function
     * @param {objects} objects 
     */
    addObjectsToMap(objects) {        
        objects.forEach(o => {      
            this.addToMap(o);           
        })
    };

    
    /**
     * This function checks if otherDirection is true and calls flipImage if that is the case. 
     * Than the draw function is being called which draws the object into the canvas. If otherDirection
     * was true, flipImageBack is being called and the object is set back to normal again.
     * @param {object} mo - The single object which is added to the canvas
     */
    addToMap(mo) {
        if(mo.otherDirection) {
            this.flipImage(mo);
        }
        try {
            mo.draw(this.ctx);    // Image is being added
            // mo.drawFrame(this.ctx);
        } catch(e) {
            console.warn('Error loading image ', e);
            console.log('Could not load image ,', this.img.src);
        }
        if(mo.otherDirection) {   
            this.flipImageBack(mo);
        }
    };


    /**
     * The function saves first everyting within the context. With ctx.translate(mo.width, 0) the object is being shifted by the value of its width. And 0 in y-axis. With ctx.scale(-1, 1) everything is being placed mirror-inverted. (180 degree on the y-achis). The x-axis is now on the right side, to make sure the object is still placed on the right side 'mo.x = mo.x * -1' is being added.
     * @param {object} mo - The object which is bing fliped (In this game only the character)
     */
    flipImage(mo) {
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
    };


    /**
     * This function restores the context again and flips everything back to normal again.
     * @param {object} mo - The object which is bing back fliped (In this game only the character) 
     */
    flipImageBack(mo) {
            mo.x = mo.x * -1;   
            this.ctx.restore();
    };
    

    /**
     * This function sets the background sound depending on where the character is on the x axis and 
     * whether the endboss or the character isDead = true.
     */
    setBackgroundSound() {
        let backgroundSound = setInterval(() => {
            if(this.level.enemies[0].isDead == true || this.character.isDead() == true) {
            clearInterval(backgroundSound);
            this.background_sound.pause();
            this.background_sound_enemy.pause();
            } else {
                if(this.character.x > 4080) {
                    this.background_sound.pause();
                    this.background_sound_enemy.play();
                } else {
                    this.background_sound_enemy.pause();
                    this.background_sound.play();
                }
            }
        }, 100);
    }

    /**
     * This function sets the sounds volumes.
     */
    setSoundVolume() {
        this.background_sound_enemy.volume = 0.5;
        this.background_sound.volume = 0.08;

        this.level.collectibles.forEach(collectible => {
        collectible.collecting_sound.volume = 0.1;
        });

        this.level.enemies[0].hurt_sound.volume = 0.2;
        this.character.hurt_sound.volume = 0.2;
    }


    /**
     * This function sets the sound for the added collectibles. Depending on the variable sound,
     * the volume is either off and 0 or on and 0.1.
     * @param {object} newCollectible 
     */
    setSoundForAddedCollectibles(newCollectible) {
      if(!this.sound) {
        newCollectible.collecting_sound.volume = 0;
      } else if(this.sound) {
        newCollectible.collecting_sound.volume = 0.1;
      }
    }
}
