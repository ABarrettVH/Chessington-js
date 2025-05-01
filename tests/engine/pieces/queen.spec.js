import Queen from '../../../src/engine/pieces/queen';
import 'chai/register-should';
import Rook from '../../../src/engine/pieces/rook';
import Pawn from '../../../src/engine/pieces/pawn';
import King from '../../../src/engine/pieces/king';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';


describe('Queen', () => {

        let board;
        beforeEach(() => board = new Board());
    
        it('can move laterally', () => {
            const queen = new Queen(Player.WHITE);
            board.setPiece(Square.at(3, 2), queen);
    
            const moves = queen.getAvailableMoves(board);
    
            const expectedMoves = [
                // Horizontal
                Square.at(3, 0), Square.at(3, 1), Square.at(3, 3), Square.at(3, 4), Square.at(3, 5), Square.at(3, 6), Square.at(3, 7),
                // Vertical
                Square.at(0, 2), Square.at(1,2), Square.at(2, 2), Square.at(4, 2), Square.at(5, 2), Square.at(6, 2), Square.at(7, 2)
            ];
    
            moves.should.deep.include.members(expectedMoves);
        });

        it('can move diagonally', () => {
            const queen = new Queen(Player.WHITE);
            board.setPiece(Square.at(5,4), queen);
    
            const moves = queen.getAvailableMoves(board);
    
            const expectedMoves = [
                // forwards diagonal /
                Square.at(1,0), Square.at(2,1), Square.at(3,2), Square.at(4,3), Square.at(6,5), Square.at(7,6),
                // backwards diagonal \
                Square.at(2,7), Square.at(3,6), Square.at(4,5), Square.at(6,3), Square.at(7,2)
            ];
    
            moves.should.deep.include.members(expectedMoves);
        });

        it('cannot make any other moves', () => {
            const queen = new Queen(Player.WHITE);
            board.setPiece(Square.at(1,2), queen);
    
            const moves = queen.getAvailableMoves(board);
    
            moves.should.have.length(23);
        });

        it('cannot move through friendly pieces', () => {
            const queen = new Queen(Player.WHITE);
            const friendlyPiece = new Pawn(Player.WHITE);
            board.setPiece(Square.at(5, 4), queen);
            board.setPiece(Square.at(3,2), friendlyPiece);
    
            const moves = queen.getAvailableMoves(board);
    
            moves.should.not.deep.include(Square.at(2,1),Square.at(1,0));
        });
    
        it('cannot move through opposing pieces', () => {
            const queen = new Queen(Player.BLACK);
            const opposingPiece = new Pawn(Player.WHITE);
            board.setPiece(Square.at(3,6), queen);
            board.setPiece(Square.at(3,4), opposingPiece);
    
            const moves = queen.getAvailableMoves(board);
    
            moves.should.not.deep.include(Square.at(3,0),Square.at(3,1),Square.at(3,2),Square.at(3,3));
        });

        it('can take opposing pieces', () => {
            const queen = new Queen(Player.WHITE);
            const opposingPiece = new Pawn(Player.BLACK);
            board.setPiece(Square.at(5, 3), queen);
            board.setPiece(Square.at(5, 6), opposingPiece);
    
            const moves = queen.getAvailableMoves(board);
    
            moves.should.deep.include(Square.at(5, 6));
        });

        it('cannot take friendly pieces', () => {
            const queen = new Queen(Player.BLACK);
            const friendlyPiece = new Pawn(Player.BLACK);
            board.setPiece(Square.at(5, 3), queen);
            board.setPiece(Square.at(3, 3), friendlyPiece);
    
            const moves = queen.getAvailableMoves(board);
    
            moves.should.not.deep.include(Square.at(3, 3));
        });

        it('cannot take the opposing king', () => {
            const queen = new Queen(Player.BLACK);
            const opposingKing = new King(Player.WHITE);
            board.setPiece(Square.at(3,2), queen);
            board.setPiece(Square.at(4,2), opposingKing);
    
            const moves = queen.getAvailableMoves(board);
    
            moves.should.not.deep.include(Square.at(4,2));
        });
});
