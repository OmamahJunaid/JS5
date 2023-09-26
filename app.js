// Chapter 21
// Q1
allLower = userInput.toLowerCase();
// Q2
 var x= x.toLowerCase();
//  Q3
var y= y.toUpperCase();
// Q4
var stg= "Omamah"
var newName = stg.toLowerCase()
console.log(newName)
// Q05
var arr=["KARACHI","ISLAMABAD","LAHORE"]
arr=arr.toLowerCase();

// Q06
var a="Omamah"
var newa = a.toUpperCase()
alert(newa)

// Q07
var city = "kaRacHi";

var firstChar = city.slice(0, 1).toUpperCase();

var remainChars = city.slice(1).toLowerCase();

var completeWord = firstChar + remainChars;

console.log(completeWord);
// CHAPTER 20 -25
// Q1
var sameWords = "captain";
var slicedString = sameWords.slice(1, 3);
console.log(slicedString); 
// Q3
var animal = "elephant"
var slicedanimal = animal.slice(2,6)
console.log(slicedanimal )
// Q4
var str = "hello world"
var lng= str.length
console.log(lng)
// Q6
var text = "To be or not to be.";
var indx = text.indexOf("be");
console.log(indx)
// Q7
var text = "To be or not to be.";
var indx = text.lastIndexOf("be");
console.log(indx)
// Q8

var text = "Let's go on a journey. It's time to go forward and not look back. Let's go.";
var indx = text.lastIndexOf("go");
console.log("Index of the first character of the last 'go':", indx);
// Q10
var stg = "abcde"
var newstg=stg.charAt(2)
console.log(newstg)
// Q11
var sentense = "Hello this is JS Practice"
var cha = sentense.charAt(10)
console.log(cha)
// Q12
var str = "Hello, World!";
var x = str.charAt(str.length - 1);
console.log("Last character:", x);
// Q13
var userInput = prompt("enter")
var cha = userInput.charAt(5)
console.log(cha)
// Q14
// Chapter 26
// Q1
var num =2.7
console.log(Math.round(num))
// Q2
var origNum=4.3;
var roundNum = Math.ceil(origNum);
// Q3
var Num=9.3;
var round = Math.floor(origNum);
// Q4
var origNum=6.3;
var roundNum = Math.round(origNum);
// Q5
var origNum=0.5;
var roundNum = Math.ceil(origNum);
// Chapter 27
// Q1
console.log(Math.random()*50)
// Q2
var ranNum = Math.random
// CHAPTER 28-29
// Q1
parseInt()
// Q2
var str ="123"
var newstr = parseInt(str)
// Q4
// using element typeof
// Q5
toString()
// Q6
var num = 123
var str= num.toString()
// Q7
var str = "3.14";
var intValue = parseInt(str, 10)
// Chapter 30
// Q1
var num = Math.random() * 10;
var newNum=num.toFixed(4);
// Q2
var num = Math.random().toFixed().toString;

// Q3
// Q4
var num = 4.6578291893
alert(num.toFixed(2))