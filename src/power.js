/**
 * Return base raised to the power exponent.
 * @throws Error if exponent is negative
 * @param {integer} base an integer
 * @param {integer} exponent a non-negative integer
 */

// given two integers a and b
// b not negative   Math.sign(exponent) returns 1 or neg 1
// a raised to the power of b  Math.pow(base, exponent)
// multiplied by itself b times  
// a is called base
// b is called the exponent
function power(base, exponent) {
    // top down
    if(Math.sign(exponent)=== -1){
        throw 
    }
}

console.log(power(5, 10))
console.log(power(5, -10));


module.exports = power;
