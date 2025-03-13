// document.write("Hello Form Local");

window.onload = function () {
  function changebg_black(color) {
    document.body.style.backgroundColor = color;
  }

  let text = document.getElementById("txt");
  function changetxt(color) {
    if (text) text.style.color = color;
  }

  let themebutton = document.getElementById("theme-button");

  if (themebutton) {
    themebutton.addEventListener("click", () => {
      const currColor = document.body.style.backgroundColor || "white"; // Default to white

      if (currColor === "white" || currColor === "") {
        changebg_black("black");
        changetxt("white");
        themebutton.innerText = 'Light Mode'
      } else {
        changebg_black("white");
        changetxt("black");
        themebutton.innerText = "Dark Mode"
      }
    });
  }
};
