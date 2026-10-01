class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let profit = 0;
        let nextPrice = prices[prices.length - 1]
        for (let i = prices.length - 2; i >= 0; i--) {
            if (prices[i] < nextPrice) {
                profit += nextPrice - prices[i];
            }

            nextPrice = prices[i];
        }
        return profit;
    }
}
