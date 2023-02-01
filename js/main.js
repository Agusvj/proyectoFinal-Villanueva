// Render de productos

const renderProductos = (clave) => {
  const productos = cargarProductosLS(clave);

  for (let producto of productos) {
    let outerDiv = document.createElement('div');
    outerDiv.className = "card col-11 col-lg-2 col-md-5 m-4 pb-3 pt-3";
    outerDiv.innerHTML = `<img src="imgs/${producto.imagen}" class="card-img-top" alt="${producto.nombre}"/>`;

    let innerDiv = document.createElement('div');
    innerDiv.className = "card-body";

    innerDiv.innerHTML = `<h5 class="card-title goldie fw-bold">${producto.nombre}</h5>
                            <p class="card-text white">$ ${producto.precio}</p> 
                            <div class="mb-4">
                            <button 
                            class="boton" 
                            type="button" 
                            data-bs-toggle="offcanvas" 
                            data-bs-target="#detalleProducto" 
                            aria-controls="detalleProducto" 
                            id="verMas-${producto.id}"
                            >
                            Ver más
                            </button></div> `;
                            

    let a = document.createElement('a');
    a.className = "boton";
    a.innerText = "Add to Cart";

    a.addEventListener('click', () => {
      addToCart(producto.id, producto.categoria);
      renderProductosC();
    });

    innerDiv.appendChild(a);

    outerDiv.appendChild(innerDiv);

    document.getElementById(clave).appendChild(outerDiv);

    document.getElementById(`verMas-${producto.id}`).addEventListener("click", () => {
      document.getElementById("offcanvasBody").innerHTML = `<h5 class="card-title goldie fw-bold mb-4 fs-2">${producto.nombre}</h5>
                                                            <img src="imgs/${producto.imagen}" class="card-img-top mb-4" alt="${producto.nombre}"/>                    
                                                            <p class="card-text white fw-bold">${producto.descripcion}</p>`;
    });
  }
}

