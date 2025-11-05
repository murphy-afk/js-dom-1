const imgElement = document.querySelector("img");
const btnElement = document.querySelector("button");

let lampOff = true;
btnElement.addEventListener("click", function () {
  if (lampOff) {
    imgElement.src = "../img/yellow_lamp.png";
    btnElement.innerText = "Spegni";
  }
  else {
    imgElement.src = "../img/white_lamp.png";
    btnElement.innerText = "Accendi";
  }
  lampOff = !lampOff
});
