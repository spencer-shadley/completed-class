'use strict';

// Write a function that takes an array of integers representing the price of a stock on different days. Return the maximum profit that can be made from buying and selling a single stock

const maxProfit = function(prices) {
  const smallest = Infinity;
  const bestProfit = 0;

  for (let i = 0; i < prices.length; ++i) {
    const price = prices[i];
    smallest = Math.min(smallest, price);
    bestProfit = Math.max(bestProfit, price - smallest);
  }

  return bestProfit;
};
