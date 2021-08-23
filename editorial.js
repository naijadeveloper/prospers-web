const Main = document.querySelector("main");
const OpenClose = document.querySelector("span.open-close");
const Nav = document.querySelector("header nav");

//create img elements and append to the main
let newElement;
for(let i = 1; i <= 52; i++) {
  newElement = document.createElement("img");
  newElement.setAttribute("src", `imgs/Editorials/${i}.jpg`);
  Main.appendChild(newElement);
}

//For mobile: To open / close the menu bar
OpenClose.addEventListener("click", function (e) {
  if(e.target.className == "open") {
    //
    e.target.style.display = "none";
    this.querySelector(".close").style.display = "inline-block";
    Nav.style.display = "flex";
    //
  }else {
    //
    e.target.style.display = "none";
    this.querySelector(".open").style.display = "inline-block";
    Nav.style.display = "none";
    //
  }
});
