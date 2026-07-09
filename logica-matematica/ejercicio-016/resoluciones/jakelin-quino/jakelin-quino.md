## Analisis

- Entrada: El costo base del proyecto y los parámetros de descuento.
- Proceso: Comparar el costo base con un límite. Si lo supera, aplicar el porcentaje de descuento y restar del costo original.
- Salida: El costo final tras aplicar la regla.

## Reglas identificadas

1. Si el costo base es mayor a 1000, se aplica un 10% de descuento.
2. Si el costo base es 1000 o menos, no se aplica descuento.

## Pruebas

### Caso normal

Entrada:
costoBase: 1500

Resultado esperado:
costo_base: 1500
costo_final: 1350

### Caso borde

Entrada:
costoBase: 1000

Resultado esperado:
costo_base: 1000
costo_final: 1000

## Explicacion final

Para resolver este ejercicio, utilicé una estructura condicional 'if'. Si la condición del presupuesto base se cumple, realizo la operación matemática de multiplicar por el porcentaje (0.10) y restar ese valor del costo inicial. Si no, simplemente mantengo el costo original. Es una lógica esencial para la gestión de servicios en estudios de animación.
