class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let k = s1.length;
        let left = 0;

        const frequency = Array(26).fill(0);
        const windowFrequency = Array(26).fill(0);

        for (let i = 0; i < s1.length; i++) {
            const charCode = s1[i].charCodeAt();
            const index = charCode - 97;
            frequency[index]++;
        }

        for (let right = 0; right < s2.length; right++) {
            let windowLength = right - left + 1;

            const charCode = s2[right].charCodeAt();
            const index = charCode - 97;
            windowFrequency[index]++;

            if (windowLength > k) {
                const outgoingIndex = s2[left].charCodeAt() - 97;
                windowFrequency[outgoingIndex]--;
                left++;
                windowLength = right - left + 1;
            }

            if (windowLength === k) {
                let isMatch = true;

                for (let i = 0; i < 26; i++) {
                    if (frequency[i] !== windowFrequency[i]) {
                        isMatch = false;
                        break;
                    }
                }

                if (isMatch) return true;
            }
        }

        return false;
    };
}