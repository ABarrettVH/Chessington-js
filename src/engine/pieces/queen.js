import Player from '../player';
import Square from '../square';
import Piece from './piece'

export default class Queen extends Piece {
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

        function populateAvailableMoves (availableMoves,availableSquare,unfriendlyColour) {
            if (!board.getPiece(availableSquare)) {
                availableMoves.push(availableSquare);
                return availableMoves;
            }
            else if (board.getPiece(availableSquare).player === unfriendlyColour && board.getPiece(availableSquare).constructor.name !== "King") {
                availableMoves.push(availableSquare);
                return availableMoves;
            }
            else {
                return availableMoves;
            }
        }

        for (let i=location.row+1; i<8; i++) {
            let counter = availableMoves.length;
            availableSquare = Square.at(i,location.col);
            availableMoves = populateAvailableMoves(availableMoves,availableSquare,unfriendlyColour);
            counter ++;
            if (board.getPiece(availableSquare)) {
                if (board.getPiece(availableSquare).player === unfriendlyColour) {
                    break;
                }
            }
            if (counter !== availableMoves.length)  {
                break;
            }
        }

        for (let i=location.row-1; i>=0; i--) {
            let counter = availableMoves.length;
            availableSquare = Square.at(i,location.col);
            availableMoves = populateAvailableMoves(availableMoves,availableSquare,unfriendlyColour);
            counter ++;
            if (board.getPiece(availableSquare)) {
                if (board.getPiece(availableSquare).player === unfriendlyColour) {
                    break;
                }
            }
            if (counter !== availableMoves.length)  {
                break;
            }
        }

        for (let i=location.col+1; i<8; i++) {
            let counter = availableMoves.length;
            availableSquare = Square.at(location.row, i);
            availableMoves = populateAvailableMoves(availableMoves,availableSquare,unfriendlyColour);
            counter ++;
            if (board.getPiece(availableSquare)) {
                if (board.getPiece(availableSquare).player === unfriendlyColour) {
                    break;
                }
            }
            if (counter !== availableMoves.length)  {
                break;
            }
        }

        for (let i=location.col-1; i>=0; i--) {
            let counter = availableMoves.length;
            availableSquare = Square.at(location.row, i);
            availableMoves = populateAvailableMoves(availableMoves,availableSquare,unfriendlyColour);
            counter ++;
            if (board.getPiece(availableSquare)) {
                if (board.getPiece(availableSquare).player === unfriendlyColour) {
                    break;
                }
            }
            if (counter !== availableMoves.length)  {
                break;
            }
        }

               for (let i = 1; i <8; i++) {
                    availableSquare = Square.at(location.row+i,location.col+i);
                    if (availableSquare.col < 8 && availableSquare.row < 8) {
                        if (!board.getPiece(availableSquare)) {
                            availableMoves.push(availableSquare);
                        } 
                        else if ((board.getPiece(availableSquare)).player === unfriendlyColour) {
                            if (board.getPiece(availableSquare).constructor.name === "King") {
                                break;
                            }
                            else {
                            availableMoves.push(availableSquare);
                            break;
                            } 
                        }                else {
                            break;
                        }
                    }
                }
                for (let i = 1; i <8; i++) {
                    availableSquare = Square.at(location.row-i,location.col+i);
                    if (availableSquare.col < 8 && availableSquare.row >= 0) {
                        if (!board.getPiece(availableSquare)) {
                            availableMoves.push(availableSquare);
                        } 
                        else if ((board.getPiece(availableSquare)).player === unfriendlyColour) {
                            if (board.getPiece(availableSquare).constructor.name === "King") {
                                break;
                            }
                            else {
                            availableMoves.push(availableSquare);
                            break;
                            } 
                        }                else {
                            break;
                        }
                    }
                }
                for (let i = 1; i <8; i++) {
                    availableSquare = Square.at(location.row+i,location.col-i);
                    if (availableSquare.col >= 0 && availableSquare.row < 8) {
                        if (!board.getPiece(availableSquare)) {
                            availableMoves.push(availableSquare);
                        } 
                        else if ((board.getPiece(availableSquare)).player === unfriendlyColour) {
                            if (board.getPiece(availableSquare).constructor.name === "King") {
                                break;
                            }
                            else {
                            availableMoves.push(availableSquare);
                            break;
                            } 
                        }                else {
                            break;
                        }
                    }
                }
                for (let i = 1; i <8; i++) {
                    availableSquare = Square.at(location.row-i,location.col-i);
                    if (availableSquare.col >= 0 && availableSquare.row >= 0) {
                        if (!board.getPiece(availableSquare)) {
                            availableMoves.push(availableSquare);
                        } 
                        else if ((board.getPiece(availableSquare)).player === unfriendlyColour) {
                            if (board.getPiece(availableSquare).constructor.name === "King") {
                                break;
                            }
                            else {
                            availableMoves.push(availableSquare);
                            break;
                            } 
                        }
                        else {
                            break;
                        }
                    }
                }
        return availableMoves; 
    }
}
