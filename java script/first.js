// const product = {
//     title: "ball pen",
//     rating: 4,
//     offer: 5,
//     price: 270,
// };

// const profile = {
//     username: "@vardan saini",
//     isfollow: false,
//     followers: 142,
//     following: 155,
// };

// this code print hello world
// console.log("hello world");
// this is a comment
// arthmatic operaters
// let a= 5;
// let b= 7;

//  console.log("a=",a, "& b =",b);
// console.log("a+b=", a+b);
// console.log("a-b=", a-b);
// console.log("a*b=", a* b);
// console.log("a%b=", a%b);
// console.log("a**b=", a**b);

// unary operator 
//  let a= 5;
// let b= 7;

//  console.log("a=",a, "& b =",b);
//  a--;
//  console.log("a++   = ",a++);
//  let a= 5;
// let b= 7;

// a*= 4;// a=a*4
// console.log("a= ",a); //20 

// comparison operators
//  let a= 5;
// let b= 3;

// console.log("5>=3",a>=b);//true  

// logical operators
//  let a= 6;
// let b= 5;

// console.log("!(a<b) = ", !(a===6));   

// conditional statment

// let age = 16;
// 
// if (age>=18) {
// console.log("you can vote");
// }

// if(age<18) {
// console.log("you cant vote")
// }


// let mode = "blue"
// let color;

// if(mode=== "dark") {
//     color="black";
// } else {
//     color="white";
// }

// // if (mode==="light") {
//     // color="white";
// //  }

//  console.log(color);

// let age=19;

// if (age>=18) {
//     console.log("vote")
// } else {
//     console.log("not vote")
// };

// let num=20;

// if(num%2===0) {
//     console.log("even")
// } else {
//     console.log("odd")
// };

// let mode = "dark";
// let color;

// if (mode === "dark") {
//     color = "black";
// } else if (mode === "blue") {
//     color = "blue";
// } else if (mode === "pink") {
//     color = "pink";
// } else {
//     color = "white";
// }

// console.log(color);

// if (mode === "dark") console.log(mode);

// ternary operators

// let age=16; 

//  let result=age>=18? "adult" : "not adult";
//  console.log(result);

//  practis question
// 1
// let num=prompt ("enter a number");

// if (num%5===0){
//     console.log(num, "is multiple of 5");
// } else {
//      console.log(num, "is not multiple of 5");
// };

// practis program.....
// let score=prompt("enter your score(0-100)");
// let grade;

// if (score>=90&&score<=100) {
//     grade="A";

// } else if(score>=70&&score<=89) {
//     grade="B";
// } else if(score>=60&&score<=69) {
//     grade="c";
// } else if(score>=50&&score<=59) {
//     grade="D";
// } else if(score>=0&&score<=49) {
//     grade="F";
// }
// console.log("according to your score,your grade was",grade);

// for(let i=1; i<=5; i+=1) {
// console.log("vardan");
// }

// loop -- print 1 to 10
// for(let i=1; i<=10; i++) {
//     console.log("i=",i);
// }
// while loop
// let i=1;
// while(i<=5) {
//     console.log("vardan saini"); i++;
// }
// for-of loop
// let str="vardan";

// let size=0;
// for(let i of str) {
//     console.log("i=",i);
//     size++;
// }

// console.log("string size=",size); 

// for-in loop
// let student = {
//     name: "vardan",
//     age: 26,
//     cgpa: 7.5,
//     ispass: true,
// };

// for(let key in student) {
//     console.log("key=", key , "value=",student[key]);
// }

// practis question
// for(let num=0;  num<=100; num++) {
//     if(num%2!==0){
//         // odd num
//         console.log("num=", num);
//     }
// }

// Q2

// let gamenum = 30;
// let usernum = prompt("guess the game number : ");

// while (usernum != gamenum) {
//      usernum = prompt("you entered wrong number .guess again");
// }

// console.log("congratulation, you entered the right number");




// console.log("loop has ended");

// calculate sum of 1 to n
// let sum=0
// for(let i=1; i<=5 ; i++) {
//     sum = sum +i;
// }
// console.log("sum =", sum);
// console.log("loop has ended")



// string....
// let str="vardanasini";

// console.log(str[6]);

// template litreals
// let specialString= `this is a template \nliteral ${1+2+3}`;
// console.log(specialString)


// let o bj={
//     item:"pen",
//     price:"10",
// };


// let output=`the cost of ${obj.item} is ${obj.price} rupees`
// console.log(output);

// string

// let str= "hello vardan";
// str=str.toUpperCase()
// console.log(str);

// let str="         vardan saini   js";
// console.log(str.trim(str));

//  let str=" 123456789";
//  console.log(str.slice(2,3));

// let str1="vardan"
// let str2="saini";
// 
// let res = str2.concat(str1);
// console.log(res);


// let str="hello";
// 
// console.log(str.replace("h", "lla"));

// let str="i love js";

// console.log(str.charAt(4));

// practis question


// let fullname=prompt("enter a full name without space");

// let username= "@"+fullname+fullname.length;
// console.log(username);

// arrays....

// let mark=[98,/96,88,87];
// console.log(mark);

// let heroes = ["ironman", "saktiman", "spiderman", "antaman"]

// // for loop
// for(let i=0; i<heroes.length; i++) {
//     console.log(heroes[i]);

// }

// for of loop

// for (let hero of heroes) {
//     console.log(hero);
// }

// let cities = ["delhi", "mumbai", "goa", "up", "etc"]
// for (let city of cities) {
//     console.log(city.toUpperCase());
// }

// // practies question

// let stu = [85, 97, 44, 37, 76, 60]

// let sum = 0;

// for (let val of stu) {
//     sum = sum + val;
// }
// console.log(sum);

// let avg = sum / stu.length;
// console.log(`avg of marks=${avg}`);

// let item = [250, 645, 300, 900, 50]

// // let idx=0;
// // for(let val of item){
// //     console.log(`value at index ${idx}=${val}`);
// //     idx++;
// // offer=val/10;

// // val=val-offer
// // }

// for (let i = 0; i < item.length; i++) {
//     let offer = item[i] / 10;
//     item[i] -= offer;
// }
// console.log(item);

// let fooditems = ["patato", "apple", "grapes"];

// console.log(fooditems);

// let deleteditem = fooditems.pop();
// console.log(fooditems);
// console.log("deleted", deleteditem);


// let marvel_heroes = ["thor", "spiderman", "ironman"];
// let dc_heroes = ["superman", "batman"];

// let heroe = marvel_heroes.concat(dc_heroes);
// console.log(heroe);

// let marvel_Heroes = ["thor", "spiderman", "ironman"];
// console.log(marvel_Heroes);
// console.log(marvel_Heroes.slice(1));

// let arr = [1, 2, 3, 4, 5, 6, 7];

// arr.splice(2, 2, 101, 102);

// // function in js

// function myfunction(msg) {
//     console.log(msg); //parameter
//     // console.log("we are learning js");

// }
// myfunction("i love js"); //arrgument

// function Sum(a, b) {
//     s = a + b;
//     return s;


// }
// let val = Sum(5, 6);
// console.log(val);


// // function sum(x,y){
// // return x+y;
// // }


// morden js 
// const arrowSum = (x, y) => {
//     console.log(x + y);

// }

// function mul(x, y) {
//     return x * y;
// }


// const arrowmul = (t, o) => {
//     return t * o;

// }


// // practis question
// function countvowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//         //  console.log(char);

//     }
//     console.log(count);

// }

// let arr=["delhi","mumbai", "mzn","pune"];

// arr.forEach((val,idx ,arr) =>{
//   console.log(val.toUpperCase(),idx , arr);
  
// });

// practis question

// let num=[2,3,4,5,6];

// num.forEach((num) => {
//   console.log(num*num);
  
// })

// let nums=[67,54,34];

// nums.map((val) =>{
//   console.log(val*2);
  
// })

// let arr=[1,2,3,4,5];

//  let evenArr=arr.filter((val) =>{
//   return val>3;
// })
// console.log(evenArr);

// let arr=[6,5,1,3,2];

// const output=arr.reduce((prev,curr)=>{
//   return prev>curr ? prev:curr;
// });
// console.log(output);


// practis question

// let marks=[87,94,64,99,86];

// let topper=marks.filter((val)=>{
//   return val>90;
// })
// console.log(topper);

// let n=prompt("enter a number: ");

// let arr=[];

// for(let i=1; i<=n; i++) {
//   arr[i-1] = i;
// }
// console.log(arr);

// let sum=arr.reduce((res,curr) => {
//   return res*curr;
// });
// console.log(sum);
