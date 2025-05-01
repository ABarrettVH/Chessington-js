import Player from '../player';
import Square from '../square';
import Piece from './piece'

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {


        let location = board.findPiece(this)
        let availableMoves=[];
        let unfriendlyColour;
        let availableSquare;
        let rowStart = location.row-1;
        let rowEnd = location.row+1;
        let colStart = location.col-1;
        let colEnd = location.col+1;

        if (this.player === Player.WHITE) {
            unfriendlyColour = Player.BLACK;
        }
        else {
            unfriendlyColour = Player.WHITE;
        }

        if (location.col === 7){
            colEnd = location.col;
        };
        if (location.col === 0){
            colStart = location.col;
        }
        if (location.row === 7){
            rowEnd = location.row;
        }
        if (location.row === 0){
            rowStart = location.row;
        }

        for (let i=rowStart; i<=rowEnd; i++){
            for (let j=colStart; j<=colEnd;j++){
                availableSquare = Square.at(i,j);
                // console.log(availableSquare);
                if (!(i === location.row && j === location.col)){
                    if (!(board.getPiece(availableSquare))){
                        availableMoves.push(availableSquare);
                    }
                    else if (board.getPiece(availableSquare).player === unfriendlyColour && board.getPiece(availableSquare).constructor.name !== "King") {
                        availableMoves.push(availableSquare);
                    }
                    else {
                        break;
                    }
                }
            }
        }


        return availableMoves; 
    }
}
