const equipos = [
    { nombre: "Alpha", ganadas: 4, perdidas: 1, racha: 4, juegoSucio: 1 },
    { nombre: "Beta", ganadas: 2, perdidas: 3, racha: 1, juegoSucio: 3 },
    { nombre: "Gamma", ganadas: 0, perdidas: 5, racha: 0, juegoSucio: 0 },
    { nombre: "Delta", ganadas: 5, perdidas: 0, racha: 5, juegoSucio: 5 }
];

let calcular_presupuesto = (e) => {
    let base = (e.ganadas * 3000) + (e.perdidas * 1500);
    
    if (e.racha > 3) base += 1000;
    if (e.juegoSucio > 2) base -= 500;
    
    return base < 0 ? 0 : base;
};

if (equipos.length === 0) {
    console.log("No hay equipos registrados en el sistema.");
} else {
    equipos.forEach((equipo) => {
        let presupuesto = calcular_presupuesto(equipo);
        console.log(`Equipo ${equipo.nombre}: Presupuesto final ${presupuesto} créditos.`);
    });
}