/**
 * @author Nabil L. A. <@nalleon>
 */
export default class Cell {

    /**
     * Properties
     */

    private id : number;
    private isBomb : boolean;
    private isRevealed : boolean;
    private isFlagged : boolean;
    private posX : number;
    private posY : number;
    private neighboringBombs : number;

    /**
     * Default of the class
     */
    constructor() {
        this.id = 0;
        this.isBomb = false;
        this.isRevealed = false;
        this.isFlagged = false;
        this.posX = -1;
        this.posY = -1;
        this.neighboringBombs = 0;
    }

    /**
     * Function to reveal the cell
     */
    reveal() {
        this.isRevealed = true;
    }

    /**
     * Function to hide the cell
     */
    hide(){
        this.isRevealed = false;
    }

    /**
     * Function to flag the cell
     */
    flag() {
        this.isFlagged = true;
    }
    
    /**
     * Function to unflag the cell
     */
    unflag() {
        this.isFlagged = false;
    }

    /**
     * Getters and setters
     */

    getIsRevealed() {
        return this.isRevealed;
    }
    setIsRevealed(value: boolean) {
        this.isRevealed = value;
    }
    getIsBomb() {
        return this.isBomb;
    }
    setIsBomb(value: boolean) {
        this.isBomb = value;
    }
    getId() {
        return this.id;
    }
    setId(value: number) {
        this.id = value;
    }
    getIsFlagged() {
        return this.isFlagged;
    }
    setIsFlagged(value: boolean) {
        this.isFlagged = value;
    }

    getPosX() {
        return this.posX;
    }
    setPosX(value: number) {
        this.posX = value;
    }
    getPosY() {
        return this.posY;
    }
    setPosY(value: number) {
        this.posY = value;
    }
    getNeighboringBombs() {
        return this.neighboringBombs;
    }
    setNeighboringBombs(value: number) {
        this.neighboringBombs = value;
    }
}