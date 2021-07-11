/**
 * @param {number[]} nums
 * @return {number}
 */
// Given an array nums of integers, return how many of them contain an even number of digits.
const findNumbers = function (nums) {
  let numEven = 0;
  nums.forEach((num) => {
    const numOfZeroes = Math.floor(Math.log10(num));
    console.log(numOfZeroes);
    if ((numOfZeroes + 1) % 2 === 0) {
      numEven++;
    }
  });
  return numEven;
};

// const nums = [555, 901, 482, 1771];
const nums = [252];
console.log(findNumbers(nums)); // 1
