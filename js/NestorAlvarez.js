// SIGN UP

let ingresoCero
let passCero

function clicCero() {
   ingresoCero = prompt("NOMBRE:").toLowerCase()
   passCero = prompt("CLAVE:").toLowerCase()
}

// SIGN IN

function clicUno() {
   ingreso = prompt("NOMBRE:\n ").toLowerCase()
   while (ingreso != ingresoCero) {
       alert("ERROR: " + ingreso + " es incorrecto")
       nuevoIngreso = prompt("NOMBRE:\n").toLowerCase()
       while (nuevoIngreso === ingreso) {
           alert("ERROR: ya habías respondido " + ingreso + " y es incorrecto")
           nuevoIngreso = prompt("NOMBRE:\n").toLowerCase()
       }
       ingreso = nuevoIngreso
   }
   pass = prompt("CLAVE:\n ").toLowerCase()
   while (pass != passCero) {
       alert("ERROR: " + pass + " es incorrecto")
       nuevoPass = prompt("CLAVE:\n").toLowerCase()
       while (nuevoPass === pass) {
           alert("ERROR: ya habías respondido " + pass + " y es incorrecto")
           nuevoPass = prompt("CLAVE:\n").toLowerCase()
       }
       pass = nuevoPass
   }
   document.getElementById("pasoUno").style.display = "none";
   document.getElementById("productos").style.display = "initial";
}

function clicCuatro() {
    let resultado = 0;
    function sumar(primerNumero, segundoNumero) {
        resultado = primerNumero + segundoNumero
    }
    function mostrar(mensaje) {
        let paragraph = document.getElementById("p");
        paragraph.textContent += resultado + "$";
    }
    sumar(6, 3);
    mostrar(resultado);
}
// FIN SIGN UP

let galeria = document.getElementById('galeria');
let files = "jpg";
let pageName = "Splatt";
for (var i = 0; i < 8; i++){
    var src = "js/images/" + pageName + "-" + (i+1) + "." + files;
    var img = new Image(); 
    img.src = src;
    galeria.appendChild(img);
}

