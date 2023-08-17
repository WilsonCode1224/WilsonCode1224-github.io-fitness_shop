// top-header 上所有的 h2,a 經過滑鼠移動以後變成黑色文字 , header 元素本身變成白色背景

const header = document.querySelector("header");
const topHeader = document.querySelector(".top-header");

topHeader.addEventListener("mouseenter", () => {
  topHeader.classList.add("topHeaderhover");
});

topHeader.addEventListener("mouseleave", () => {
  topHeader.classList.remove("topHeaderhover");
});

// css .topHeaderforscroll

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY; // 計算當下

  // 如果滾動位置大於0，則套用樣式；否則取消樣式
  if (scrollPosition > 0) {
    topHeader.classList.add("topHeaderforscroll");
  } else {
    topHeader.classList.remove("topHeaderforscroll");
  }
});
