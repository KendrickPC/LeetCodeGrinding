// maximum wealth of customer

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  var largestBalance = 0;
  for (var i = 0; i < accounts.length; i++) {
    var individualBalance = 0;
    for (var j = 0; j < accounts[i].length; j++) {
      individualBalance += accounts[i][j];
      if (individualBalance > largestBalance) {
        largestBalance = individualBalance;
      }
    }
  }
  return largestBalance;
};

var input1 = [[1,2,3],[3,2,1]]
var input2 = [[1,5],[7,3],[3,5]]
var input3 = [[2,8,7],[7,1,3],[1,9,5]]

console.log(maximumWealth(input1));
console.log(maximumWealth(input2));
console.log(maximumWealth(input3));
