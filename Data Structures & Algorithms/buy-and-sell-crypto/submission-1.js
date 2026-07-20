class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0;
        if(prices.length <= 1) return 0;
        let currMin = prices[1];
        let i = 0;
        let x = 1;
        while(x < prices.length){
            currMin = Math.min(prices[i], currMin);
            let earning = prices[x] - currMin;
            max = Math.max(earning, max);
            x++;
            i++;
        }
        return max;
    }
}
