console.log("lab03");

const sp1 = {
    name: "robotraicay",
    price: 5000,
    inStock: true
}

const sp2 = {
    name: "quan",
    price: 10000,
    inStock: false,
}

const sp3 = {
    name: "ao",
    price: 15000,
    inStock: true,
}

const sp4 = {
    name: "tui",
    price: 20000,
    inStock: true
}

const sp5 = {
    name: "giay",
    price: 25000,
    inStock: false
}

const sp = [sp1, sp2, sp3, sp4, sp5];

console.log(sp);

//1. In ra ten san pham thu 1
console.log(`Ten san pham 1: ${sp[0].name}`);

//2. thay doi gia cua san pham thu 2
sp[1].price = 15000;

for (let i in sp) {
    console.log(`san pham ${i + 1}: ${sp[i]} `);
}

//3. them san pham vao danh sach
sp.push({
    name: "dienthoai",
    price: 250000,
    inStock: true
});

console.log(sp);

//4. xoa san pham cuoi cung
sp.pop();
console.log(sp);

//5. forEach() để in ra tất cả các tên sp
sp.forEach((item, index) => {
    console.log(`san pham ${index + 1}: ${item.name}`);
});

//6. dùng map() để tạo mảng mới chỉ chứa giá sản phẩm
const priceSp = sp.map((item, index) => {
    return item.sp;
});
console.log(priceSp);

//7. dùng filter() để lấy ra các sp còn hàng
const spConHang = sp.filter((item, index) => {
    return item.inStock;
})
console.log(spConHang);

//8. dùng for...in để duyệt qua thuộc tính của sản phẩm đầu tiên
for (let i in sp1) {
    console.log(`${i}: ${sp1[i]}`);
}
