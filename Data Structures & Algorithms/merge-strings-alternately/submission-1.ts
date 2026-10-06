class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1: string, word2: string): string {
        const chars: string[] = [];
        const length = Math.max(word1.length, word2.length);

        for (let i = 0; i < length; i++) {
            if (i < word1.length) chars.push(word1[i]);
            if (i < word2.length) chars.push(word2[i]);
        }

        return chars.join('');
    }
}
