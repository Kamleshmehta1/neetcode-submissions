class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let left = 0;
        const deque = [];
        let front = 0;
        let output = [];

        for (let right = 0; right < nums.length; right++) {
            let windowSize = right - left + 1;

            while (
                deque.length > front &&
                nums[deque[deque.length - 1]] <= nums[right]
            ) {
                deque.pop();
            }

            deque.push(right);

            while (deque[front] < left) {
                front++;
            }

            if (windowSize === k) {
                output.push(nums[deque[front]]);
                left++;
            }
        }

        return output;
    }
}
