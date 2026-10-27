class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums: number[]): void {
        let L = 0;
        for (let R = 0; R < nums.length; R++) {
            if (nums[R] !== 0) {
                if (R !== L) {
                    nums[L] = nums[R];
                    nums[R] = 0;
                }
                L++;
            }
        }
    }
}
