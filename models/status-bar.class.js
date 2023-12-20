class StatusBar extends DrawableObject {

IMAGES = [
    'img_Sharkie/4. Marcadores/green/Life/0_copia_3.png',  
    'img_Sharkie/4. Marcadores/green/Life/20_copia_4.png', 
    'img_Sharkie/4. Marcadores/green/Life/40_copia_3.png', 
    'img_Sharkie/4. Marcadores/green/Life/60_copia_3.png', 
    'img_Sharkie/4. Marcadores/green/Life/80_copia_3.png', 
    'img_Sharkie/4. Marcadores/green/Life/100_copia_2.png'
];

percentage = 100;

constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.x = 20;
    this.y = 0;
    this.width = 200;
    this.height = 60;
    this.setPercentage(100);
}


/**
 * This function sets the variable percentage and calls the function resolveImageIndex to get the
 * right index for defining img
 * @param {number} percentage - This variable is the characters energy value
 */
setPercentage(percentage) {
    this.percentage = percentage; // => 0 ... 5
    let path = this.IMAGES[this.resolveImageIndex()];
    this.img = this.imageCache[path];
}


/**
 * This function returns a index depending on the value of the variable percentage
 * @returns a number
 */
resolveImageIndex() {
    if(this.percentage == 100) {
        return 5;
    } else if(this.percentage >= 75) {
        return 4;
    } else if(this.percentage >= 50) {
        return 3;
    } else if(this.percentage >= 25) {
        return 2;
    } else if(this.percentage > 0) {
        return 1;
    } else {
        return 0;
    };
} 

} 
