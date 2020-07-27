function largestSubarraySum(array) {
  let max = 0;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      sum += array[j];
      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
}
