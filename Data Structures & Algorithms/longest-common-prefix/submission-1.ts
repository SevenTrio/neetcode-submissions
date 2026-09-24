class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        let longestPrefix = strs[0];

        for (let i = 1; i < strs.length; i++) {
            let newLength = 0;
            while (
                longestPrefix[newLength] === strs[i][newLength] &&
                newLength <= longestPrefix.length
            ) {
                newLength++
            }

            if (newLength === 0) {
                return '';
            }

            longestPrefix = longestPrefix.slice(0, newLength);
        }

        return longestPrefix;
    }
}
