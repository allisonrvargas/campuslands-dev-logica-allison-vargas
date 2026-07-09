# Plantilla de solucion

## Analisis

- **Entrada:**
  - Duracion de la pelicula en minutos.
  - Cantidad de escenas de terror.

- **Proceso:**
  - Calcular el residuo de la division de la duracion entre 15 utilizando el operador modulo.
  - Verificar si la duracion es divisible entre 15.
  - Evaluar la cantidad de escenas de terror.
  - Determinar la clasificacion correspondiente.

- **Salida:**
  - Residuo.
  - Clasificacion.
  - Explicacion del resultado.

## Reglas identificadas

1. El residuo se obtiene utilizando el operador modulo (`%`) sobre la duracion y el numero 15.
2. Si el residuo es igual a 0 y la cantidad de escenas de terror es mayor o igual a 10, la clasificacion es **terror intenso**.
3. Si no cumple ambas condiciones pero el residuo es igual a 0, la clasificacion es **terror clasico**; en otro caso, la clasificacion es **terror ligero**.

## Pruebas

### Caso normal

**Entrada:**

duracion: 150

escenasTerror: 12

**Resultado esperado:**

residuo: 0

clasificacion: terror intenso

explicacion: se verifico la divisibilidad de la duracion mediante el operador modulo y se evaluo la cantidad de escenas de terror.

### Caso borde

**Entrada:**

duracion: 135

escenasTerror: 8

**Resultado esperado:**

residuo: 0

clasificacion: terror clasico

explicacion: se verifico la divisibilidad de la duracion mediante el operador modulo y se evaluo la cantidad de escenas de terror.

## Explicacion final

La solucion recibe la duracion de la pelicula y la cantidad de escenas de terror. Primero utiliza el operador modulo para comprobar si la duracion es divisible entre 15. Luego evalua una segunda condicion relacionada con la cantidad de escenas. Si ambas condiciones se cumplen, la pelicula se clasifica como **terror intenso**. Si solo se cumple la divisibilidad, se clasifica como **terror clasico**. En cualquier otro caso, la clasificacion es **terror ligero**, mostrando finalmente todos los resultados obtenidos.