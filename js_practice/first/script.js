// let score = false

// console.log(typeof score)
// console.log(typeof(score))
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// let isLoggedIn = "sc"
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);
// let someNumber = 33
// let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof(stringNumber));

// let value = 4
// let negativeValue = -value
// console.log(negativeValue)
// console.log(2+2)
// console.log(2-2)
// console.log(2*3)
// console.log(2**10)// double ** ka matlab race to the power hota hai
// console.log(2/2)
// console.log(2%2)

// let str1 = "Anshu"
// let str2 = " Gupta"
// let str3 = " King"
// let str4 = str1 + str2 + str3
// console.log(str4);\

// function abcd(a,b,c) {
//   console.log(a,b,c)
// }
// abcd(4,8,454)

// var a =  ["Anshu","Raj","Gupta"];
// a.push("king");

// var a = ["Anshu","Raj","Gupta"]
// a.pop()

// var a = ["Anshu","Raj","Gupta"]
// a.unshift("MR.")

// var a = ["Anshu","Raj","Gupta"]
// a.shift()

// var a = ["Anshu","Raj","Gupta","King","Ji","Bikram"]
// a.splice(2,3)

// var anshu = {
//   rollNo: 21,
//   fatherName:"Sunil Kumar",
//   motherName:"Sushma Devi",
//   year:"1st"
// }
// var anshuRollNo = String(anshu.rollNo)
// console.log(anshuRollNo)
// console.log(typeof (anshuRollNo))

// const name = "Anshu "
// const repoCount= 50
// console.log(name + repocount)//it is old method
// //or
// console.log(`Hello my name is ${name} and my repo count is ${repoCount} `);

// const gameName = new String('Agk Game')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName);
// console.log(gameName.length);
// console.log(gameName.toUpperCase())
// console.log(gameName.toLowerCase())
// console.log(gameName.charAt(4)); //It is used to check the character of a position
// console.log(gameName.indexOf('m'))// it is  used to check the position of a character

// var n = 2;
// function square (num) {
//   var ans = num * num;
//   return ans;
// }
// var square2 = square(n);
// var square4 = square(4);
// console.log(square2);

// var x=1;
// a();
// b();
// console.log(x);

// function a() {
//   var x = 10;
//   console.log(x);
// }

// function b() {
//   var x = 100;
//   console.log(x);
// }

// function a() {
//   console.log(b);
// }
// var b=10;
// a();

function a() {
  b();
  function b() {
    console.log(c);
  }
}
var c = 10;
a();