// Lấy giá trị của một input
function getValue(id){
    return document.getElementById(id).value.trim();
}
 
// Hiển thị lỗi
function showError(key, mess){
    document.getElementById(key + '_error').innerHTML = mess;
}

function validate(){
    var flag= true

    //username
    var username=getValue('username')
    if(username=='' || username.length<5 || !/^[a-zA-Z0-9]+$/.test(username)){
        flag = false
        showError("username","kiem tra lai username")
    }
    //password
    var password = getValue("password")
    if(password=="" || password.length<=8){
        flag=false
        showError("password","kiem tra lai pass")
    }
    //repassword
    var repassword=getValue("repassword")
    if(repassword != password || repassword==""){
        flag=false
        showError("repassword","repassword khong dung")
    }
    //phone
    var phone=getValue("phone")
    if(phone.length!=10 || !/^[0-9]{10}$/.test(phone)|| phone==""){
        flag=false
        showError("phone","phone khong hop le")
    }
    //mail
    var email=getValue('email')
    console.log(email);
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!mailformat.test(email) || mail==""){
        flag=false
        showError("email","mail khong hop le")
    }
    return flag
}