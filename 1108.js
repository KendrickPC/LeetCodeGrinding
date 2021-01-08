/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  var result = '';
  var splitString = address.split('')
  for (var i = 0; i < splitString.length; i++) {
    if (splitString[i] === '.') {
      splitString[i] = '[.]'
    }
    result += splitString[i];
  }
  return result;
};

var input1 = "1.1.1.1";
console.log(defangIPaddr(input1));


