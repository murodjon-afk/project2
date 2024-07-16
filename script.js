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

str.replaceAll('@', '!');
console.log(str);

let str2 = "HELLOWORLD"

let upper = str2.slice(0, 1).toUpperCase() + str2.slice(1).toLowerCase();
console.log(upper)

let html ='Hello, it is HTML'
let js =' not JS'



console.log( html.slice(0, 12) + js);

let str3 = "alex"

let lower = str3.slice(0, 1).toUpperCase() + str3.slice(1).toLowerCase();
console.log(lower)

let lorem = 'Lex Luterl has A big suit';
let a = lorem.indexOf('A');
let l = lorem.indexOf('l');
let e = lorem.indexOf('e');
let x = lorem.indexOf('x');

let alex = lorem[a] + lorem[l] +lorem[e] + lorem[x];
console.log(alex);


const amount = 10000;
const account = 7777;
const username = 'Alex';

const names = prompt('What\'s your name');

if (name === username) {
 const accountNumber = +prompt('What\'s your account number');

 if (accountNumber === account) {
 const amountMoney = +prompt('How much you want get');

if (amountMoney < amount) {
 alert(`cashed out: ${amountMoney}, left: ${amount - amountMoney}`);} else {
alert('Invalid amount of money'); }} 
else {alert('No') }}
  else {alert('No')}

  const cars = [
    { make: 'Toyota', model: 'Camry', price: 30000 },
    { make: 'Ford', model: 'Mustang', price: 50000 },
    { make: 'Honda', model: 'Civic', price: 22000 },
    { make: 'BMW', model: 'X5', price: 55000 },
    { make: 'Hyundai', model: 'Elantra', price: 27000 },
    { make: 'Chevrolet', model: 'Malibu', price: 32000 }
  ];
  const cheap = cars.filter(car => car.price < 35000);

  console.log(cheap);

  let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22];


let numbers = arr.filter(item => typeof item === 'number');


if (numbers.length > 5) {
}
  console.log('Гуд');

  let index = prompt();
  let array = ['Aleksey', 'Kartoshka', 'Margarita' , 'Morgenshtern', 'Monica'];
  if(index < arr.length){
    array.splice(index, 1);
  }
  else{
    alert('index undefined')
  }







