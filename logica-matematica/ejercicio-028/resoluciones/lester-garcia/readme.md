# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo con las calificaciones de la pelicula.

- **Proceso:**
  - Recorrer el arreglo de calificaciones.
  - Convertir cada calificacion en una letra segun su valor.
  - Construir el patron de puntuacion.
  - Evaluar varias condiciones sobre el patron.
  - Determinar la categoria correspondiente.

- **Salida:**
  - Patron de puntuacion.
  - Categoria.
  - Explicacion del resultado.

## Reglas identificadas

1. Si una calificacion es mayor o igual a 9 se representa con **A**; si esta entre 7 y 8 se representa con **B**; en otro caso se representa con **C**.
2. Si el patron comienza con **AA** y termina con **A**, la categoria es **obra maestra**.
3. Si no cumple la regla anterior pero el patron contiene **AAA**, la categoria es **muy recomendada**; en otro caso, la categoria es **recomendada**.

## Pruebas

### Caso normal

**Entrada:**

calificaciones: [10, 9, 8, 9, 10]

**Resultado esperado:**

patron: AABAA

categoria: obra maestra

explicacion: se genero un patron de puntuacion y se evaluaron varias condiciones sobre la secuencia obtenida.

### Caso borde

**Entrada:**

calificaciones: [9, 8, 9]

**Resultado esperado:**

patron: ABA

categoria: recomendada

explicacion: se genero un patron de puntuacion y se evaluaron varias condiciones sobre la secuencia obtenida.

## Explicacion final

La solucion recorre el arreglo de calificaciones y transforma cada valor en una letra para construir un patron de puntuacion. Luego analiza varias condiciones sobre la cadena generada: primero verifica si el patron inicia con **AA** y finaliza con **A**; si no es asi, comprueba si contiene la secuencia **AAA**. Dependiendo del resultado de estas validaciones, asigna la categoria correspondiente y muestra todos los resultados obtenidos.