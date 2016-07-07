/*Exercise 1

Write a function called printPositives that takes an array and 
uses the forEach method to print only the positive numbers.*/


var arrayNum = [1,-1,2,-2,3] ;
var arrayNum2 = [ ] ;



arrayNum.forEach(function(number) { 
   if(number > 0){
       arrayNum2.push(number)
   }
})


console.log(arrayNum2) ;

