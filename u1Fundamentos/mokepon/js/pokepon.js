let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;
let endGame;

function btnAtaque(id_Btn, ataque){
    return document.getElementById(id_Btn).addEventListener('click', ataqueMascota(ataque));
}

function desabilidarBtns(id_Btn){
    return document.getElementById(id_Btn).disabled = true;
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
    });

    let btnReiniciar = document.getElementById('btn-reiniciar');
    btnReiniciar.addEventListener('click', reiniciarJuego)
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
    combate();
}

function vidas(jugador){
    vidasRestantes='';
    if(jugador === 'vidas-jugador'){
        vidasJugador --; // resta 1
        vidasRestantes = document.getElementById(jugador).innerHTML= vidasJugador;
    }else if(jugador === 'vidas-enemigo'){
        vidasEnemigo --;
        vidasRestantes = document.getElementById(jugador).innerHTML= vidasEnemigo;
    }
    return vidasRestantes;
}

// revisar vidas del juego
function revisarVidas(){
    if(vidasEnemigo === 0){
        //alert('FELECITANCIONES! GANASTE 🎉🙌🥳')
        crearMensaje('winYou');
    }else if(vidasJugador  === 0){
        //alert('PERDISTE 😢😒😭')
        crearMensaje('youLose');
    }
}

//  verificar que jugador gana
function combate(){
    let status = "";
    if(ataqueEnemigo === ataqueJugador){
        status = "EMPATE";
    }else if ((ataqueJugador === 'fuego' && ataqueEnemigo === 'tierra') || (ataqueJugador === 'agua' && ataqueEnemigo === 'fuego') || (ataqueJugador === 'tierra' && ataqueEnemigo === 'agua')){
        status = "GANASTE"
        vidas('vidas-enemigo');
    }else{
        status = "PERDISTE";
        vidas('vidas-jugador');
    }
    crearMensaje(status);
    revisarVidas();
    //return status
}
//  mostar mensaje de los ataques seleccionados
function crearMensaje(partida){
    let seccionMensaje = document.getElementById('mensajes');
    //console.log(seccionMensaje);
    let parrafo = document.createElement('p');
    if(partida === 'winYou'){
        parrafo.innerHTML = 'FELECITANCIONES! GANASTE EL JUEGO 🎉🙌🥳';
        endGame = true;
    }else if(partida === 'youLose'){
        parrafo.innerHTML = 'UPSSS! PERDISTE EL JUEGO 😢😒😭';
        endGame = true;
    }else{
        parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ', la mascota del enemigo ataco con ' + ataqueEnemigo + ' '+partida;
    }
    seccionMensaje.appendChild(parrafo);

    if(endGame){
        desabilidarBtns('btn-fuego');
        desabilidarBtns('btn-agua');
        desabilidarBtns('btn-tierra');
    }
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

function reiniciarJuego(){
    location.reload();
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//end load page html
window.addEventListener('load', iniciarJuego);
