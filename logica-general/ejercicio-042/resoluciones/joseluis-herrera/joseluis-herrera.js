const equipos = [
    { nombre: "Leones FC", ganados: 5, empatados: 2, rojas: 1, jugados: 7 },
    { nombre: "Tiburones", ganados: 8, empatados: 0, rojas: 6, jugados: 8 },
    { nombre: "Halcones", ganados: -1, empatados: 2, rojas: 0, jugados: 3 },
    { nombre: "Dragones", ganados: 4, empatados: 3, rojas: 10, jugados: 2 }
];

let validar_equipo = (e) => {
    if (e.ganados < 0 || e.empatados < 0 || e.rojas < 0 || e.jugados < 0) return "Datos Corruptos";
    if (e.rojas > e.jugados) return "Datos Corruptos";
    return "Apto";
};

let calcular_puntos = (e) => {
    let puntos = (e.ganados * 3) + (e.empatados * 1);
    if (e.rojas > 5) puntos -= 3;
    return puntos;
};

if (equipos.length === 0) {
    console.log("No hay equipos registrados en la liga.");
} else {
    equipos.forEach((equipo) => {
        let estado = validar_equipo(equipo);
        if (estado === "Apto") {
            console.log(`${equipo.nombre}: ${estado} | Puntos: ${calcular_puntos(equipo)}`);
        } else {
            console.log(`${equipo.nombre}: ${estado}`);
        }
    });
}