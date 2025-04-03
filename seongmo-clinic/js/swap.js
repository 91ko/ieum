document.querySelectorAll(".sns a img").forEach((img) => {
  const normal = img.getAttribute("src");
  const hover = normal.replace("_white", "_color");

  img.addEventListener("mouseenter", () => {
    img.src = hover;
  });
  img.addEventListener("mouseleave", () => {
    img.src = normal;
  });
});
