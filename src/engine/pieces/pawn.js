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
        let unfriendlyColour;
        let opposingKing;
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
            unfriendlyColour = Player.BLACK;
            takingPiecePositionLeft = Square.at(location.row+1,location.col-1);
            takingPiecePositionRight = Square.at(location.row+1,location.col+1);
            opposingKing = new King(Player.BLACK);
            
        }
        else {
            blockOneSquare = Square.at(location.row-1,location.col);
            blockTwoSqaure = Square.at(location.row-2, location.col);
            startRowPosition = 6;
            friendlyColour = Player.BLACK;
            unfriendlyColour = Player.WHITE;
            takingPiecePositionLeft = Square.at(location.row-1,location.col-1);
            takingPiecePositionRight = Square.at(location.row-1,location.col+1);
            opposingKing = new King(Player.WHITE);
        }

        if (board.getPiece(takingPiecePositionLeft)&& board.getPiece(takingPiecePositionLeft).player === unfriendlyColour  ) {
            if(board.getPiece(takingPiecePositionLeft).constructor.name !== "King") {
                availableMoves.push(takingPiecePositionLeft);
            }
        }
    
        if (board.getPiece(takingPiecePositionRight)&& board.getPiece(takingPiecePositionRight).player === unfriendlyColour ) {
            if(board.getPiece(takingPiecePositionRight).constructor.name !== "King") {
                availableMoves.push(takingPiecePositionRight);
            }
        }

        if (board.getPiece(blockOneSquare)||location.row > 7) {
            return new Array(0);
        }
        else if (!board.getPiece(blockTwoSqaure) && location.row === startRowPosition) {
            availableMoves.push(blockOneSquare,blockTwoSqaure);
        }
        else {
            availableMoves.push(blockOneSquare);
        }
    return availableMoves;
    }
}
