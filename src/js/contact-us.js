const topBtn=document.querySelector(".to-top");

window.addEventListener("scroll",()=>{
    if(window.pageYOffset>100){
        topBtn.classList.add("active");
    }
    else {
        topBtn.classList.remove("active");
    }
})


function response(){
    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
}

function validateForm() {
    let x = document.forms["contactForm"]["floatingName"].value;
    let y = document.forms["contactForm"]["floatingEmail"].value;
    if (x == "" || y == "") {
      alert("Please fill the required details");
      return false;
    }
    else {
        response();
    }
  }