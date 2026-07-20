# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo con los puntajes obtenidos.
  - Un puntaje del arreglo que se desea normalizar.

- **Proceso:**
  - Identificar el puntaje minimo y el puntaje maximo.
  - Aplicar la formula de normalizacion.
  - Comparar el puntaje normalizado con el valor establecido.
  - Determinar la categoria correspondiente.

- **Salida:**
  - Puntaje normalizado.
  - Categoria.
  - Explicacion del resultado.

## Reglas identificadas

1. Se deben identificar el puntaje minimo y el puntaje maximo del conjunto.
2. El puntaje normalizado se calcula con la formula `(puntaje - minimo) / (maximo - minimo)`.
3. Si el puntaje normalizado es mayor o igual a 0.8, la categoria es **alto rendimiento**; de lo contrario, es **rendimiento estandar**.

## Pruebas

### Caso normal

**Entrada:**

puntajes: [72, 85, 90, 78, 88]

puntaje: 90

**Resultado esperado:**

puntaje_normalizado: 1

categoria: alto rendimiento

explicacion: se normalizo un puntaje utilizando los valores minimo y maximo del conjunto.

### Caso borde

**Entrada:**

puntajes: [60, 70, 80, 90]

puntaje: 70

**Resultado esperado:**

puntaje_normalizado: 0.3333333333333333

categoria: rendimiento estandar

explicacion: se normalizo un puntaje utilizando los valores minimo y maximo del conjunto.

## Explicacion final

La solucion recibe un conjunto de puntajes e identifica el valor minimo y el maximo mediante un recorrido del arreglo. Luego aplica la formula de normalizacion para expresar el puntaje seleccionado en una escala entre 0 y 1. Finalmente compara el resultado con el umbral establecido para asignar la categoria correspondiente y mostrar los resultados obtenidos.