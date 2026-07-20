# Plantilla de solucion

## Analisis

- **Entrada:**
  - Distancia recorrida.
  - Cantidad de combustible consumido.

- **Proceso:**
  - Calcular el rendimiento dividiendo la distancia entre el combustible consumido.
  - Redondear el rendimiento al entero mas cercano utilizando `Math.round()`.
  - Evaluar varias condiciones utilizando el rendimiento redondeado y la distancia.
  - Determinar la categoria correspondiente.

- **Salida:**
  - Rendimiento.
  - Rendimiento redondeado.
  - Categoria.
  - Explicacion del resultado.

## Reglas identificadas

1. El rendimiento se obtiene dividiendo la distancia recorrida entre el combustible consumido y luego se redondea con `Math.round()`.
2. Si el rendimiento redondeado es mayor o igual a 27 y la distancia es mayor o igual a 450, la categoria es **viaje eficiente**.
3. Si no cumple ambas condiciones pero el rendimiento redondeado es mayor o igual a 25, la categoria es **viaje recomendado**; en otro caso, la categoria es **viaje estandar**.

## Pruebas

### Caso normal

**Entrada:**

distancia: 486.8

combustible: 18.2

**Resultado esperado:**

rendimiento: 26.747252747252748

rendimiento_redondeado: 27

categoria: viaje eficiente

explicacion: se calculo el rendimiento del viaje, se redondeo al entero mas cercano y se evaluaron varias condiciones.

### Caso borde

**Entrada:**

distancia: 300

combustible: 12

**Resultado esperado:**

rendimiento: 25

rendimiento_redondeado: 25

categoria: viaje recomendado

explicacion: se calculo el rendimiento del viaje, se redondeo al entero mas cercano y se evaluaron varias condiciones.

## Explicacion final

La solucion recibe la distancia recorrida y la cantidad de combustible consumido. Primero calcula el rendimiento del viaje mediante una division y posteriormente redondea el resultado al entero mas cercano con `Math.round()`. Luego evalua varias condiciones: para clasificar el viaje como **viaje eficiente** debe cumplir simultaneamente el rendimiento minimo y la distancia requerida. Si solo cumple el criterio del rendimiento, se clasifica como **viaje recomendado**; en caso contrario, como **viaje estandar**. Finalmente se muestran todos los resultados obtenidos.