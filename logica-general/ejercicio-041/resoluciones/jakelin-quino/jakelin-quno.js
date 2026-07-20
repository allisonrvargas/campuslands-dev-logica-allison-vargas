function clasificarJugador(nombre, victorias, partidasTotales, nivelExperiencia) {
    let winRate = 0;
    
    if (partidasTotales > 0) {
        winRate = (victorias / partidasTotales) * 100;
    }
    if (winRate >= 70 && nivelExperiencia >= 50) {
        return { jugador: nombre, categoria: "Elite" };
    }
    if (winRate >= 50 && nivelExperiencia >= 20) {
        return { jugador: nombre, categoria: "Veterano" };
    }
    return { jugador: nombre, categoria: "Principiante" };
}

console.log(clasificarJugador("ProPlayer", 80, 100, 60));
console.log(clasificarJugador("Newbie", 5, 20, 5));