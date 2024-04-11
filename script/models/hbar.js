import Vector2D from './vector2d.js';

class HealthBar{

    width;
    height;
    position;
    maxHealth;
    currentHealth;

    constructor(x, y, width, height, maxHealth, currentHealth){
        this.position = new Vector2D(x, y);
        this.width = width;
        this.height = height;
        this.maxHealth = maxHealth;
        this.currentHealth = currentHealth;
    }

    draw(ctx){
        ctx.fillStyle = "red";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        ctx.fillStyle = "green";
        ctx.fillRect(this.position.x, this.position.y, this.width * (this.currentHealth / this.maxHealth), this.height);
    }


}

export default HealthBar;