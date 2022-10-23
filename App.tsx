import React, { useRef, useEffect, useCallback } from 'react';

import Game from './game/game';

import UseShowModal from './hooks/useShowModal';

import './style.css';

export default function App() {
  const canvas = useRef();
  let gameInstance = useRef();
  let ctx = useRef();
  let Ui = useRef();
  let rect = useRef();
  const { Modal, toogleModal, isOpen } = UseShowModal();
  // const ctx = useInitCanvas(canvas);
  // const game = new Game(100, 100, 3, 3, canvas.current);

  const handleCanvasClick = useCallback((event) => {
    for (let i = 0; i < gameInstance.gameGrid.length; i++) {
      for (let j = 0; j < gameInstance.gameGrid[i].length; j++) {
        let currentCell = gameInstance.gameGrid[i][j];

        if (
          currentCell.isIntersected(
            event.clientX - rect[0].left,
            event.clientY - rect[0].top,
            ctx
          )
        ) {
          currentCell.pick(gameInstance.pickCross ? 'x' : 'o', ctx);
          currentCell.pickType = gameInstance.pickCross ? 'x' : 'o';
          gameInstance.pickCross = !gameInstance.pickCross;
        }
      }
    }

    // Ui.updatePanelText(game.pickCross);

    const { win, type } = gameInstance.checkWinner();

    if (win) {
      gameInstance.drawLine(type);
      // Ui.showWinnerBanner(game.pickCross ? 'Победил Крестик' : 'Победил Нолик');
      // console.log('win', { type });

      toogleModal('winModal');
      // alert(gameInstance.pickCross ? 'Победил Крестик' : 'Победил Нолик');
    }

    if (gameInstance.checkGameGridIsFull()) {
      if (!win) {
        // Ui.showWinnerBanner('Победила дружба');
        // console.log('nit', { type });
        alert('Победила дружба');
      }
    }
  }, []);

  useEffect(() => {
    if (!canvas.current) return;

    ctx = canvas.current.getContext('2d');
    rect = canvas.current.getClientRects();
    gameInstance = new Game(
      canvas.current.width,
      canvas.current.height,
      3,
      3,
      ctx
    );
  }, [canvas]);

  console.log('app', { isOpen, Modal });

  return (
    <div>
      <canvas
        onClick={handleCanvasClick}
        ref={canvas}
        id="canvas"
        width="400"
        height="400"
      ></canvas>
      {isOpen && <Modal />}
    </div>
  );
}
