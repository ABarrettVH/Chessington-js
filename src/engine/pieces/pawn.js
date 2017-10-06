import Player from '../player';
import Square from '../square';
import King from './king';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let blockOneSquare;
        let blockTwoSqaure;
        let takingPiecePositionRight;
        let takingPiecePositionLeft;
        let startRowPosition;
        let friendlyColour;
        const rowTop = 7;
        const rowBottom = 0;
        
        let availableMoves = [];

        if (location.row >= rowTop || location.row <= rowBottom) {
            return new Array(0);
        }

        if (this.player === Player.WHITE) {
            blockOneSquare = Square.at(location.row+1,location.col);
            blockTwoSqaure = Square.at(location.row+2, location.col);
            startRowPosition = 1;
            friendlyColour = Player.WHITE;
            takingPiecePositionLeft = Square.at(location.row+1,location.col-1);
            takingPiecePositionRight = Square.at(location.row+1,location.col+1);
            
        }
        else {
            blockOneSquare = Square.at(location.row-1,location.col);
            blockTwoSqaure = Square.at(location.row-2, location.col);
            startRowPosition = 6;
            friendlyColour = Player.BLACK;
            takingPiecePositionLeft = Square.at(location.row-1,location.col-1);
            takingPiecePositionRight = Square.at(location.row-1,location.col+1);
        }

        if (board.getPiece(takingPiecePositionLeft)&& board.getPiece(takingPiecePositionLeft).player !== friendlyColour  ) {
            availableMoves.push(takingPiecePositionLeft);
        }
        if (board.getPiece(takingPiecePositionRight)&& board.getPiece(takingPiecePositionRight).player !== friendlyColour ) {
            availableMoves.push(takingPiecePositionRight);
        }

        if (board.getPiece(blockOneSquare)||location.row > 7) {
            return new Array(0);
        }
        else if (!board.getPiece(blockTwoSqaure) && location.row === startRowPosition) {
            availableMoves.push(blockOneSquare,blockTwoSqaure);
            //return new Array(blockOneSquare,blockTwoSqaure);
        }
        else {
            availableMoves.push(blockOneSquare);
            //return new Array(blockOneSquare);
        }
    return availableMoves;
    }
}
