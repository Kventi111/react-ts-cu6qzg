import { useEffect, useRef } from 'react';
import Game from '../game/game';

export function useInitGame(canvasRef) {
  // console.log(canvasRef);

  let gameInstance = useRef();
  const CANVAS_WIDTH = canvasRef.current.clientWidth;
  const CANVAS_HEIGHT = canvasRef.current.clientHeight;

  useEffect(() => {
    // console.log(canvasRef);

    gameInstance = new Game(CANVAS_WIDTH, CANVAS_HEIGHT, 3, 3, ctx);
    // console.log({ gameInstance });
  });

  return gameInstance;
}
