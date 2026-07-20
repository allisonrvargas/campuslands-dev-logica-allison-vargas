const organizarTaller = (vehiculos) => {
    let frenos = vehiculos.filter(v => v.averia === "frenos");
    let otrosUrgentes = vehiculos.filter(v => v.urgente && v.averia !== "frenos");
    let normales = vehiculos.filter(v => !v.urgente && v.averia !== "frenos");

    return [...frenos, ...otrosUrgentes, ...normales];
};

const fila = [
    { placa: "ABC-123", averia: "cambio aceite", urgente: false },
    { placa: "XYZ-789", averia: "frenos", urgente: false },
    { placa: "LMN-456", averia: "motor", urgente: true }
];

console.log(organizarTaller(fila));