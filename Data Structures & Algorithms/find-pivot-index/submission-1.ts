class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums: number[]): number {
        if (nums.length === 1) {
            return 0;
        }

        const prefixes: number[] = [];
        prefixes[0] = 0;
        for (let i = 1; i < nums.length; i++) {
            prefixes[i] = prefixes[i - 1] + nums[i - 1];
        }

        const sufixes: number[] = [];
        sufixes[nums.length - 1] = 0;
        for (let i = nums.length - 2; i >= 0; i--) {
            sufixes[i] = sufixes[i + 1] + nums[i + 1];
        }

        for (let i = 0; i < nums.length; i++) {
            if (prefixes[i] === sufixes[i]) {
                return i;
            }
        }

        return -1;
    }
}
