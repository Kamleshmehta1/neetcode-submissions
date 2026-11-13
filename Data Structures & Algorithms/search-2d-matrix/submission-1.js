class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let left = 0;

        const rows = matrix.length;
        const cols = matrix[0].length;

        let right = rows * cols - 1;

        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);

            let row = Math.floor(mid / cols);
            let col = mid % cols;

            if (matrix[row][col] === target) {
                return true;
            } else if (matrix[row][col] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return false;
    }
}