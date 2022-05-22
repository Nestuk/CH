// PASO 1

function clicUno() {
   // NOMBRE
   let ingreso = prompt("NOMBRE:\n ").toLowerCase()
   while (ingreso != "cc") {
       alert("ERROR: " + ingreso + " es incorrecto")
       let nuevoIngreso = prompt("NOMBRE:\n").toLowerCase()
       while (nuevoIngreso === ingreso) {
           alert("ERROR: ya habías respondido " + ingreso + " y es incorrecto")
           nuevoIngreso = prompt("NOMBRE:\n").toLowerCase()
       }
       ingreso = nuevoIngreso
   }
   // CLAVE
   let pass = prompt("CLAVE:\n ").toLowerCase()
   while (pass != "hh") {
       alert("ERROR: " + pass + " es incorrecto")
       let nuevoPass = prompt("CLAVE:\n").toLowerCase()
       while (nuevoPass === pass) {
           alert("ERROR: ya habías respondido " + pass + " y es incorrecto")
           nuevoPass = prompt("CLAVE:\n").toLowerCase()
       }
       pass = nuevoPass
   }
   document.getElementById("pasoUno").style.display = "none";
   document.getElementById("productos").style.display = "initial";
}

// FIN

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


let galeria = document.getElementById('galeria');
let files = "jpg";
let pageName = "Splatt";
for (var i = 0; i < 8; i++){
    var src = "js/images/" + pageName + "-" + (i+1) + "." + files;
    var img = new Image(); 
    img.src = src;
    galeria.appendChild(img);
}

