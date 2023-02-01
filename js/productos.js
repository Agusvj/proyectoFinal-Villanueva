// Fetch y local storage de los productos


const guardarProductosLS = (clave, productos) => {
    localStorage.setItem(clave, JSON.stringify(productos));
}

const cargarProductosLS = (clave) => {
    return JSON.parse(localStorage.getItem(clave)) || [];
}

const fetchData = (clave) => {
    fetch(`./js/${clave}.json`)
    .then((res) => res.json())
    .then((data) => {
        guardarProductosLS(clave, data);
        renderProductos(clave);
    })
}

/**
 * Main
 */
fetchData("paletas");
fetchData("remeras");
fetchData("zapatillas");
