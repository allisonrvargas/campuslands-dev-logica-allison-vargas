const viajes = [
    {
        destino: "Antigua Guatemala",
        distancia: 45.678,
        tiempo: 1.256
    },
    {
        destino: "Lago de Atitlán",
        distancia: 128.934,
        tiempo: 2.783
    },
    {
        destino: "Semuc Champey",
        distancia: 241.567,
        tiempo: 5.428
    },
    {
        destino: "Tikal",
        distancia: 530.893,
        tiempo: 8.945
    },
    {
        destino: "Monterrico",
        distancia: 112.349,
        tiempo: 2.154
    }
];

function analizarViajes(viajes) {

    console.log("=== VIAJES Y TURISMO ===");

    viajes.forEach(viaje => {

        const distanciaRedondeada = Math.round(viaje.distancia);
        const tiempoRedondeado = Math.round(viaje.tiempo);

        console.log(`Destino: ${viaje.destino}`);
        console.log(`Distancia exacta: ${viaje.distancia.toFixed(3)} km`);
        console.log(`Tiempo exacto: ${viaje.tiempo.toFixed(3)} horas`);
        console.log(`Distancia redondeada: ${distanciaRedondeada} km`);
        console.log(`Tiempo redondeado: ${tiempoRedondeado} horas`);
        console.log("----------------------------------------");

    });

}

analizarViajes(viajes);