class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let maxAmount = 0;

        let l = 0;
        let r = heights.length - 1;

        while (l < r) {
            const minHeight = Math.min(heights[l], heights[r]);
            const amount = minHeight * (r - l);
            maxAmount = Math.max(amount, maxAmount);

            if (heights[l] > heights[r]) {
                r--;
            } else {
                l++;
            }
        }

        return maxAmount;
    }
}
