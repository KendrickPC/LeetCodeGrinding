/**
 * @param {string} s
 * @return {string}
 */
var removeVowels = function(s) {
  var result = [];
  for (var i = 0; i < s.length; i++) {
    if (s[i] !== 'a' && s[i] !== 'e' && s[i] != 'i' && s[i] != 'o' && s[i] != 'u') {
      result.push(s[i]);
    }
  }
  return result.join('');
};

var input1 = "leetcodeisacommunityforcoders"
console.log(removeVowels(input1))