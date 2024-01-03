//your code here
let elements = document.querySelectorAll("[data-ns-test]");

elements.forEach((element) => {
  let displayProperty = window.getComputedStyle(element).display;

  if (displayProperty === "block") {
    console.log("Block element");
  } else if (displayProperty === "inline") {
    console.log("Inline element");
  }
}
