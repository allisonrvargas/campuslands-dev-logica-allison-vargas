const colaReparacion = [
    { placa: "ABC-123", emergencia: true, tiempoHoras: 4, clienteRecurrente: 2, esCorporativo: false, fallaCritica: false },
    { placa: "XYZ-789", emergencia: false, tiempoHoras: 8, clienteRecurrente: 5, esCorporativo: true, fallaCritica: true },
    { placa: "LMN-456", emergencia: false, tiempoHoras: 2, clienteRecurrente: 1, esCorporativo: false, fallaCritica: false },
    { placa: "DEF-000", emergencia: true, tiempoHoras: 6, clienteRecurrente: 0, esCorporativo: false, fallaCritica: true }
];

let calcularPrioridad = (v) => {
    let pp = (v.emergencia ? 100 : 0) + (v.tiempoHoras * 10) + (v.clienteRecurrente * 10);
    if (v.esCorporativo) pp -= 50;
    if (v.fallaCritica) pp *= 2.0;
    return pp;
};

if (colaReparacion.length === 0) {
    console.log("El taller está vacío.");
} else {
    // Ordenar de mayor a menor según el puntaje de prioridad
    const colaOrdenada = [...colaReparacion].sort((a, b) => 
        calcularPrioridad(b) - calcularPrioridad(a)
    );

    console.log("--- Orden de Atención ---");
    colaOrdenada.forEach((vehiculo, index) => {
        console.log(`${index + 1}. Placa: ${vehiculo.placa} | Prioridad: ${calcularPrioridad(vehiculo)}`);
    });
}