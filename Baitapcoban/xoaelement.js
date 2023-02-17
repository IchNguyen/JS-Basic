window.onload=function(){
    var btn = document.getElementsByTagName("input")
    console.log(btn);
    //lay tung phan tu trong mang
    for (let i=0;i<btn.length;i++){
        btn[i].onclick=function(){
            //lay the tr 
            //parentElement trả về thằng cha chứa nó.nếu 2 lần parentElement thì trả về ông nội
            var parent = this.parentElement.parentElement;
            parent.remove()
        }
    }
}