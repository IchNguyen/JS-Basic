var yourName = document.querySelector('#name');
var mail = document.querySelector('#mail');
var zipcode = document.querySelector('#zipcode');
var servial = document.querySelector('#servialChoose');
var btn = document.querySelector('#submit');
var label = document.querySelector('#labeltb');
console.log(label);

function check(){
    if(yourName.value == '' || yourName.value == null){
        // alert('Please enter a name');
        label.innerHTML = 'Please enter a name'
        
        // yourName.focus();
        // return false;
    }
    if(mail.value == '' || mail.value == null){
        // alert('Please enter a mail');
        label.innerHTML = 'Please enter a mail'
       
    }
    if(zipcode.value == '' || zipcode.value == null){
        // alert('Please enter a zipcode');
        label.innerHTML = 'Please enter a zip code'
        
    }
    if(servial.value == -1){
        // alert('Please choose a service');
        label.innerHTML = 'Please enter a Choose'
      
    }
    else {
        
        label.innerHTML = 'submit thanh cong'
    }
    return label;
}
function checkMail(){
    const mailValue = mail.value;
    var aspos = mailValue.indexOf("@");
    var dotpos = mailValue.lastIndexOf(".");
    //‘@’ không được là ký tự đầu tiên của địa chỉ email và dấu chấm cuối cùng ít nhất phải là một ký tự sau dấu ‘@’.
    if(aspos < 1 || (dotpos - aspos < 2)){
        alert('Please enter correct email ID')
        mail.focus();
        return false;
    }
    return true;
}
function checkPhone(){
    var enter = /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/;
    if(enter == false ){
        alert('Please enter valid phone');
    }
}

btn.onclick= function(){
    check();
    // label.innerHTML = check();
    checkMail();
    checkPhone();
} ;