const ftoc = function(fdegrees) {
var num = (fdegrees - 32) * 5/9;
var result = Math.round(num*10)/10;
return result;
};

const ctof = function(celsius) {
var num = (celsius * 9/5) + 32;
var result = Math.round(num*10)/10;
return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
