function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('btn-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
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
