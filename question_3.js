// Dynamic programming approach solved via tabulation
function changePossibilities(amount, coins) {
  let combinations = Array(amount + 1).fill(0);
  combinations[0] = 1;
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j < combinations.length; j++) {
      combinations[j] += combinations[j - coins[i]];
    }
  }
  return combinations[amount];
}
