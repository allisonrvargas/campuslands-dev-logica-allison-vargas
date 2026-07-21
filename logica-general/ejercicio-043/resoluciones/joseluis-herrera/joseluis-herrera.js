const incidentes = [
    { partida: "E001", tipo: "Desconexión técnica", minuto: 5, esFinal: false },
    { partida: "E002", tipo: "Uso de Glitch", minuto: 20, esFinal: true },
    { partida: "E003", tipo: "Conducta Antideportiva", minuto: 30, esFinal: false },
    { partida: "E004", tipo: "Desconexión técnica", minuto: 15, esFinal: false }
];

let determinarVeredicto = (i) => {
    let ig = 0;
    if (i.tipo === "Desconexión técnica") ig = (i.minuto < 10) ? 2 : 1;
    else if (i.tipo === "Uso de Glitch") ig = 8;
    else if (i.tipo === "Conducta Antideportiva") ig = 10;
    
    if (i.esFinal) ig *= 2;

    if (ig >= 10) return "Descalificación inmediata";
    if (ig >= 5) return "Forzar Rematch";
    return "Validar resultado";
};

if (incidentes.length === 0) {
    console.log("No hay incidencias reportadas.");
} else {
    incidentes.forEach((incidente) => {
        let veredicto = determinarVeredicto(incidente);
        console.log(`Partida ${incidente.partida}: ${veredicto}`);
    });
}