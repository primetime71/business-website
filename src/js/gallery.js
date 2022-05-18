const topBtn=document.querySelector(".to-top");

window.addEventListener("scroll",()=>{
    if(window.pageYOffset>100){
        topBtn.classList.add("active");
    }
    else {
        topBtn.classList.remove("active");
    }
})


function setItem1()
{
 let kitchen= document.querySelectorAll(".item-1");
 for (let i = 0; i < kitchen.length; i++) {
    kitchen[i].style.display = "none";
}
}