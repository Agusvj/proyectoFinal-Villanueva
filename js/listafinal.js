
function renderLista() {
    const listaItems = cargarProductosCart();
    document.getElementById("listaFinal").innerHTML = "";

    for (let producto of listaItems) {

        let list = document.createElement('li');
        list.className = "d-flex";

        list.innerHTML = `
                            <h5 class="card-title black  fw-bold ps-2">${producto.nombre} x ${producto.cantidad}........</h5>

                            <div class="d-flex black flex-row align-items-center">
                            <p class="card-text black pe-1 m-0">$${producto.precio * producto.cantidad}</p>
                            </div>
                            `;



        document.getElementById("listaFinal").appendChild(list);
    
    }

    document.getElementById("precio-total").innerText = `Precio total a pagar: $${sumaCarrito()} `;
}

function finCompra() {
    const confirmarModal = document.getElementById('staticBackdrop');
    const modal = bootstrap.Modal.getInstance(confirmarModal);
    modal.hide();
    swal("Compra finalizada!", "Espero disfrutes nuestro producto!", "success");
 }



function confirmaDatos () {
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let email = document.getElementById("email").value
    let direccion = document.getElementById("direccion").value
    let pais = document.getElementById("pais").value
    let formaPago = document.querySelector('input[name="pago"]:checked').value;
    let nombreTarjeta = document.getElementById("nombreTarjeta").value
    let numTarjeta = document.getElementById("numTarjeta").value
    let vencimiento= document.getElementById("vencimiento").value
    let cvv = document.getElementById("cvv").value

    let modal = document.getElementById("modalBody");
    modal.innerHTML =  `
    <ul>
      <li>Total a Pagar: <span>$${sumaCarrito()}</span></li>
      <li>Nombre: <span>${nombre}</span></li>
      <li>Apellido: <span>${apellido}</span></li>
      <li>email: <span>${email}</span></li>
      <li>Dirección: <span>${direccion}</span></li>
      <li>Pais: <span>${pais}</span>${pais}</li>
      <li>Forma de Pago: <span>${formaPago}</span></li>
      <li>Nombre en la tarjeta: <span>${nombreTarjeta}</span></li>
      <li>Numero de tarjeta: <span>${numTarjeta}</</span></li>
      <li>Vencimiento: <span>${vencimiento}</span></li>
      <li>CVV: <span>${cvv}</span></li>
    </ul>
     `
    
}

document.getElementById("confirmPayment").addEventListener("click", finCompra)

document.getElementById("finish").addEventListener("click", (e) => {
    e.preventDefault();
    confirmaDatos();
} )




renderLista();