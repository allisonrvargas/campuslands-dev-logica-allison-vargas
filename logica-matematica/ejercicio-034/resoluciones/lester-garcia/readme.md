# Plantilla de solucion

## Analisis

- **Entrada:**
  - Largo del diseño.
  - Ancho del diseño.
  - Cantidad de sesiones.

- **Proceso:**
  - Calcular el area del diseño.
  - Calcular el perimetro del diseño.
  - Evaluar varias condiciones utilizando el area, el perimetro y la cantidad de sesiones.
  - Determinar la categoria correspondiente.

- **Salida:**
  - Area.
  - Perimetro.
  - Categoria.
  - Explicacion del resultado.

## Reglas identificadas

1. El area se calcula multiplicando el largo por el ancho y el perimetro se obtiene con `2 × (largo + ancho)`.
2. Si el area es mayor o igual a 200 y la cantidad de sesiones es mayor o igual a 3, la categoria es **diseño grande**.
3. Si no cumple ambas condiciones pero el perimetro es mayor o igual a 50, la categoria es **diseño mediano**; en otro caso, la categoria es **diseño pequeño**.

## Pruebas

### Caso normal

**Entrada:**

largo: 18

ancho: 12

sesiones: 3

**Resultado esperado:**

area: 216

perimetro: 60

categoria: diseño grande

explicacion: se calcularon el area y el perimetro del diseño y se evaluaron junto con la cantidad de sesiones.

### Caso borde

**Entrada:**

largo: 15

ancho: 10

sesiones: 2

**Resultado esperado:**

area: 150

perimetro: 50

categoria: diseño mediano

explicacion: se calcularon el area y el perimetro del diseño y se evaluaron junto con la cantidad de sesiones.

## Explicacion final

La solucion recibe el largo, el ancho y la cantidad de sesiones necesarias para realizar el tatuaje. Primero calcula el area y el perimetro del diseño mediante las formulas correspondientes. Luego evalua varias condiciones: para clasificar el diseño como **diseño grande** debe cumplir simultaneamente con un area minima y una cantidad minima de sesiones. Si solo cumple el criterio del perimetro, se clasifica como **diseño mediano**; en caso contrario, se considera un **diseño pequeño**. Finalmente se muestran todos los resultados obtenidos.