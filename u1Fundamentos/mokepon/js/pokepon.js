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
}
//end load page html
window.addEventListener('load', iniciarJuego);
