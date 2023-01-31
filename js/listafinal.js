// render lista final de productos

function renderLista() {
	const listaItems = cargarProductosCart();
	document.getElementById("listaFinal").innerHTML = "";

	for (let producto of listaItems) {
		let list = document.createElement('li');
		list.className = "d-flex";

		list.innerHTML = `<h5 class="card-title black  fw-bold ps-2">${producto.nombre} x ${producto.cantidad}........</h5>
                      <div class="d-flex black flex-row align-items-center">
                        <p class="card-text black pe-1 m-0">$${producto.precio * producto.cantidad}</p>
                      </div>`;

		document.getElementById("listaFinal").appendChild(list);
	}

	document.getElementById("precio-total").innerText = `Precio total a pagar: $${sumaCarrito()} `;
}

function finCompra() {
	const confirmarModal = document.getElementById('staticBackdrop');
	const modal = bootstrap.Modal.getInstance(confirmarModal);
	modal.hide();

	vaciarCart();
	swal("Compra finalizada!", "Espero disfrutes nuestro producto!", "success")
		.then((ok) => {
			window.location.href = "../index.html";
		});
}

// Funciones de confirmacion de pago y verificacion

function confirmaDatos() {
	let nombre = document.getElementById("nombre").value
	let apellido = document.getElementById("apellido").value
	let email = document.getElementById("email").value
	let direccion = document.getElementById("direccion").value
	let pais = document.getElementById("pais").value
	let formaPago = document.querySelector('input[name="pago"]:checked').value;
	let nombreTarjeta = document.getElementById("nombreTarjeta").value
	let numTarjeta = document.getElementById("numTarjeta").value
	let vencimiento = document.getElementById("vencimiento").value
	let cvv = document.getElementById("cvv").value

	let modal = document.getElementById("modalBody");
	modal.innerHTML = `
    <ul class="listaVerificacion">
      <li class="mb-2">Total a Pagar: <span class="spanLi">$${sumaCarrito()}</span></li>
      <li class="mb-2">Nombre: <span class="spanLi">${nombre}</span></li>
      <li class="mb-2">Apellido: <span class="spanLi">${apellido}</span></li>
      <li class="mb-2">email: <span class="spanLi">${email}</span></li>
      <li class="mb-2">Dirección: <span class="spanLi">${direccion}</span></li>
      <li class="mb-2">Pais: <span class="spanLi">${pais}</li>
      <li class="mb-2">Forma de Pago: <span class="spanLi">${formaPago}</span></li>
      <li class="mb-2">Nombre en la tarjeta: <span>${nombreTarjeta}</span></li>
      <li class="mb-2">Numero de tarjeta: <span class="spanLi">${numTarjeta}</</span></li>
      <li class="mb-2">Vencimiento: <span class="spanLi">${vencimiento}</span></li>
      <li class="mb-2">CVV: <span class="spanLi">${cvv}</span></li>
    </ul>`;
}

function onSubmitForm(event) {
	const confirmarModal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
	confirmarModal.show();
	confirmaDatos();
	event.preventDefault();
}

/**
 * Main
 */
document.getElementById("confirmPayment").addEventListener("click", finCompra)

document.getElementById("formId").addEventListener("submit", onSubmitForm);

renderLista();
