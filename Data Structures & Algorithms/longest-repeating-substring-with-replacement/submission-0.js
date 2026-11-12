class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let maxFrequency = 0;
        let maxWindow = 0;

        let map = new Map();

        for (let right = 0; right < s.length; right++) {
            let windowLength = right - left + 1;

            map.set(s[right], (map.get(s[right]) || 0) + 1);

            maxFrequency = Math.max(maxFrequency, map.get(s[right]));

            if (windowLength - maxFrequency <= k) {
                maxWindow = Math.max(maxWindow, windowLength);
            } else {
                map.set(s[left], map.get(s[left]) - 1);
                left++;
            }
        }

        return maxWindow;
    }
}
