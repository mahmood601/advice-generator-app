let advId = document.querySelector(".id"),
    advice = document.querySelector(".advice"), 
    button = document.querySelector(".cube");

window.onload = () => fetchData();

button.addEventListener("click", () => {
  fetchData();
})

function fetchData() {
  fetch("https://api.adviceslip.com/advice")
  .then((data) => data.json())
  .then((edata) => {
      advId.innerHTML = "Advice # ";
      advId.appendChild(document.createTextNode(edata.slip.id));
      advice.innerHTML = " ";
     advice.appendChild(document.createTextNode(`"${edata.slip.advice}"`))
    });
}
