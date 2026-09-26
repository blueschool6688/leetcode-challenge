// 1. Bản chất đề bài: Thiết kế một Data Structure
// Khác với LC 1 (cho mảng cố định) hay LC 167 (cho mảng đã sắp xếp), ở bài này dữ liệu đến liên tục theo dạng luồng (data stream).

// Bạn cần thiết kế một Class/Object tên là TwoSum hỗ trợ 2 thao tác:

// add(number): Thêm một số nguyên vào hệ thống. Số này có thể thêm nhiều lần (ví dụ: thêm số 3 nhiều lần).
// find(value): Trả về true nếu tồn tại bất kỳ cặp 2 số nào trong hệ thống có tổng bằng value, ngược lại trả về false.
// 2. Điểm bẫy (Edge Case) mấu chốt nhất bài toán
// Khi kiểm tra một số x với phần bù complement = value - x:

// Trường hợp 1: $x \neq \text{complement}$ (2 số khác nhau)

// Ví dụ: value = 8, $x = 3 \rightarrow \text{complement} = 5$.
// Chỉ cần trong hệ thống có tồn tại cả 3 và 5 là hợp lệ $\rightarrow$ Trả về true.
// Trường hợp 2: $x == \text{complement}$ (Cần 2 số giống nhau) ⚠️

// Ví dụ: value = 6, $x = 3 \rightarrow \text{complement} = 3$ ($3 + 3 = 6$).
// Bạn không được dùng 1 phần tử 2 lần. Vì vậy:
// Nếu số 3 mới chỉ được add 1 lần $\rightarrow$ Không hợp lệ (false).
// Nếu số 3 đã được add từ 2 lần trở lên $\rightarrow$ Hợp lệ (true).
// $\rightarrow$ Kết luận: Cấu trúc dữ liệu của bạn không thể chỉ lưu các số duy nhất (như Set), mà phải lưu kèm số lần xuất hiện (tần số / count) của từng số (dùng Map hoặc Object).



var twoSum = function () {
    this.map = new Map();
}


twoSum.prototype.find = function (target) {
    let val = [];
    for (let [num, count] of this.map.entries()) {
        let complex = target - num;
        if (count > 1 && complex === num
            && complex + num === target
        ) {
            return true
        }
        if (val.includes(complex)) {
            return true
        }
        val.push(num)
    }
    return false;
}

twoSum.prototype.add = function (number) {
    let count = this.map.get(number) || 0; // Lấy số lần đã có (nếu chưa có thì là 0)
    this.map.set(number, count + 1);
}

twoSum.prototype.check = function () {
    console.log(this.map.entries());

}

let data = new twoSum()

data.add(3);
data.add(3);

console.log(data.find(6))



data.check();

