# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo de objetos `autos` con las propiedades `modelo`, `potenciaHp` y `velocidadKmh`.
* **Proceso**: Conversión aritmética de unidades (HP a KW y Km/h a MPH) mediante factores de conversión y clasificación categórica según un umbral de velocidad.
* **Salida**: Un nuevo arreglo de objetos con los valores convertidos y formateados, además de la categoría asignada.

## Reglas identificadas

1. La potencia en KW se obtiene multiplicando los HP por `0.7457`.
2. La velocidad en MPH se obtiene multiplicando los Km/h por `0.621371`.
3. Si la velocidad resultante en MPH es superior a `250`, la clasificación es "Hiper-Rápido"; de lo contrario, es "Súper-Deportivo".

## Pruebas

### Caso normal

* **Entrada**: `{ modelo: "Bugatti Chiron", potenciaHp: 1500, velocidadKmh: 420 }`
* **Resultado esperado**: `{ modelo: "Bugatti Chiron", potenciaKw: "1118.55", velocidadMph: "260.98", clasificacion: "Hiper-Rápido" }`

### Caso borde

* **Entrada**: `{ modelo: "Porsche 911", potenciaHp: 450, velocidadKmh: 290 }`
* **Resultado esperado**: `{ modelo: "Porsche 911", potenciaKw: "335.56", velocidadMph: "180.20", clasificacion: "Súper-Deportivo" }`

## Explicacion final

La solución funciona al utilizar el método `.map()` para iterar sobre cada objeto del inventario, aplicando las fórmulas de conversión necesarias y formateando los resultados a dos decimales, lo cual asegura una presentación técnica limpia y una clasificación precisa basada en los estándares de velocidad definidos.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Ejemplo manual (Bugatti)**: $1500 \times 0.7457 = 1118.55$ KW y $420 \times 0.621371 \approx 260.98$ MPH. Como $260.98 > 250$, se clasifica como `"Hiper-Rápido"`.