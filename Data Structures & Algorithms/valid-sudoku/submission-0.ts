class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows: Array<Set<number>> = [];
        const cols: Array<Set<number>> = [];
        const subBoxes: Array<Set<number>> = [];

        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[r].length; c++) {
                const currDigit = Number.parseInt(board[r][c]);
                if (Number.isNaN(currDigit)) {
                    continue;
                }
                if (currDigit < 1 || currDigit > 9) {
                    return false;
                }

                const subBoxId = this.getSubBoxId(r, c);

                if (!rows[r]) {
                    rows[r] = new Set();
                }
                if (!cols[c]) {
                    cols[c] = new Set();
                }
                if (!subBoxes[subBoxId]) {
                    subBoxes[subBoxId] = new Set();
                }

                if (rows[r].has(currDigit)) {
                    return false;
                }
                if (cols[c].has(currDigit)) {
                    return false;
                }
                if (subBoxes[subBoxId].has(currDigit)) {
                    return false;
                }

                rows[r].add(currDigit);
                cols[c].add(currDigit);
                subBoxes[subBoxId].add(currDigit);
            }
        }

        return true;
    }

    getSubBoxId(row: number, col: number) {
        return Math.floor(row / 3).toString() + Math.floor(col / 3).toString();
    }
}
