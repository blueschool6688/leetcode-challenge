// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.



// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2


// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
// The input is generated such that a majority element will exist in the array.


// Follow-up: Could you solve the problem in linear time and in O(1) space?


var nums = [3, 2, 3]


function checkSameInt(numbers) {
    let averangeNumber = Math.floor(numbers.length / 2)
    let data = new Map();
    for (let value of numbers) {
        let count = (data.get(value) || 0) + 1
        data.set(value, (data.get(value) || 0) + 1)

        if (count > averangeNumber) return value;
    }
    return 0
}



console.log(checkSameInt(nums));

