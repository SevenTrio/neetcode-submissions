class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set(nums);
        let longest = 0;

        for (let i = 0; i < nums.length; i++) {
            if (numSet.has(nums[i] - 1)) {
                continue
            }

            let length = 0;
            while (numSet.has(nums[i] + length)) {
                length += 1;
            }

            longest = Math.max(length, longest);
        }

        return longest;
    }
}