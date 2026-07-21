const equipos = [
    { nombre: "Leones FC", goles: 15, remates: 30, puntosBase: 50 },
    { nombre: "Tiburones", goles: 5, remates: 55, puntosBase: 40 },
    { nombre: "Halcones", goles: 2, remates: 20, puntosBase: 30 },
    { nombre: "Dragones", goles: 10, remates: 25, puntosBase: 60 }
];

let calcular_ranking_ofensivo = (e) => {
    let efectividad = e.remates > 0 ? (e.goles / e.remates) * 100 : 0;
    let puntajeFinal = e.puntosBase;

    if (efectividad > 40) puntajeFinal *= 1.5;
    if (efectividad < 15) puntajeFinal -= 10;
    if (e.remates > 50) puntajeFinal += 20;

    return { nombre: e.nombre, puntaje: puntajeFinal, efectividad: efectividad.toFixed(2) };
};

if (equipos.length === 0) {
    console.log("No hay registros de equipos para analizar.");
} else {
    equipos.forEach((equipo) => {
        let resultado = calcular_ranking_ofensivo(equipo);
        console.log(`${resultado.nombre}: Efectividad ${resultado.efectividad}% | Ranking Final: ${resultado.puntaje}`);
    });
}