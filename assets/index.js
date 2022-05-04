//SCROLL

function onScroll(){
    if(scrollY > 0){
        document.getElementById("header").classList.add("scroll")
    }else{
        document.getElementById("header").classList.remove("scroll")
    }
}

//MENU EXPANDIDO
function menuOpen(){
    body.classList.add("menu__expanded")
}

function menuClose(){
    body.classList.remove("menu__expanded")
}

//CAROUSEL SERVIÇOS

document.getElementById("servicos__menu").addEventListener("click",function radio1(){
    count=0;
})

document.getElementById("radio1").addEventListener("click",function radio1(){
    count=1;
})

document.getElementById("radio2").addEventListener("click",function radio2(){
    count=2;
})

document.getElementById("radio3").addEventListener("click",function radio3(){
    count=3;
})

document.getElementById("radio4").addEventListener("click",function radio4(){
    count=4;
})

document.getElementById("radio5").addEventListener("click",function radio5(){
    count=5;
})

document.getElementById("radio6").addEventListener("click",function radio6(){
    count=6;
})

let count = 1;
document.getElementById("radio1").checked = true;

var myTimer = setInterval(function(){
    nextImage();
}, 4000)

function verificaClick(){
    clearInterval(myTimer);
    myTimer = setInterval(function(){
        nextImage();
    }, 4000);
}

function nextImage(){
    count++;
    if(count > 6){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}

//Scroll reveal
ScrollReveal({
    origin:"top",
    distance:"30px",
    duration:700
}).reveal(`#header,
.principal__hero,
#servicos header,
#servicos .servicos__infos,
#sobre header,
#sobre .carousel,
.banner`);