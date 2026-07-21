# Redondeo y Precisión - Viajes y Turismo

## Autor:

Sergio Ajú

## Descripción
Calculadora de precios para servicios turísticos que garantiza la precisión financiera mediante el uso de redondeo bancario estándar (dos decimales).

## Reglas Aplicadas
- **Cálculo:** Se aplica el impuesto antes de la conversión de moneda para evitar errores de redondeo acumulados.
- **Redondeo:** Se utiliza `Math.round(n * 100) / 100` para asegurar precisión en centavos.

## Ejecución
Ejecuta `node nombre-apellido.js`. La función `calcularPrecioFinal` procesa el costo, el porcentaje de impuesto y la tasa de cambio.

## Casos Probados
- **Normal:** Conversión de divisas con impuestos aplicados correctamente.
- **Borde:** Manejo de valores nulos o costos cero.