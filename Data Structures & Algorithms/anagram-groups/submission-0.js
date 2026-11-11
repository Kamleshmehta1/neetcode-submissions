class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (let i = 0; i < strs.length; i++) {
            const frequency = Array(26).fill(0);

            for (let j = 0; j < strs[i].length; j++) {
                const position = strs[i].charCodeAt(j) - 96 - 1;
                frequency[position] += 1;
            }

            const frequencyHashKey = frequency.join("#");

            if (map.has(frequencyHashKey)) {
                const existingArr = map.get(frequencyHashKey);
                map.set(frequencyHashKey, [...existingArr, strs[i]]);
            } else {
                map.set(frequencyHashKey, [strs[i]]);
            }
        }
        const output = [];

        for (let [, value] of map) {
            output.push(value);
        }

        return output;
    }
}
