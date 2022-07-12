fetch('https://mockapi.io/clone/62cdde90066bd2b6992d6de2')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));


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
const Pelicula3 = new Pelicula('ID-NOM-IMG-PRE-3','Folk','Orgia de Terror', 'js/images/Splatt-3.jpg', 6900)
const Pelicula4 = new Pelicula('ID-NOM-IMG-PRE-4','Folk','Metempsyco', 'js/images/Splatt-4.jpg', 9550)
const Pelicula5 = new Pelicula('ID-NOM-IMG-PRE-5','Folk','Se me Hiela la Sangre', 'js/images/Splatt-5.jpg', 5490)
const Pelicula6 = new Pelicula('ID-NOM-IMG-PRE-6','Gore','Al Caer de la Noche', 'js/images/Splatt-6.jpg', 5660)
const Pelicula7 = new Pelicula('ID-NOM-IMG-PRE-7','Toys','La Isla del Terror', 'js/images/Splatt-7.jpg', 3500)
const Pelicula8 = new Pelicula('ID-NOM-IMG-PRE-8','Psi','Seddok', 'js/images/Splatt-8.jpg', 4040)
const Pelicula9 = new Pelicula('ID-NOM-IMG-PRE-9','Naturalista','La Amenaza Verde', 'js/images/Splatt-9.jpg', 6000)

const productos = [Pelicula1, Pelicula2, Pelicula3, Pelicula4, Pelicula5, Pelicula6, Pelicula7, Pelicula8, Pelicula9]

// Column
productos.forEach((producto) => {
    const column = document.createElement('div')
    column.className = 'column'
    column.innerHTML = `
    <article class="${producto.filtro}">
        <h4 class="cardTitle">${producto.name}</h4>
        <strong class="cardPrice product-price"> $${producto.precio} </strong><br>
        <img src="${producto.imgSrc}" class="product-image cardImg thumbnail"><br>
        <button data-id="${producto.id}" class="agregar-al-carro button hollow warning"> COMPRAR </button>
    </article>
    `
    cardContainer.append(column)
})

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

/////////////////////////////////// MODAL
// abrir modal
const cart = document.querySelector('#cart');
const carroModalOverlay = document.querySelector('.cart-modal-overlay');
cart.addEventListener('click', () => {
  if (carroModalOverlay.style.transform === 'translateX(-200%)'){
    carroModalOverlay.style.transform = 'translateX(0)';
  } else {
    carroModalOverlay.style.transform = 'translateX(-200%)';
  }
})
// fin de abrir modal

// cerrar modal
const cerrarBtn = document.querySelector ('#cerrar-btn');
cerrarBtn.addEventListener('click', () => {
  carroModalOverlay.style.transform = 'translateX(-200%)';
});
carroModalOverlay.addEventListener('click', (e) => {
  if (e.target.classList.contains('cart-modal-overlay')){
    carroModalOverlay.style.transform = 'translateX(-200%)'
  }
})
// fin cerrar modal

// agregar productos
const agregarAlCarro = document.getElementsByClassName('agregar-al-carro');
const productRow = document.getElementsByClassName('product-row');
for (var i = 0; i < agregarAlCarro.length; i++) {
  button = agregarAlCarro[i];
  button.addEventListener('click', agregarAlCarroClicked);
}
function agregarAlCarroClicked (event) {
  button = event.target;
  var cartItem = button.parentElement;
  var price = cartItem.getElementsByClassName('product-price')[0].innerText;  
  var imageSrc = cartItem.getElementsByClassName('product-image')[0].src;
  agregarItemAlCarro (price, imageSrc);
  actualizarCarroPrecio()
}
function agregarItemAlCarro (price, imageSrc) {
  var productRow = document.createElement('div');
  productRow.classList.add('product-row');
  var productRows = document.getElementsByClassName('product-rows')[0];
  var carroImagen = document.getElementsByClassName('cart-image');
  for (var i = 0; i < carroImagen.length; i++){
    if (carroImagen[i].src == imageSrc){
        Swal.fire({
          icon: 'warning',
          title: 'Este producto ya fue agregado',
          showConfirmButton: false,
          timer: 1500
        })
      return;
    }
  }
  var cartRowItems = `
  <div class="product-row">
        <img class="cart-image" src="${imageSrc}" alt="">
        <span class ="cart-price">${price}</span>
        <input class="product-quantity" type="number" value="1">
        <button class="remove-btn button alert">Borrar</button>
        </div>
        `
  productRow.innerHTML = cartRowItems;
  productRows.append(productRow);
  productRow.getElementsByClassName('remove-btn')[0].addEventListener('click', removeItem)
  productRow.getElementsByClassName('product-quantity')[0].addEventListener('change', changeQuantity)
  actualizarCarroPrecio()
}
// fin agregar productos

// quitar productos
const removeBtn = document.getElementsByClassName('remove-btn');
for (var i = 0; i < removeBtn.length; i++) {
  button = removeBtn[i]
  button.addEventListener('click', removeItem)
}
function removeItem (event) {
  btnClicked = event.target
  btnClicked.parentElement.parentElement.remove()
  actualizarCarroPrecio()
}
// fin de quitar productos

// actualiza cantidad
var quantityInput = document.getElementsByClassName('product-quantity')[0];
for (var i = 0; i < quantityInput; i++){
  input = quantityInput[i]
  input.addEventListener('change', changeQuantity)
}
function changeQuantity(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0){
    input.value = 1;
  }
  actualizarCarroPrecio()
}
// fin de actualiza cantidad

// actualiza precio
function actualizarCarroPrecio() {
  var total = 0
  for (var i = 0; i < productRow.length; i += 2) {
    cartRow = productRow[i]
    var priceElement = cartRow.getElementsByClassName('cart-price')[0];
    var quantityElement = cartRow.getElementsByClassName('product-quantity')[0];
    var price = parseFloat(priceElement.innerText.replace('$', ''));
    var quantity = quantityElement.value;
    total = total + (price * quantity );
  }
    document.getElementsByClassName('total-price')[0].innerText = '$' + total;
    document.getElementsByClassName('cart-quantity')[0].textContent = i /= 2;
            if (total == [0]) {
                const showCompra = document.getElementsByClassName('compra-btn')[0];
                showCompra.style.display = 'none';
            } else {
                const showCompra = document.getElementsByClassName('compra-btn')[0];
                showCompra.style.display = 'initial';
            }
}
// fin de actualiza precio

// comprar
const compraBtn = document.querySelector('.compra-btn');
const cerrarCartModal = document.querySelector('.cart-modal');
compraBtn.addEventListener('click', compraBtnClicked);
function compraBtnClicked () {
    Swal.fire(
        'Continuar a MercadoPago'
        )
  carroModalOverlay.style.transform= 'translateX(-100%)'
  var carroItems = document.getElementsByClassName('product-rows')[0]
  while (carroItems.hasChildNodes()) {
    carroItems.removeChild(carroItems.firstChild)
 }
  actualizarCarroPrecio()
}
// fin de comprar
