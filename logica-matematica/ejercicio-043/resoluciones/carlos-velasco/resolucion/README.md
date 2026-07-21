# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo numérico `tiempos` y un valor numérico `umbral`.
* **Proceso**: Cálculo estadístico de tendencia central (promedio y mediana) y categorización binaria por comparación de la mediana contra el umbral.
* **Salida**: Objeto detallado con `promedio`, `mediana`, `clasificacion` y una `explicacion` del proceso.

## Reglas identificadas

1. Si no hay datos (arreglo vacío), retornar un mensaje de error "Sin datos".
2. La mediana debe calcularse correctamente considerando si la cantidad de elementos es par o impar.
3. La clasificación es "Larga" si la mediana es estrictamente mayor al umbral; de lo contrario, es "Estándar".

## Pruebas

### Caso normal

* **Entrada**: `tiempos: [20, 25, 30, 40, 50], umbral: 30`
* **Resultado esperado**: `{ promedio: "33.00", mediana: 30, clasificacion: "Estándar", ... }`

### Caso borde

* **Entrada**: `tiempos: [10, 12, 15], umbral: 30`
* **Resultado esperado**: `{ promedio: "12.33", mediana: 12, clasificacion: "Estándar", ... }`

## Explicacion final

La solución funciona combinando métodos de ordenamiento y reducción para obtener medidas estadísticas precisas, aplicando luego una lógica de comparación simple que categoriza la duración del proceso de manera objetiva y robusta ante valores atípicos.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Ejemplo manual (mediana impar)**: En `[10, 12, 15]`, el centro es `12`. Como `12` no es mayor a `30`, la clasificación es `"Estándar"`.