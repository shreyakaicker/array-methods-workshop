
// Exercise 1
 
 /* Write a function called printPositives that takes an array and 
 uses the forEach method to print only the positive numbers. */
 
 
 function printPositives(array) {
     array.forEach(function(item) {
         if (item > 0) {
             console.log(item);
         }
     })
 }
 
 printPositives([1, -2, 3, -4, 5, -6, 7, 8]);
 

//Exercise 2

/*Similar to the previous exercise, write a function called 
getPositives that takes an array and uses the filter method 
to return a new array with only the positive numbers.*/




function getPositives(arrayNum) {

var arrayNum2 = arrayNum.filter(function(number) { 
   if(number > 0){
      return number
   }
})

console.log(arrayNum2) ;
}
getPositives([1,-1,2,-2,3])



// Exercise 2B

/*Re-do exercise 1 by first filtering the input array, and then 
printing the numbers from the filtered array. Your code will look 
something like: `return arr.filter(…).forEach(…) */


function printPositives(array) {
    
array.filter(function(num) { if(num > 0){return true;}}).forEach(function(item) {
          
             console.log(item);
         
     })
 }
 
 printPositives([1, -2, 3, -4, 5, -6, 7, 8]);