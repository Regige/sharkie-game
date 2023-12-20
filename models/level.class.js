class Level {
    enemies;
    lights;
    backgroundObjects;
    backgroundObjectsBarrier;
    collectibles;
    level_end_x = 5050;

    constructor(enemies, lights, backgroundObjects, backgroundObjectsBarrier, collectibles) {
        this.enemies = enemies;
        this.lights = lights;
        this.backgroundObjects = backgroundObjects;
        this.backgroundObjectsBarrier = backgroundObjectsBarrier;
        this.collectibles = collectibles;
    }
}
