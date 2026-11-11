class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */


    isPalindrome(s) {
        const isAlphaNumeric = (char) => {
            const code = char.charCodeAt(0);

            return (
                (code >= 97 && code <= 122) ||
                (code >= 65 && code <= 90) ||
                (code >= 48 && code <= 57)
            );
        }


        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            while (left < right && !isAlphaNumeric(s[left])) {
                left++;
            }
            while (left < right && !isAlphaNumeric(s[right])) {
                right--;
            }

            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false
            }

            left++;
            right--;
        }

        return true;

    }
}
