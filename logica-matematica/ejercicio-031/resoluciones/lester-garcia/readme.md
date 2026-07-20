# Plantilla de solucion

## Analisis

- **Entrada:**
  - Cantidad de golpes directos.
  - Cantidad de golpes circulares.
  - Cantidad de tecnicas especiales.

- **Proceso:**
  - Calcular las combinaciones entre golpes directos y golpes circulares.
  - Sumar las tecnicas especiales al total de combinaciones.
  - Evaluar varias condiciones para clasificar la estrategia.
  - Mostrar los resultados obtenidos.

- **Salida:**
  - Combinaciones.
  - Total de combinaciones.
  - Categoria.
  - Explicacion del resultado.

## Reglas identificadas

1. Las combinaciones se obtienen multiplicando los golpes directos por los golpes circulares.
2. El total de combinaciones se calcula sumando las tecnicas especiales al numero de combinaciones.
3. Si el total de combinaciones es mayor o igual a 30 y existen al menos 2 tecnicas especiales, la categoria es **estrategia avanzada**. Si no cumple ambas condiciones pero el total de combinaciones es mayor o igual a 20, la categoria es **estrategia intermedia**; en otro caso, la categoria es **estrategia basica**.

## Pruebas

### Caso normal

**Entrada:**

golpesDirectos: 6

golpesCirculares: 5

tecnicasEspeciales: 2

**Resultado esperado:**

combinaciones: 30

total_combinaciones: 32

categoria: estrategia avanzada

explicacion: se calcularon las combinaciones posibles y se evaluo la cantidad de tecnicas especiales para determinar la categoria.

### Caso borde

**Entrada:**

golpesDirectos: 4

golpesCirculares: 5

tecnicasEspeciales: 0

**Resultado esperado:**

combinaciones: 20

total_combinaciones: 20

categoria: estrategia intermedia

explicacion: se calcularon las combinaciones posibles y se evaluo la cantidad de tecnicas especiales para determinar la categoria.

## Explicacion final

La solucion recibe la cantidad de golpes directos, golpes circulares y tecnicas especiales. Primero calcula las combinaciones posibles mediante una multiplicacion y luego incorpora las tecnicas especiales al total. Finalmente evalua varias condiciones: para clasificar la estrategia como **estrategia avanzada** debe cumplir simultaneamente con un numero minimo de combinaciones y de tecnicas especiales. Si solo cumple el total de combinaciones requerido, se clasifica como **estrategia intermedia**; en caso contrario, como **estrategia basica**.