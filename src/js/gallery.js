const topBtn = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    topBtn.classList.add("active");
  } else {
    topBtn.classList.remove("active");
  }
});

function resetStyle() {
  let imgArr = document.querySelectorAll(".item-1,.item-2,.item-3");
  for (let i = 0; i < imgArr.length; i++) {
    imgArr[i].style.display = "block";
  }
}

function showItem1() {
  resetStyle();
  let imgArr = document.querySelectorAll(".item-2,.item-3");
  for (let i = 0; i < imgArr.length; i++) {
    imgArr[i].style.display = "none";
  }
}

function showItem2() {
  resetStyle();
  let imgArr = document.querySelectorAll(".item-1,.item-3");
  for (let i = 0; i < imgArr.length; i++) {
    imgArr[i].style.display = "none";
  }
}

function showItem3() {
  resetStyle();
  let imgArr = document.querySelectorAll(".item-1,.item-2");
  for (let i = 0; i < imgArr.length; i++) {
    imgArr[i].style.display = "none";
  }
}
