import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let blockOneSquare;
        let blockTwoSqaure;
        let startRowPosition;

        if (this.player === Player.WHITE) {
            blockOneSquare = Square.at(location.row+1,location.col);
            blockTwoSqaure = Square.at(location.row+2, location.col);
            startRowPosition = 1;
        }
        else {
            blockOneSquare = Square.at(location.row-1,location.col);
            blockTwoSqaure = Square.at(location.row-2, location.col);
            startRowPosition = 6;
        }

        if (board.getPiece(blockOneSquare)) {
            return new Array(0);
        }
        else if (!board.getPiece(blockTwoSqaure) && location.row === startRowPosition) {
            return new Array(blockOneSquare,blockTwoSqaure);
        }
        else {
            return new Array(blockOneSquare);
        }
    }
}
