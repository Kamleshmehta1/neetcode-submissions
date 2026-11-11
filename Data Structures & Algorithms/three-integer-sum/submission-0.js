class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a, b) => a - b);

        let output = [];

        for (let i = 0; i < nums.length - 2; i++) {
            let left = i + 1;
            let right = nums.length - 1;

            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }

            while (left < right) {
                const sum = nums[left] + nums[right] + nums[i];

                if (sum === 0) {
                    output.push([nums[left], nums[right], nums[i]]);
                    left++;
                    right--;

                    while (left < right && nums[left] === nums[i - 1]) {
                        left++;
                    }

                    while (left < right && nums[right] === nums[right + 1]) {
                        right--;
                    }
                } else if (sum < 0) {
                    left++;
                } else if (sum > 0) {
                    right--;
                }
            }
        }

        return output;
    }
}
