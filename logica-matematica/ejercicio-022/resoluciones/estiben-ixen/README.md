Analisis

    Entrada: Un arreglo de números (puntajes de participantes), un número para bono y un número para penalización.

    Proceso: Calcular el promedio de los puntajes, sumar el bono, restar la penalización y determinar la categoría según el resultado final.

    Salida: Un objeto con el puntaje final calculado y la clasificación correspondiente.

Reglas identificadas

    Calculo base: El puntaje base es el promedio aritmético de los participantes.

    Ajustes: Se suma el bono y se resta la penalización al promedio obtenido.

    Clasificación: - 30 o más: "elite".

        20 a 29.99: "competitivo".

        Menos de 20: "en desarrollo".

Pruebas
Caso normal

Entrada: participantes: [12, 18, 25, 30], bono: 8, penalizacion: 3

Resultado esperado: puntaje_final: 25.75, clasificacion: competitivo
Caso borde

Entrada: participantes: [], bono: 8, penalizacion: 3

Resultado esperado: puntaje_final: 0, clasificacion: sin datos
Explicacion final

La solución utiliza el método .reduce() para sumar eficientemente los elementos del arreglo y calcular el promedio. Posteriormente, aplica las transformaciones aritméticas solicitadas (bono y penalización). Finalmente, mediante una estructura condicional if-else, se categoriza el resultado basándose en los rangos establecidos, asegurando que la salida sea un número formateado a dos decimales para mayor precisión. El manejo de casos borde, como un arreglo vacío, previene errores de división por cero.

Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.