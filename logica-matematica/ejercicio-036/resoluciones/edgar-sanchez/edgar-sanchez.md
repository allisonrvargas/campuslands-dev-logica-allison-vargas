
# Plantilla de solucion: Problema 45

## Analisis
El problema consiste en desarrollar un módulo de cotización y presupuesto automatizado para un estudio de animación 3D. El sistema debe procesar las solicitudes de renderizado de escenas calculando el costo base según el volumen de fotogramas (frames) y aplicar descuentos escalonados basados en la complejidad técnica y el volumen de producción. Finalmente, debe evaluar si el presupuesto del cliente es suficiente para cubrir la orden tras aplicar los beneficios fiscales o comerciales.

- Entrada: Un objeto con los datos de la orden (`cantidadFrames` [entero], `tipoRender` [texto: "Stylized" o "Photorealistic"], `motorRender` [texto], y `presupuestoCliente` [entero]).
- Proceso:
  1. Validar que la cantidad de fotogramas y el presupuesto sean valores coherentes.
  2. Calcular el costo base multiplicando los fotogramas por la tarifa del tipo de renderizado.
  3. Evaluar e integrar descuentos por volumen o penalizaciones por complejidad de procesamiento.
- Salida: Un reporte financiero que detalla el costo final, el descuento aplicado, y un indicador booleano que determina si el proyecto es viable con el presupuesto del cliente.

## Reglas identificadas
1. Tarifas Base por Estilo: El costo por frame depende exclusivamente del tipo de render:
   - `"Stylized"` $\rightarrow$ \$2.50 USD por frame.
   - `"Photorealistic"` $\rightarrow$ \$4.50 USD por frame.
2. Descuentos y Recargos Escalonados: Se aplican de forma sucesiva sobre el costo base acumulado:
   - Descuento por Volumen: Si la `cantidadFrames` es mayor a 500, se aplica un **15% de descuento** sobre el costo base.
   - Recargo de Motor de Alta Fidelidad: Si el `tipoRender` es `"Photorealistic"` y el `motorRender` es `"Unreal Engine 5"` o `"Blender Cycles"`, se añade un **10% de recargo** por consumo de GPU (calculado sobre el costo base original).
3. Viabilidad Económica: El proyecto se marca como viable (`aprobado = true`) si el costo final neto es menor o igual al `presupuestoCliente`.
4. Control de Datos Negativos: Si la `cantidadFrames` o el `presupuestoCliente` son menores o iguales a cero, el costo final es 0.0 y el proyecto se rechaza inmediatamente de forma automática.

## Pruebas

### Caso 1: Volumen alto con render fotorrealista y recargo de motor
Entrada: orden = `{"cantidadFrames": 1000, "tipoRender": "Photorealistic", "motorRender": "Blender Cycles", "presupuestoCliente": 4000}`
Explicación:
- Costo Base: $1000 \times 4.50 = 4500$.
- Descuento Volumen (15%): $4500 \times 0.15 = 675$.
- Recargo Motor (10%): $4500 \times 0.10 = 450$.
- Costo Final: $4500 - 675 + 450 = 4275$.
- Viabilidad: El costo (\$4275) supera el presupuesto (\$4000).
Resultado esperado: `{ "costoBase": 4500.0, "costoFinal": 4275.0, "descuentoTotal": 675.0, "aprobado": false }`

### Caso 2: Animación estilizada pequeña dentro del presupuesto
Entrada: orden = `{"cantidadFrames": 200, "tipoRender": "Stylized", "motorRender": "Eevee", "presupuestoCliente": 600}`
Explicación: Costo Base = $200 \times 2.50 = 500$. No hay descuentos ni recargos. El presupuesto de 600 cubre los 500 del costo.
Resultado esperado: `{ "costoBase": 500.0, "costoFinal": 500.0, "descuentoTotal": 0.0, "aprobado": true }`

## Explicacion final
La solución estructura un árbol de decisiones financieras impecable. Al manejar los porcentajes de descuento y recargo indexados directamente al costo base estático, el algoritmo evita distorsiones matemáticas o acumulaciones desproporcionadas, permitiendo al estudiante verificar paso a paso la trazabilidad del presupuesto final.