const icons = document.querySelectorAll(".icon");

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    console.log(icon);
  });
});
