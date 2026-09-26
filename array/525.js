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
// khi check là 0 thì = -1 , 1 == 1

//dùng hashmap và check dùng index + thêm cho 1

function findMaxLength(nums) {
    const data = new Map()
    let sumTotal = 0, maxLength = 0

    for (let i = 0; i < nums.length; i++) {
        sumTotal += nums[i] == 0 ? - 1 : 1

        if (sumTotal == 0) maxLength = i + 1
        else if (data.has(sumTotal)) {
            maxLength = Math.max(maxLength, i - data.get(sumTotal))
        } else {
            data.set(sumTotal, i)
        }
    }
    return maxLength


}



console.log(findMaxLength(nums));

