import { useEffect, useRef } from "react"
import { BallMovement } from "./BallMovement";
import data from "../../data";
import WallCollision from "./util/WallCollision";
import Brick from "./Brick";

let bricks = [];

let { ballObj, brickObj } = data;

export default function Board() {
    const canvasRef = useRef(null);

    useEffect(() => {
        function render() {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            let newBrickSet = Brick(2, bricks, canvas, brickObj);

            if (newBrickSet && newBrickSet.length > 0) {
                bricks = newBrickSet;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            bricks.map((brick) => {
                return brick.draw(ctx);
            });

            BallMovement(ctx, ballObj);

            WallCollision(ballObj, canvas);

            requestAnimationFrame(render);
        }
        render();

    }, []);
    return (
        <div className="game">
            <canvas id="canvas" ref={canvasRef} />
        </div>
    )
}