/** ####################### LISTA DE INFO JUEGOS ################**/ 

let callOfDuty = {
  nombre: 'Call of Duty',
  precio: '12.000',
  img: 'g1.jpg'
}

let battleField = {
  nombre: 'BattleField',
  precio: '6.000',
  img: 'g2.jpg'
}


let halo = {
  nombre: 'Halo',
  precio: '1.200',
  img: 'g3.jpg'
}


let fornite = {
  nombre: 'Fornite',
  precio: '12.000',
  img: 'g4.jpg'
}


let crash = {
  nombre: 'Crash',
  precio: '12.000',
  img: 'g5.jpg'
}


let gtaV = {
  nombre: 'GTA V',
  precio: '22.000',
  img: 'g6.jpg'
}

let theSurge = {
  nombre: 'The Surge',
  precio: '12.000',
  img: 'g7.jpg'
}

let clashRoyale = {
  nombre:'Clash Royale',
  precio: '1.000',
  img: 'l3.jpg'
}

let valorant = {
  nombre: 'Valorant',
  precio: '12.000',
  img: 'l5.jpg'
}

let gtaIV = {
  nombre: 'GTA IV',
  precio: '1.000',
  img: 'l8.jpg'
}


/*  ###############  Juegos Destacados  ################ */

let juegosDestacados = [callOfDuty, battleField, halo, fornite, crash, gtaV, theSurge ];



    const img_destacados = document.querySelector('.img_destacados');

    juegosDestacados.forEach(juego=>{

      img_destacados.innerHTML += `
        <img src="IMAGEN/${juego.img}" alt="">
        `
    });


