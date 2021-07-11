// Given a binary array nums, return the maximum number of consecutive 1's in the array.
/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = (nums) => {
  let currentStreak = 0;
  let longestStreak = 0;
  nums.forEach((num) => {
    if (num === 1) {
      currentStreak++;
    } else if (currentStreak > longestStreak) {
      longestStreak = currentStreak;
      currentStreak = 0;
    } else {
      currentStreak = 0;
    }
  });

  if (currentStreak > longestStreak) {
    return currentStreak;
  } else {
    return longestStreak;
  }
};

const nums = [1, 1, 0, 1, 1, 1];

console.log(findMaxConsecutiveOnes(nums)); // 3
