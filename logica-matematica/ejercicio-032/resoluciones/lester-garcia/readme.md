# Plantilla de solucion

## Analisis

- **Entrada:**
  - Cantidad de saques exitosos.
  - Cantidad total de saques realizados.
  - Cantidad de partidos ganados.

- **Proceso:**
  - Calcular la probabilidad de exito dividiendo los saques exitosos entre el total de saques.
  - Evaluar la probabilidad obtenida.
  - Verificar la cantidad de partidos ganados.
  - Determinar la categoria correspondiente.

- **Salida:**
  - Probabilidad de exito.
  - Categoria.
  - Explicacion del resultado.

## Reglas identificadas

1. La probabilidad de exito se calcula dividiendo los saques exitosos entre el total de saques.
2. Si la probabilidad es mayor o igual a 0.75 y los partidos ganados son mayores o iguales a 5, la categoria es **jugador destacado**.
3. Si no cumple ambas condiciones pero la probabilidad es mayor o igual a 0.6, la categoria es **jugador competitivo**; en otro caso, la categoria es **jugador en desarrollo**.

## Pruebas

### Caso normal

**Entrada:**

saquesExitosos: 18

totalSaques: 24

partidosGanados: 5

**Resultado esperado:**

probabilidad: 0.75

categoria: jugador destacado

explicacion: se calculo la probabilidad de exito de los saques y se evaluo junto con la cantidad de partidos ganados.

### Caso borde

**Entrada:**

saquesExitosos: 12

totalSaques: 20

partidosGanados: 3

**Resultado esperado:**

probabilidad: 0.6

categoria: jugador competitivo

explicacion: se calculo la probabilidad de exito de los saques y se evaluo junto con la cantidad de partidos ganados.

## Explicacion final

La solucion recibe la cantidad de saques exitosos, el total de saques realizados y la cantidad de partidos ganados. Primero calcula la probabilidad de exito mediante una division. Luego evalua varias condiciones: para clasificar al jugador como **jugador destacado** debe cumplir simultaneamente con una probabilidad minima y un numero minimo de partidos ganados. Si solo cumple el criterio de la probabilidad, se clasifica como **jugador competitivo**; en caso contrario, como **jugador en desarrollo**. Finalmente muestra todos los resultados obtenidos.