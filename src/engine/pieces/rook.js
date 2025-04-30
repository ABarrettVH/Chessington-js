import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let availableMoves=[];
        let friendlyBlockingPieces =[];
        let friendlyColour;
        let unfriendlyColour;
        let availableSquare;

        if (this.player === Player.WHITE) {
            friendlyColour = Player.WHITE;
            unfriendlyColour = Player.BLACK;
        }
        else {
            friendlyColour = Player.BLACK;
            unfriendlyColour = Player.WHITE;
        }

        for (let i=location.row+1; i<8; i++) {
            availableSquare = Square.at(i,location.col);
            if (!board.getPiece(availableSquare)) {
                availableMoves.push(availableSquare);
            }
            else if (board.getPiece(availableSquare).player === unfriendlyColour && board.getPiece(availableSquare).constructor.name !== "King") {
                availableMoves.push(availableSquare);
                break
            }
            else {
                break
            }
        }

        for (let i=location.row-1; i>=0; i--) {
            availableSquare = Square.at(i,location.col);
            if (!board.getPiece(availableSquare)) {
                availableMoves.push(availableSquare);
            }
            else if (board.getPiece(availableSquare).player === unfriendlyColour && board.getPiece(availableSquare).constructor.name !== "King") {
                availableMoves.push(availableSquare);
                break
            }
            else {
                break
            }
        }

        for (let i=location.col+1; i<8; i++) {
            availableSquare = Square.at(location.row, i);
            if (!board.getPiece(availableSquare)) {
                availableMoves.push(availableSquare);
            }
            else if (board.getPiece(availableSquare).player === unfriendlyColour && board.getPiece(availableSquare).constructor.name !== "King") {
                availableMoves.push(availableSquare);
                break
            }
            else {
                break
            }
        }

        for (let i=location.col-1; i>=0; i--) {
            availableSquare = Square.at(location.row, i);
            if (!board.getPiece(availableSquare)) {
                availableMoves.push(availableSquare);
            }
            else if (board.getPiece(availableSquare).player === unfriendlyColour && board.getPiece(availableSquare).constructor.name !== "King") {
                availableMoves.push(availableSquare);
                break
            }
            else {
                break
            }
        }
        return availableMoves; 
    }
}
