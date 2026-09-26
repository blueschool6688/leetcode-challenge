// Problem Description
// You are given an array of meeting time intervals where each interval is represented as intervals[i] =[start_i, end_i].Each interval indicates when a meeting starts and ends.

// Your task is to find the minimum number of conference rooms required to schedule all the meetings without any conflicts.In other words, if two or more meetings overlap in time, they need separate conference rooms.

// For example, if you have meetings[[0, 30], [5, 10], [15, 20]], the first meeting runs from time 0 to 30. The second meeting(5 to 10) overlaps with the first, so you need a second room.The third meeting(15 to 20) also overlaps with the first, but since the second meeting has already ended by time 15, you can reuse that room.Therefore, you need a minimum of 2 conference rooms.

// The solution uses a difference array technique.It tracks the changes in the number of ongoing meetings at each time point.By marking + 1 when a meeting starts and - 1 when it ends, then calculating the running sum, you can determine the maximum number of simultaneous meetings at any point in time, which equals the minimum number of rooms needed.

var intervals = [[0, 30], [5, 10], [15, 20]];

var intervalMergeData = function (intervalsData) {
    if (!intervalsData || intervalsData.length === 0) return 0;

    const result = [];

    for (let i = 0; i < intervalsData.length; i++) {
        const [start, end] = intervalsData[i]
        result.push([start, 1])
        result.push([end, -1])
    }

    result.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0]
        return a[1] - b[1]
    })

    let currentRooms = 0;
    let maxRooms = 0;
    console.log(result);

    for (let i = 0; i < result.length; i++) {
        currentRooms += result[i][1];
        console.log(currentRooms);
        maxRooms = Math.max(maxRooms, currentRooms);
    }


    return maxRooms

}

console.log(intervalMergeData(intervals));


