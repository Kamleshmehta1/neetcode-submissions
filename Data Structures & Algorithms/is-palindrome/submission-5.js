class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        const newString = s
            .split("")
            .filter((ele) => {
                let code = ele.charCodeAt(); 
                if (
                    (code >= 97 && code <= 122) ||
                    (code >= 65 && code <= 90) ||
                    (code >= 48 && code <= 57)
                ) {
                    return true;
                }
                return false;
            })
            .join("");

        let reverseString = "";

        for (let x = newString.length - 1; x >= 0; x--) {
            reverseString += newString[x];
        }


        return newString.toLowerCase() === reverseString.toLowerCase();

    }
}
