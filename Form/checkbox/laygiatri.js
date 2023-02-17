
var btn=document.getElementById('btn')
console.log(btn);

btn.onclick=function(){
    var checkbox =document.getElementsByName('hobby')
    console.log(checkbox);
    var result=""
    for (let i =0;i<checkbox.length;i++){
        if(checkbox[i].checked===true){
            result+=checkbox[i].value
        }
        
    }
    alert("So thich la " + result)
}