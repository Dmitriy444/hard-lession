

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
