// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.



// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.


// Constraints:

// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

// emtpy array -> return []
// [max length array]


var nums = [-1, 0, 1, 2, -1, -4]

function threeSumsData(array) {
    const data = [];

    //sẽ sort trước data lớn dần
    array.sort((a, b) => a - b)

    console.log(array);


    for (let i = 0; i < array.length; i++) {
        if (i > 0 && array[i] == array[i - 1]) continue

        let left = i + 1
        let right = array.length - 1

        while (left < right) {
            console.log(array[i], array[left], array[right]);

            let sumValue = array[i] + array[left] + array[right]
            if (sumValue > 0) {
                right--
            } else if (sumValue < 0) {
                left++
            } else {
                data.push([
                    array[i], array[left], array[right]
                ])
                left++
                while (array[left] == array[left - 1] && left < right) {
                    left++
                }
            }
        }
    }
    return data;


}



console.log(threeSumsData(nums));

