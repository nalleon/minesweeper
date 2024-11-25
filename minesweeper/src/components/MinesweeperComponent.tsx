import React, { useEffect, useRef, useState } from 'react'
import Cell from '../models/Cell'
import CellCardComponent from './CellCardComponent';
import Game from '../models/Game';
import '../styles/minesweeper.css'
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * @author Nabil L. A. <@nalleon>
 */

type Props = {}
const MinesweeperComponent = (props: Props) => {
  /**
   * UseStates for board, gameOver, message
   */
  const [board, setBoard] = useState<Cell[][]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState('');

  /**
   * UseRef for the game instance
   */
  const refGame = useRef<Game>(new Game());

  useEffect(() => {
    const auxBoard = refGame.current.createBoard();
    setBoard(auxBoard);
  }, [])
  
  /**
   * Function to modify the cell
   * @param cell to reveal
   */
  function modifyCell(cell : Cell){
    if(gameOver){
      return;
    }

    let auxBoard = board;
    setMessage(`Cell${cell.getId()} --> position: (${cell.getPosX()}, ${cell.getPosY()}), revealed: ${cell.getIsRevealed()},  flagged: ${cell.getIsFlagged()}`);

    if(cell.getIsBomb() && cell.getIsRevealed()){
      setMessage('Game Over! You hit a bomb');
      auxBoard = refGame.current.revealAllCells();      
      setBoard([...auxBoard]);
      setGameOver(true);
      return;
    }
    
    if(cell.getIsRevealed() && !cell.getIsFlagged() && cell.getNeighboringBombs() == 0){      
      refGame.current.cellHasAdjacentBombs(cell);
      setBoard([...auxBoard]);
      return;
    }


    if(refGame.current.checkWin()){
      setMessage('You won!');
      setGameOver(true);
      return;
    }
  }

  const restartGame = () => {
    const auxBoard = refGame.current.createBoard();
    setMessage('');
    setBoard(auxBoard);
    setGameOver(false); 
  }

  return (
    <>
      <div className="container text-center vh-100 d-flex flex-column justify-content-center">
        <div className="row justify-content-center mt-5">
          <div className="card col-10 col-sm-12 col-md-10 col-lg-8 bg-dark border-light">
            <div className='mt-3'>
              <h2 className='text-success fw-bold text-uppercase'>Minesweeper</h2>
              <h6 className='mt-3 text text-warning fw-bold text-uppercase'>Current cell info</h6>
              <div className="mb-3">
                <textarea value={message} readOnly rows={1} className="form-control text-center bg-dark text-light border-light " />
              </div>
            </div>

            <div className='board m-3'>
              {board.map((row, rowIndex) => (
                <div key={rowIndex} className='row'>
                  {row.map((cell) => (
                    <div className='col p-1'>
                      <CellCardComponent
                        key={cell.getId()}
                        cell={cell}
                        modifyCellParent={modifyCell} 
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            {(gameOver) &&
              <button 
                className='btn btn-danger m-2 mb-3 text-uppercase fw-bold'
                onClick={restartGame}
                >
                  Restart
              </button>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default MinesweeperComponent