# Plantilla de solucion

## Analisis

* **Entrada**: `goles` (número), `tiros` (número) y `bono` (factor multiplicador decimal).
* **Proceso**: Cálculo del porcentaje base de conversión, incremento mediante un bono de rendimiento y determinación de la categoría según un umbral de éxito.
* **Salida**: Objeto con `efectividad_final`, `clasificacion` y una `explicacion` descriptiva.

## Reglas identificadas

1. Si los tiros son 0, la efectividad es 0 y la clasificación es "Competitivo".
2. El porcentaje base se calcula como `(goles / tiros) * 100`, ajustado luego por el bono: `base + (base * bono)`.
3. La clasificación es "Élite" si la efectividad final es mayor a 50; de lo contrario, es "Competitivo".

## Pruebas

### Caso normal

* **Entrada**: `goles: 5, tiros: 10, bono: 0.1`
* **Resultado esperado**: `{ efectividad_final: "55.00", clasificacion: "Élite", ... }`

### Caso borde

* **Entrada**: `goles: 0, tiros: 10, bono: 0.1`
* **Resultado esperado**: `{ efectividad_final: "0.00", clasificacion: "Competitivo", ... }`

## Explicacion final

La solución funciona mediante una lógica aritmética que transforma datos crudos en una métrica porcentual ajustada; el manejo preventivo de la división por cero garantiza la estabilidad del sistema ante estadísticas nulas.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Ejemplo manual**: `(5 / 10) * 100 = 50`. Luego, `50 + (50 * 0.1) = 55`.