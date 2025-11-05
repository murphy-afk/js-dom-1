const imgElement = document.querySelector("img");
const btnElement = document.querySelector("button");
const ovalElem = document.querySelector(".oval")

let lampOff = true;
btnElement.addEventListener("click", function () {
  if (lampOff) {
    imgElement.src = "../img/yellow_lamp_copy.png";
    btnElement.innerText = "Spegni";
    btnElement.classList.add("bg-dark", "text-light");
    ovalElem.classList.add("light-on");
  }
  else {
    imgElement.src = "../img/white_lamp_copy.png";
    btnElement.innerText = "Accendi";
    btnElement.classList.remove("bg-dark", "text-light");
    btnElement.classList.add("bg-warning");
    ovalElem.classList.remove("light-on")
  }
  lampOff = !lampOff;
});
