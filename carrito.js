let carritoVacio = document.querySelector('.carrito-vacio');
let contenidoCarrito = document.querySelector('.contenido-carrito');
const carritoGuardado = localStorage.getItem('carrito');

contenidoCarrito.innerHTML = "";

if (carritoGuardado) {
    const juegosEnCarrito = JSON.parse(carritoGuardado);  // Corrección aquí

    carritoVacio.classList.add('filter');

    juegosEnCarrito.forEach(juego => {
        contenidoCarrito.innerHTML += `
            <div class="cont_juegos">
                <div class="card_juego">
                    <img src="IMAGEN/${juego.img}" alt="">
                    <div class="tiulo_juego">
                        <h3>${juego.nombre}</h3>
                    </div>
                    <div class="precio">
                        <p>$${juego.precio}</p>
                        <button class="btn">Comprar</button>
                    </div>
                </div>
            </div>`;
    });
} else {
    // Si el carrito está vacío, muestra un mensaje o realiza alguna otra acción
    carritoVacio.classList.remove('filter');
}


console.log(juegosEnCarrito)