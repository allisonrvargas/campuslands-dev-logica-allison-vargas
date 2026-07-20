function buscarHiperdeportivos(catalogo, requisitos) {
    return catalogo.filter(auto => {
        const cumpleVelocidad = auto.velocidadMaxima >= requisitos.minVelocidad;
        const cumplePotencia = auto.potenciaCaballos >= requisitos.minPotencia;
        const esHibrido = requisitos.soloHibridos ? auto.esHibrido === true : true;

        return cumpleVelocidad && cumplePotencia && esHibrido;
    });
}

const catalogoHiper = [
    { modelo: "Bugatti Chiron", velocidadMaxima: 490, potenciaCaballos: 1500, esHibrido: false },
    { modelo: "Rimac Nevera", velocidadMaxima: 412, potenciaCaballos: 1914, esHibrido: true },
    { modelo: "Koenigsegg Jesko", velocidadMaxima: 480, potenciaCaballos: 1600, esHibrido: false }
];

const busqueda = { minVelocidad: 450, minPotencia: 1500, soloHibridos: false };

console.log(buscarHiperdeportivos(catalogoHiper, busqueda));
