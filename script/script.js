const imgElement = document.querySelector("img");
const btnElement = document.querySelector("button");
const ovalElem = document.querySelector(".oval");
const bodyElem = document.querySelector("body");
const booElem = document.querySelector(".boo");

let ghost = false;
let lampOff = true;
btnElement.addEventListener("click", function () {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  console.log(randomNum);
  // if randomNum is 3 make boo appear
  if (lampOff) {
    if (ghost) booElem.classList.add("d-none");
    imgElement.src = "../img/yellow_lamp_copy.png";
    btnElement.innerText = "Spegni";
    btnElement.classList.add("bg-dark", "text-light", "border", "border-light");
    ovalElem.classList.add("light-on");
    bodyElem.classList.remove("bg-dark");
    bodyElem.classList.add("background-on");
  }
  else {
    imgElement.src = "../img/white_lamp_copy.png";
    btnElement.innerText = "Accendi";
    btnElement.classList.remove("bg-dark", "text-light", "border-light", "border");
    btnElement.classList.add("bg-warning",);
    ovalElem.classList.remove("light-on");
    bodyElem.classList.remove("background-on");
    bodyElem.classList.add("bg-dark");
    if (randomNum === 3)  {
      booElem.classList.remove("d-none");
    ghost = true;
    }
  }
  lampOff = !lampOff;
});
