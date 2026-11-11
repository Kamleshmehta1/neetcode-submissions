class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map = new Map();

        if (s.length !== t.length) return false;

        for (let i = 0; i < s.length; i++) {
            map.set(s[i], (map.get(s[i]) || 0) + 1);
        }

        for (let i = 0; i < t.length; i++) {
            if (!map.has(t[i]) || map.get(t[i]) === 0) {
                return false;
            }
            map.set(t[i], (map.get(t[i]) || 0) - 1);
        }



        return true;
    }
}
