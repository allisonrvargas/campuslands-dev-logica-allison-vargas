 ## Analisis

- Entrada: `horas` (duración del renderizado) y `costoPorHora` (tarifa base).
- Proceso: Cálculo del costo bruto y aplicación de una estructura de descuentos escalonada según la escala del proyecto.
- Salida: Objeto con el desglose del costo, porcentaje de descuento y total a pagar.

## Reglas identificadas

1. Tarifa base: El costo bruto es el producto de horas por la tarifa hora.
2. Descuento nivel 1: Si horas > 50 y <= 100, se aplica 10% de descuento.
3. Descuento nivel 2: Si horas > 100, se aplica 20% de descuento.
4. Caso base: Si horas <= 50, no aplica descuento (0%).



## Pruebas

### Caso normal (Proyecto grande)

Entrada:
horas: 120, costoPorHora: 50

Resultado esperado:
{ subtotal: "6000.00", descuentoAplicado: "20%", totalFinal: "4800.00" }

### Caso borde (Proyecto pequeño)

Entrada:
horas: 40, costoPorHora: 50

Resultado esperado:
{ subtotal: "2000.00", descuentoAplicado: "0%", totalFinal: "2000.00" }

## Explicacion final

La solución utiliza condicionales `if-else` para aplicar los descuentos de forma excluyente, asegurando que solo se aplique la tasa más favorable para el cliente. Esto optimiza la estimación de presupuestos para proyectos de animación 3D, donde la escalabilidad de las horas de renderizado es el factor determinante del costo.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.