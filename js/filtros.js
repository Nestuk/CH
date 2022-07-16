/////////////////////////////////// ARRAY DE MENU + FILTRO
const filtros = [ 'Slasher', 'Folk', 'Gore', 'Toys', 'Psi', 'Naturalista' ]
function crearCheck(filtro) {
  let check = document.createElement("label")
  check.innerHTML = `
  <input id="${filtro}" type="checkbox" checked/> <span>${filtro}</span>
  `
  return check
}

const lista = document.querySelector(".lista");
filtros.forEach((x) => lista.appendChild(crearCheck(x)));

// FILTRO
let checkSlasher = document.querySelector("#Slasher");
let toggleSlasher = document.querySelectorAll(".Slasher");
checkSlasher.addEventListener("click", () => {
    toggleSlasher.forEach((e) => {
            if (checkSlasher.checked == true) {
                e.parentElement.style.display = "block";
            } else {
                e.parentElement.style.display = "none";
            }
    });
});

let checkFolk = document.querySelector("#Folk");
let toggleFolk = document.querySelectorAll(".Folk");
checkFolk.addEventListener("click", () => {
    toggleFolk.forEach((e) => {
            if (checkFolk.checked == true) {
                e.parentElement.style.display = "block";
            } else {
                e.parentElement.style.display = "none";
            }
    });
});

let checkGore = document.querySelector("#Gore");
let toggleGore = document.querySelectorAll(".Gore");
checkGore.addEventListener("click", () => {
    toggleGore.forEach((e) => {
            if (checkGore.checked == true) {
                e.parentElement.style.display = "block";
            } else {
                e.parentElement.style.display = "none";
            }
    });
});

let checkToys = document.querySelector("#Toys");
let toggleToys = document.querySelectorAll(".Toys");
checkToys.addEventListener("click", () => {
    toggleToys.forEach((e) => {
            if (checkToys.checked == true) {
                e.parentElement.style.display = "block";
            } else {
                e.parentElement.style.display = "none";
            }
    });
});

let checkPsi = document.querySelector("#Psi");
let togglePsi = document.querySelectorAll(".Psi");
checkPsi.addEventListener("click", () => {
    togglePsi.forEach((e) => {
            if (checkPsi.checked == true) {
                e.parentElement.style.display = "block";
            } else {
                e.parentElement.style.display = "none";
            }
    });
});

let checkNaturalista = document.querySelector("#Naturalista");
let toggleNaturalista = document.querySelectorAll(".Naturalista");
checkNaturalista.addEventListener("click", () => {
    toggleNaturalista.forEach((e) => {
            if (checkNaturalista.checked == true) {
                e.parentElement.style.display = "block";
            } else {
                e.parentElement.style.display = "none";
            }
    });
});