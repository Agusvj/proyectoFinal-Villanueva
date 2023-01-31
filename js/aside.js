const asideButton = document.getElementById('aside-button');
const aside = document.getElementById('aside');
const closeButton = document.getElementById('close-button');

asideButton.addEventListener('click', function() {
  aside.style.display = aside.style.display === 'none' ? 'block' : 'none';
});

closeButton.addEventListener('click', function() {
    aside.style.display = 'none';
  });



document.getElementById("irCheckout").addEventListener("click", function() {
  let listaPrecio = sumaCarrito()

  if (listaPrecio > 0){
    document.location.href = '../checkout.html'
  } else {
    swal("Oops!", "No hay productos en el carrito", "error");
  }
}
);