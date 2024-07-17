let name = 'john'
let admin = name
console.log(admin);



let balance = 25000


let car = 4480
let food = 890


let invoice = 5500
let stock = 4200
let cash = balance - car - food + invoice + stock;

let totalBalance = cash;
console.log(totalBalance);


let str  =  'aaa@bbb@ccc' 


console.log(str.split('@').join('!'));

let str2 = "HELLOWORLD"

let upper = str2.slice(0, 1).toUpperCase() + str2.slice(1).toLowerCase();
console.log(upper)

let html ='Hello, it is HTML'
let js =' not JS'

let randomNumber = parseInt(Math.random() * 100);
console.log(randomNumber);

console.log( html.slice(0, 12) + js);

let str3 = "alex"

let lower = str3.slice(0, 1).toUpperCase() + str3.slice(1).toLowerCase();
console.log(lower)

let lorem = 'Lex Luterl has A big suit';
let a = lorem.indexOf('a');
let l = lorem.indexOf('l');
let e = lorem.indexOf('e');
let x = lorem.indexOf('x');

let alex = lorem[a] + lorem[l] +lorem[e] + lorem[x];

cases= alex.slice(0, 1).toUpperCase() + alex.slice(1).toLowerCase();
console.log(cases);


