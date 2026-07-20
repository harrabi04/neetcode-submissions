class Solution {
    public int maxProfit(int[] prices) {
        int lowestSeen = prices[0];
        int best = 0;
        for(int i = 1; i < prices.length; i++){  
            int profit = prices[i] - lowestSeen;
            if(profit > best) best = profit;

            if(lowestSeen > prices[i]) lowestSeen = prices[i];
          
        }
        return best;
    }

}
