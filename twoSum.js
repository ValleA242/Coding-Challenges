/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const seen = new Map();

    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i];

        if (seen.has(difference)) {
            return [seen.get(difference), i]
        }

        seen.set(nums[i], i);
    }
};