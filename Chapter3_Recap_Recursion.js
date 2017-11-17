/*
function power(base, exponent) {
    if (exponent == 0)
        console.log(1)
    else
        console.log(power(base, exponent))
    console.log(base * power(base, exponent - 1))
}

// console.log(power()
power(2, 1)
*/


function power(base, exponent) {
    if (exponent == 0)
        return 1
    else
        return base * power(base, exponent - 1)
}

console.log(power(2, 3))