const topBtn=document.querySelector(".to-top");

window.addEventListener("scroll",()=>{
    if(window.pageYOffset>100){
        topBtn.classList.add("active");
    }
    else {
        topBtn.classList.remove("active");
    }
})





function validateForm() {
    let x = document.forms["contactForm"]["floatingName"].value;
    let y = document.forms["contactForm"]["floatingEmail"].value;
    if (x == "" || y == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill the required fields',       
          });
      return false;
    }
  
  }