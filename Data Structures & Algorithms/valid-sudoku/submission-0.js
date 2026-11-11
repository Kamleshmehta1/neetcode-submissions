class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let i = 0; i < board.length; i++) {
            const rowSet = new Set();
            const columnSet = new Set();
            const thirdCaseSet = new Set();

            for (let j = 0; j < board.length; j++) {
                if (board[i][j] === '.') continue;

                if (rowSet.has(board[i][j])) {
                    return false
                } else {
                    rowSet.add(board[i][j])
                }
            }

            for (let j = 0; j < board.length; j++) {
                if (board[j][i] === '.') continue;

                if (columnSet.has(board[j][i])) {
                    return false
                } else {
                    columnSet.add(board[j][i])
                }
            }

            for (let startRow = 0; startRow < 9; startRow += 3) {
                for (let startCol = 0; startCol < 9; startCol += 3) {

                    const boxSet = new Set();

                    for (let row = startRow; row < startRow + 3; row++) {
                        for (let col = startCol; col < startCol + 3; col++) {

                            if (board[row][col] === '.') continue;

                            if (boxSet.has(board[row][col])) {
                                return false;
                            }

                            boxSet.add(board[row][col]);
                        }
                    }
                }
            }
        }

        return true;
    }
}
