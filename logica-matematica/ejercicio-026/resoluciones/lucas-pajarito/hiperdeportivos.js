const autos = [
    {
        modelo: "Bugatti Chiron",
        velocidadKmh: 420
    },
    {
        modelo: "Koenigsegg Jesko",
        velocidadKmh: 483
    },
    {
        modelo: "Hennessey Venom F5",
        velocidadKmh: 500
    },
    {
        modelo: "Rimac Nevera",
        velocidadKmh: 412
    },
    {
        modelo: "SSC Tuatara",
        velocidadKmh: 455
    }
];

function convertirVelocidades(autos) {

    console.log("=== AUTOS HIPERDEPORTIVOS ===");

    autos.forEach(auto => {

        const velocidadMs = auto.velocidadKmh / 3.6;
        const velocidadMph = auto.velocidadKmh * 0.621371;

        console.log(`Modelo: ${auto.modelo}`);
        console.log(`Velocidad: ${auto.velocidadKmh} km/h`);
        console.log(`Velocidad: ${velocidadMs.toFixed(2)} m/s`);
        console.log(`Velocidad: ${velocidadMph.toFixed(2)} mph`);
        console.log("------------------------------------");

    });

}

convertirVelocidades(autos);