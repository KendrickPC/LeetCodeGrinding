/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  var mostCandiesCount = 0;
  for (var i = 0; i < candies.length; i++) {
    if (candies[i] > mostCandiesCount) {
      mostCandiesCount = candies[i];
    }
  }
  var result = [];
  for (j = 0; j < candies.length; j++) {
    if ((candies[j] + extraCandies) >= mostCandiesCount) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
};

console.log(kidsWithCandies([2,3,5,1,3], 3));
var output1 = [true,true,true,false,true] 