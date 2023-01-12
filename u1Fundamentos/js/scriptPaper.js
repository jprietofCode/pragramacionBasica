// ----- FUNCTION ------
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function eleccion(jugada){
    let resultado = "";
    if(jugada === 1){
        resultado = "Piedra";
    }else if(jugada === 2){
        resultado = "Papel";
    }else if(jugada === 3){
        resultado = "Tijera";
    }else{
        resultado = "MAL ELEGIDO";
    }
    return resultado;
}

function combate(pc, player){
    let status = "";
    if(pc === player){
        status = "EMPATE";
    }else if ((player === 1 && pc === 3) || (player === 2 && pc === 1) || (player === 3 && pc === 2)){
        status = "GANASTE"
    }else{
        status = "PERDISTE"
    }
    return status
}
// 1. piedra, 2 es papel y 3 es tiejera
let jugador = 0;
let pc = 0;
let triunfos = 0;
let perdidas = 0;

//  Ganar 3 veces
while(triunfos < 3 && perdidas < 3){
    pc = aleatorio(1,3);
    // player
    jugador = parseInt(prompt("Elige una opción:\n 1. Para piedra\n 2. Para Papel\n 3. Para Tijera"));
    //console.log(jugador);
    alert("PC elige: " + eleccion(pc));
    alert("Tu eliges " + eleccion(jugador));
    // Combat
    alert(combate(pc, jugador));

    if(combate(pc, jugador) === "GANASTE"){
        triunfos += 1;
    }else if(combate(pc, jugador) === "PERDISTE"){
        perdidas += 1;
    }
}
alert("Ganaste: " + triunfos + " veces \n Perdiste: " + perdidas + " veces.");