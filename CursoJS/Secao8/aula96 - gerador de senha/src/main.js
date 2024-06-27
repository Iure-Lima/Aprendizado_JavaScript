import controller from './models/formController';
import "./assets/css/style.css"

const btn = document.querySelector("#btn-gerador");
const result = document.querySelector(".result");


btn.addEventListener("click", () => {
  result.innerHTML = controller()
});

