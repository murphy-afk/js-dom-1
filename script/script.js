const imgElement = document.querySelector("img");
const btnElement = document.querySelector("button");

imgElement.src = "../img/white_lamp.png";

btnElement.innerText = "Accendi";

btnElement.addEventListener("click", function() {
  imgElement.src = "../img/yellow_lamp.png";
});
