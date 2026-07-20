Analisis

    Entrada: Un arreglo de objetos, donde cada objeto tiene un titulo y su duracion en segundos.

    Proceso: Sumar la duración total, calcular el promedio de duración por canción y validar si la playlist sigue una secuencia de duración ascendente (cada canción es igual o más larga que la anterior).

    Salida: Un objeto con la duración total, el promedio y un booleano indicando si la secuencia es creciente.

Reglas identificadas

    Calculo de sumatoria: Acumulador de todas las duraciones.

    Promedio: División de la duración total entre el número de canciones.

    Validación de secuencia: Comparación iterativa donde duracioni​≤duracioni+1​. Si algún elemento es menor que el anterior, la secuencia se marca como no válida.

Pruebas
Caso normal

Entrada: canciones: [{titulo: "A", duracion: 180}, {titulo: "B", duracion: 200}, {titulo: "C", duracion: 220}]

Resultado esperado: duracion_total: 600, promedio: 200, secuencia_valida: true
Caso borde

Entrada: canciones: [{titulo: "A", duracion: 300}, {titulo: "B", duracion: 150}]

Resultado esperado: duracion_total: 450, promedio: 225, secuencia_valida: false
Explicacion final

La solución utiliza un ciclo de verificación simple para comprobar la propiedad de orden creciente en la secuencia. Este enfoque es eficiente, ya que utiliza un "flag" (esSecuenciaCreciente) que se detiene inmediatamente si encuentra una ruptura en el orden, optimizando el rendimiento. Este tipo de lógica es fundamental para organizar bibliotecas musicales o preparar bloques de transmisión donde se busca una progresión temática o de intensidad.

Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.

