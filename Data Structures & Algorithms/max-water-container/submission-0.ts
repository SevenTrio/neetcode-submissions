class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let maxAmount = 0;

        for (let i = 0; i < heights.length; i++) {
            for (let j = i + 1; j < heights.length; j++) {
                const minHeight = Math.min(heights[i], heights[j]);
                const amount = minHeight * (j - i);
                maxAmount = Math.max(amount, maxAmount);
            }
        }

        return maxAmount;
    }
}
