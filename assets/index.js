function onScroll(){
    if(scrollY > 0){
        header.classList.add("scroll")
    }else{
        header.classList.remove("scroll")
    }
}