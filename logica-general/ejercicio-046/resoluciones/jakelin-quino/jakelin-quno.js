function buscarHiperdeportivo(catalogo, nombreBuscado) {
    const umbralPotencia = 1000;

    for (let i = 0; i < catalogo.length; i++) {
        if (catalogo[i].nombre === nombreBuscado) {
            const esHiper = catalogo[i].hp >= umbralPotencia;
            return {
                encontrado: true,
                nombre: catalogo[i].nombre,
                esHiperdeportivo: esHiper,
                motivo: esHiper ? "Cumple estándar de potencia." : "Potencia insuficiente para categoría hiper."
            };
        }
    }
    return { encontrado: false, mensaje: "Auto no localizado en catálogo." };
}

const inventario = [
    { nombre: "Bugatti Chiron", hp: 1500 },
    { nombre: "Rimac Nevera", hp: 1900 },
    { nombre: "Audi R8", hp: 600 }
];

console.log(buscarHiperdeportivo(inventario, "Rimac Nevera"));
console.log(buscarHiperdeportivo(inventario, "Tesla Model S"));