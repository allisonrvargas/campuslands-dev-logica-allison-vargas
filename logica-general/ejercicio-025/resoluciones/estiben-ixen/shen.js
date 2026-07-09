function ordenarReparaciones(vehiculos) {
    const prioridades = { "emergencia": 3, "mantenimiento": 2, "revision": 1 };

    return vehiculos.sort((a, b) => {
        if (prioridades[b.tipo] !== prioridades[a.tipo]) {
            return prioridades[b.tipo] - prioridades[a.tipo];
        }
        return a.tiempoEstimado - b.tiempoEstimado;
    });
}

const taller = [
    { placa: "ABC-123", tipo: "mantenimiento", tiempoEstimado: 60 },
    { placa: "XYZ-789", tipo: "emergencia", tiempoEstimado: 120 },
    { placa: "LMN-456", tipo: "emergencia", tiempoEstimado: 30 }
];

console.log(ordenarReparaciones(taller));
