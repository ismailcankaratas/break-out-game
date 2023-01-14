export function BallMovement(ctx, ballObj) {
    let data = new Ball(ballObj.x, ballObj.y, ballObj.rad);
    data.draw(ctx);
    ballObj.x += ballObj.dx;
    ballObj.y += ballObj.dy;
}

class Ball {
    constructor(x, y, rad) {
        this.x = x;
        this.y = y;
        this.rad = rad;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = "#58a6ff";
        ctx.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);
        ctx.strokeStyle = "#58a6ff";
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.stroke();
    }
}