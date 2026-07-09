const equipos = [
    {
        nombre: "Dragons",
        puntaje: 95
    },
    {
        nombre: "Titans",
        puntaje: 82
    },
    {
        nombre: "Phoenix",
        puntaje: 88
    },
    {
        nombre: "Warriors",
        puntaje: 91
    },
    {
        nombre: "Legends",
        puntaje: 84
    }
];

function calcularEstadisticas(equipos) {

    console.log("=== TORNEO DE ESPORTS ===");

    let suma = 0;
    const puntajes = [];

    equipos.forEach(equipo => {

        suma += equipo.puntaje;
        puntajes.push(equipo.puntaje);

        console.log(`Equipo: ${equipo.nombre}`);
        console.log(`Puntaje: ${equipo.puntaje}`);
        console.log("-------------------------------");

    });

    const promedio = suma / equipos.length;

    puntajes.sort((a, b) => a - b);

    let mediana;

    if (puntajes.length % 2 === 0) {

        const mitad = puntajes.length / 2;

        mediana = (puntajes[mitad - 1] + puntajes[mitad]) / 2;

    } else {

        mediana = puntajes[Math.floor(puntajes.length / 2)];

    }

    console.log(`Promedio: ${promedio.toFixed(2)}`);
    console.log(`Mediana: ${mediana}`);

}

calcularEstadisticas(equipos);