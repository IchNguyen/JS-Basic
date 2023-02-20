var layinput=document.getElementsByName("name[]")
var btn1=document.getElementById("btn1")
var btn2=document.getElementById("btn2")

console.log(layinput);

btn1.onclick=function(){
    for(let i=0;i<layinput.length;i++){
        layinput[i].checked=true
    }
}
btn2.onclick=function(){
    for(let i=0;i<layinput.length;i++){
        layinput[i].checked=false
    }
}