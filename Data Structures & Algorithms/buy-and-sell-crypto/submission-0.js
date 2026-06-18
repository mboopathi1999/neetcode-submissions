class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if(prices.length === 1) return 0
        let min = prices[0]
        let i = 0
        let r = 0
        let profit = 0
        while(r < prices.length) {
            if(prices[r] >= min) {
                profit = Math.max(profit, prices[r] - prices[i])
                r++
                continue
            } else {
                min = prices[r]
                i = r
                r++
                continue
            }
        }
        return profit
    }
}
