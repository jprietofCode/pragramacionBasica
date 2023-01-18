function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('btn-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}
function verificarMascota(mascota){
    return document.getElementById(mascota).checked;
}
function seleccionarMascotaJugador(){
    if(verificarMascota("hipodoge")){
        alert("Seleccionaste a Hipodoge");
    } else if(verificarMascota("capipepo")){
        alert("Seleccionaste a Capipepo");
    } else if(verificarMascota("ratigueya")){
        alert("Seleccionate a la ratigueya");
    } else{
        alert("Selecciona una mascota")
    }
}
//end load page html
window.addEventListener('load', iniciarJuego);
