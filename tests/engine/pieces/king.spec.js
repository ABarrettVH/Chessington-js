import king from '../../../src/engine/pieces/king';
import 'chai/register-should';
import Rook from '../../../src/engine/pieces/rook';
import Pawn from '../../../src/engine/pieces/pawn';
import King from '../../../src/engine/pieces/king';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';


describe('King', () => {

        let board;
        beforeEach(() => board = new Board());
    
        it('can move laterally', () => {
            const king = new King(Player.WHITE);
            board.setPiece(Square.at(5, 0), king);
    
            const moves = king.getAvailableMoves(board);
    
            const expectedMoves = [
                // Horizontal
                Square.at(5, 1),
                // Vertical
                Square.at(6, 0), Square.at(4, 0)
            ];
    
            moves.should.deep.include.members(expectedMoves);
        });

        it('can move diagonally', () => {
            const king = new King(Player.WHITE);
            board.setPiece(Square.at(5,0), king);
    
            const moves = king.getAvailableMoves(board);
    
            const expectedMoves = [
                // forwards diagonal /
                Square.at(6,1), 
                // backwards diagonal \
                Square.at(4,1),
            ];
    
            moves.should.deep.include.members(expectedMoves);
        });

        it('cannot make any other moves', () => {
            const king = new King(Player.WHITE);
            board.setPiece(Square.at(1,7), king);
    
            const moves = king.getAvailableMoves(board);
    
            moves.should.have.length(5);
        });

        it('cannot move through friendly pieces', () => {
            const king = new King(Player.WHITE);
            const friendlyPiece = new Pawn(Player.WHITE);
            board.setPiece(Square.at(4,3), king);
            board.setPiece(Square.at(3,2), friendlyPiece);
    
            const moves = king.getAvailableMoves(board);
    
            moves.should.not.deep.include(Square.at(3,2),Square.at(2,1),Square.at(1,0));
        });
    
        it('cannot move through opposing pieces', () => {
            const king = new King(Player.BLACK);
            const opposingPiece = new Pawn(Player.WHITE);
            board.setPiece(Square.at(4,3), king);
            board.setPiece(Square.at(4,4), opposingPiece);
    
            const moves = king.getAvailableMoves(board);
    
            moves.should.not.deep.include(Square.at(4,5),Square.at(4,6),Square.at(4,7));
        });

        it('can take opposing pieces', () => {
            const king = new King(Player.WHITE);
            const opposingPiece = new Pawn(Player.BLACK);
            board.setPiece(Square.at(3,5), king);
            board.setPiece(Square.at(4,4), opposingPiece);
    
            const moves = king.getAvailableMoves(board);
    
            moves.should.deep.include(Square.at(4,4));
        });

        it('cannot take friendly pieces', () => {
            const king = new King(Player.BLACK);
            const friendlyPiece = new Pawn(Player.BLACK);
            board.setPiece(Square.at(4, 1), king);
            board.setPiece(Square.at(3, 2), friendlyPiece);
    
            const moves = king.getAvailableMoves(board);
    
            moves.should.not.deep.include(Square.at(3, 2));
        });

        it('cannot take the opposing king', () => {
            const king = new King(Player.BLACK);
            const opposingKing = new King(Player.WHITE);
            board.setPiece(Square.at(2,4), king);
            board.setPiece(Square.at(1,3), opposingKing);
    
            const moves = king.getAvailableMoves(board);
    
            moves.should.not.deep.include(Square.at(1,3));
        });
});
