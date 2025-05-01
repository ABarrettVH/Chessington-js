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
        let checkMoves=[];
        let availableMoves=[];
        let unfriendlyColour;
        let availableSquare;
        let rowStart = location.row-2;
        let rowEnd = location.row+2;
        let colStart = location.col-2;
        let colEnd = location.col+2;

        if (this.player === Player.WHITE) {
            unfriendlyColour = Player.BLACK;
        }
        else {
            unfriendlyColour = Player.WHITE;
        }

        if (rowStart < 0){
            rowStart = 0;
        }
        if (rowEnd > 7 ){
            rowEnd = 7;
        }
        if (colStart < 0){
            colStart = 0;
        }
        if (colStart > 7){
            colStart = 7;
        }

        
        checkMoves.push([location.row-2,location.col-1],[location.row -2,location.col+1],
        [location.row -1,location.col-2],[location.row -1,location.col+2],
        [location.row +1,location.col-2],[location.row +1,location.col+2],
        [location.row +2,location.col-1],[location.row +2,location.col+1]);
        
        console.log(checkMoves)

        for (let i=0; i<checkMoves.length; i++) {
            if (!(checkMoves[i][0]<0 || checkMoves[i][1]>7)) {
                availableMoves.push(Square.at(checkMoves[i][0],checkMoves[i][1]))
            }
        }
        return availableMoves;
    }
}