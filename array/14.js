// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".



// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


// Constraints:

// length của array
//length của value array
// các string có cần check lowercase hay không

var strs = ["flower", "flow", "flight"]

var longestCommonPrefix = function (strs) {
    if (strs.length == 0) return ''
    // lấy phần tử đầu
    let firstData = strs[0]

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(firstData) !== 0) { // dùng indesof check position của string val
            firstData = firstData.slice(0, -1)
            if (!firstData) return ''
        }
    }
    return firstData
};


console.log(longestCommonPrefix(strs));
