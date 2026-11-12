class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;

        let max = -Infinity;

        while (left < right) {
            const width = right - left;
            const currentHeight = Math.min(heights[right], heights[left]);

            max = Math.max(max, width * currentHeight);

            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return max;
    }
}
