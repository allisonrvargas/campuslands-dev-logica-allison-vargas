const motos = [
    {
        modelo: "Yamaha MT-03",
        velocidadMaxima: 180
    },
    {
        modelo: "Honda CB190R",
        velocidadMaxima: 140
    },
    {
        modelo: "Kawasaki Z400",
        velocidadMaxima: 190
    },
    {
        modelo: "Suzuki Gixxer 250",
        velocidadMaxima: 150
    },
    {
        modelo: "KTM Duke 390",
        velocidadMaxima: 170
    }
];

function analizarInventario(motos) {

    console.log("=== INVENTARIO DE MOTOS ===");

    let velocidadMayor = motos[0].velocidadMaxima;
    let velocidadMenor = motos[0].velocidadMaxima;

    motos.forEach(moto => {

        if (moto.velocidadMaxima > velocidadMayor) {
            velocidadMayor = moto.velocidadMaxima;
        }

        if (moto.velocidadMaxima < velocidadMenor) {
            velocidadMenor = moto.velocidadMaxima;
        }

        console.log(`Modelo: ${moto.modelo}`);
        console.log(`Velocidad máxima: ${moto.velocidadMaxima} km/h`);
        console.log("------------------------------");

    });

    const rango = velocidadMayor - velocidadMenor;

    console.log(`Velocidad máxima registrada: ${velocidadMayor} km/h`);
    console.log(`Velocidad mínima registrada: ${velocidadMenor} km/h`);
    console.log(`Rango de velocidades: ${rango} km/h`);

}

analizarInventario(motos);