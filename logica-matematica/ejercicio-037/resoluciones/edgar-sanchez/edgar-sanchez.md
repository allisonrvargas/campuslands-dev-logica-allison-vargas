# Plantilla de solucion: Problema 46

## Analisis
El problema plantea el diseño de un algoritmo avanzado para la facturación y optimización de recursos en proyectos de animación 3D. A diferencia de una cotización lineal, el sistema debe evaluar el costo dinámico de renderizado por capas (render passes), aplicar descuentos progresivos según la duración total del proyecto y penalizar la complejidad del entorno si requiere simulación de dinámicas (fuego, fluidos, cabello). Finalmente, se debe contrastar el costo final frente al presupuesto asignado para determinar la viabilidad operativa.

- Entrada: Un objeto con las propiedades del proyecto (`nombreEscena` [texto], `totalFrames` [entero], `capasRender` [entero], `requiereSimulacion` [booleano] y `presupuestoMaximo` [entero]).
- Proceso:
  1. Validar las dimensiones lógicas de entrada para asegurar que no se procesen fotogramas o capas inexistentes.
  2. Calcular el costo base de procesamiento utilizando el total de fotogramas y la cantidad de capas de composición solicitadas.
  3. Aplicar deducciones por volumen de producción y añadir recargos técnicos si el entorno exige simulaciones físicas complejas.
- Salida: Un objeto consolidado con el desglose del costo neto, el ahorro total acumulado por descuentos y el dictamen de aprobación.

## Reglas identificadas
1. Control de Integridad y Rangos: Un proyecto se considera corrupto y se evalúa en 0.0 si `totalFrames` es menor o igual a 0, si `capasRender` es menor a 1 o mayor a 10, o si el `presupuestoMaximo` es negativo.
2. Cálculo de Procesamiento por Capas: Cada frame individual tiene un costo base de \$0.50 USD. Este valor se multiplica directamente por la cantidad de `capasRender` configuradas.
   $$\text{Costo Base} = \text{totalFrames} \times (\text{capasRender} \times 0.50)$$
3. Modificadores Financieros Sucesivos:
   - Descuento por Volumen Escénico: Si el proyecto supera los 1200 frames (equivalente a 50 segundos de animación a 24 fps), se concede un **20% de descuento** sobre el costo base.
   - Recargo por Simulación de Dinámicas: Si `requiereSimulacion` es `true`, se añade un **15% de recargo** técnico de procesamiento (calculado sobre el costo base original).
4. Evaluación de Viabilidad: Si el costo final neto es menor o igual al `presupuestoMaximo`, el campo `estado` se define como `"Viable"`. En caso contrario, se marca como `"Presupuesto Insuficiente"`.

## Pruebas

### Caso 1: Proyecto de alta complejidad con descuento y recargo simultáneo
Entrada: proyecto = `{"nombreEscena": "Batalla_Final", "totalFrames": 2000, "capasRender": 4, "requiereSimulacion": true, "presupuestoMaximo": 3500}`
Explicación:
- Costo Base: $2000 \times (4 \times 0.50) = 2000 \times 2.0 = 4000$.
- Descuento Volumen (20%): $4000 \times 0.20 = 800$.
- Recargo Simulación (15%): $4000 \times 0.15 = 600$.
- Costo Final: $4000 - 800 + 600 = 3800$.
- Viabilidad: El costo (\$3800) excede el presupuesto (\$3500).
Resultado esperado: `{ "costoBase": 4000.0, "costoFinal": 3800.0, "descuentoAplicado": 800.0, "estado": "Presupuesto Insuficiente" }`

### Caso 2: Escena optimizada y simple dentro de los límites
Entrada: proyecto = `{"nombreEscena": "Logo_Animado", "totalFrames": 300, "capasRender": 2, "requiereSimulacion": false, "presupuestoMaximo": 400}`
Explicación: Costo Base = $300 \times (2 \times 0.50) = 300$. Al no cumplir criterios de descuento ni recargo, el costo final se mantiene en 300. El presupuesto (400) es suficiente.
Resultado esperado: `{ "costoBase": 300.0, "costoFinal": 300.0, "descuentoAplicado": 0.0, "estado": "Viable" }`

## Explicacion final
El diseño matemático de este flujo aísla las variables de infraestructura (`capasRender`) de los modificadores de comportamiento del cliente (`requiereSimulacion`). Al aplicar los porcentajes de forma paralela sobre la base estática, se previene el efecto bola de nieve en las cotizaciones, un principio fundamental en la ingeniería de software para sistemas de facturación empresarial.