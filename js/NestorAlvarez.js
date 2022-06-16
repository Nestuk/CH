var storedName = JSON.parse(localStorage.getItem('name'));
document.getElementById("usuario").innerHTML = storedName;

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

//productos
class Pelicula {
    constructor(id, name, imgSrc, precio) {
        this.id = id
        this.name = name
        this.imgSrc = imgSrc
        this.precio = precio
    }
}

//array productos
const Pelicula1 = new Pelicula('ID-NOM-IMG-PRE-1','The Shadow of the Cat', 'js/images/Splatt-1.jpg', 5000)
const Pelicula2 = new Pelicula('ID-NOM-IMG-PRE-2','Patrulla Fantasma', 'js/images/Splatt-2.jpg', 7400)
const Pelicula3 = new Pelicula('ID-NOM-IMG-PRE-3','Orgia de Terror', 'js/images/Splatt-3.jpg', 6900)
const Pelicula4 = new Pelicula('ID-NOM-IMG-PRE-4','Metempsyco', 'js/images/Splatt-4.jpg', 9550)
const Pelicula5 = new Pelicula('ID-NOM-IMG-PRE-5','Se me Hiela la Sangre', 'js/images/Splatt-5.jpg', 5490)
const Pelicula6 = new Pelicula('ID-NOM-IMG-PRE-6','Al Caer de la Noche', 'js/images/Splatt-6.jpg', 5660)
const Pelicula7 = new Pelicula('ID-NOM-IMG-PRE-7','La Isla del Terror', 'js/images/Splatt-7.jpg', 3500)
const Pelicula8 = new Pelicula('ID-NOM-IMG-PRE-8','Seddok', 'js/images/Splatt-8.jpg', 4040)
const Pelicula9 = new Pelicula('ID-NOM-IMG-PRE-9','La Amenaza Verde', 'js/images/Splatt-9.jpg', 6000)

const productos = [Pelicula1, Pelicula2, Pelicula3, Pelicula4, Pelicula5, Pelicula6, Pelicula7, Pelicula8, Pelicula9]

// Carrito de Compras
let carrito = []

// Productos
const cardContainer = document.querySelector('#cardContainer')

// Column
productos.forEach((producto) => {
    const column = document.createElement('div')
    column.className = 'column'
    column.innerHTML = `
        <h4 class="cardTitle">${producto.name}</h4>
        <strong class="cardPrice"> $${producto.precio} </strong><br>
        <img src="${producto.imgSrc}" class="cardImg thumbnail"><br>
        <button data-id="${producto.id}" class="buttonCTA button warning"> COMPRAR </button>
    `
    cardContainer.append(column)
})

///
const totalCarrito = () => {
    let sumaTotal = 0
    carrito.forEach((producto) => {
        sumaTotal += producto.precio
    })
    return sumaTotal
}

// Imprimir
const cartContainer = document.querySelector('#cartContainer')

const imprimirCarrito = () => {
    cartContainer.innerHTML = ''
    carrito.forEach((producto) => {
        const cartRow = document.createElement('div')
        cartRow.className = 'cartRow'
        cartRow.innerHTML = `
        <div class="cartTitle">${producto.name}</div>
        <div class="cartPrice">$${producto.precio}</div>
        `
        cartContainer.append(cartRow)
    })
} 

//  
const agregarProducto = (e) => {
    const productoElegido = e.target.getAttribute('data-id')
    const producto = productos.find((producto) => producto.id == productoElegido)
    carrito.push(producto)
    imprimirCarrito()
    localStorage.setItem('carrito', JSON.stringify(carrito))
    const elemento = document.getElementById("pp");
    document.getElementById('pp').style.display = 'block';
    elemento.innerHTML = `$${totalCarrito()}`
}

// Evento Click
const botonesCompra = document.querySelectorAll('.buttonCTA')
botonesCompra.forEach((botonCompra) => {
    botonCompra.addEventListener('click', agregarProducto)
})


// Guardado Carrito
if (localStorage.getItem('carrito')) {
    carrito = JSON.parse(localStorage.getItem('carrito'))
    imprimirCarrito()
}

// Vaciar Carrito
const vaciarCarrito = () => {
    if (localStorage.getItem('carrito')) {
        localStorage.removeItem('carrito')
    }
    carrito = []
    imprimirCarrito()
    document.getElementById('pp').style.display = 'none';
}

const vaciarCarritoBtn = document.querySelector('#vaciarCarrito')
vaciarCarritoBtn.addEventListener('click', vaciarCarrito)

