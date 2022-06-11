import { Board } from "./Board";
import { Colors } from "./Colors";
import { Figure } from "./figure/Figure";

export class Cell {
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    figure: Figure | null;
    board: Board;
    available: boolean; // Movment figure
    id: number; //React key

    constructor(
        board: Board,
        x: number, 
        y: number, 
        color: Colors, 
        figure: Figure | null) {
            this.x = x
            this.y = y
            this.board = board
            this.color = color
            this.figure = figure
            this.available = false
            this.id = Math.random()
    }
}