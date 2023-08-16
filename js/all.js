// top-header 上所有的 h2,a 經過滑鼠移動以後變成黑色文字 , header 元素本身變成白色背景

const topHeader = document.querySelector(".top-header");
const childElements = topHeader.querySelector("a");

topHeader.addEventListener("mouseenter", () => {
  topHeader.classList.add("topHeaderhover");
});

topHeader.addEventListener("mouseleave", () => {
  topHeader.classList.remove("topHeaderhover");
});
