//SCROLL

window.addEventListener("scroll", onScroll)

onScroll()
function onScroll(){
    showNavOnScroll();
    showBackToTopButtonOnScroll()
}

function showNavOnScroll(){
    if(scrollY > 0){
        document.body.classList.add("scroll")
    }else{
        document.body.classList.remove("scroll")
    }
}

function showBackToTopButtonOnScroll(){
    if(scrollY > 250){
        document.getElementById("backToTopButton").classList.add("show")
    }else{
        document.getElementById("backToTopButton").classList.remove("show")
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
    count=1
    document.getElementById("radio1").checked = true;
    clearInterval(myTimer);
    myTimer = setInterval(function(){
        nextImage();
    }, 6000);
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
}, 15000)

function verificaClick(){
    clearInterval(myTimer);
    myTimer = setInterval(function(){
        nextImage();
    }, 15000);
}

function nextImage(){
    if((scrollY > 600) && (scrollY <1350)){
    count++;
    if(count > 6){
        count = 1;
    }  
}else if((scrollY < 250) || (scrollY >1350)){
        count=1
        document.getElementById("radio1").checked = true;
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
#sobre .video__tour,
#sobre .video__reinauguracao,
.banner,
#depoimentos header,
.depoimentos__cards .card,
#contato header,
#contato .contato__content ul,
#contato .contato__content .button,
#contato .contato__content .contato__embed,
footer .logo__svg,
footer span,
footer ul,
footer span small`);