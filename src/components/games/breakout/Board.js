import { useEffect, useRef } from "react"
import { BallMovement } from "./BallMovement";
import data from "../../data";
import WallCollision from "./util/WallCollision";
import Brick from "./Brick";
import Paddle from "./Paddle";
import BrickCollision from "./util/BrickCollision";
import AllBroken from "./util/AllBroke";
import PlayerStates from "./playerStats";
import PaddleHit from "./util/PaddleHit";

let bricks = [];

let { ballObj, brickObj, player, paddleProps } = data;

export default function Board() {
    const canvasRef = useRef(null);

    useEffect(() => {
        function render() {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");


            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Assign Bricks
            let newBrickSet = Brick(2, bricks, canvas, brickObj);

            if (newBrickSet && newBrickSet.length > 0) {
                bricks = newBrickSet;
            }


            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Player Stats Function call
            PlayerStates(ctx, player, canvas);

            // Display Bircks
            bricks.map((brick) => {
                return brick.draw(ctx);
            });

            // Top Hareketi
            BallMovement(ctx, ballObj);

            // Check all broken
            AllBroken(bricks, player, canvas, ballObj);

            // Top ve duvar sekmesi
            WallCollision(ballObj, canvas, player, paddleProps);

            // Brick Collision
            let brickCollision;
            for (let i = 0; i < bricks.length; i++) {
                brickCollision = BrickCollision(ballObj, bricks[i]);

                if (brickCollision.hit && !bricks[i].broke) {
                    if (brickCollision.axis === "X") {
                        ballObj.dx *= -1;
                        bricks[i].broke = true;
                    } else if (brickCollision.axis === "Y") {
                        ballObj.dy *= -1;
                        bricks[i].broke = true;
                    }

                    player.score += 10;
                }
            }

            Paddle(ctx, canvas, paddleProps)

            PaddleHit(ballObj, paddleProps);

            requestAnimationFrame(render);
        }
        render();

    }, []);
    return (
        <div className="game">
            <canvas id="canvas"
                ref={canvasRef}
                onMouseMove={(event) => paddleProps.x = event.clientX - paddleProps.width / 2 - 10}
            />
        </div>
    )
}