// انیمیشن تایپ برای بخش درباره من
document.addEventListener("DOMContentLoaded", function() {
  const text = "سلام طراح سایت هستم و این برای گیت هاب من است";
  const target = document.getElementById("typewriter");
  let index = 0;

  function type() {
    if (index < text.length) {
      target.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }

  type();
});

