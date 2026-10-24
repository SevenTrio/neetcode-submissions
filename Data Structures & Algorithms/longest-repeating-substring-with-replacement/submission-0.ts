class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let windowCounts = new Map<string, number>();
        let longest = 0;

        function increment(char: string) {
            windowCounts.set(char, (windowCounts.get(char) ?? 0) + 1);
        }

        function decrement(char: string) {
            windowCounts.set(char, (windowCounts.get(char) ?? 0) - 1);
        }

        function getMaxCount() {
            return Math.max(...windowCounts.values());
        }

        let L = 0;
        for (let R = 0; R < s.length; R++) {
            increment(s[R]);

            while (R - L - (getMaxCount() - 1) > k) {
                decrement(s[L]);
                L++;
            }

            longest = Math.max(longest, R - L + 1);
        }

        return longest;
    }
}
