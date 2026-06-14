class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const sortedAnagrams: Record<string, string[]> = {};

        for (let i = 0; i < strs.length; i++) {
            const sorted = Array.from(strs[i]).sort().join('');
            sortedAnagrams[sorted] = [...(sortedAnagrams[sorted] || []), strs[i]];
        }

        return Object.values(sortedAnagrams);
    }
}
