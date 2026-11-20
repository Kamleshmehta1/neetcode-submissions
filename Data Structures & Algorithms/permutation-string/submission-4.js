class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const freqMap = new Map();
        const windowFreq = new Map();

        for (let x of s1) {
            freqMap.set(x, (freqMap.get(x) || 0) + 1);
        }

        let need = freqMap.size;
        let have = 0;
        let left = 0;
        let k = s1.length;

        for (let right = 0; right < s2.length; right++) {
            let windowLength = right - left + 1;

            if (
                freqMap.has(s2[right]) &&
                freqMap.get(s2[right]) === windowFreq.get(s2[right])
            ) {
                have--;
            }

            windowFreq.set(s2[right], (windowFreq.get(s2[right]) || 0) + 1);

            if (
                freqMap.has(s2[right]) &&
                freqMap.get(s2[right]) === windowFreq.get(s2[right])
            ) {
                have++;
            }

            if (windowLength > k) {
                if (
                    freqMap.has(s2[left]) &&
                    freqMap.get(s2[left]) === windowFreq.get(s2[left])
                ) {
                    have--;
                }

                windowFreq.set(s2[left], windowFreq.get(s2[left]) - 1);

                if (
                    freqMap.has(s2[left]) &&
                    freqMap.get(s2[left]) === windowFreq.get(s2[left])
                ) {
                    have++;
                }

                if (windowFreq.get(s2[left]) === 0) {
                    windowFreq.delete(s2[left]);
                }

                left++;

                windowLength = right - left + 1;
            }

            if (need === have) {
                return true;
            }
        }

        return false;
    };
}