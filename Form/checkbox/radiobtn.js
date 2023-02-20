var gender = document.getElementsByName("gender")
var btn = document.getElementById("btn1")
console.log(gender);


btn.onclick=function(){
    for(let i=0;i<gender.length;i++){
        if(gender[i].checked==true){
            alert("goi tinh cua ban la " + gender[i].value)
        }
    }
}
