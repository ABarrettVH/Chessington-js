import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)

        if (this.player === Player.WHITE){
            let blockingPiece1 = {row:location.row+1,col:location.col};
            let blockingPiece2 = {row:location.row+2,col:location.col};
            if (location.row === 1) {
                if (board.getPiece(blockingPiece1)){
                    return [];
                } else if (board.getPiece(blockingPiece2)) {
                    return [Square.at(location.row + 1, location.col)];
                } else {
                    return [Square.at(location.row + 2, location.col),Square.at(location.row + 1, location.col)];
                }
            }
            else {
                if (board.getPiece(blockingPiece1)) {
                    return [];
                } else {
                    return [Square.at(location.row + 1, location.col)];
                }
            }
        }
        else {
            let blockingPiece1 = {row:location.row-1,col:location.col};
            let blockingPiece2 = {row:location.row-2,col:location.col};
            if (location.row === 6) {
                if (board.getPiece(blockingPiece1)){
                    return [];
                } else if (board.getPiece(blockingPiece2)) {
                    return [Square.at(location.row - 1, location.col)];
                } else {
                    return [Square.at(location.row - 2, location.col),Square.at(location.row - 1, location.col)];
                }
            }
            else {
                if (board.getPiece(blockingPiece1)) {
                    return [];
                } else { 
                    return [Square.at(location.row - 1, location.col)];
                }
            }
        }
    }
}