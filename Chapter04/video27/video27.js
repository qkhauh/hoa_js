//soure: Gioi, kha, trung binh, yeu

const soure = 9;
switch (true) {
    case (soure >= 8 && soure <= 10):
        console.log("Giỏi");
        break;
    case (soure >= 7 && soure < 8):
        console.log("Khá");
        break;
    case (soure >= 6 && soure < 7):
        console.log("Trung bình");
        break;
    case (soure >= 5 && soure < 6):
        console.log("Yếu");
        break;
    default:
        console.log("Không hợp lệ");
        break;
} 