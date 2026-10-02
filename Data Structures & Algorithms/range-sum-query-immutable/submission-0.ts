class NumArray {
    prefixSum: number[] = [];

    /**
     * @param {number[]} nums
     */
    constructor(nums: number[]) {
        for (let i = 0; i < nums.length; i++) {
            this.prefixSum[i] = (this.prefixSum[i - 1] ?? 0) + nums[i];
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left: number, right: number): number {
        return this.prefixSum[right] - (this.prefixSum[left - 1] ?? 0);
    }
}
