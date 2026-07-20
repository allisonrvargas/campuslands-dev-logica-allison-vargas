Analisis

    Entrada: Un objeto con el nombre de la película, su calificacion_critica (0-10), votos_audiencia (int) y popularidad (0-100).

    Proceso: Calcular un puntaje ponderado, aplicar un multiplicador basado en la escala de audiencia (efecto de masa) y categorizar el resultado final.

    Salida: Un objeto con el nombre, el puntaje final calculado y su categoría de impacto.

Reglas identificadas

    Ponderación Base: El puntaje combina crítica (peso 60%) y popularidad (peso 40%).

    Multiplicador de Audiencia: - Más de 1M de votos: +20% (Blockbuster).

        Menos de 5K votos: -20% (Nicho).

    Clasificación: Basada en el puntaje final resultante (≥80, ≥50, <50).

Pruebas
Caso normal

Entrada: pelicula: {nombre: "Interstellar", calificacion_critica: 8.5, votos_audiencia: 1500000, popularidad: 90}

Resultado esperado: puntaje_ajustado: 100.8, categoria: "Obra Maestra"
Caso borde

Entrada: pelicula: {nombre: "Cine Arte Oculto", calificacion_critica: 4.0, votos_audiencia: 100, popularidad: 20}

Resultado esperado: puntaje_ajustado: 22.4, categoria: "Bajo Radar"

---------------

Explicacion final

La solución implementa una lógica de negocio donde la calidad percibida (crítica) y el impacto social (popularidad/votos) no son tratados igual. Al usar un multiplicador, logramos simular cómo la cantidad de votos puede "elevar" o "castigar" la relevancia de una película en el ecosistema del cine, permitiendo distinguir entre obras de gran masa crítica y joyas ocultas de nicho.

----------

Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.