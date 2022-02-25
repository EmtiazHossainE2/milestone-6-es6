let a = 'rahim'
a = 'my name is emtiaz '
console.log(a)

/* 
Falsy: 
false
0
empty string
undefined
null
NaN
-------------------
Truthy:
true
any number (positive or negative )
any string including single whitespace, '0', 'false'
[]
{}
anything else that is not falsy will be truthy
*/
/* Undefined 
1. variable value not assigned
2. function but didn't write return 
3. just wrote return but didn't return anything
4. parameter that isn't passed
5. property that doesn't exist in an object
6. accessing array element out of range
7. accessing deleted array element
8. explicitly set value to undefined
*/
let x = {};
console.log('value of x', x)
if (x) {
    console.log('variable is truthy');
}
else {
    console.log('variable is Falsy');
}



