const user = document.getElementById('user');
const pass = document.getElementById('pass');
const nhap = document.getElementById('nhap');

nhap.addEventListener('click', () => {
    const khopten = user.value;
    const khopmk = pass.value;

    if (khopten === `hoidanit` && khopmk === `123456789`) {
        alert(`login success`);
        window.location.href = "success.html";
    }
    else {
        alert(`login fail`);
        user.style.borderColor = "red";
        pass.style.borderColor = "red";
    }
})

