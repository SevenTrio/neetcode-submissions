class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const prevNumbers: Record<number, number> = {};

        for (let i = 0; i < nums.length; i++) {
            const neededNumber = target - nums[i];

            if (prevNumbers[neededNumber] !== undefined) {
                return [prevNumbers[neededNumber], i]
            }

            prevNumbers[nums[i]] = i;
        }

        return [];
    }
}
