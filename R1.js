// Helper function to get index digit

function getDigit(num, i) {
  // divide  by the 100th place then floor it

  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

console.log(getDigit(7323, 2));

// next helpers is to find out how many didgits are in a number
// first helper function will give a count of digits numbers
function digitCount(num) {
  if (num === 0) {
    return 1;
  }
  return Math.floor(Math.log10(Math.abs(num)) + 1);
}
console.log(digitCount(4388));
// second helper funtion will use digitcount to find the largest number of digits in the array list
function maxDigit(nums) {
  let mostDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    mostDigits = Math.max(mostDigits, digitCount(nums[i]));
  }
  return mostDigits;
}
console.log(maxDigit([22, 110, 2222, 33333]));

// Radix Sort
function radixSort(numbers) {
  // figure out how many digits the largest number got
  let maxDigits = maxDigit(numbers);
  console.log(`---------> Numbers with Max digits ---> ${maxDigits} ------`);
  // loop from k = 0 , up to the largest number of digits
  for (let k = 0; k < maxDigits; k++) {
    // make a bucket for each digit
    let digitBucket = Array.from({ length: 10 }, () => []);
    // loop thru each numbers
    for (let i = 0; i < numbers.length; i++) {
      // change the existing array with values in our buckets starting with 0 and going up to 9
      // put the index digits in their corresponding buckets, by pushing them
      let digit = getDigit(numbers[i], k);
      digitBucket[digit].push(numbers[i]);

    }
    // next recolllect those digits and put them back into a new array and repeat the process
    console.log(digitBucket);
    numbers = [].concat(...digitBucket);
  }

  //return the array list at the end
  return numbers;
}
console.log(radixSort([25, 345, 546, 12, 2345, 9852]));
