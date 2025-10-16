// "or" operator
console.log(true || true);
console.log(true || false);
console.log(false || false);

let educated = true;
let uneducated = false;
const postgraduate = educated || uneducated;

console.log(postgraduate);

// "&&" operators
console.log(true && false);
console.log(true && true);
console.log(false && false);
console.log(false && true);

let knowsDriving = true;
let age = 18;
const canDrive = age >= 18 && knowsDriving;

console.log(canDrive);

// "!" returns inverted value
console.log(!true); // will return false
console.log(!false); // will return true

let closedonSunday = true;
const isitOpen = !closedonSunday;

console.log(isitOpen);

// "??" represents the null coalescing operator

let a = true;
const result = a ?? false;
console.log(result);
// Basically there are 4 types of logical operators which are "||", "&&", "!", "??"

// logical operators with non boolean values
let choosenColor = 'blue';
let defaultColor = 'grey';
const websiteColor = 'blue' && 'grey';

console.log(websiteColor);

let name = 'test';
const results = false || name;

console.log(results);