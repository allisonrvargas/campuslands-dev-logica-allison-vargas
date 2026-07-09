const equipos = [
    {
        nombre: "Tigres FC",
        partidos: 20,
        ganados: 15
    },
    {
        nombre: "Leones FS",
        partidos: 20,
        ganados: 12
    },
    {
        nombre: "Águilas United",
        partidos: 18,
        ganados: 14
    },
    {
        nombre: "Halcones FC",
        partidos: 22,
        ganados: 16
    },
    {
        nombre: "Panteras",
        partidos: 19,
        ganados: 10
    }
];

function calcularRendimiento(equipos) {

    console.log("=== RANKING DE FÚTBOL SALA ===");

    equipos.forEach(equipo => {

        const porcentajeVictorias = (equipo.ganados / equipo.partidos) * 100;
        const proporcionVictorias = `${equipo.ganados}:${equipo.partidos}`;

        console.log(`Equipo: ${equipo.nombre}`);
        console.log(`Partidos jugados: ${equipo.partidos}`);
        console.log(`Partidos ganados: ${equipo.ganados}`);
        console.log(`Proporción de victorias: ${proporcionVictorias}`);
        console.log(`Porcentaje de victorias: ${porcentajeVictorias.toFixed(2)}%`);
        console.log("--------------------------------");
    });

}

calcularRendimiento(equipos);