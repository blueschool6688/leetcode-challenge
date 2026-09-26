// Given two strings s and t, return true if t is an anagram of s, and false otherwise.



//     Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false



// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.


var s = "anagram", t = "nagaram"

var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    let data = new Map();



    for (let i = 0; i < s.length; i++) {
        if (!data.has(s[i])) {
            data.set(s[i], 1)
        } else {
            data.set(s[i], data.get(s[i]) + 1)
        }
    }
    for (let j = 0; j < t.length; j++) {
        if (!data.has(t[j])) {
            return false
        } else {
            data.set(t[j], data.get(t[j]) - 1)
            if (data.get(t[j]) < 0) return false
        }
    }

    return true
}

console.log(isAnagram(s, t));
