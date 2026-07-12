function tinhtrungbinh(toan, van, anh) {
    return (toan + van + anh) / 3;
}

function xeploai(diemTB) {
    switch (true) {
        case (diemTB >= 9 && diemTB <= 10):
            return 'xuất sắc';
        case (diemTB >= 8 && diemTB < 9):
            return 'giỏi';
        case (diemTB >= 7 && diemTB < 8):
            return 'Khá';
        case (diemTB >= 6 && diemTB < 7):
            return 'trung bình khá';
        case (diemTB >= 5 && diemTB < 6):
            return 'trung bình';
        case (diemTB >= 0 && diemTB < 5):
            return 'yếu';
        default:
            return 'không hợp lệ';
    }
}

const toan = 8;
const van = 7;
const anh = 9;

const diemTB = tinhtrungbinh(toan, van, anh);
const xeploai = xeploai(diemTB);
console.log(diemTB);
console.log(xeploai);