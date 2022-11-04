//Let's say you have an array of arbitrary size filled with random numbers (one array per task).
function getNumberFromUser(message) {
  let userValue;
  let flag = false;

  do {
    if (flag) {
      alert("You have to enter the number!");
    }
    userValue = +prompt(message);
    flag = true;
  } while (isNaN(userValue));

  return userValue;
}
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

////////////////////////////////////////////////////////////////////////////

////1. Find the minimum element of this array
//const itemsCount1 = getNumberFromUser(`Please enter the number:`);
//const array1 = [];
//for (let index = 0; index < itemsCount1; index++) {
//array1[index] = getRandomNumber(0, 100);
//console.log(array1[index]);
//}
//let minimum = array1[0];
//for (let i = 1; i < array1.length; i++) {
//if (array1[i] < minimum) {
//minimum = array1[i];
//}
//}
//console.log(`Minimum element of this array: ${minimum}`);

////////////////////////////////////////////////////////////////////////////

////2. Find the maximum element of this array
//const itemsCount2 = getNumberFromUser(`Please enter the number:`);
//const array2 = [];
//for (let index = 0; index < itemsCount2; index++) {
//array2[index] = getRandomNumber(0, 100);
//console.log(array2[index]);
//}
//let maximum = array2[0];
//for (let i = 1; i < array2.length; i++) {
//if (array2[i] > maximum) {
//maximum = array2[i];
///}
///}
//console.log(`Maximum element of this array: ${maximum}`);

////////////////////////////////////////////////////////////////////////////

//3. Find the index of the minimum element of this array
//const itemsCount3 = getNumberFromUser(`Please enter the number:`);
//const array3 = [];
//for (let index = 0; index < itemsCount3; index++) {
//array3[index] = getRandomNumber(0, 100);
//console.log(array3[index]);
//}
//let minimum = array3[0];
//for (let i = 1; i < array3.length; i++) {
//if (array3[i] < minimum) {
//minimum = array3[i];
//index=i
//}
//}
//console.log(`Minimum element of this array: ${minimum}`);
//console.log(`index of the minimum element of this arra: ${index}`);

//////////////////////////////////////////////////////////////////////////

//4. Find the index of the maximum element of this array
//const itemsCount4 = getNumberFromUser(`Please enter the number:`);
//const array4 = [];
//for (let index = 0; index < itemsCount4; index++) {
//array4[index] = getRandomNumber(0, 100);
//console.log(array4[index]);
//}
//let maximum = array4[0];
//for (let i = 1; i < array4.length; i++) {
//if (array4[i] > maximum) {
//maximum = array4[i];
//index=i
//}
//}
///console.log(`Minimum element of this array: ${maximum}`);
//console.log(`Index of the maximum element of this array: ${index}`);

/////////////////////////////////////////////////////////////////////

//5. Calculate the sum of array's elements with odd indices
//const itemsCount5 = getNumberFromUser(`Please enter the number:`);
//const array5 = [];
//for (let index = 0; index < itemsCount5; index++) {
//array5[index] = getRandomNumber(0, 100);
//console.log(array5[index]);
//}
//let sum = 0;
//for (let i = 1; i < array5.length; i+=2) {
//sum = array5[i]+sum;
//}
//console.log("sum of array's elements with odd indicessum:"+sum)

/////////////////////////////////////////////////////////////////////

//6. Reverse this array (array in reverse direction) - you have to create YOUR OWN function, which WILL NOT create any new array
//const itemsCount6 = getNumberFromUser(`Please enter the number:`);
//const array6 = [];
//for (let index = 0; index < itemsCount6; index++) {
//array6[index] = getRandomNumber(0, 100);
//console.log(array6[index]);
//}
//const reversed = array6.reverse();
//console.log("reversed:",reversed);

///////////////////////////////////////////////////////////////

////7. Count the number of odd elements in the array
//const itemsCount7 = getNumberFromUser(`Please enter the number:`);
//const array7 = [];
//for (let index = 0; index < itemsCount7; index++) {
  //array7[index] = getRandomNumber(0, 100);
  //console.log(array7[index]);
//}
//let number = 0;
//for (let i = 0; i < array7.length; i++) {
  //if (array7[i] % 2) {
    //number++;
  //}
//}
//console.log("Count the number of odd elements in the array:" + number);

///////////////////////////////////////////////////////////////////

//8. Swap the first and second half of the array, for example, for an array of 1234, the result is 3412, or for 12345 the result will be 45312.
//const itemsCount8 = getNumberFromUser(`Please enter the number:`);
//const array8 = [];
//for (let index = 0; index < itemsCount8; index++) {
  //array8[index] = getRandomNumber(0, 10001);
  //console.log(array8[index]);
//}

//for( let i = 0; i < array8.length / 2; i++){
  //let temp = array8[array8.length / 2 + i];
  //array8[array8.length / 2 + i] = array8[i];
  //array8[i] = temp;
//}
//console.log(array8)

////////////////////////////////////////////////////////////////////////////
//9. Sort the array in ascending order in one of the following ways: bubble sort, selection sort or insertion sort.
//const itemsCount9 = getNumberFromUser(`Please enter the number:`);
//const array9 = [];
//for (let index = 0; index < itemsCount9; index++) {
    //array9[index] = getRandomNumber(0, 100);
    //console.log(array9[index]);
//}

//for (let i = 0; i < array9.length - 2; i++){
  //little = i;
  //for(let j = i; j < array9.length; j++){
     // if(array9[j]< array9[little]){
      //    little = j;
 //     }
 // }
 // temp = array9[little];
   //           array9[little] = array9[i];
    //          array9[i] = temp;
//}
//console.log(array9)

////////////////////////////////////////////////////////////////
//10. Sort the array in descending order in one of the ways: bubble sort, selection sort or insertion sort.
const itemsCount10 = getNumberFromUser(`Please enter the number:`);
const array10 = [];
for (let index = 0; index < itemsCount10; index++) {
    array9[index] = getRandomNumber(0, 100);
    console.log(array10[index]);
}

for (let i = 0; i < array10.length - 2; i++){
  large = i;
  for(let j = i; j < array10.length; j++){
      if(array10[j]> array10[large]){
          large = j;
      }
  }
  temp = array10[large];
              array10[large] = array10[i];
              array10[i] = temp;
}
console.log(array10) 


