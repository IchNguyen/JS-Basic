
function show_search_advance(){
    var show=document.getElementById("show_search_advance")
    var search=document.getElementById("search_advance")

    var a=show.innerHTML
        if(a=="Tìm kiếm nâng cao")
        {
            search.style.display="table-row"
            show.innerHTML="Bỏ tìm kiếm nâng cao"
        }else
        {
            search.style.display="none"
            show.innerHTML="Tìm kiếm nâng cao"
        }
        console.log(a);
        return false;
        
}
