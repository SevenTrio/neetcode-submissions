class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const prevValues = new Set();

        for (let i = 0; i < nums.length; i++) {
            if (prevValues.has(nums[i])) {
                return true;
            }

            prevValues.add(nums[i]);
        }

        return false;
    }
}
