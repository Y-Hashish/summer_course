document.addEventListener("DOMContentLoaded", c);



function c () {
  const colorPicker = document.getElementById("colorPicker");
  const sections = document.querySelectorAll(".color-change");

  const storedColor = localStorage.getItem("sectionColor");
  if (storedColor) {
      sections.forEach(section => {
          section.style.backgroundColor = storedColor;
      });
      colorPicker.value = storedColor;
  }

  colorPicker.addEventListener("input", (e) => {
      const newColor = e.target.value;
      sections.forEach(section => {
          section.style.backgroundColor = newColor;
      });
      localStorage.setItem("sectionColor", newColor);
  });
}