## Analisis

- Entrada: `precioBase` (número decimal) y `tasaImpuesto` (porcentaje en formato decimal).
- Proceso: Cálculo del costo total aplicando el impuesto y aplicando una regla de redondeo hacia arriba (ceiling) para asegurar la cobertura de gastos.
- Salida: Un objeto detallado con el desglose del costo final.

## Reglas identificadas

1. Precisión: Todos los cálculos intermedios se realizan con decimales para evitar pérdida de datos.
2. Redondeo: Se utiliza `Math.ceil()` para redondear hacia arriba al entero más próximo, garantizando que el presupuesto siempre cubra el costo total sin fracciones monetarias.
3. Formato: La tasa de impuesto se presenta en porcentaje para legibilidad del usuario final.

## Pruebas

### Caso normal

Entrada:
precioBase: 100.50, tasaImpuesto: 0.10

Resultado esperado:
{ precioOriginal: 100.50, impuestoAplicado: "10.0%", costoFinal: 111 }
(100.50 * 1.10 = 110.55 -> redondeo a 111)

### Caso borde

Entrada:
precioBase: 50.00, tasaImpuesto: 0.00

Resultado esperado:
{ precioOriginal: 50.00, impuestoAplicado: "0.0%", costoFinal: 50 }

## Explicacion final

La solución asegura la integridad financiera del servicio turístico. Al utilizar `Math.ceil()`, el sistema evita errores por subestimación de costos, algo crítico en la industria donde los precios pueden tener múltiples decimales. La normalización de datos permite que el sistema entregue valores enteros listos para transacciones.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.