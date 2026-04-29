let count = 0;
function addToCart() {
  count++;
  document.getElementById("count").innerText = count;
}
function filterColor(color) {
  let items = document.querySelectorAll(".product");
  items.forEach(item => {
    item.style.display = (color === "all" || item.dataset.color === color) ? "block" : "none";
  });
}
function filterSize(size) {
  let items = document.querySelectorAll(".product");
  items.forEach(item => {
    item.style.display = (size === "all" || item.dataset.size === size) ? "block" : "none";
  });
}
