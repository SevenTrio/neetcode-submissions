const SEPARATOR = '#'

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let result = '';

        for (let i = 0; i < strs.length; i++) {
            const str = strs[i];
            result += `${str.length}${SEPARATOR}${str}`;
        }

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const result: string[] = [];

        let i = 0;
        let wordLengthStr = '';
        while (i < str.length) {
            if (str[i] === SEPARATOR) {
                const wordLength = parseInt(wordLengthStr);
                const wordStart = i + SEPARATOR.length;
                const word = str.slice(wordStart, wordStart + wordLength);
                i += wordLength + SEPARATOR.length;
                result.push(word);
                wordLengthStr = '';
            } else {
                wordLengthStr += str[i];
                i += 1;
            }
        }

        return result;
    }
}
