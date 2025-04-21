/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0
  let buyPirce = prices[0]
  for(let i = 1; i < prices.length; i++) {
      if(prices[i] < prices[i-1]) {
          buyPirce = prices[i]
      } else {
          profit = profit + (prices[i] - buyPirce)
          buyPirce = prices[i]
      }
  }
  return profit
};