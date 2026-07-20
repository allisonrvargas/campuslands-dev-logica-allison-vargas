function validarRanking(equipos) {
    return equipos.map(equipo => {
        const maxPuntosPosibles = equipo.partidosJugados * 3;
        
        if (equipo.puntos < 0 || equipo.partidosJugados < 0) {
            return { ...equipo, estado: "invalido", motivo: "valores negativos" };
        }
        if (equipo.puntos > maxPuntosPosibles) {
            return { ...equipo, estado: "invalido", motivo: "puntos exceden el maximo permitido" };
        }
        
        return { ...equipo, estado: "valido" };
    });
}
const lista = [
    {nombre: "Los Galacticos", puntos: 9, partidosJugados: 3},
    {nombre: "Tramposos FC", puntos: 15, partidosJugados: 3}
];
console.log(validarRanking(lista));