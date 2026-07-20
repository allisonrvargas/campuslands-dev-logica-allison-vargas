# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo numérico `puntajes`, un número `bono` y un número `penalizacion`.
* **Proceso**: Cálculo del promedio aritmético, conteo de valores inferiores a 5 para aplicar penalizaciones, normalización del resultado a un mínimo de 0 y clasificación final.
* **Salida**: Un objeto que contiene el `puntaje_final` (formateado), la `clasificacion` asignada y una `explicacion` del proceso de penalización.

## Reglas identificadas

1. El puntaje se calcula como: `(Promedio de puntajes) + bono - (Cantidad de críticas < 5 * penalizacion)`.
2. Si el puntaje resultante es menor a cero, debe normalizarse a `0`.
3. Clasificación: "> 8" es "Obra Maestra", "> 5" es "Buena", de lo contrario es "Decepción".

## Pruebas

### Caso normal

* **Entrada**: `puntajes: [8, 9, 4], bono: 1, penalizacion: 2`
* **Resultado esperado**: `{ puntaje_final: "6.00", clasificacion: "Buena", ... }`

### Caso borde

* **Entrada**: `puntajes: [2, 3], bono: 0, penalizacion: 5`
* **Resultado esperado**: `{ puntaje_final: "0.00", clasificacion: "Decepción", ... }`

## Explicacion final

La solución funciona mediante la combinación de métodos de reducción (`reduce`) para obtener la suma y filtrado (`filter`) para identificar las críticas negativas, permitiendo aplicar la fórmula de ajuste de forma precisa. La estructura condicional final asegura una categorización coherente de la película, mientras que el uso de `.toFixed(2)` garantiza un formato de salida estandarizado.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Ejemplo manual (caso normal)**:
* Promedio: $(8+9+4)/3 = 7$.
* Críticas negativas (< 5): `1` (el número 4).
* Cálculo final: $7 + 1 - (1 \times 2) = 6$.
* Como $6 > 5$ y $6 \leq 8$, la clasificación es `"Buena"`.