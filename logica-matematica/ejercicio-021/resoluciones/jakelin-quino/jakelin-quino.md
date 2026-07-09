## Analisis

- Entrada: Un arreglo de cantidades de ingredientes, un arreglo de precios unitarios y una tarifa fija.
- Proceso: Multiplicar cada cantidad por su respectivo precio y acumular el resultado. Finalmente, sumar la tarifa fija de servicio.
- Salida: El costo total de ingredientes y el costo final para el cliente.

## Reglas identificadas

1. El costo de ingredientes es la sumatoria del producto de `cantidad[i] * precio[i]`.
2. El costo final es la suma del costo de ingredientes más la tarifa fija.

## Pruebas

### Caso normal

Entrada:
ingredientes: [5, 2, 3]
precioUnitario: [2000, 1500, 3000]
tarifaFijaServicio: 5000

Resultado esperado:
costo_total_ingredientes: 22000
costo_final_cliente: 27000

### Caso borde

Entrada:
ingredientes: [0, 0]
precioUnitario: [2000, 1500]
tarifaFijaServicio: 5000

Resultado esperado:
costo_total_ingredientes: 0
costo_final_cliente: 5000

## Explicacion final

Para esta simulación, utilicé un ciclo `for` para recorrer los arreglos de ingredientes y precios simultáneamente, acumulando el costo total. La estructura es escalable: si añadimos más ingredientes a la lista, el código sigue funcionando correctamente sin cambios.