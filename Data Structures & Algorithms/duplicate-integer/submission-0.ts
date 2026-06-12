class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const existingNumsMap: Record<number, boolean> = {};

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];

            if (existingNumsMap[num]) {
                return true;
            }

            existingNumsMap[num] = true;
        }

        return false;
    }
}
