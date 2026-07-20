function obtenerRankingRendimiento(equipos) {
    return equipos.map(equipo => {
        const totalPartidos = equipo.ganados + equipo.empatados + equipo.perdidos;
        const porcentajeEfectividad = totalPartidos > 0 
            ? ((equipo.ganados * 3 + equipo.empatados) / (totalPartidos * 3)) * 100 
            : 0;
            
        return {
            nombre: equipo.nombre,
            efectividad: porcentajeEfectividad.toFixed(2) + "%"
        };
    });
}

const equipos = [
    { nombre: "Equipo A", ganados: 8, empatados: 1, perdidos: 1 },
    { nombre: "Equipo B", ganados: 5, empatados: 2, perdidos: 3 }
];

console.log(obtenerRankingRendimiento(equipos));