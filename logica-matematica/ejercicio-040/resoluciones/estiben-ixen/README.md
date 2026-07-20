# Resolución Ejercicio: Simulación de Comida Urbana

## Como pensaste el problema
Se modeló el negocio como una función de flujo de caja. Identifiqué tres variables críticas: margen unitario, volumen de ventas (demanda por hora) y riesgo operativo (ratio costo/precio). La lógica asegura que no solo se calcule la ganancia, sino que se valide la sostenibilidad del puesto.

## Reglas aplicadas
1. **Margen:** Diferencia entre precio de venta y costo de insumos.
2. **Bono por eficiencia:** Si el puesto vende más de 20 unidades por hora, se bonifica un 10% adicional a la ganancia total.
3. **Validación de riesgo:** Si los insumos consumen más del 60% del precio de venta, el modelo marca el negocio como "no rentable" independientemente de la ganancia, para proteger la sostenibilidad a largo plazo.

## Como ejecutar o revisar tu solucion
1. Asegúrate de tener Node.js.
2. Ejecuta: `shen.js`.

## Que casos probaste
- **Caso normal:** Margen saludable y demanda estándar.
- **Caso borde:** Producto con costos demasiado elevados (costo/precio > 0.6), lo que dispara la alerta de riesgo operativo.