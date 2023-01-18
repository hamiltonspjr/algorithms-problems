// minha solução
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let y = i + 1; y < nums.length; i++) {
      let aux = target - nums[i];
      if (nums[y] === aux) {
        return [i, y];
      }
    }
  }
};

// pesquisando sobre esse problema, encontrei essa solução que possui um código mais eficiênte.
function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [i, map.get(complement)];
    }
    map.set(nums[i], i);
  }
}
