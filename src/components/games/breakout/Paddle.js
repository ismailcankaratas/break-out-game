export default (ctx, canvas, paddleProps) => {
    class Paddle {
        constructor(x) {
            this.x = x;
            this.y = canvas.height - 10;
            this.height = 20;
            this.width = paddleProps.width;
            this.colors = ["red", "#0088FF"];
        }
        move() {
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = this.broke ? "white" : this.colors[1];
            ctx.strokeStyle = this.broke ? "white" : "blue";
            ctx.lineWidth = 1;
            ctx.fillStyle = this.broke ? "white" : this.colors[1];
            ctx.shadowBlur = 0;
            ctx.shadowColor = "blue";
            ctx.strokeRect(this.x, this.y, this.width, this.height);
            ctx.fill();
        }
    }

    let paddle = new Paddle(paddleProps.x);
    paddle.move();
    if (paddleProps.x <= 0) {
        paddleProps.x = 0;
    } else if (paddleProps.x + paddleProps.width >= canvas.width) {
        paddleProps.x = canvas.width - paddleProps.width;
    }
};