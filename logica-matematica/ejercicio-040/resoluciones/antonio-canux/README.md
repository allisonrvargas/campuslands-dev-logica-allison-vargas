# Ejercicio 040: Simulaciones con Fórmulas - Comida Urbana

**Camper:** Antonio Canux

## Analisis

- Entrada: Cuatro valores numéricos: `racionesPreparadas` (cantidad de comida cocinada al iniciar el día), `costoPorRacion` (lo que le cuesta al vendedor hacer una unidad), `precioVenta` (precio al público) y `porcentajeDemanda` (qué porcentaje de lo preparado se logró vender).
- Proceso: Primero, se establecen barreras de validación para evitar escenarios irreales (como vender a un precio menor al costo de producción o tener demandas superiores al 100%). Luego, se utiliza el porcentaje de demanda para calcular las unidades realmente vendidas (redondeando hacia abajo, ya que no se puede vender media ración). Se calcula el gasto total basado en lo preparado y los ingresos basados en lo vendido. La diferencia entre ingresos y gastos define la ganancia neta y la clasificación del día.
- Salida: Un objeto que contiene `ganancia_neta`, `raciones_sobrantes`, `clasificacion` del día y una `explicacion` de los resultados financieros.

## Reglas identificadas

1. **Restricción Comercial:** El negocio es inviable si `costoPorRacion >= precioVenta`. El programa se detiene para evitar calcular simulaciones destinadas a la quiebra.
2. **Cálculo de Unidades Vendidas:** Las ventas reales son un porcentaje de la producción inicial. Se usa `Math.floor` para garantizar números enteros:
   $V = \lfloor P \times (\frac{D}{100}) \rfloor$ (donde V son vendidas, P preparadas y D demanda).
3. **Fórmula de Ganancia Neta:** La ganancia toma en cuenta el costo hundido de la comida que no se vendió. 
   $G = (\text{Vendidas} \times \text{Precio de Venta}) - (\text{Preparadas} \times \text{Costo por Racion})$
4. **Clasificación Financiera:**
   - Si Ganancia $> 0$: "dia de exito"
   - Si Ganancia $= 0$: "punto de equilibrio"
   - Si Ganancia $< 0$: "dia de perdidas"

## Pruebas

### Caso normal

Entrada:
- racionesPreparadas: `50`
- costoPorRacion: `2`
- precioVenta: `5`
- porcentajeDemanda: `80`

Resultado esperado:
- ganancia_neta: `100` (Gastos: 50 * 2 = 100. Ingresos: 40 * 5 = 200. Ganancia: 200 - 100 = 100)
- raciones_sobrantes: `10`
- clasificacion: `"dia de exito"`
- explicacion: `"Se prepararon 50 raciones. Con una demanda del 80%, se vendieron 40. La ganancia neta fue de $100."`

### Caso borde

Entrada:
- racionesPreparadas: `100`
- costoPorRacion: `3`
- precioVenta: `6`
- porcentajeDemanda: `20`

Resultado esperado:
- ganancia_neta: `-180` (Gastos: 100 * 3 = 300. Ingresos: 20 * 6 = 120. Ganancia: 120 - 300 = -180)
- raciones_sobrantes: `80`
- clasificacion: `"dia de perdidas"`
- explicacion: `"Se prepararon 100 raciones. Con una demanda del 20%, se vendieron 20. La ganancia neta fue de $-180."`

## Explicacion final

Esta solución funciona como un simulador de riesgos excelente. El uso de `Math.floor` es vital aquí: en el mundo físico de la comida urbana, no puedes vender 0.5 hamburguesas; es un número discreto. Al restar el costo de TODA la producción (y no solo de lo que se vendió) contra los ingresos de las ventas reales, la fórmula de `gananciaNeta` refleja el impacto económico real de la merma o desperdicio de comida. Además, las validaciones iniciales actúan como consultoría básica, evitando que el usuario simule escenarios de pérdida garantizada desde el diseño de precios.