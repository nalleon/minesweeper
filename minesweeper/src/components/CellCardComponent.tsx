import React from 'react'
import Cell from '../models/Cell';
import '../styles/cell.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * @author Nabil L. A. <@nalleon>
 */

type Props = {
  modifyCellParent : (cell : Cell) => void;
  cell : Cell;
}

const CellCardComponent = (props: Props) => {
  const { cell, modifyCellParent } = props;

  /**
   * Function handle the left click event to modify the cell from parent component
   * @param event left click 
   */
  const handleCellClick = (event: React.MouseEvent) => {
    event.preventDefault(); 
    if (!cell.getIsRevealed() && !cell.getIsFlagged()) {
      cell.reveal();
      modifyCellParent(cell); 
    }
  };

  /**
   * Function handle the right click event to modify (mark/flag) the cell from parent component
   * @param event right click
   */
  const handleRightClick = (event: React.MouseEvent) => {
    event.preventDefault(); 
    if (!cell.getIsRevealed() && !cell.getIsFlagged()) {
      cell.flag();
    } else if (cell.getIsFlagged()) {
      cell.unflag();
    } 
    modifyCellParent(cell); 
  };

  return (
    <>

    <div
      className={`cell 
                  ${cell.getIsRevealed() ? 'revealed' : ''} 
                  ${cell.getIsFlagged() ? 'bg-warning' : ''} 
                  ${cell.getIsBomb() && cell.getIsRevealed() ? 'bg-danger' : ''}
                  ${cell.getIsBomb() ? 'bombtest' : ''} 
                  text-dark fw-bold`
                } 
      onClick={handleCellClick}
      onContextMenu={handleRightClick} 
    >
      {(cell.getIsFlagged()) && 'M'} 

      {(cell.getIsRevealed() && cell.getIsBomb()) && 'B'}

      {(cell.getIsRevealed() && !cell.getIsBomb() && !cell.getIsFlagged() && cell.getNeighboringBombs() > 0) 
        && cell.getNeighboringBombs()}
      </div>
    </>
  )
}

export default CellCardComponent