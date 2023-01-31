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
                            `
                            
      let a = document.createElement('a');
      a.className = "boton";
      a.innerText = "Add to Cart";

      a.addEventListener('click', function(){
        addToCart(producto.id,producto.categoria);
        renderProductosC();
      });

      innerDiv.appendChild(a);

      outerDiv.appendChild(innerDiv);

    

      document.getElementById(clave).appendChild(outerDiv);


     
    }
   
    
}



renderProductos("zapatillas");
renderProductos("paletas");
renderProductos("remeras");


// Boton aside listado de compras

