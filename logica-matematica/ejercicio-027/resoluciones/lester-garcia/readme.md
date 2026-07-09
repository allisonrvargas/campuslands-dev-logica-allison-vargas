# Plantilla de solucion

## Analisis

- **Entrada:**
  - Cantidad de canciones.
  - Valor de incremento de la secuencia.

- **Proceso:**
  - Generar una secuencia numerica utilizando el incremento indicado.
  - Obtener el ultimo valor de la secuencia.
  - Evaluar varias condiciones utilizando el ultimo valor y la cantidad de canciones.
  - Determinar el estado correspondiente.

- **Salida:**
  - Secuencia generada.
  - Ultimo valor.
  - Estado.
  - Explicacion del resultado.

## Reglas identificadas

1. La secuencia se genera multiplicando cada posicion por el incremento.
2. Si el ultimo valor es mayor o igual a 30 y la cantidad de canciones es mayor o igual a 10, el estado es **playlist completa**.
3. Si no cumple ambas condiciones pero el ultimo valor es mayor o igual a 20, el estado es **playlist intermedia**; en otro caso, el estado es **playlist corta**.

## Pruebas

### Caso normal

**Entrada:**

canciones: 10

incremento: 3

**Resultado esperado:**

secuencia: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]

ultimo_valor: 30

estado: playlist completa

explicacion: se genero una secuencia numerica con un incremento constante y se evaluaron el ultimo valor y la cantidad de canciones.

### Caso borde

**Entrada:**

canciones: 7

incremento: 3

**Resultado esperado:**

secuencia: [3, 6, 9, 12, 15, 18, 21]

ultimo_valor: 21

estado: playlist intermedia

explicacion: se genero una secuencia numerica con un incremento constante y se evaluaron el ultimo valor y la cantidad de canciones.

## Explicacion final

La solucion recibe la cantidad de canciones y el valor de incremento. A continuacion genera una secuencia numerica multiplicando cada posicion por el incremento y obtiene el ultimo elemento de la secuencia. Finalmente evalua varias condiciones: para ser **playlist completa** debe cumplir simultaneamente con un ultimo valor minimo y una cantidad suficiente de canciones. Si solo cumple el criterio del ultimo valor, se clasifica como **playlist intermedia**; en caso contrario, como **playlist corta**. Se muestran la secuencia generada y los resultados finales.