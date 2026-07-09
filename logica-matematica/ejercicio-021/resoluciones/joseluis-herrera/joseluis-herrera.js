function calcularPuntosTorneo(kills, objetivos, multiplicadorRacha) {
    let puntosBaseKills = kills * 15;
    let puntosBaseObjetivos = objetivos * 40;
    
    let totalBruto = puntosBaseKills + puntosBaseObjetivos;
    let totalFinal = totalBruto;

    if (multiplicadorRacha === "Fuego") {
        totalFinal = totalBruto * 1.25;
    } else if (multiplicadorRacha === "Imparable") {
        totalFinal = totalBruto * 1.50;
    }

    if (kills === 0 && objetivos === 0) {
        totalFinal = 0;
    } else if (kills > 20) {
        totalFinal += 50; 
    }

    return Math.round(totalFinal);
}

let killsPartida = 22;
let objetivosPartida = 2;
let rachaActual = "Fuego";

let resultadoPuntos = calcularPuntosTorneo(killsPartida, objetivosPartida, rachaActual);

console.log("Kills:", killsPartida);
console.log("Objetivos:", objetivosPartida);
console.log("Racha:", rachaActual);
console.log("Total de Puntos Asignados:", resultadoPuntos);