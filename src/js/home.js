const topBtn=document.querySelector(".to-top");

window.addEventListener("scroll",()=>{
    if(window.pageYOffset>100){
        topBtn.classList.add("active");
    }
    else {
        topBtn.classList.remove("active");
    }
})