# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo numérico `kms` (kilómetros de cada unidad) y un valor numérico `maximo` (límite permitido).
* **Proceso**: Identificación del valor máximo, filtrado de unidades que exceden el umbral y evaluación de necesidad de renovación basada en la mayoría del inventario.
* **Salida**: Objeto con `moto_con_mas_km`, `total_en_riesgo`, `estado_inventario` y una `explicacion` del hallazgo.

## Reglas identificadas

1. Si el arreglo de entrada está vacío, el sistema debe retornar un mensaje de error ("Inventario vacío").
2. Se considera que el inventario requiere "Renovación urgente" si más de la mitad de las unidades superan el kilometraje máximo permitido.
3. Se debe calcular correctamente el valor máximo de kilometraje presente en el arreglo.

## Pruebas

### Caso normal

* **Entrada**: `kms: [10000, 50000, 60000], maximo: 40000`
* **Resultado esperado**: `{ moto_con_mas_km: 60000, total_en_riesgo: 2, estado_inventario: "Renovación urgente", ... }`

### Caso borde

* **Entrada**: `kms: [5000, 10000], maximo: 40000`
* **Resultado esperado**: `{ moto_con_mas_km: 10000, total_en_riesgo: 0, estado_inventario: "Estado óptimo", ... }`

## Explicacion final

La solución funciona mediante la combinación de funciones de búsqueda (`Math.max`) y filtrado (`filter`), lo que permite aislar las unidades que representan un riesgo técnico y aplicar una regla de decisión proporcional sobre el total del inventario para determinar su estado operativo.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Ejemplo manual**: En `[10000, 50000, 60000]` con límite `40000`, dos unidades superan el límite. Como $2 > (3 / 2)$, el estado es `"Renovación urgente"`.