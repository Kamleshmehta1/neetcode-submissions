class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let maxCount = 0;

        const map = new Map();

        for (let right = 0; right < s.length; right++) {
            if (map.has(s[right])) {
                left = Math.max(left, map.get(s[right]) + 1);
            }

            maxCount = Math.max(maxCount, right - left + 1);

            map.set(s[right], right);
        }
        return maxCount;
    }
}
