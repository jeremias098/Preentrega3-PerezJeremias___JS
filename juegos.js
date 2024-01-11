/** ####################### LISTA DE INFO JUEGOS ################**/
let TodosLosJuegos = [
    {
        nombre: 'Call of Duty',
        precio: '12.000',
        img: 'g1.jpg'
    }

    , {
        nombre: 'BattleField',
        precio: '6.000',
        img: 'g2.jpg'
    }


    , {
        nombre: 'Halo',
        precio: '1.200',
        img: 'g3.jpg'
    }


    , {
        nombre: 'Fornite',
        precio: '12.000',
        img: 'g4.jpg'
    }


    , {
        nombre: 'Crash',
        precio: '12.000',
        img: 'g5.jpg'
    }


    , {
        nombre: 'GTA V',
        precio: '22.000',
        img: 'g6.jpg'
    }

    , {
        nombre: 'The Surge',
        precio: '12.000',
        img: 'g7.jpg'
    }

    , {
        nombre: 'Clash Royale',
        precio: '1.000',
        img: 'l3.jpg'
    }

    , {
        nombre: 'Valorant',
        precio: '12.000',
        img: 'l5.jpg'
    }
    ,
    {
        nombre: 'GTA IV',
        precio: '1.000',
        img: 'l8.jpg'
    }


];

/*  ###############  Todos Los Juegos ################ */



const cont_juegos = document.querySelector('.cont_juegos');

TodosLosJuegos.forEach(juego => {

    cont_juegos.innerHTML +=

        `
        

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
        `
});


/** FILTRO DE JUEGOS  **/


const buscador = document.querySelector('#buscador');
const card_juegos = document.querySelectorAll('.card_juego');

buscador.addEventListener('keyup', e => {
    const buscadorMinuscula = e.target.value.toLowerCase();
    
    card_juegos.forEach(card => {
        const contenidoCard = card.textContent.toLowerCase();
        
        if (contenidoCard.includes(buscadorMinuscula)) {
            card.classList.remove('filter');
        } else {
            card.classList.add('filter');
        }
    });
});


//**   AGREGAR JUEGO AL CARRITO     **//

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

document.querySelectorAll('.btn').forEach((button, index) => {
    button.addEventListener('click', () => {
        carrito.push(TodosLosJuegos[index]);
        
        // Guardar el carrito actualizado en localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));
    });
});

