class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numIndexesMap: Record<number, number> = {};

        for (let i = 0; i < nums.length; i++) {
            const currentNum = nums[i];
            const secondNum = target - currentNum;
            if (numIndexesMap[secondNum] !== undefined) {
                return [numIndexesMap[secondNum], i];
            }
            numIndexesMap[currentNum] = i;
        }

        return [];
    }
}
