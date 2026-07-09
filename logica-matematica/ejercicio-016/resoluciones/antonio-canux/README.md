# Ejercicio 016: Presupuestos y Descuentos - Animación 3D

**Camper:** Antonio Canux

## Analisis

- Entrada: Dos valores numéricos. `segundosAnimacion` (duración total del proyecto 3D) y `precioBasePorSegundo` (tarifa estándar del animador).
- Proceso: Primero, verificar que las entradas sean números positivos mayores a cero. Luego, multiplicar los segundos por el precio para obtener un costo bruto o base. Posteriormente, evaluar la duración total para determinar si aplica un porcentaje de descuento por volumen. Finalmente, restar el descuento al costo base para obtener el precio final del proyecto.
- Salida: Un objeto que contiene `costo_base`, `descuento_porcentaje`, `costo_final`, la `clasificacion` de la escala del proyecto y una `explicacion` textual detallando la factura.

## Reglas identificadas

1. **Validación de negocio:** No se pueden generar presupuestos para tiempos negativos, de 0 segundos, o con tarifas gratuitas en este modelo.
2. **Cálculo Base:** `costo base = segundos de animacion * precio por segundo`.
3. **Escala de Descuentos por Volumen:**
   - Si la animación dura más de 60 segundos (mayor a 1 minuto): 15% de descuento ("proyecto mayor").
   - Si la animación dura entre 30 y 60 segundos: 10% de descuento ("proyecto estandar").
   - Si la animación dura menos de 30 segundos: 0% de descuento ("proyecto corto").
4. **Aplicación del Descuento:** `costo final = costo base - (costo base * (porcentaje / 100))`.

## Pruebas

### Caso normal

Entrada:
- segundosAnimacion: `45`
- precioBasePorSegundo: `50`

Resultado esperado:
- costo_base: `2250`
- descuento_porcentaje: `10`
- costo_final: `2025`
- clasificacion: `"proyecto estandar"`
- explicacion: `"Para 45 segundos a $50 c/u, el costo base es $2250. Se aplica un descuento del 10%, dejando el total en $2025."`

### Caso borde

Entrada:
- segundosAnimacion: `0`
- precioBasePorSegundo: `30`

Resultado esperado:
- costo_base: `0`
- descuento_porcentaje: `0`
- costo_final: `0`
- clasificacion: `"datos invalidos"`
- explicacion: `"El tiempo de animacion y el precio base deben ser mayores a cero."`

## Explicacion final

La solución simula un sistema de facturación real. Utilizar condicionales (`if/else if/else`) permite establecer fácilmente los umbrales de descuento, asegurando que un proyecto nunca reciba dos descuentos superpuestos. Separar los cálculos del `costo_base` y el `costo_final` proporciona transparencia en los datos, permitiendo que tanto el cliente como el animador vean exactamente cuánto dinero se está ahorrando por el volumen de trabajo.