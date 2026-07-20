const buscarAutos = (inventario, criterio) => {
    const resultados = inventario.filter(auto => 
        auto.velocidadMax >= criterio.minVelocidad && 
        auto.hp >= criterio.minHp
    );

    if (resultados.length === 0) {
        return { encontrado: false, mensaje: "No hay autos que cumplan con los requisitos." };
    }

    return { encontrado: true, autos: resultados };
};

const catalogo = [
    { modelo: "Bugatti Chiron", velocidadMax: 420, hp: 1500 },
    { modelo: "Koenigsegg Jesko", velocidadMax: 480, hp: 1600 },
    { modelo: "Rimac Nevera", velocidadMax: 412, hp: 1914 }
];

console.log(buscarAutos(catalogo, { minVelocidad: 450, minHp: 1500 }));
console.log(buscarAutos(catalogo, { minVelocidad: 400, minHp: 1400 }));