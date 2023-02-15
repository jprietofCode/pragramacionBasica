let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;
let endGame;
let condicion = true;

function btnAtaque(id_Btn, ataque){
    return document.getElementById(id_Btn).addEventListener('click', ataqueMascota(ataque));
}

function desabilidarBtns(id_Btn){
    return document.getElementById(id_Btn).disabled = true;
}

function ocultarElementos(id_Btn, accion){
    return document.getElementById(id_Btn).style.display = accion;
}

function iniciarJuego(){
    ocultarElementos('select-ataque', 'none');
    ocultarElementos('reiniciar', 'none');
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
    console.log(partida)
    let seccionMensaje = document.getElementById('resultado');
    let ataqueDelJugador = document.getElementById('ataques-Del-Jugador');
    let ataqueDelEnemigo = document.getElementById('ataques-Del-Enemigo');
    //console.log(seccionMensaje);
    let nuevoAtaqueJugador = document.createElement('p');
    let nuevoAtaqueEnemigo = document.createElement('p');
    if(partida === 'winYou'){
        seccionMensaje.innerHTML = 'FELECITANCIONES! GANASTE EL JUEGO 🎉🙌🥳';
        endGame = true;
        //seccionMensaje.appendChild(parrafo);
    }else if(partida === 'youLose'){
        seccionMensaje.innerHTML = 'UPSSS! PERDISTE EL JUEGO 😢😒😭';
        endGame = true;
        //seccionMensaje.appendChild(parrafo);
    }else{
        //parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ', la mascota del enemigo ataco con ' + ataqueEnemigo + ' '+partida;
        nuevoAtaqueJugador.innerHTML = ataqueJugador;
        nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo;
        seccionMensaje.innerHTML = partida;
        ataqueDelJugador.appendChild(nuevoAtaqueJugador);
        ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo);

    }

    if(endGame){
        desabilidarBtns('btn-fuego');
        desabilidarBtns('btn-agua');
        desabilidarBtns('btn-tierra');
        ocultarElementos('reiniciar', 'block');  // muestra el boton de reiniciar juego
    }
}

function verificarMascota(mascota){
    return document.getElementById(mascota).checked;
}

function mascotaSelect(player, mascota){
    return document.getElementById(player).innerHTML = mascota;
}

function iniciarBatalla(){
    selectMascotaEnemigo();
    ocultarElementos('select-ataque', 'flex');
    ocultarElementos('select-mascota', 'none');
}

function seleccionarMascotaJugador(){
    if(verificarMascota("hipodoge")){
        mascotaSelect('mascota-jugador', 'hipodoge');
        iniciarBatalla();
    } else if(verificarMascota("capipepo")){
        mascotaSelect('mascota-jugador', 'capipepo');
        iniciarBatalla();
    } else if(verificarMascota("ratigueya")){
        mascotaSelect('mascota-jugador', 'ratigueya');
        iniciarBatalla();
    } else{
        alert("Selecciona una mascota")
    } 
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
