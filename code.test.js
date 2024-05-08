const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

const jsc = require('jsverify');


function originalfactorial(n) {
    if(n === 0) return 1;
    else return n * factorial(n - 1);
}

function originalcode(n) {
    if(n === 0) return 1;
    else return 1.0 / originalfactorial(n) + originalcode(n - 1);
}


assert(originalfactorial(10) === 3628800);
assert(e(10) === 2.7182818011463845);


const test =
    jsc.forall("nat", function(n) {
        return JSON.stringify(originalcode(n)) ==
            JSON.stringify(e(n));
    });
jsc.assert(test);