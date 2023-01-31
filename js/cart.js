// local storage carrito

const guardarProductosCart = (productos) => {
    localStorage.setItem("carrito", JSON.stringify(productos));
}

const cargarProductosCart = () => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

const addToCart = (id,categoria) => {
    const productos = cargarProductosLS(categoria);
    const productos_cart = cargarProductosCart();
    const productoId = productos_cart.findIndex((item) => item.id === id)
    
    if (productoId === -1) {
        const productoNuevo = productos.find(item => item.id === id)
        productoNuevo.cantidad = 1
        productos_cart.push(productoNuevo);
    } else {
        productos_cart[productoId].cantidad +=1
    }
    
    guardarProductosCart(productos_cart);
    renderBotonCart();
}

const vaciarCart = () => {
    localStorage.removeItem("carrito");
    renderBotonCart();   
    renderProductosC();
}

const deleteItem = (id) => {
    const productosCarrito = cargarProductosCart();
    const productoIndex = productosCarrito.findIndex((producto) => producto.id === id)
    productosCarrito.splice(productoIndex, 1)

    guardarProductosCart(productosCarrito)
    renderBotonCart();   
    renderProductosC();
}

const sumaItem = (id) => {
    const productosCarrito = cargarProductosCart();
    const productoIndex = productosCarrito.findIndex((producto) => producto.id === id)

    productosCarrito[productoIndex].cantidad += 1;
    guardarProductosCart(productosCarrito)
    renderBotonCart();   
    renderProductosC();
}

const restaItem = (id) => {
    const productosCarrito = cargarProductosCart();
    const productoIndex = productosCarrito.findIndex((producto) => producto.id === id)

    productosCarrito[productoIndex].cantidad -= 1;

    if (productosCarrito[productoIndex].cantidad === 0) {
        deleteItem(id)
    } else {
        guardarProductosCart(productosCarrito)
    }

    renderBotonCart();   
    renderProductosC();
}

const totalCarrito = () => {
    const productos_cart = cargarProductosCart();

    return productos_cart.reduce((total, item) => total += item.cantidad, 0);
}

const sumaCarrito = () => {
    const productos_cart = cargarProductosCart();

    return productos_cart.reduce((total, item) => total += item.precio * item.cantidad, 0);
}


const renderBotonCart = () => {
    let salida = `<button type="button" class="boton position-relative">
    <h2 class="fw-bold fs-4 m-0 p-0">CART</h2>
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${totalCarrito()}
    </span>
  </button>`;
  document.getElementById("aside-button").innerHTML = salida;
}

// render carrito
const renderProductosC = () => {
    const productos_cart = cargarProductosCart();
    document.getElementById("productos-seleccionados").innerHTML = "";
    
    for (let producto of productos_cart) {

      let cartBuy = document.createElement('div');
      cartBuy.className = "d-flex flex-row align-items-center justify-content-start mb-1 brd";

      cartBuy.innerHTML = `<img src="imgs/${producto.imagen}" class="img-cart ps-1" alt="${producto.nombre}"/>
                            <h5 class="card-title goldie fw-bold ps-2">${producto.nombre}</h5>
                            <button class="botonSumaResta" id="restarProducto-${producto.id}">-</button>
                            <p class="card-text goldie pe-1 m-0">${producto.cantidad}</p>
                            <button class="botonSumaResta" id="sumarProducto-${producto.id}">+</button>
                            <div class="mauto d-flex flex-row align-items-center">
                            <p class="card-text goldie pe-1 m-0">$ ${producto.precio * producto.cantidad}</p>
                            <button class="botonSumaResta" id="eraseItem-${producto.id}">X</button>
                            </div>`;

       

      document.getElementById("productos-seleccionados").appendChild(cartBuy);
      document.getElementById(`eraseItem-${producto.id}`).addEventListener("click", () => {deleteItem(producto.id)})
      document.getElementById(`sumarProducto-${producto.id}`).addEventListener("click", () => {sumaItem(producto.id)})
      document.getElementById(`restarProducto-${producto.id}`).addEventListener("click", () => {restaItem(producto.id)})
    }
   
    document.getElementById("precio-total").innerText = `$${sumaCarrito()} `;
    
}

document.getElementById("empty-button").addEventListener("click", vaciarCart);



if(document.getElementById("aside-button") !== null){
    renderBotonCart();
    renderProductosC();
}