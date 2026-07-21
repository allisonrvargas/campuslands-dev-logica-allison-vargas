const jugadores = [
    { nombre: "Zero", victorias: 20, kda: 3.5, tiempo: 600, toxico: false },
    { nombre: "Nova", victorias: 15, kda: 2.0, tiempo: 300, toxico: false },
    { nombre: "Raze", victorias: 40, kda: 4.0, tiempo: 800, toxico: true },
    { nombre: "Vex", victorias: 5, kda: 1.0, tiempo: 50, toxico: false }
];

let calcular_sh = (j) => {
    if (j.toxico) return 0;
    let score = (j.victorias * 50) + (j.kda * 100);
    if (j.tiempo > 500) score *= 1.2;
    return score;
};

let obtener_rango = (score) => {
    if (score >= 1000) return "Élite";
    if (score >= 500) return "Veterano";
    return "Principiante";
};

if (jugadores.length === 0) {
    console.log("No hay registros de jugadores.");
} else {
    jugadores.forEach((jugador) => {
        if (jugador.victorias < 10) {
            console.log(`Jugador ${jugador.nombre}: Requiere más partidas.`);
        } else {
            let score = calcular_sh(jugador);
            let rango = obtener_rango(score);
            console.log(`Jugador ${jugador.nombre}: Rango ${rango} (Score: ${score})`);
        }
    });
}