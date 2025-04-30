import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
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

        for (let i = 1; i <8; i++) {
            availableSquare = Square.at(location.row+i,location.col+i);
            if (availableSquare.col < 8 && availableSquare.row < 8) {
            availableMoves.push(availableSquare);
            }
        }
        for (let i = 1; i <8; i++) {
            availableSquare = Square.at(location.row-i,location.col+i);
            if (availableSquare.col < 8 && availableSquare.row >= 0) {
            availableMoves.push(availableSquare);
            }
        }
        for (let i = 1; i <8; i++) {
            availableSquare = Square.at(location.row+i,location.col-i);
            if (availableSquare.col >= 0 && availableSquare.row < 8) {
            availableMoves.push(availableSquare);
            }
        }
        for (let i = 1; i <8; i++) {
            availableSquare = Square.at(location.row-i,location.col-i);
            if (availableSquare.col >= 0 && availableSquare.row >= 0) {
            availableMoves.push(availableSquare);
            }
        }
        console.log(availableMoves);
        return availableMoves;
    }
}
