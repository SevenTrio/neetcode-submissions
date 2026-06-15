class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let prefixes = Array.from<number>({ length: nums.length }).fill(1);
        let sufixes = Array.from<number>({ length: nums.length }).fill(1);
        let result: number[] = []

        for (let i = 0; i < nums.length - 1; i++) {
            prefixes[i + 1] = prefixes[i] * nums[i];
        }

        for (let i = nums.length - 1; i > 0 ; i--) {
            sufixes[i - 1] *= sufixes[i] * nums[i];
        }

        for (let i = 0; i < nums.length; i++) {
            result[i] = prefixes[i] * sufixes[i];
        }

        return result;
    }
}
