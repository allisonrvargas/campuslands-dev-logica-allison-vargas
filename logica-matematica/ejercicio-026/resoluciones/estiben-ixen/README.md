Analisis

    Entrada: Un objeto que contiene el nombre del modelo del auto y su velocidad máxima registrada en millas por hora (velocidadMph).

    Proceso: Aplicar el factor de conversión 1 mph=1.60934 km/h y clasificar el vehículo según los umbrales de velocidad definidos.

    Salida: Un objeto con el modelo, la velocidad convertida a kilómetros por hora y su categoría correspondiente.

Reglas identificadas

    Conversión: Multiplicar el valor en millas por hora por el factor de conversión constante.

    Clasificación por velocidad:

        ≥400 km/h: "hiperdeportivo extremo".

        300 km/h≤velocidad<400 km/h: "hiperdeportivo".

        <300 km/h: "deportivo de alto rendimiento".

Pruebas
Caso normal

Entrada: auto: {modelo: "Bugatti Chiron", velocidadMph: 261}

Resultado esperado: velocidad_kmh: 420.04, categoria: "hiperdeportivo extremo"
Caso borde

Entrada: auto: {modelo: "Porsche 911 Turbo", velocidadMph: 186}

Resultado esperado: velocidad_kmh: 299.34, categoria: "deportivo de alto rendimiento"
Explicacion final

La solución es eficaz porque separa la lógica de conversión matemática del proceso de categorización condicional. El uso de toFixed(2) asegura que el resultado final sea legible y preciso al manejar decimales, algo esencial cuando se trabaja con conversiones de unidades. La estructura permite escalar fácilmente si se decide agregar nuevas categorías o factores de corrección por altitud o condiciones de pista en el futuro.

Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.
