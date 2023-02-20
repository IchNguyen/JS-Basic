function genderChanged(obj){
    var mess= document.getElementById("show_message")
    console.log(mess);
    var value=obj.value
    if(value===""){
        mess.innerHTML="Vui long chon gioi tinh"
    }else if(value==="nam"){
        mess.innerHTML="Ban da chon gioi tinh Nam"
    }else{
        mess.innerHTML="Ban da chon gioi tinh Nu"
    }
}