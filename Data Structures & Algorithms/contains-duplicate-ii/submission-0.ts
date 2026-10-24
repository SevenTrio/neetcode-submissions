class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums: number[], k: number): boolean {
        const duplicates = new Set();
        let l = 0;

        for (let r = 0; r < nums.length; r++) {
            if (r - l > k) {
                duplicates.delete(nums[l]);
                l++;
            }

            if (duplicates.has(nums[r])) {
                return true;
            }

            duplicates.add(nums[r]);
        }

        return false;
    }
}
