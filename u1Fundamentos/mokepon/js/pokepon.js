let ataqueJugador;
let ataqueEnemigo;
function btnAtaque(id_Btn, ataque){
    return document.getElementById(id_Btn).addEventListener('click', ataqueMascota(ataque));
}

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('btn-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

    let boton = document.querySelector('#select-ataque');
    boton.addEventListener('click', (e)=> {
        console.log(e.target.id);
        // verifica el id del elemento clickeado
        if(e.target.id === 'btn-fuego'){
            btnAtaque('btn-fuego', 'fuego');
        }else if(e.target.id === 'btn-agua'){
            btnAtaque('btn-agua', 'agua');
        }else if(e.target.id === 'btn-tierra'){
            btnAtaque('btn-tierra', 'tierra');
        }
    })
    /*btnAtaque('btn-fuego', 'fuego');
    btnAtaque('btn-agua', 'agua');
    btnAtaque('btn-tierra', 'tierra');*/

}

function ataqueMascota(ataque){
    ataqueJugador = ataque;
    console.log(ataqueJugador); 
    ataqueRival();
}

function ataqueRival(){
    let ataqueRivalRandom = aleatorio(1,3);

    if(ataqueRivalRandom === 1){
        ataqueEnemigo = 'fuego';
    } else if(ataqueRivalRandom === 2){
        ataqueEnemigo = 'agua';
    }else{
        ataqueEnemigo = 'tierra';
    }
    crearMensaje();
}
 //  mostar mensaje de los ataques seleccionados
function crearMensaje(){
    let seccionMensaje = document.getElementById('mensajes');
    //console.log(seccionMensaje);
    let parrafo = document.createElement('p');
    parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ', la mascota del enemigo ataco con ' + ataqueEnemigo + 'pendiente';
    seccionMensaje.appendChild(parrafo);
}

function verificarMascota(mascota){
    return document.getElementById(mascota).checked;
}

function mascotaSelect(player, mascota){
    return document.getElementById(player).innerHTML = mascota;
}

function seleccionarMascotaJugador(){
    if(verificarMascota("hipodoge")){
        mascotaSelect('mascota-jugador', 'hipodoge');
    } else if(verificarMascota("capipepo")){
        mascotaSelect('mascota-jugador', 'capipepo');
    } else if(verificarMascota("ratigueya")){
        mascotaSelect('mascota-jugador', 'ratigueya');
    } else{
        alert("Selecciona una mascota")
    }

    selectMascotaEnemigo();
}

function selectMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(1,3);  // Devuelve un número del 1 al 3

    if(mascotaAleatoria === 1){
        mascotaSelect("mascota-enemigo", "hipodoge");
    } else if(mascotaAleatoria === 2){
        mascotaSelect("mascota-enemigo", "capipepo");
    } else{
        mascotaSelect("mascota-enemigo", "ratigueya");
    }
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//end load page html
window.addEventListener('load', iniciarJuego);
