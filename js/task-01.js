const categoriesAmount = document.querySelectorAll(".item").length;

console.log(`Number of categories: ${categoriesAmount}`);

document.querySelectorAll(".item").forEach((category) => {
  console.log(`Category: ${category.querySelector("h2").textContent}`);
  console.log(`Elements: ${category.querySelectorAll("li").length}`);
});
