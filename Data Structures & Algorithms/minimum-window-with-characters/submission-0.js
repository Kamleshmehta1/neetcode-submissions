class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const map = new Map();
        const tFreq = new Map();

        let left = 0;
        let startIndex = 0;
        let minLength = Infinity;

        for (let i = 0; i < t.length; i++) {
            tFreq.set(t[i], (tFreq.get(t[i]) || 0) + 1);
        }

        for (let right = 0; right < s.length; right++) {
            map.set(s[right], (map.get(s[right]) || 0) + 1);

            let isValid = true;

            for (const [char, count] of tFreq) {
                if ((map.get(char) || 0) < count) {
                    isValid = false;
                    break;
                }
            }

            while (isValid) {
                if (right - left + 1 < minLength) {
                    minLength = right - left + 1;
                    startIndex = left;
                }

                const outgoingIndex = s[left];

                map.set(outgoingIndex, map.get(outgoingIndex) - 1);

                left++;

                for (const [char, count] of tFreq) {
                    if ((map.get(char) || 0) < count) {
                        isValid = false;
                        break;
                    }
                }
            }
        }

        return minLength === Infinity
            ? ""
            : s.substring(startIndex, startIndex + minLength);
    }
}
