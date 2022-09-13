const sumAll = function(min, max) {
        if (min > max) {
            temp = min;
            min = max;
            max = temp;
}
let sumAll = 0;
for (let i = min; i <= max; i++) {
    sumAll += i;
}
return sumAll;
};


// Do not edit below this line
module.exports = sumAll;
