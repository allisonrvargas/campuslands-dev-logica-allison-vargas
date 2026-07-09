//Ejercicio 009: Módulos y Divisibilidad - Maratón de Películas de Miedo 

function sincronizarMaratonTerror(cartelera, intervaloBloque) {
    const resultados = [];

    // 1. Mantiene el retorno como Array ante fallos críticos
    const bloqueLimpio = Number(intervaloBloque);
    if (isNaN(bloqueLimpio) || bloqueLimpio <= 0) {
        resultados.push({
            error: true,
            motivo: "El intervalo del bloque de sincronización debe ser un número entero mayor a cero."
        });
        return resultados;
    }

    if (!Array.isArray(cartelera) || cartelera.length === 0) {
        return resultados; 
    }

    // 2. Recorrido Lineal O(N) con protección contra datos corruptos u objetos nulos
    for (let i = 0; i < cartelera.length; i++) {
        const pelicula = cartelera[i];

        if (!pelicula || typeof pelicula !== "object") continue;

        const duracion = Number(pelicula.duracionMinutos);
        const titulo = String(pelicula.titulo || "Película Anónima").trim();

        if (isNaN(duracion) || duracion <= 0) continue;

        const minutosExcedentes = duracion % bloqueLimpio;
        const esDivisibleExacto = minutosExcedentes === 0;

        const bloquesCompletos = Math.floor(duracion / bloqueLimpio);

        let evaluacionSala = "Intervalo Asimétrico";
        let instruccionAcomodador = "";

        if (esDivisibleExacto) {
            evaluacionSala = "Sincronización Perfecta";
            instruccionAcomodador = "Transición inmediata. El metraje cubre exactamente los bloques asignados.";
        } else {
            const minutosFaltantesParaCuadrar = bloqueLimpio - minutosExcedentes;
            instruccionAcomodador = `Añadir una pausa técnica de ${minutosFaltantesParaCuadrar} minutos al finalizar para cuadrar la grilla.`;
        }

        resultados.push({
            titulo: titulo,
            duracionTotal: duracion,
            bloquesUtilizados: bloquesCompletos,
            residuoMinutos: minutosExcedentes,
            estadoSincronizacion: evaluacionSala,
            logistica: { instruccionAcomodador }
        });
    }

    return resultados;
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 009 ---");

const pruebas = [
    {
        tipo: "Caso Normal (Guía) - Combinación de Metrajes",
        cartelera: [
            { titulo: "El Despertar de la IA Terrorífica", duracionMinutos: 120 },
            { titulo: "Hacker Siniestro: Código Sangriento", duracionMinutos: 105 }
        ],
        intervalo: 30
    },
    {
        tipo: "Caso Crítico - Demostración del Error del Acomodador (100 Minutos)",
        cartelera: [
            { titulo: "La Sombra del Servidor", duracionMinutos: 100 }
        ],
        intervalo: 30
    },
    {
        tipo: "Caso Tolerancia a Fallos - Inyección de Tipos Mixtos y Strings Numéricos",
        cartelera: [
            { titulo: "Scream en la Nube", duracionMinutos: "90" },
            null, 
            { titulo: "Deep Web", duracionMinutos: -15 }
        ],
        intervalo: "30"
    },
    {
        tipo: "Caso Borde 1 (Guía) - División por Cero / Intervalo Inválido",
        cartelera: [{ titulo: "Test", duracionMinutos: 120 }],
        intervalo: 0
    },
    {
        tipo: "Caso Borde 2 (Guía) - Cartelera Vacía",
        cartelera: [],
        intervalo: 30
    }
];

pruebas.forEach(({ tipo, cartelera, intervalo }) => {
    console.log(`\n[${tipo}]`);
    console.log(JSON.stringify(sincronizarMaratonTerror(cartelera, intervalo), null, 2));
});