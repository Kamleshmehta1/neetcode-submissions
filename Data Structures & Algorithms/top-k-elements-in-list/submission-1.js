class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let buffer = new Map();

        for (let i = 0; i < nums.length; i++) {
            buffer.set(nums[i], (buffer.get(nums[i]) || 0) + 1);
        }

        const buckets = Array.from({ length: nums.length + 1 }, () => []);

        for (let [num, freq] of buffer) {
            buckets[freq].push(num);
        }

        const result = [];

        for (let i = buckets.length - 1; i >= 0; i--) {
            for (let num of buckets[i]) {
                result.push(num);

                if (result.length === k) {
                    return result;
                }
            }
        }
    }
};
