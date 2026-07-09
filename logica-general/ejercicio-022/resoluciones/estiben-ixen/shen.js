function ordenarRankingEquipos(equipos) {
    return equipos.sort((equipoA, equipoB) => {
        if (equipoB.puntos !== equipoA.puntos) {
            return equipoB.puntos - equipoA.puntos;
        }

        const diferenciaGolesA = equipoA.golesFavor - equipoA.golesContra;
        const diferenciaGolesB = equipoB.golesFavor - equipoB.golesContra;
        
        if (diferenciaGolesA !== diferenciaGolesB) {
            return diferenciaGolesB - diferenciaGolesA;
        }

        return equipoB.golesFavor - equipoA.golesFavor;
    });
}

const equiposCompetencia = [
    { nombre: "Tigres", puntos: 12, golesFavor: 8, golesContra: 2 },
    { nombre: "Leones", puntos: 12, golesFavor: 10, golesContra: 3 },
    { nombre: "Halcones", puntos: 9, golesFavor: 5, golesContra: 5 }
];

const equiposEmpatados = [
    { nombre: "A", puntos: 6, golesFavor: 3, golesContra: 1 },
    { nombre: "B", puntos: 6, golesFavor: 3, golesContra: 1 }
];

console.log(ordenarRankingEquipos(equiposCompetencia));
console.log(ordenarRankingEquipos(equiposEmpatados));
