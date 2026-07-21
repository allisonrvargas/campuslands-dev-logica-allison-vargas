# Ejercicio 037: Estadísticas de Ranking - Arquitectura 3D

**Camper:** Antonio Canux 

## Analisis

- Entrada: Un arreglo numérico llamado `puntajes` que contiene las calificaciones individuales otorgadas a un modelo arquitectónico 3D.
- Proceso: Primero, verificar si el arreglo contiene elementos para evitar dividir entre cero al calcular el promedio. Luego, iterar a través del arreglo para sumar todos los valores y, simultáneamente, comparar cada valor para encontrar el puntaje más alto y el más bajo. Finalmente, dividir la suma total entre la longitud del arreglo para obtener la media (promedio), redondearla y usar condicionales para asignar una categoría.
- Salida: Un objeto que contiene `promedio_puntaje`, `puntaje_maximo`, `puntaje_minimo`, `clasificacion` y una `explicacion` de los datos extraídos.

## Reglas identificadas

1. **Validación de datos vacíos:** Si la longitud del arreglo es 0, las estadísticas se establecen en 0 automáticamente y se devuelve una clasificación de "sin calificar".
2. **Cálculo de Promedio:** Promedio = Suma total de los puntajes / Cantidad de puntajes.
3. **Escalas de Clasificación del Render:**
   - Promedio mayor o igual a 90: "render destacado"
   - Promedio mayor o igual a 75 y menor a 90: "render competitivo"
   - Promedio menor a 75: "requiere optimizacion"

## Pruebas

### Caso normal

Entrada:
- puntajes: `[85, 92, 78, 95, 88]`

Resultado esperado:
- promedio_puntaje: `87.6`
- puntaje_maximo: `95`
- puntaje_minimo: `78`
- clasificacion: `"render competitivo"`
- explicacion: `"De 5 evaluaciones, el promedio fue 87.6. El puntaje mas alto fue 95 y el mas bajo 78."`

### Caso borde

Entrada:
- puntajes: `[]` (Arreglo vacío)

Resultado esperado:
- promedio_puntaje: `0`
- puntaje_maximo: `0`
- puntaje_minimo: `0`
- clasificacion: `"sin calificar"`
- explicacion: `"No hay puntajes registrados para este render 3D."`

## Explicacion final

Esta solución aprovecha el poder de los ciclos (`for`) para realizar múltiples tareas en una sola pasada a través de los datos. En lugar de usar tres ciclos distintos o métodos nativos pesados (como ordenar todo el arreglo para sacar el min/max), el bucle suma y compara simultáneamente. Esto es muy eficiente en términos de rendimiento (complejidad O(n)) y es ideal para sistemas que procesan estadísticas de ranking en tiempo real, validando además el borde donde no existan datos para mantener la estabilidad del programa.