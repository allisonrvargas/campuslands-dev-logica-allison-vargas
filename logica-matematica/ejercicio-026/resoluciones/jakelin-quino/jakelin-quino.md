## Analisis

- Entrada: Un arreglo con velocidades en km/h y el factor de conversión constante.
- Proceso: Iterar sobre el arreglo aplicando la fórmula $mph = km/h \times 0.621371$, almacenar resultados y clasificar el vehículo basándose en la velocidad máxima.
- Salida: Arreglo de velocidades en mph, la velocidad máxima registrada y la categoría del auto.

## Reglas identificadas

1. Factor de conversión: $1 \text{ km/h} \approx 0.621371 \text{ mph}$.
2. Si la velocidad máxima es > 250 mph, el auto es "hiperdeportivo extremo".
3. En caso contrario, es "deportivo estándar".

## Pruebas

### Caso normal

Entrada:
velocidadesKmH: [400, 350, 420]

Resultado esperado:
velocidades_en_mph: ["248.55", "217.48", "260.98"]
maxima_velocidad_mph: 260.98
clasificacion: hiperdeportivo extremo

### Caso borde

Entrada:
velocidadesKmH: [100]

Resultado esperado:
velocidades_en_mph: ["62.14"]
maxima_velocidad_mph: 62.14
clasificacion: deportivo estándar

## Explicacion final

Para resolver este problema, utilicé un ciclo `for` para recorrer el arreglo de entrada y realizar la conversión unitaria, aplicando `toFixed(2)` para mantener solo dos decimales, lo que mejora la legibilidad. Finalmente, utilicé el operador ternario para clasificar el vehículo de manera eficiente en función de la velocidad máxima hallada con `Math.max()`.