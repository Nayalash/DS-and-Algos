// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false


const arrA = ['a', 'b', 'c', 'x'];
const arrB = ['z', 'y', 'x'];


// NOT EFFECIENT CODE
function containsCommonItem(arrA, arrB) {
  for (let i = 0; i < arrA.length; i++) {
    for (let j = 0; j <arrB.length; j++) {
      if (arrA[i] == arrB[j]) {
        return true;
      } else {
        return false;
      }
    }
  }
}

// EFFECIENT CODE
function containsCommonItem(arrA, arrB) {

  // Convert Array to HashTable
  let map = {};

  for (let i = 0; i < arrA.length; i++) {
    if (!map[arrA[i]]) {
      const item = arrayA[i];
      map[item] = true;
    }
  }
  // Compare obj.props for Second -> First
  for (let j = 0; j < arr2.length; j++) {
    if (map[arrB[j]]) {
      return true;
    }
  }

  return false;

}

// MOST EFFECIENT

function containCommon(arrA, arrB) {
  return arrA.some(item => arr2.includes(item));
}
