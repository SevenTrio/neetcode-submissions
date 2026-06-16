class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let sanitizedString = '';

        for (let i = 0; i < s.length; i++) {
            if (this.isAlphanumeric(s[i])) {
                sanitizedString += s[i].toLowerCase();
            }
        }

        console.log('sanitizedString: ', sanitizedString);

        let i = 0;
        let j = sanitizedString.length - 1;
        while (i < j) {
            if (i === j) {
                continue;
            }

            if (sanitizedString[i] === sanitizedString[j]) {
                i += 1;
                j -= 1;
                continue;
            } else {
                return false;
            }
        }

        return true;
    }

    isAlphanumeric(char: string): boolean {
        return (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9');
    }
}
