const clasificarJugador = (jugador) => {
    if (jugador.partidasJugadas <= 0) {
        return { estado: "Sin clasificar", motivo: "El jugador no ha jugado ninguna partida." };
    }

    if (jugador.reportes > 5) {
        return { estado: "Baneado", motivo: "Exceso de reportes acumulados." };
    }

    const winRate = (jugador.victorias / jugador.partidasJugadas) * 100;

    if (jugador.partidasJugadas < 20 && winRate >= 80) {
        return { 
            estado: "En revisión (Smurf)", 
            motivo: `Win rate anormalmente alto (${winRate.toFixed(1)}%) en una cuenta nueva.` 
        };
    }

    let rango = "";
    if (winRate >= 60) rango = "Rango Alto";
    else if (winRate >= 40) rango = "Rango Medio";
    else rango = "Rango Bajo";

    return { 
        estado: rango, 
        motivo: `Clasificación basada en un win rate del ${winRate.toFixed(1)}%.` 
    };
};

console.log(clasificarJugador({ nombre: "Faker", partidasJugadas: 15, victorias: 13, reportes: 0 })); 
console.log(clasificarJugador({ nombre: "NoobMaster69", partidasJugadas: 100, victorias: 45, reportes: 2 })); 
console.log(clasificarJugador({ nombre: "TrollGamer", partidasJugadas: 50, victorias: 20, reportes: 10 }));