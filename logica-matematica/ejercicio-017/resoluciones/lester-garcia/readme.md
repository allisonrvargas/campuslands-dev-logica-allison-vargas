# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo con las puntuaciones obtenidas por proyectos de arquitectura 3D.

- **Proceso:**
  - Recorrer el arreglo para calcular la suma de las puntuaciones.
  - Identificar la puntuación máxima y la mínima.
  - Calcular el promedio.
  - Comparar el promedio con el valor establecido.
  - Determinar la categoría correspondiente.

- **Salida:**
  - Promedio.
  - Puntuación máxima.
  - Puntuación mínima.
  - Categoría.
  - Explicación del resultado.

## Reglas identificadas

1. El promedio se obtiene sumando todas las puntuaciones y dividiendo entre la cantidad de elementos.
2. Durante el recorrido del arreglo se identifican la puntuación máxima y la mínima.
3. Si el promedio es mayor o igual a 85, la categoría es **proyecto destacado**; de lo contrario, es **proyecto en progreso**.

## Pruebas

### Caso normal

**Entrada:**

puntuaciones: [78, 92, 85, 88, 95]

**Resultado esperado:**

promedio: 87.6

puntuacion_maxima: 95

puntuacion_minima: 78

categoria: proyecto destacado

explicacion: se calcularon el promedio, la puntuacion maxima y la minima para evaluar el ranking.

### Caso borde

**Entrada:**

puntuaciones: [80]

**Resultado esperado:**

promedio: 80

puntuacion_maxima: 80

puntuacion_minima: 80

categoria: proyecto en progreso

explicacion: se calcularon el promedio, la puntuacion maxima y la minima para evaluar el ranking.

## Explicacion final

La solucion recibe un arreglo con las puntuaciones de los proyectos y lo recorre una sola vez para calcular la suma, identificar la puntuacion maxima y la minima. Con la suma obtiene el promedio y luego compara este valor con el umbral establecido para clasificar el proyecto. Finalmente muestra todas las estadisticas solicitadas junto con la categoria correspondiente.