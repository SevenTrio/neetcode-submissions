class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const frequencies: Record<number, number> = {};

        for (let i = 0; i < nums.length; i++) {
            const curNumber = nums[i];
            const curFrequency = frequencies[curNumber] ?? 0;
            frequencies[curNumber] = curFrequency + 1;
        }

        return Object.entries(frequencies)
            .sort((a, b) => (b[1] - a[1]))
            .slice(0, k)
            .map(([num]) => Number(num));
    }
}
