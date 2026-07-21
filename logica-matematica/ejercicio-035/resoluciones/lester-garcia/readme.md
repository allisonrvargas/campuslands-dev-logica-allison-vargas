# Plantilla de solucion

## Analisis

- **Entrada:**
  - Velocidad de trabajo.
  - Tiempo empleado.
  - Cantidad de pausas realizadas.

- **Proceso:**
  - Calcular la distancia utilizando la formula velocidad × tiempo.
  - Evaluar la distancia obtenida.
  - Verificar la cantidad de pausas.
  - Determinar la categoria correspondiente.

- **Salida:**
  - Distancia.
  - Categoria.
  - Explicacion del resultado.

## Reglas identificadas

1. La distancia se calcula multiplicando la velocidad por el tiempo.
2. Si la distancia es mayor o igual a 45 y la cantidad de pausas es menor o igual a 1, la categoria es **proyecto rapido**.
3. Si no cumple ambas condiciones pero la distancia es mayor o igual a 30, la categoria es **proyecto constante**; en otro caso, la categoria es **proyecto inicial**.

## Pruebas

### Caso normal

**Entrada:**

velocidad: 8

tiempo: 6

pausas: 1

**Resultado esperado:**

distancia: 48

categoria: proyecto rapido

explicacion: se calculo la distancia recorrida mediante la relacion entre velocidad y tiempo y se evaluo la cantidad de pausas.

### Caso borde

**Entrada:**

velocidad: 6

tiempo: 5

pausas: 3

**Resultado esperado:**

distancia: 30

categoria: proyecto constante

explicacion: se calculo la distancia recorrida mediante la relacion entre velocidad y tiempo y se evaluo la cantidad de pausas.

## Explicacion final

La solucion recibe la velocidad de trabajo, el tiempo empleado y la cantidad de pausas realizadas. Primero calcula la distancia utilizando la formula **velocidad × tiempo**. Luego evalua varias condiciones: para clasificar el resultado como **proyecto rapido** debe cumplir simultaneamente una distancia minima y un numero reducido de pausas. Si solo cumple el requisito de distancia, se clasifica como **proyecto constante**; en caso contrario, como **proyecto inicial**. Finalmente se muestran la distancia calculada, la categoria y la explicacion del resultado.