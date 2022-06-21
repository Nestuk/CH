var storedName = JSON.parse(localStorage.getItem('name'));
document.getElementById("usuario").innerHTML = storedName;

///////////////////////////////////
//productos
class Pelicula {
    constructor(id, filtro, name, imgSrc, precio) {
        this.id = id
        this.filtro = filtro
        this.name = name
        this.imgSrc = imgSrc
        this.precio = precio
    }
}
//array productos
const Pelicula1 = new Pelicula('ID-NOM-IMG-PRE-1','Slasher','The Shadow of the Cat', 'js/images/Splatt-1.jpg', 5000)
const Pelicula2 = new Pelicula('ID-NOM-IMG-PRE-2','Slasher','Patrulla Fantasma', 'js/images/Splatt-2.jpg', 7400)
const Pelicula3 = new Pelicula('ID-NOM-IMG-PRE-3','FolkHorror','Orgia de Terror', 'js/images/Splatt-3.jpg', 6900)
const Pelicula4 = new Pelicula('ID-NOM-IMG-PRE-4','FolkHorror','Metempsyco', 'js/images/Splatt-4.jpg', 9550)
const Pelicula5 = new Pelicula('ID-NOM-IMG-PRE-5','FolkHorror','Se me Hiela la Sangre', 'js/images/Splatt-5.jpg', 5490)
const Pelicula6 = new Pelicula('ID-NOM-IMG-PRE-6','Gore','Al Caer de la Noche', 'js/images/Splatt-6.jpg', 5660)
const Pelicula7 = new Pelicula('ID-NOM-IMG-PRE-7','Muniecos','La Isla del Terror', 'js/images/Splatt-7.jpg', 3500)
const Pelicula8 = new Pelicula('ID-NOM-IMG-PRE-8','Psi','Seddok', 'js/images/Splatt-8.jpg', 4040)
const Pelicula9 = new Pelicula('ID-NOM-IMG-PRE-9','Naturalista','La Amenaza Verde', 'js/images/Splatt-9.jpg', 6000)

const productos = [Pelicula1, Pelicula2, Pelicula3, Pelicula4, Pelicula5, Pelicula6, Pelicula7, Pelicula8, Pelicula9]

// Carrito de Compras
let carrito = []

// Productos
//const cardContainer = document.querySelector('#cardContainer')

// Column
productos.forEach((producto) => {
    const column = document.createElement('div')
    column.className = 'column'
    column.innerHTML = `
    <article class="${producto.filtro}">
        <h4 class="cardTitle">${producto.name}</h4>
        <strong class="cardPrice"> $${producto.precio} </strong><br>
        <img src="${producto.imgSrc}" class="cardImg thumbnail"><br>
        <button data-id="${producto.id}" class="buttonCTA button warning" onclick="sweet()"> COMPRAR </button>
    </article>
    `
    cardContainer.append(column)
})
///////////////////////////////////

/////////////////////////////////// ARRAY DE MENU + FILTRO
// ARRAY DE MENU

const filtros = [ 'Slasher', 'FolkHorror', 'Gore', 'Muniecos', 'Psi', 'Naturalista' ]

function crearCheck(filtro) {
  let check = document.createElement("label")
  check.innerHTML = `
  <input id="${filtro}" class="${filtro}" onClick="toggle('${filtro}')" type="checkbox" checked/> <span>${filtro}</span>
  `
  return check
}

const lista = document.querySelector(".lista");
filtros.forEach((x) => lista.appendChild(crearCheck(x)));

// FILTRO
var checkbox = document.querySelectorAll("#Slasher, #FolkHorror, #Gore, #Muniecos, #Psi, #Naturalista");
for (i = 0; i < checkbox.length; i++) {
  checkbox[i].onclick = function() {
    if (this.checked) {
      document.getElementById(this.getAttribute('class')).style['display'] = 'block';
    } else {
      document.getElementById(this.getAttribute('class')).style['display'] = 'none';
    }
  };
}
///////////////////////////////////

///////////////////////////////////
/// Total
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
${producto.name}: $${producto.precio}
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



///////////////////////////////////
// MODAL
const cart = document.querySelector('#cart');
const cartModalOverlay = document.querySelector('.cart-modal-overlay');
cart.addEventListener('click', () => {
  if (cartModalOverlay.style.transform === 'translateX(-200%)'){
    cartModalOverlay.style.transform = 'translateX(0)';
  } else {
    cartModalOverlay.style.transform = 'translateX(-200%)';
  }
})
// fin modal

// cerrar modal
const closeBtn = document.querySelector ('#close-btn');

closeBtn.addEventListener('click', () => {
  cartModalOverlay.style.transform = 'translateX(-200%)';
});

cartModalOverlay.addEventListener('click', (e) => {
  if (e.target.classList.contains('cart-modal-overlay')){
    cartModalOverlay.style.transform = 'translateX(-200%)'
  }
})
// fin cerrar modal

///////////////////////////////////
// SWEET ALERT

function sweet() 
{
var sweet = document.querySelectorAll('.buttonCTA');
    sweet.forEach(function (e)
    {
        Swal.fire({
          icon: 'success',
          title: 'Producto Agregado',
          showConfirmButton: false,
          timer: 1500
        })
    })
}

document.querySelector('#purchase-btn').addEventListener('click', () => {
    Swal.fire(
        'Continuar a MercadoPago'
        )
})


