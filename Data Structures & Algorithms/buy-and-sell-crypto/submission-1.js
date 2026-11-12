class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let right = 1;
        let max = 0;
        let minLeft = prices[0];

        while (right < prices.length) {
            if (prices[right] < minLeft) {
                minLeft = prices[right];
            }
            max = Math.max(max, prices[right] - minLeft);

            right++;
        }

        return max;
    }
}
