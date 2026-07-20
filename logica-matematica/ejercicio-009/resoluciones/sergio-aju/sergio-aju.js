function procesarSalaCine(espectadores, capacidadSala) {
    if (capacidadSala <= 0) return "Error: La capacidad debe ser mayor a 0";
    const residuo = espectadores % capacidadSala;
    const gruposCompletos = Math.floor(espectadores / capacidadSala);

    let estado = "";
    if (residuo === 0) {
        estado = "Sala llena, inicio inmediato";
    } else if (residuo <= capacidadSala / 2) {
        estado = "Aforo parcial, aplicar descuento";
    } else {
        estado = "Alta demanda, habilitar sala extra";
    }

    return {
        espectadores: espectadores,
        estado_sala: estado,
        explicacion: `Con ${espectadores} personas en salas de ${capacidadSala}, quedan ${residuo} lugares libres.`
    };
}
console.log("Caso Normal:", procesarSalaCine(45, 20)); 
console.log("Caso Borde (Sala exacta):", procesarSalaCine(40, 20));