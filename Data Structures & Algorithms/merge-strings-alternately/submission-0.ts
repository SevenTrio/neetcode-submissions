class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1: string, word2: string): string {
        const n = Math.max(word1.length, word2.length);
        let result = '';

        for (let i = 0; i < n; i++) {
            if (i < word1.length) {
                result = result.concat(word1[i]);
            }
            if (i < word2.length) {
                result = result.concat(word2[i]);
            }
        }

        return result;
    }
}
