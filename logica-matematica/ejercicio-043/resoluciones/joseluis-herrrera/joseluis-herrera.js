const jugadores = [
    { nombre: "Alpha", scores: [120, 150, 130, 140] },
    { nombre: "Beta", scores: [100, 200, 110, 250] },
    { nombre: "Gamma", scores: [130, 140] },
    { nombre: "Delta", scores: [160, 170, 165, 175] }
];

let analizarRendimiento = (j) => {
    if (j.scores.length < 3) return "Muestra Insuficiente";
    
    let suma = j.scores.reduce((a, b) => a + b, 0);
    let promedio = suma / j.scores.length;
    
    let sorted = [...j.scores].sort((a, b) => a - b);
    let mid = Math.floor(sorted.length / 2);
    let mediana = sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
    
    let esConsistente = Math.abs(promedio - mediana) < 10;
    return esConsistente ? "Consistente" : "Inestable";
};

if (jugadores.length === 0) {
    console.log("No hay jugadores registrados en el torneo.");
} else {
    jugadores.forEach((jugador) => {
        let resultado = analizarRendimiento(jugador);
        console.log(`Jugador ${jugador.nombre}: ${resultado}`);
    });
}   