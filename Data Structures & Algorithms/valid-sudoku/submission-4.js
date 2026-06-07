class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const columns = new Map();
        const rows = new Map();
        const square = new Map();

        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[r].length; c++) {
                if (board[r][c] === '.') {
                    continue;
                }
                
                const squarePlace = `${Math.floor(r / 3)},${Math.floor(c / 3)}`
                
                if (
                    (rows.get(r) && rows.get(r).has(board[r][c])) ||
                    (columns.get(c) && columns.get(c).has(board[r][c])) ||
                    (square.get(squarePlace) && square.get(squarePlace).has(board[r][c]))
                ) {
                    return false;
                }

                if (!rows.has(r)) rows.set(r, new Set());
                if (!columns.has(c)) columns.set(c, new Set());
                if (!square.has(squarePlace)) square.set(squarePlace, new Set());

                rows.get(r).add(board[r][c]);
                columns.get(c).add(board[r][c]);
                square.get(squarePlace).add(board[r][c]);
            }
        }

        return true;
    }
}