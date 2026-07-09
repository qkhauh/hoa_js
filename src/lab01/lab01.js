const fullname = "Roronoa Zoro";
const yearOfBirth = 2005;
const isStudent = true;

const currentYear = new Date().getFullYear();

const age = currentYear - yearOfBirth;

console.log(`
    tên ${fullname} 
    tuổi ${age} 
    là học sinh ${isStudent}
    năm sinh ${yearOfBirth} 
    năm hiện tại ${currentYear}
    `);
