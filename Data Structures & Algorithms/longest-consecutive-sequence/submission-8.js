class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set();

        let count = 0;
        let max = 0;

        for (let x of nums) {
            set.add(x);
        }

        for (let i = 0; i < nums.length; i++) {
            count = 0;
            if (!set.has(nums[i] - 1)) {
                let j = nums[i];
                while (set.has(j)) {
                    count++;
                    j = j + 1;
                }
            }

            max = Math.max(max, count);
        }

        return max;
    }
}
