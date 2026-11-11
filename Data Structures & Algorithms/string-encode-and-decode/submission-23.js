class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = "";

        for (let i = 0; i < strs.length; i++) {
            const length = strs[i].length;

            encodedString += length;
            encodedString += "#";
            encodedString += strs[i];
        }

        return encodedString
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const output = [];
        let i = 0;

        while (i < str.length) {
            const hashIndex = str.indexOf("#", i);
            const length = Number(str.substring(i, hashIndex));

            const word = str.substring(hashIndex + 1, hashIndex + 1 + length);

            output.push(word);

            i = hashIndex + 1 + length;
        }

        return output;
    }
}
