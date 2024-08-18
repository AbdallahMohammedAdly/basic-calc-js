// //  1- 

// var num = window.prompt("enter a num");
// window.alert(num);


// //  2-
// var x = window.prompt("enter a if num / by 3 or 4 see yes not see no");
// if(x%3==0 || x%4==0){
//     window.alert("yes");
// }
// else{
//     window.alert("no");
// }


// //  3-
// var y1 = num(window.prompt("enter the first num"));
// var y2 = num(window.prompt("enter the secound num"));

// if(y1 > y2){
//     window.alert(y1);
// }
// else if(y1 < y2){
//     window.alert(y2);
// }


// //  4-
// var num = num(window.prompt("enter the num"));
// if(num > 0){
//     window.alert("positive num");
// }
// else if(num < 0){
//     window.alert("negative num");
// }
// else{
//     window.alert("0 isnot positive or negative");
// }



// // 5-

// var num1 = num(window.prompt("enter the first num"))
// var num2 = num(window.prompt("enter the secound num"))
// var num3 = num(window.prompt("enter the third num"))

// if(num1 > num2 && num1 > num3){
//     window.alert("max element " + num1)
//     window.alert("min element " + num3)
// }
// else if(num2 > num1 && num2 > num3){
//     window.alert("max element " + num2)
//     window.alert("min element " + num3)
// }
// else if(num3 > num1 && num3 > num2){
//     window.alert("max element " + num3)
//     window.alert("min element " + num2)
// }
// else if(num1 < num2 && num1 < num3){
//     window.alert("max element " + num2)
//     window.alert("min element " + num3)
// }
// else if(num2 < num1 && num2 < num3){
//     window.alert("max element " + num3)
//     window.alert("min element " + num2)
// }
// else if(num3 < num1 && num3 < num2){
//     window.alert("max element " + num3)
//     window.alert("min element " + num2)
// }


// // 6-
// var num = num(window.prompt("enter the num"));
// if (num %2==0){
//     window.alert("even");
// }
// else if (num %2){
//     window.alert("odd");
// }


// // 8-
// var char = (window.prompt("enter char"))
// switch(char){
//     case "a" :
//         window.alert("vowel char")
//     break

//     case "e":
//         window.alert("vowel char")
//     break

//     case "o" :
//         window.alert("vowel char")
//     break

//     case "i":
//         window.alert("vowel char")
//     break

//     case "u":
//         window.alert("vowel char")
//     break

//     default:
//        window.alert ("constant char")
// }


// //  9-
// var num = num(window.prompt("enter num"))
// for (var i=1 ; i<=num ;i++ ){
//     window.alert(i)
// }


// //  10-
// var num = num(window.prompt("enter num"))    
// for ( var i=1 ; i<=12 ; i++ ){
//     var multiblicat = num*i
//     window.alert(multiblicat)
// }


// // 11-

// var num = num(window.prompt("enter num"))
// for(var i=1; i<=num ; i++ ){
//     if(i%2==0){
//         window.alert(i)
//     }
// }


// // 12-
// var num1 = num(window.prompt("enter the num1"));
// var num2 = num(window.prompt("enter the num2"));

// var result = num1 ** num2;
// window.alert(result);


// // 12-
// var num1 = num(window.prompt("enter the num1"));
// var num2 = num(window.prompt("enter the num2"));
// var num3 = num(window.prompt("enter the num3"));
// var num4 = num(window.prompt("enter the num4"));
// var num5 = num(window.prompt("enter the num5"));
// var tot = 500;

// var total = num1 + num2 + num3 + num4 + num5;
// var average = total/5;
// var percentage = total/tot*100;

// window.alert(total);
// window.alert(average);
// window.alert(percentage);



// // 13-


// var num = num(window.prompt("enter num from 1 to 12"))
// if(num>12){
//     window.alert("enter num from 1 to 12")
// }
// if(num == 1 || num ==3 || num ==5 || num ==7 || num ==8 || num ==10 || num ==12 ){
//     window.alert("31 Days")
// }
// else if(num == 4 || num ==6 || num ==9 || num ==11){
//     window.alert("30 Days")
// } 
// else if(num == 2){
//     window.alert("28 or 29 Days")
// }



// // 14-


// var num1 = num(window.prompt("enter the num1"));
// var num2 = num(window.prompt("enter the num2"));
// var num3 = num(window.prompt("enter the num3"));
// var num4 = num(window.prompt("enter the num4"));
// var num5 = num(window.prompt("enter the num5"));
// var tot = 500;

// var total = num1 + num2 + num3 + num4 + num5;
// var average = total/5;
// var Percentage = total/tot*100;

// if (Percentage >= 90){
//     window.alert("Grad A");
// }
// else if (Percentage >= 80){
//     window.alert("Grad B");
// }
// else if (Percentage >= 70){
//     window.alert("Grad C");
// }
// else if (Percentage >= 60){
//     window.alert("Grad D");
// }
// else if (Percentage >= 50){
//     window.alert("Grad E");
// }
// else{
//     window.alert("Grad F");
// }


// // -----------------------------------------------
// // Using Swict Case
// // 15-


// switch(month){
//     case 1: 
//         window.alert("31 days");
//     break;
//     case 2: 
//         window.alert("28/29 days");
//     break;
//     case 3: 
//         window.alert("31 days");
//     break;
//     case 4: 
//         window.alert("30 days");
//     break;
//     case 5: 
//         window.alert("31 days");
//     break;
//     case 6: 
//         window.alert("30 days");
//     break;
//     case 7: 
//         window.alert("31 days");
//     break;
//     case 8: 
//         window.alert("31 days");
//     break;
//     case 9: 
//         window.alert("30 days");
//     break;
//     case 10: 
//         window.alert("31 days");
//     break;
//     case 11: 
//         window.alert("30 days");
//     break;
//     case 12: 
//         window.alert("31 days");
//     break;

//     default: 
//         window.alert("Invalid input! Please enter month num between 1-12");
// }



// // 16-


// var alphabet = window.prompt("enter char")

// switch(alphabet){
//     case "a" :
//         window.alert("vowel char")
//     break

//     case "e":
//         window.alert("vowel char")
//     break

//     case "o" :
//         window.alert("vowel char")
//     break

//     case "i":
//         window.alert("vowel char")
//     break

//     case "u":
//         window.alert("vowel char")
//     break

//     default:
//        window.alert ("constant char")
// }



// // 17-


// var num1 = num(window.prompt("enter num1"))
// var num2 = num(window.prompt("enter num2"))  

// switch(true){
//     case num1 > num2 :       
//         window.alert(num1)
//     break

//     case num2 > num1 : 
//         window.alert(num2)
//     break
// }


// // 18-


// var num = num(window.prompt("enter num"))

// switch(true){
//     case num%2==0 :
//         window.alert("even num")
//     break

//     case num%2!=0 :
//         window.alert("odd num")
//     break
// }



// // 19-


// var num = num(window.prompt("enter num"))

// switch(true){
//     case num>0 :
//         window.alert("num is positive")
//     break

//     case num<0 :
//         windows.alert("num is negative")
//     break

//     case num==0 :
//         window.alert("0")
//     break
// }


// // 20-

var num1 = window.prompt("enter num1");
var num2 = window.prompt("enter num2");
var sign = window.prompt("enter the sign of operation");

switch(sign){
    case "+":
        window.alert(num1 + num2)
    break

    case "-":
        window.alert(num1 - num2)
    break
    case "*":
        window.alert(num1 * num2)
    break

    case "/":
        window.alert(num1 / num2)
    break
}