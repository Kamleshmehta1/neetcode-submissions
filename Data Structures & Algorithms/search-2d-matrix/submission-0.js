class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let left = 0;

        let rowLength = matrix[0].length;
        let colLength = matrix.length;

        let right = rowLength * colLength - 1;

        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);

            let row = Math.floor(mid / rowLength);
            let col = mid % rowLength;

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
