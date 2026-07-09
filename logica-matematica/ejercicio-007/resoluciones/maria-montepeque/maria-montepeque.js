//Ejercicio 007: Secuencias Numéricas - Playlist Musical

function analizarSecuenciaPlaylist(playlist) {
    // 1. Guardrail Estructural Inicial
    if (!Array.isArray(playlist) || playlist.length === 0) {
        return {
            estado: "Error",
            motivo: "La playlist se encuentra vacía o el formato de entrada es inválido."
        };
    }

    let duracionTotalSegundos = 0;
    let secuenciaCorrecta = true;
    const bitacoraErrores = [];
    const secuenciaFormateada = [];
    let totalCancionesValidas = 0;

    // 2. Recorrido lineal algebraico O(N) con aislamiento preventivo de excepciones
    for (let i = 0; i < playlist.length; i++) {
        const cancion = playlist[i];
        
        if (!cancion || typeof cancion !== "object") {
            secuenciaCorrecta = false;
            bitacoraErrores.push({
                cancion: "Elemento Corrupto",
                indiceActual: "N/A",
                indiceCorrecto: i + 1
            });
            continue;
        }

        const pistaEsperada = totalCancionesValidas + 1; 
        const pistaActual = Number(cancion.pista);
        const duracion = Number(cancion.duracionSegundos);
        const titulo = String(cancion.titulo || `Pista Desconocida`).trim();

        if (isNaN(duracion) || duracion <= 0) {
            return {
                estado: "Error",
                motivo: `La canción en la posición ${i} ("${titulo}") posee una duración inválida.`
            };
        }

        const minutos = Math.floor(duracionTotalSegundos / 60);
        const segundos = duracionTotalSegundos % 60;
        const tiempoInicioFormato = `${minutos}:${segundos.toString().padStart(2, '0')}`;

        duracionTotalSegundos += duracion;
        totalCancionesValidas++;

        if (isNaN(pistaActual) || pistaActual !== pistaEsperada) {
            secuenciaCorrecta = false;
            bitacoraErrores.push({
                cancion: titulo,
                indiceActual: cancion.pista,
                indiceCorrecto: pistaEsperada
            });
        }

        secuenciaFormateada.push({
            pista: cancion.pista, 
            titulo: titulo,
            tiempoInicio: tiempoInicioFormato
        });
    }

    const minutosTotales = Math.floor(duracionTotalSegundos / 60);
    const segundosTotales = duracionTotalSegundos % 60;
    const tiempoTotalFormato = `${minutosTotales}:${segundosTotales.toString().padStart(2, '0')}`;

    // 3. Retorno del reporte analítico estandarizado
    return {
        auditoria: {
            totalCanciones: totalCancionesValidas,
            duracionTotalSegundos,
            duracionTotalFormato: tiempoTotalFormato,
            secuenciaConsecutiva: secuenciaCorrecta
        },
        ...(!secuenciaCorrecta && bitacoraErrores.length > 0 ? { erroresSecuencia: bitacoraErrores } : {}),
        flujoReproduccion: secuenciaFormateada
    };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 007 ---");

const pruebas = [
    {
        tipo: "Caso Normal (Guía) - Playlist Correcta y Sincronizada",
        playlist: [
            { pista: 1, titulo: "Blinding Lights", duracionSegundos: 200 },
            { pista: 2, titulo: "Starboy", duracionSegundos: 230 },
            { pista: 3, titulo: "One Dance", duracionSegundos: 174 }
        ]
    },
    {
        tipo: "Caso Borde 1 (Guía) - Playlist con Secuencia Numérica Rota",
        playlist: [
            { pista: 1, titulo: "Intro", duracionSegundos: 90 },
            { pista: 3, titulo: "Hit single", duracionSegundos: 210 },
            { pista: 3, titulo: "Outro", duracionSegundos: 120 }     
        ]
    },
    {
        tipo: "Caso Crítico - Inyección de Elemento Nulo Intermedio (Prevención de Crash)",
        playlist: [
            { pista: 1, titulo: "Track A", duracionSegundos: 180 },
            null, 
            { pista: 2, titulo: "Track B", duracionSegundos: 210 }
        ]
    },
    {
        tipo: "Caso Borde 2 (Guía) - Colección Estructural Vacía",
        playlist: []
    }
];

pruebas.forEach(({ tipo, playlist }) => {
    console.log(`\n[${tipo}]`);
    console.log(JSON.stringify(analizarSecuenciaPlaylist(playlist), null, 2));
});