class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxProfit = 0;
        let L = 0;
        let R = 0;

        for (let i = 1; i < prices.length; i++) {
            if (prices[i] < prices[L]) {
                L = i;
                R = i;
            } else if (prices[i] > prices[R]) {
                R = i;
                maxProfit = Math.max(maxProfit, prices[R] - prices[L]);
            }
        }

        return maxProfit;
    }
}
