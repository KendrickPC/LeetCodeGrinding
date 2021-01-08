/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  var result = [];
  // store first number into array.
  result.push(nums[0]);
  for (var i = 1; i < nums.length; i++) {
    // set the current element to the sum of current + previous
    nums[i] = nums[i] + nums[i-1];
    result.push(nums[i]);
  }
  return result;
};

/*
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
*/

var input1 = [1, 2, 3, 4];
var output1 = [1, 3, 6, 10];

console.log(runningSum(input1));