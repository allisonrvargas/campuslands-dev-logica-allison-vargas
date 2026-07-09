# Plantilla de solucion

## Analisis

- **Entrada:**
  - Cantidad de clientes.
  - Consumo promedio por cliente.

- **Proceso:**
  - Calcular el ingreso estimado multiplicando la cantidad de clientes por el consumo promedio.
  - Comparar el ingreso obtenido con el valor establecido.
  - Determinar la categoria correspondiente.

- **Salida:**
  - Ingreso estimado.
  - Categoria.
  - Explicacion del resultado.

## Reglas identificadas

1. El ingreso estimado se obtiene multiplicando la cantidad de clientes por el consumo promedio.
2. Si el ingreso estimado es mayor o igual a 500, la categoria es **ventas altas**.
3. Si el ingreso estimado es menor a 500, la categoria es **ventas normales**.

## Pruebas

### Caso normal

**Entrada:**

clientes: 45

consumoPromedio: 12

**Resultado esperado:**

ingreso_estimado: 540

categoria: ventas altas

explicacion: se simulo el ingreso estimado multiplicando la cantidad de clientes por el consumo promedio.

### Caso borde

**Entrada:**

clientes: 20

consumoPromedio: 10

**Resultado esperado:**

ingreso_estimado: 200

categoria: ventas normales

explicacion: se simulo el ingreso estimado multiplicando la cantidad de clientes por el consumo promedio.

## Explicacion final

La solucion recibe la cantidad de clientes y el consumo promedio por cliente. Con estos datos simula el ingreso estimado mediante una multiplicacion. Posteriormente compara el resultado con el umbral definido para clasificar el nivel de ventas y muestra todos los resultados solicitados.