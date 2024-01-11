let carritoVacio = document.querySelector('.carrito-vacio');
let carritoConJuegos = document.querySelector('.carritoConJuegos')
let contenidoCarrito = document.querySelector('.contenido-carrito');
let carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
let eliminar =document.querySelectorAll('.eliminar')
contenidoCarrito.innerHTML = "";


    if (carritoGuardado.length > 0) {
        
    
        carritoVacio.classList.add('filter');
        carritoConJuegos.classList.remove('filter');
    
        carritoGuardado.forEach(juego => {
            contenidoCarrito.innerHTML += `
            
                <div class="cont_juegos">
                    
                    <div class="card_juego">
                        <img src="IMAGEN/${juego.img}" alt="">
                        <div class="tiulo_juego">
                            <h3>${juego.nombre}</h3>
                        </div>
                        <div class="precio">
                            <p>${juego.cantidad}<p>
                            <p>$${juego.precio}</p>
                            <button class="btn eliminar">Eliminar</button>
                        </div>
                    </div>
                </div>`;
                
        });
       
    } else {
        // Si el carrito está vacío, muestra un mensaje o realiza alguna otra acción
        carritoVacio.classList.remove('filter');
        carritoConJuegos.classList.add('filter')
    }
    
  

