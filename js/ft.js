document.getElementById("submitButton").addEventListener("click", function() {
    var emailInput = document.getElementById("emailInput").value;
    if (emailInput.trim() === "" || !emailInput.includes("@gmail.com")) {
        alert("Vui lòng nhập địa chỉ email hợp lệ (chứa '@gmail.com').");
    } else {
        alert("Email hợp lệ, đã gửi thành công!");
        // Thêm mã xử lý gửi dữ liệu ở đây nếu cần
    }
});
