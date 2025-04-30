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

        if (this.player === Player.WHITE) {
            friendlyColour = Player.WHITE;
            unfriendlyColour = Player.BLACK;
        }
        else {
            friendlyColour = Player.BLACK;
            unfriendlyColour = Player.WHITE;
        }

        for (let i=location.row+1; i<8; i++) {
            if(!board.getPiece(Square.at(i,location.col))){
                availableMoves.push(Square.at(i, location.col));
            }
            else if (board.getPiece(Square.at(i,location.col)).player === Player.unfriendlyColour) {
                vailableMoves.push(Square.at(i, location.col));
            }
            else {
                break
            }
        }

        for (let i=location.row-1; i>=0; i--) {
            if(!board.getPiece(Square.at(i,location.col))){
                availableMoves.push(Square.at(i, location.col));
            }
            else {
                break
            }
        }

        for (let i=location.col+1; i<8; i++) {
            if(!board.getPiece(Square.at(location.row, i))){
                availableMoves.push(Square.at(location.row, i));
            }
            else {
                break
            }
        }

        for (let i=location.col-1; i>=0; i--) {
            if(!board.getPiece(Square.at(location.row,i))){
                availableMoves.push(Square.at(location.row,i));
            }
            else {
                break
            }
        }
        return availableMoves; 
    }
}
