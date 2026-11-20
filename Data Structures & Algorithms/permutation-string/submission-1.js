class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const freqMap = new Map();
        const windowFreq = new Map();
        let k = s1.length;

        for (let x of s1) {
            freqMap.set(x, (freqMap.get(x) || 0) + 1);
        }

        let left = 0;

        for (let right = 0; right < s2.length; right++) {
            let windowLength = right - left + 1;

            windowFreq.set(s2[right], (windowFreq.get(s2[right]) || 0) + 1);

            if (windowLength > k) {
                windowFreq.set(s2[left], windowFreq.get(s2[left]) - 1);



                left++;

                windowLength = right - left + 1;
            }

            if (windowLength === k) {
                let isMatch = true;

                for (let [char, count] of freqMap) {
                    if (windowFreq.get(char) !== count) {
                        isMatch = false;
                        break;
                    }
                }

                if (isMatch) return isMatch;
            }
        }

        return false;
    };
}