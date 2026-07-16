console.log("video 44");

const sv1 = {
    username: "hung",
    score: 9.6
}

const sv2 = {
    username: "anh",
    score: 3
}

const sv3 = {
    username: "an",
    score: 5
}

const sinhvien = [sv1, sv2, sv3];
console.log(sinhvien);

sinhvien.forEach((item, index) => {
    console.log(`sv thứ ${index + 1} là ${item.username} có điểm ${item.score}`);
})
// for ( let i = 0; i < sinhvien.length; i++){
//     console.log(sinhvien[i].username);
// }

for (const sv of sinhvien) {
    console.log(sv.username);
}


const person = {
    age: 20,
    name: "adudu",
    email: "[EMAIL_ADDRESS]"
}


for (let key in person) {
    console.log(`${key}: ${person[key]}`);
} 