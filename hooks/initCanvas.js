import { useEffect, useState } from 'react';

export function useInitCanvas(canvasRef) {
  let [context, setCanvasContext] = useState();

  useEffect(() => {
    console.log({ canvasRef });

    console.log(canvasRef.current.getContext('2d'));

    setCanvasContext(canvasRef.current.getContext('2d'));
    console.log({ context });
  }, []);

  return context;
}
