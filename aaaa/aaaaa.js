document.addEventListener("DOMContentLoaded", function() {
  const fills = document.querySelectorAll(".skill-fill");
  fills.forEach(fill => {
    const width = fill.style.width;
    fill.style.width = "0";
    setTimeout(() => {
      fill.style.width = width;
    }, 500); 
  });
});
