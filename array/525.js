// Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.



// Example 1:

// Input: nums = [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
// Example 2:

// Input: nums = [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
// Example 3:

// Input: nums = [0,1,1,1,1,1,0,0,0]
// Output: 6
// Explanation: [1,1,1,0,0,0] is the longest contiguous subarray with equal number of 0 and 1.


// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.


var nums = [0, 1, 1, 1, 1, 1, 0, 0, 0]
//-1 + 1

//2.
//[1,1,1,0,0,0]
//6

function findMaxLength(nums) {
    let mp = new Map();
    let sum = 0;
    let subArrayLength = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i] === 0 ? -1 : 1;
        if (sum === 0) {
            subArrayLength = i + 1;
            console.log('sub', subArrayLength);

        } else if (mp.has(sum)) {
            subArrayLength = Math.max(subArrayLength, i - mp.get(sum));
            console.log('hash', subArrayLength);
            console.log('key , value', i, mp.get(sum), i - mp.get(sum));
        } else {
            mp.set(sum, i);
        }
    }
    return subArrayLength;

}



console.log(findMaxLength(nums));

