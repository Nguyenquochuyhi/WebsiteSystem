$(document).ready(function () {
    $("#btndangky").click(function () {
        $("#myModal").modal();
        $("#myModalDangNhap").modal("hide");
    });
    $("#btndangnhap").click(function () {
        $("#myModalDangNhap").modal();
    });
    //Kiểm tra đăng kí
    function kiemTraTen() {
        let hoten = $("#Name").val()
        let regexHoten = /^[A-ZÁÀẢÃẠÂẤẦẨẪẬĂẮẰẲẴẶÓÒỎÕỌƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÔỐỔỖỘĐ][a-zA-Záàảãạâấầẩẫậăắằẳẵặóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựéèẻẽẹêếềểễệíìỉĩịđ]+((\s[A-ZÁÀẢÃẠÂẤẦẨẪẬĂẮẰẲẴẶÓÒỎÕỌƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÔỐỔỖỘĐ][a-zA-Záàảãạâấầẩẫậăắằẳẵặóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựéèẻẽẹêếềểễệíìỉĩịđ]+))*$/
        if (hoten.trim() == "") {
            $("#tbName").html("Bắt buộc nhập");
            return false;
        }
        if (!regexHoten.test(hoten)) {
            $("#tbName").html("Kí tự đầu viết hoa không có số");
            return false;
        }
        $("#tbName").html(" ");
        return true;
    }
    $("#Name").blur(kiemTraTen);

    function KTMail() {
        let mail = $("#Em").val()
        var regexmail = /^([a-zA-Z0-9_])+\@(([a-zA-Z])+\.)com$/;
        if (mail == "") {
            $("#tbEm").html("*Bắt buộc");
            return false;
        }
        if (!regexmail.test(mail)) {
            $("#tbEm").html("Ví dụ abc@gmail.com");
            return false;
        }
        $("#tbEm").html(" ");
        return true;
    }
    $("#Em").blur(KTMail);

    function kiemTraSDT() {
        let sodt = $('#SDT').val();
        let regexSdt = /^0[345789]\d{8}/;

        if (sodt.trim() != '' && !regexSdt.test(sodt)) {
            $('#errorSDT').html('Số điện thoại gồm 10 số')
            return false
        }

        $('#errorSDT').html('')
        return true
    }
    $("#SDT").blur(kiemTraSDT);


    function kiemTraMK() {
        let mauKT = /[a-zA-Z0-9]{6,}/;
        if ($("#MK").val() == "") {
            $("#tbMK").html("Bắt buộc");
            return false;
        }
        if (!mauKT.test($("#MK").val())) {
            $("#tbMK").html("Nhập ít nhất 6 kí tự không bao gồm kí tự đặc biệt");
            return false;
        }
        $("#tbMK").html(" ");
        return true;
    }
    $("#MK").blur(kiemTraMK);

    function kiemTraNLMK() {

        if ($("#NLMK").val() == "") {
            $("#tbNLMK").html("Bắt buộc");
            return false;
        }
        if ($("#NLMK").val() != $("#MK").val()) {

            $("#tbNLMK").html("Mật khẩu không khớp");
            return false;
        }
        $("#tbNLMK").html(" ");
        return true;
    }
    $("#NLMK").blur(kiemTraNLMK);


    var i = 1;
    $("#Save").click(function () {
        if (kiemTraSDT() == true && kiemTraMK() == true && kiemTraNLMK() == true && KTMail() == true && kiemTraTen() == true) {

            let gt = []
            if ($("#radnam").is(":checked"))
                gt.push('Nam')
            if ($("#radnu").is(":checked"))
                gt.push('Nữ')
            if (!($("#radnu").is(":checked")) && !($("#radnam").is(":checked")))
                gt.push('')

            row = "<tr>";
            row += "<th>" + (i++) + "</th>";
            row += "<th>" + $('#Name').val() + "</th>";
            row += "<th>" + $("#Em").val() + "</th>";
            row += "<th>" + $("#NS").val() + "</th>";
            row += "<th>" + gt + "</th>";
            row += "<th>" + $("#DC").val() + "</th>";
            row += "<th>" + $("#SDT").val() + "</th>";
            row += "<th>" + $("#MK").val() + "</th>";
            row += "</tr>";
            $("#danhSach").append(row);
            $("#myModal").modal("hide");

        }
    })
     //kiểm tra đăng nhập
     function kiemTraemailDN() {
        let mailDN = $("#emailDN").val()
        let regexmailDN = /[a-z0-9]+(@gmail.com)$/;
        if (mailDN == "") {
            $("#tbemailDN").html("*Bắt buộc");
            return false;
        }
        if (!regexmailDN.test(mailDN)) {
            $("#tbemailDN").html("Ví dụ abc@gmail.com");
            return false;
        }
        $("#tbemailDN").html("*");
        return true;
    }
    $("#emailDN").blur(kiemTraemailDN);

    function kiemTraMKDN(){
        let mauKT=/[a-zA-Z0-9]{6,}/;
        if($("#MKDN").val()==""){
            $("#tbMKDN").html("*Bắt buộc");
            return false;
        }
        if(!mauKT.test($("#MKDN").val())){
            $("#tbMKDN").html("Nhập từ 6 ký tự, không kí tự đặc biệt");
            return false;
        }
        $("#tbMKDN").html("*");
            return true;
    }
    $("#MKDN").blur(kiemTraMKDN);

    $("#btndangnhapp").click(function(){
        if(kiemTraemailDN()==true && kiemTraMKDN()==true){
            $("#myModalDangNhap").modal("hide")
        }
        else{
            alert("Email hoặc mật khẩu sai")
        }
    });
});