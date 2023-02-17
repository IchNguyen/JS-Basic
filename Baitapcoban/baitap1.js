//hien thong bao khi click

// var btn=document.getElementById("click")
// console.log(btn);

// btn.onclick= function(){
//     alert("da click")
// }



//thay doi noi dung khi click

// var btn1=document.getElementById("btn1")
// var btn2=document.getElementById("btn2")
// var content=document.getElementById("cnt")

// console.log(content);

// btn1.onclick=function(){
//     content.innerHTML="noi dung 1"
// }
// btn2.onclick=function(){
//     content.innerHTML="noi dung 2"
// }


//doi mau backgroud
// var btn1=document.getElementById("btn1")
// var btn2=document.getElementById("btn2")
// var content=document.getElementById("content")

// btn1.onclick=function(){
//     content.style.background="black";
// }
// btn2.onclick=function(){
//     content.style.background = "pink";
// }




//doi hinh anh
var img=document.getElementById("img")
var btn1=document.getElementById("btn1")
var btn2=document.getElementById("btn2")

var hinh1="https://cdn.baogiaothong.vn/upload/images/2023-1/article_img/2023-01-29/img-bgt-2021-blackpink-1674981448-width1000height563.jpeg"
var hinh2="https://cdn.baogiaothong.vn/upload/images/2023-1/article_img/2023-01-29/img-bgt-2021-blackpink2-1674981417-width600height399.jpeg"

btn1.onclick=function(){
    img.src=hinh1
}
btn2.onclick=function(){
    img.src=hinh2
}

let sevialValue=sevial.options[sevial.selectIndex].text