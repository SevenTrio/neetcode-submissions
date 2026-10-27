class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s: string, t: string): boolean {
        let i = 0;
        let j = 0;

        while (i < s.length && j < t.length) {
            if (t[j] === s[i]) {
                i++;
            }

            j++;
        }

        if (i === s.length) {
            return true;
        }

        return false;
    }
}
