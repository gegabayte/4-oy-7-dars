// function sum (a = 15, b = 14) {
//     let res1 = a + b;
//     return res1;
// }
// let res2 = res1(6, 20)
// console.log(res2);

//1-misol
//ikkita sanndan kattasini topuvchi algarithm
// function maxTwoNumber (a , b) {
//     let max;
//     if (a > b) {
//         max = a
//     } else {
//         max = b;
//     }
//     return max;
// }
// console.log(maxTwoNumber(5, 7))


//2-misol
// function fact(a) {
//     let p = 1;
//     for (let i = 1; i <= a; i++) {
//         p *=i
//     }
//     return p;
// }

// console.log(fact(8));


// 3-misol 
// 1 dan n gacha barcha sonlar yigindisini topuvchi algoritm yozing.
// function res (n) {
//     let sum = 0;
//     for (let i = 1; i <= n ; i++ ) {
//         sum = sum + i
//     }
//     return sum ;
// }
// console.log(res(5));


//4-misol
//3 ta sondan kattasini topuvchi funksiya yozing.
// function sonN(a, b, c) {
//     let max;
//     if (a > b) {
//         max = a;
//      } else {
//         max = b
//      }

//      if(max < c){
//         max = c
//      }
//      return max
// }
// console.log(sonN(10, 40, 5));




//regular function
// function sum (a, b ) {
//     return a + b ;
// }


//express function 
// const sum1 = function(a , b) {
//     return a + b ;
// }


// arrow function 
// const sum2 = (a , b) => {
//     return a + b ;
// }













//1.1-misol  regular function
//ixtiyoriy sonni kubini topuvchi funkctsiya yozing.
// function res1 (n) {
//     let res = n * 3;
//     return res;
// }
// console.log(res1(10))


//1.2-misol express function
//ixtiyoriy sonni kubini topuvchi funkctsiya yozing.
// const res2 = function (n) {
//     let res = n * 3;
//     return res;
// }
// console.log(res2(10))


//1.3-misol arrow function
//ixtiyoriy sonni kubini topuvchi funkctsiya yozing.
// const res3 = (n) => {
//     const res = n * 3;
//     return res;
// }
// console.log(res3(10))



//2.1-msiol   regular function
//ixtiyoriy 2 ta sondan kattasini kvadratini topuvchi dunksiya yozing.
// function res1 (a , b) {
//     let  result = ``;
//     if (a > b) {
//         result = a * 2;
//     } else {
//         result = b * 2;
//     }
//     return result;
// }
// console.log(res1(52, 20))


//2.2-msiol  express function
//ixtiyoriy 2 ta sondan kattasini kvadratini topuvchi dunksiya yozing.
// const res2 = function (a , b) {
//     let  result = ``;
//     if (a > b) {
//         result = a * 2;
//     } else {
//         result = b * 2;
//     }
//     return result;
// }
// console.log(res2(52, 20))


//2.3-msiol  arrow function
//ixtiyoriy 2 ta sondan kattasini kvadratini topuvchi dunksiya yozing.
// const res3 =  (a , b) => {
//     let  result = ``;
//     if (a > b) {
//         result = a * 2;
//     } else {
//         result = b * 2;
//     }
//     return result;
// }
// console.log(res3(52, 20))



//3.1-misol   regular function
//ixtiyoriy 3 xonali sonnig raqamlari yegindisini topuvchi funksiya yozing.
// function res3 (n) {
//     let result = ``;
//     let b = n % 10;
//     let o = Math.trunc(Math.floor(n % 100) / 10); 
//     let y = Math.trunc(Math.floor(n / 100));
//     result = b + o + y;
//     return result;
// }
// console.log(res3(523));


//3.2-misol   express function
//ixtiyoriy 3 xonali sonnig raqamlari yegindisini topuvchi funksiya yozing.
// const res3 = function (n) {
//     let result = ``;
//     let b = n % 10;
//     let o = Math.trunc(Math.floor(n % 100) / 10); 
//     let y = Math.trunc(Math.floor(n / 100));
//     result = b + o + y;
//     return result;
// }
// console.log(res3(523));


//3.3-misol   arrow function
//ixtiyoriy 3 xonali sonnig raqamlari yegindisini topuvchi funksiya yozing.
// const res3 = (n) => {
//     let result = ``;
//     let b = n % 10;
//     let o = Math.trunc(Math.floor(n % 100) / 10); 
//     let y = Math.trunc(Math.floor(n / 100));
//     result = b + o + y;
//     return result;
// }
// console.log(res3(523));



//4.1-misol    regular function
//ixtiyoriy sonning boluvchilari sonini topuvchi funksiya yozing.
// function res4 (n) {
//     let counter = 0;
//     for (let i = 1; i <= n ; i++) {
//         if (n % i == 0 ) {
//             counter++;
//         }
//     }
//     return counter;
// }
// console.log(res4(5))


//4.2-misol   express function
//ixtiyoriy sonning boluvchilari sonini topuvchi funksiya yozing.
// const res4 = function (n) {
//     let counter = 0;
//     for (let i = 1; i <= n ; i++) {
//         if (n % i == 0 ) {
//             counter++;
//         }
//     }
//     return counter;
// }
// console.log(res4(15))


//4.3-misol   arrow function
//ixtiyoriy sonning boluvchilari sonini topuvchi funksiya yozing.
// const res4 = (n) => {
//     let counter = 0;
//     for (let i = 1; i <= n ; i++) {
//         if (n % i == 0 ) {
//             counter++;
//         }
//     }
//     return counter;
// }
// console.log(res4(30))



//5.1-misol    regular function
// 1 dan n  gacha barcha toq sonlar yigindisini topuvchi funksiya yozing.
// function res5 (n) {
//     let sum = 0;
//     for (let i = 1; i <= n ; i+=2) {
//             sum = sum + i;
//     }
//     return sum;
// }
// console.log(res5(15));

//5.2-misol   express function
// 1 dan n  gacha barcha toq sonlar yigindisini topuvchi funksiya yozing.
// const res5 = function (n) {
//     let sum = 0;
//     for (let i = 1; i <= n ; i+=2) {
//             sum = sum + i;
//     }
//     return sum;
// }
// console.log(res5(15));


//5.3-misol  arrow function
// 1 dan n  gacha barcha toq sonlar yigindisini topuvchi funksiya yozing.
// const res5 = (n) => {
//     let sum = 0;
//     for (let i = 1; i <= n ; i+=2) {
//             sum = sum + i;
//     }
//     return sum;
// }
// console.log(res5(15));



//8.1-misol   regular function
// Ixtiyoriy 3 xonali  sonni palidrom yoki palidrom emasligini tekshiruvchi funksiya yozing.
// function res8 (n) {
//     let result = ``;
//     let b = n % 10;
//     let o = Math.trunc(Math.floor(n % 100) / 10); 
//     let y = Math.trunc(Math.floor(n / 100)); 
//     if (b == y) {
//         result = `palidrom sonn`
//     } else {
//         result = `pallidrom sonn emas`
//     }
//     return result
// }
// console.log(res8(515));


//8.2-misol  express function
// Ixtiyoriy 3 xonali  sonni palidrom yoki palidrom emasligini tekshiruvchi funksiya yozing.
// const res8 = function    (n) {
//     let result = ``;
//     let b = n % 10;
//     let o = Math.trunc(Math.floor(n % 100) / 10); 
//     let y = Math.trunc(Math.floor(n / 100)); 
//     if (b == y) {
//         result = `palidrom sonn`
//     } else {
//         result = `pallidrom sonn emas`
//     }
//     return result
// }
// console.log(res8(515));


//8.3-misol   arrow function
// Ixtiyoriy 3 xonali  sonni palidrom yoki palidrom emasligini tekshiruvchi funksiya yozing.
// const res8 = (n) => {
//     let result = ``;
//     let b = n % 10;
//     let o = Math.trunc(Math.floor(n % 100) / 10); 
//     let y = Math.trunc(Math.floor(n / 100)); 
//     if (b == y) {
//         result = `palidrom sonn`
//     } else {
//         result = `pallidrom sonn emas`
//     }
//     return result
// }
// console.log(res8(515));