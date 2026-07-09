function calcularEnfrentamientos(peleadores) {
    if (peleadores < 2) {
        return {
            total_enfrentamientos: 0,
            explicacion: "Se requieren al menos 2 peleadores para realizar un enfrentamiento."
        };
    }
    const total = (peleadores * (peleadores - 1)) / 2;

    return {
        total_enfrentamientos: total,
        explicacion: `Para ${peleadores} peleadores, existen ${total} combinaciones únicas de enfrentamientos.`
    };
}
console.log("Caso Normal (4 peleadores):", calcularEnfrentamientos(4));
console.log("Caso Borde (1 peleador):", calcularEnfrentamientos(1));