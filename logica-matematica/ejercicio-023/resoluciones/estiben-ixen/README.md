Analisis

    Entrada: Un arreglo de números representando los KDA o puntajes de desempeño de un jugador en diferentes partidas.

    Proceso: Calcular el promedio para ver el rendimiento general y la mediana para determinar el nivel real de habilidad, filtrando las variaciones extremas.

    Salida: Un objeto que contiene el promedio, la mediana y la clasificación (nivel) del jugador.

Reglas identificadas

    Cálculo de Media: Sumatoria total dividida entre el número de partidas.

    Cálculo de Mediana: Ordenar los puntajes de menor a mayor. Si el número de partidas es impar, es el valor central; si es par, es el promedio de los dos valores centrales.

    Clasificación de Nivel:

        Mediana >= 90: "profesional".

        70 <= Mediana < 90: "semi-pro".

        Mediana < 70: "amateur".

Pruebas
Caso normal

Entrada: puntajes: [85, 92, 78, 95, 88]

Resultado esperado: promedio: 87.6, mediana: 88, nivel: semi-pro
Caso borde

Entrada: puntajes: [100, 10, 100] (Un jugador con resultados muy inconsistentes)

Resultado esperado: promedio: 70, mediana: 100, nivel: profesional
Explicacion final

La solución es robusta porque utiliza la mediana como indicador principal para la clasificación. En el "Caso borde" mostrado, aunque el promedio es bajo debido a una partida mala (10), la mediana refleja que la mayoría de sus desempeños son de nivel alto (100). Esto es vital en esports para no penalizar injustamente a un jugador por un "mal día".
Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.