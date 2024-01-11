let carritoVacio = document.querySelector('.carrito-vacio');
let contenidoCarrito = document.querySelector('.contenido-carrito');
let carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];

contenidoCarrito.innerHTML = "";


    if (carritoGuardado.length > 0) {
        
    
        carritoVacio.classList.add('filter');
    
        carritoGuardado.forEach(juego => {
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
    
  

