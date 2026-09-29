class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        const counts = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            const curCount = counts.get(nums[i]) ?? 0;
            counts.set(nums[i], curCount + 1);
        }

        for (const [num, count] of counts) {
            if (count > nums.length / 2) {
                return num;
            }
        }
    }
}
