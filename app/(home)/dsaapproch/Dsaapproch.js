


// function mergedsortedArray(arr1, arr2){
  //   let merged = [];
  //   let i =0, j=0;

  //   while(i < arr1.length && j < arr2.length){
  //      if(i < arr1[i]){
  //       merged.push(arr1[i]);
  //       i++
  //      }else{
  //       merged.push(arr2[j]);
  //       j++
  //      }
  //   }
  //   return merged.concat(arr1.slice(i)).concat(arr2.slice(j))
  // };

  // const arr1 = [1,2,3];
  // const arr2 = [4,5,6];
  // console.log(mergedsortedArray(arr1, arr2), "sortedarray")



  // function nonfirstRepeatedchar(str){
  //   let newstring = {};

  //   for(const char of str){
  //     newstring[char] = (newstring[char] || 0) +1;
  //   }
  //   for(const char of str){
  //     if(newstring[char] === 1){
  //       return char

  //     }
  //   };
  //    return null

  // };

  // console.log(nonfirstRepeatedchar("programming"));


  // missing from array number 
  //  function missingfromArray(arr){

  //   let n = arr.length + 1;

  //   let sum = n * (n + 1)/2;

  //   let sumofarray = arr.reduce((num,acc)=>  num + acc , 0 );

  //   return sum - sumofarray ;

  //  };

  //  let arr = [1,2, 3,4,6];

  //  console.log(missingfromArray(arr));


  // reverse an array 

  // function reverseArray(arr){
  // let arr = [1, 2, 3, 4]
  // let i = 0;
  // let j = arr.length - 1;

  // while (i < j) {
  //   let temp = arr[i];

  //   arr[i] = arr[j]
  //   arr[j] = temp
  //   i++;
  //   j--;
  // };

  // console.log(arr)

  // };

  // let arr = [1,2,3,4];
  // console.log(reverseArray(arr));

  // max from arr 

  // function maxfromArray(arr){

  //   // let j=0;
  //   let max = arr[0]
  //   for(let i =0; i< arr.length; i++){
  //     if(arr[i] > max ){
  //       // arr[j] = arr[i]
  //       max = arr[i]
  //     }
  //     // j++
  //   }
  //   return max;

  // };

  // let arr = [1,2,3];
  // console.log(maxfromArray(arr));


  // sum of array 

  // function sumofArray(arr){
  //   let j=0;
  //   let sum = 0;
  //   for(let i =0; i<arr.length; i++){
  //      sum += arr[i];
  //      j++
  //   };
  //   return sum

  // };

  // let arr = [1,2,3,4];

  // console.log(sumofArray(arr));


  // let arr = [1, 2, 4];
  // let elm = 3;
  // let index = 2;

  // for (let i = arr.length - 1; i >= 0; i--) {
  //   if (i >= index) {
  //     // arr[i] = arr[i + 1]
  //     arr[i + 1] = arr[i]
  //     if (i === index) {
  //       arr[i] = elm
  //     }
  //   }
  //   // console.log(arr)
  // };

  // console.log(arr)


  // let arr = [1,2,3,4];
  // let index = 1;
  // for(let i = index; i< arr.length; i++){
  //   // if(i === index){
  //   //  arr[i] = arr[i + 1]
  //   // }

  //   arr[i] = arr[i+1]
  // };

  // arr.length = arr.length -1 

  // console.log(arr);


  // 1. Even or Odd
  // js
  // Copy
  // Edit
  // // Write a program to check whether a number is even or odd.
  // let num = 7;

  // function evenOrOdd(num){
  //     if(num % 2 === 0){
  //       console.log(Even number, ${num});

  //     }else{
  //       console.log(Odd number , ${num} );
  //     }
  // };

  // console.log(evenOrOdd(7));



  // 2. Positive, Negative, or Zero
  // js
  // Copy
  // Edit
  // Check if a number is positive, negative, or zero.
  // let number = -10;

  // function checkNumber(num) {

  //   if (num > 0) {
  //     console.log(positive number: ${num});

  //   } else if (num < 0) {
  //     console.log(Negative number: ${num});

  //   } else {
  //     console.log(Zeo number: ${num});

  //   }

  // };


  // console.log(checkNumber(-4));



//   3. Grade Calculator
// js
// Copy
// Edit
// Print grade based on score:
// 90–100: A, 80–89: B, 70–79: C, 60–69: D, <60: F
let marks = 85;




//  4. Max of Two Numbers
// js
// Copy
// Edit
// Find and print the larger of two numbers.
// let a = 10, b = 20;

// function largerofTwoNumber(num1,num2){
//  if(num1 > num2){
//   console.log(Max number: ${num1});
  
//  }else{
//   console.log(Max number: ${num2});
  
//  }
// };
// console.log(largerofTwoNumber(10,20));


// 5. Leap Year Checker
// js
// Copy
// Edit
// // Determine whether a year is a leap year or not.
// let year = 2024;


// 6. Traffic Light Simulation
// js
// Copy
// Edit
// Based on color, print action: "Red" => Stop, "Yellow" => Slow, "Green" => Go
// let signal = "Yellow";

// function basedonColor(color){
//   return color === "Red"? "Stop" : color === "Yellow"  ? "Slow" : "Go"
// };

// console.log( basedonColor("Red"));


//   7. Login System (Simple)
  // js
  // Copy
  // Edit
  // Check username and password match
  // let username = "admin";
  // let password = "12345";

  // function loginUser(username, password) {

  //   if (username === "admin" && password === "12345") {
  //     // console.log();
  //     return "User login successfull"

  //   } else {
  //     return "Credential not matched"
  //   }

  // };

  // console.log(loginUser("admin", "12345"));
  


  //   8. Three Number Maximum
  // js
  // Copy
  // Edit
//   // Find the greatest of three numbers
//   let x = 45, y = 67, z = 23;


//   function greatestofthreeNumer(num1, num2, num3) {

//     if (num1 < 0 || num2 < 0 || num3 < 0) {
//       alert("please fill correct number")
//     }

//     if (num1 > num2) {
//       console.log(Max of three: ${num1});

//     } else if (num2 > num1) {
//       console.log(Max of three: ${num2});

//     } else if (num1 > num3) {
//       console.log(Max of three: ${num1});

//     } else {
//       console.log(Max of three: ${num3});

//     }

//   };

//   console.log(greatestofthreeNumer(0, 0, 5));

  

  // 9. Day of the Week (Switch Case)
  // js
  // Copy
  // Edit
  // Print the day name based on number (1-7), use switch-case
  // let dayNum = 8;

  // switch (dayNum) {
  //   case 1:
  //     console.log("sunday")
  //     break;
  //   case 2:
  //     console.log("Monday")
  //     break;
  //   case 3:
  //     console.log("Tuesday")
  //     break;

  //   case 4:
  //     console.log("Wednesday")
  //     break;

  //   case 5:
  //     console.log("Thrusday")
  //     break;

  //   case 6:
  //     console.log("Friday")
  //     break;

  //   case 7:
  //     console.log("Saturday");
  //     break;


  //   default:

  // }


  // 10. Voting Eligibility
// js
// Copy
// Edit
// Check if person is eligible to vote (age >= 18)
// let age = 16;

// function wrotetoVote(age){

//   if(age<= 0){
//     alert("please add write aggg")
//   }
//   return age>= 18 ? "eligible to vote" : "bot eligible to vote"
// };

// console.log(wrotetoVote(-10));




// find palindrome

// // function Palindrome(data){

// //   let start = 0;
// //   let end = data.length -1;

// //   let result = true;

// //   while(end > start ){
// //   if(data[start] != data[end]){
// //     result = false
// //   };
// //   start++;
// //   end--;
// //   }
// // return result
// // };

// console.log(Palindrome("lal"));

  // quick sort 

  // function Quicksort(arr){
  //   if(arr.length <= 1) return arr;
  //   let pivot = arr[arr.length -1];
  //   let left = [];
  //   let right = [];
  //   for(let i=0; i<arr.length-1; i++){
  //       if(arr[i] < pivot){
  //       left.push(arr[i]);
  //       }else{
  //         right.push(arr[i])
  //       }
  //   }

  //   return [...Quicksort(left), pivot, ...Quicksort(right)]
  // }


  // console.log(Quicksort([1,2,3,4]));


  
  // Bubble sort 

  // function Bubblesort(arr) {
  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j = 0; j < arr.length - 1 - i; j++) {
  //       if (arr[j] > arr[j + 1]) {
  //         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
  //       }
  //     }
  //   }

  //   return arr;
  // }

  // console.log(Bubblesort([4,3,2,1]));



   // factorial of number 


//  function factorial(n){

//   if(n < 0) return undefined;

//   let result =1;
//   for(let i=2; i<=n; i++){
//      result *= i;

//   };

//   return result;

//  };

//  console.log(factorial(4));

// recursive approch
// function factorial(n){
//   if(n < 0) return undefined;

//   if(n===0 || n===1 ) return 1;

//   return factorial(n-1) * n

// };

// console.log(factorial(4));


  // check no is prime or not 
  // function Primeornot(n){

  //   if(n < 1)  return false;

  //   if(n % 2 === 0 || n % 3 === 0) return false;

  //   for(let i=5; i * i <= n; i += 6) {
  //     if(n % i === 0 || n % (i + 2) === 0) return false;

  //   };

  //   return true;

  // };

  // console.log(Primeornot(7));  

//   function Primeornot

