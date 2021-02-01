

let num = 266219;

let str = String(num);
let i = ('' + str).split('');

let c = i.reduce(function(a, b) {
    return a * b
});
let r = c ** 3;
let str1 = String(r);
let n = Number(str1.substring(0, 2));

console.log(str);
console.log(c);
console.log(r);
console.log(typeof(str1));
console.log(n);





/*let i = ('' + num).split('');

let c = i.reduce(function(a, b) {
    return a * b
});

let r = c ** 3;
let arr = ('' + r).split('');


console.log(i);
console.log(c);
//console.log(c ** 3);

console.log(r);
console.log(arr);
console.log(arr[0], arr[1]);
*/









//console.log(num.charAt(0));