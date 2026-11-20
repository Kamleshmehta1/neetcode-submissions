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
            let length = 0;

            while (str[i] !== "#") {
                length = length * 10 + Number(str[i]);
                i++;
            }

            i++;

            const word = str.substring(i, i + length);

            output.push(word);

            i += length;
        }


        return output;
    }
}
