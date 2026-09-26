// Cho một mảng số nguyên nums và một số nguyên target. Hãy trả về chỉ số của hai phần tử trong nums sao cho tổng của chúng bằng target.

// Bạn có thể giả định mỗi input có đúng một đáp án, và không được dùng cùng một phần tử hai lần.
// Ví dụ
// Input:  nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]

// Giải thích: nums[0] + nums[1] == 9.
// Ràng buộc
// 2 <= len(nums) <= 10^4
// -10^9 <= nums[i] <= 10^9
// -10^9 <= target <= 10^9
// Chỉ có duy nhất một cặp đáp án.

// Clarifying questions
// Có duplicate trong mảng không? → Có thể có, nhưng đáp án vẫn duy nhất.
// Mảng đã sorted chưa? → Không. (Nếu sorted, dùng two pointers — xem LC 167.)
// Cần trả về index hay giá trị? → Index (0-based).



// var twoSums = function (nums, target) {
//     let val = new Map();
//     for (var i = 0; i < nums.length; i++) {
//         var complex = target - nums[i];
//         if (val.has(nums[i])) {
//             return [
//                 val.get(nums[i]),
//                 i
//             ]
//         }
//         val.set(complex, i);
//     }
//     return [];
// }

// console.log(twoSums(nums, 9))

var nums = [15, 7, 11, 2, 5, 1, 2, 3, 2];
var twoSums = function (numbers, target) {
    let data = new Map()
    // numbers.sort((a, b) => a - b)
    for (var i = 0; i < numbers.length; i++) {
        var dataComplex = target - numbers[i]
        if (data.has(numbers[i])) {
            return [
                data.get(numbers[i]), i
            ]
        }
        data.set(dataComplex, i)
    }
    return data
}

console.log(twoSums(nums, 9));


