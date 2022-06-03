// SIGN UP
/*let ingresoCero
let passCero

document.getElementById("Logeate").disabled = true;

function clicCero() {
   ingresoCero = prompt("NOMBRE:").toLowerCase()
   passCero = prompt("CLAVE:").toLowerCase()
   document.getElementById("Create").disabled = true;
   document.getElementById("Logeate").disabled = false;
}*/

// SIGN IN
/*function clicUno() {

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
}*/

/////////////////////////////////////////////

// ARRAY DE MENUS
const filtros = [ 'Slasher', 'Folk Horror', 'Gore', 'Muñecos', 'Psi', 'Naturalista' ]
const menu = [ 'VHS ', 'DVD ', 'Posters ' ]

function crearLi(name) {
  let li = document.createElement("li")
  li.textContent = name
  return li
}

const filter = document.querySelector(".lista");
filtros.forEach((x) => filter.appendChild(crearLi(x)));

const menus = document.querySelector(".menues");
menu.forEach((x) => menus.appendChild(crearLi(x)));

/////////////////////////////////////////////

// CARRITO  
const carrito = []

//clase
class Pelicula {
    constructor(marca, imgSrc, precio) {
        this.marca = marca
        this.imgSrc = imgSrc
        this.precio = precio
    }
}

//array productos
const Pelicula1 = new Pelicula('The Shadow of the Cat', 'js/images/Splatt-1.jpg', 5)
const Pelicula2 = new Pelicula('Patrulla Fantasma', 'js/images/Splatt-2.jpg', 4)
const Pelicula3 = new Pelicula('Orgia de Terror', 'js/images/Splatt-3.jpg', 6)

const productos = [Pelicula1, Pelicula2, Pelicula3]
const cardContainer = document.getElementById('cardContainer')

productos.forEach((producto) => {
    const card = document.createElement('div')
    card.className = 'centered card'
    card.innerHTML = `
            <h3 class="cardTitle"> ${producto.marca} </h3>
            <img src="${producto.imgSrc}" class="cardImg" width="100px"><br>
            <span class="cardPrice"> $${producto.precio} </span>
            <button class="buttonCTA" data-id="${producto.precio}"> Agregar al Carrito </button>
        `
    cardContainer.append(card)
})

const Agregar = (e) => {
    const productoElegido = e.target.getAttribute('data-id')
    const producto = productos.find((producto) => producto.marca == productoElegido )
    carrito.push(producto)
}

const botonesCompra = document.querySelectorAll ('.buttonCTA')

///
const totalCarrito = () => {
    let sumaTotal = 0
    carrito.forEach((producto) => {
        sumaTotal += producto.precio
    })
    return sumaTotal
}

const agregarProducto = () => {
    let paragraph = document.getElementById("p");
    paragraph.textContent += totalCarrito();
}
///


botonesCompra.forEach((botonCompra) => {
    botonCompra.addEventListener('click', agregarProducto)
})



