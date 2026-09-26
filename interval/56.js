// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.



// Example 1:
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
// Example 3:

// Input: intervals = [[4,7],[1,4]]
// Output: [[1,7]]
// Explanation: Intervals [1,4] and [4,7] are considered overlapping.
var intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]

var mergeInterval = function (numbers) {
    numbers.sort((a, b) => a[0] - b[0])

    const result = [numbers[0]]

    for (let i = 1; i < numbers.length; i++) {
        let currentData = numbers[i]
        const lastData = result[result.length - 1]
        if (currentData[0] < lastData[1]) {
            lastData[1] = Math.max(currentData[1], lastData[1])
        } else {
            result.push(currentData)
        }
    }

    console.log(result);

    return result;

}

mergeInterval(intervals)










// var mergeInterval = function (nums) {
//     if (nums.length <= 1) return nums;
//     nums.sort((a, b) => a[0] - b[0]);

//     const result = [nums[0]]

//     for (let i = 0; i < nums.length; i++) {
//         let val = nums[i]
//         const last = result[result.length - 1]

//         if (val[0] <= last[1]) {
//             last[1] = Math.max(val[1], last[1])

//         } else {
//             result.push(val)
//         }

//     }
//     return result

// }
// mergeInterval(intervals)
// console.log(mergeInterval(intervals));
