function maxProfit(prices) {
    let min = Infinity;
    let profit = 0;

    for (let price of prices) {
        min = Math.min(min, price);
        profit = Math.max(profit, price - min);
    }

    return profit;
}

prices = [2,3, 1]
console.log(maxProfit(prices));