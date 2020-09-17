/*You will probably not have to take destructuring to such a level as this but this is for you to really wrap your brains around the mechanics.
EVERY EXERCISE SHOULD USE DESTRUCTURING*/


 let arr = [
   ['name', 'jon'],
   ['age', 20],
   ['eyes', 'blue'],
   ];
 //Create an object out of the arr above then using destructuring, declare variables using the object keys.
 const [[k1,v1],[k2,v2],[k3,v3]] = arr;
 const person = {[k1]:v1,[k2]:v2,[k3]:v3};
 person

 

let nums = [1,2,3,4,5,6]
  //a. Set 3 variables names: the third index should be called 'three', the fourth item 'four' and the rest of the items thereafter 'rest'
  //b. Swap the third and fourth item variable values
  let{2:three,3:four,...rest} = nums;
  

  [three,four] = [four,three];
  

  
  

  
  
  
