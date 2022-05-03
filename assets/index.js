function onScroll(){
    if(scrollY > 0){
        header.classList.add("scroll")
    }else{
        header.classList.remove("scroll")
    }
}

function menuOpen(){
    body.classList.add("menu__expanded")
}

function menuClose(){
    body.classList.remove("menu__expanded")
}