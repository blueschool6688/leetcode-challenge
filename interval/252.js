// Đề bài: LeetCode 252 - Meeting Rooms (Phòng họp)
// Cho một mảng các khoảng thời gian cuộc họp `intervals`, trong đó intervals[i] = [start_i, end_i].
// Hãy xác định xem một người có thể tham gia TẤT CẢ các cuộc họp hay không.
//
// Hai cuộc họp bị trùng (overlap) nếu cuộc họp sau bắt đầu trước khi cuộc họp trước kết thúc.
// Chú ý: Nếu cuộc họp A kết thúc đúng lúc cuộc họp B bắt đầu (ví dụ [0, 8] và [8, 10]), thì KHÔNG coi là trùng lịch (vẫn tham gia được).
//
// Ví dụ 1:
// Input: intervals = [[0, 30], [5, 10], [15, 20]]
// Output: false
// Giải thích: Khoảng [0, 30] trùng lặp với [5, 10] và [15, 20], nên không thể tham gia tất cả.
//
// Ví dụ 2:
// Input: intervals = [[7, 10], [2, 4]]
// Output: true
// Giải thích: [2, 4] và [7, 10] không bị trùng giờ.
//
// Ràng buộc:
// 0 <= intervals.length <= 10^4
// intervals[i].length == 2
// 0 <= start_i < end_i <= 10^6
var interval = [[0, 2], [5, 10], [15, 20]]

var reasonDataCheck = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])

    for (let i = 1; i < intervals.length; i++) {
        lo
        if (intervals[i][0] < intervals[i - 1][1]) return false
    }

    return true;
}


console.log(reasonDataCheck(interval));















// var canAttendMeetings = function (intervals) {

//     intervals.sort((a, b) => a[0] - b[0]);

//     // Bắt đầu từ i = 1 vì khi so sánh với phần tử trước đó (i - 1),
//     // nếu bắt đầu từ i = 0 thì intervals[-1] sẽ là undefined!
//     for (let i = 1; i < intervals.length; i++) {
//         console.log(intervals[i][0], intervals[i - 1][1]);
//         if (intervals[i][0] < intervals[i - 1][1]) {
//             return false;
//         }
//     }

//     return true; // Không có cuộc họp nào bị trùng lịch
// };


// console.log(canAttendMeetings(interval));


// Test cases
// console.log(canAttendMeetings([[0, 30], [5, 10], [15, 20]])); // Expected: false
// console.log(canAttendMeetings([[7, 10], [2, 4]]));             // Expected: true
// console.log(canAttendMeetings([[2, 4], [4, 6]]));              // Expected: true (kết thúc lúc 4, bắt đầu lúc 4 -> không trùng)
