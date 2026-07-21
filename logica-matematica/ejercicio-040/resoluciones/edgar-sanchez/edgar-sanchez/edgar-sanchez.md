# Plantilla de solucion: Problema 49

## Analisis
El problema plantea el diseño de un simulador de costos logísticos y despacho para un festival de comida urbana (*Street Food Festival*). El sistema debe recibir las especificaciones de un pedido masivo a diferentes puestos de comida (food trucks), calcular los tiempos estimados de preparación, aplicar fórmulas de penalización o bonificación según la distancia de entrega y determinar la rentabilidad neta de la orden para el organizador de la app de reparto.

- Entrada: Un objeto con los datos del pedido (`pedidoId` [texto/entero], `platillos` [lista de objetos; cada uno con `categoria` [texto: "Hamburguesa", "Pizza", "Tacos"], `cantidad` [entero]], `distanciaKm` [flotante] y `tipoClima` [texto: "Normal" o "Lluvia"]).
- Proceso:
  1. Validar la consistencia física de la orden (cantidades correctas, distancias positivas y categorías de alimentos soportadas).
  2. Calcular el costo de preparación base y el tiempo estimado de cocina según la composición del pedido.
  3. Simular el impacto logístico del clima y la distancia para obtener la tarifa de envío final.
- Salida: Un reporte técnico con el desglose de tiempos, costos logísticos, precio final al consumidor y un indicador de si requiere conductor prioritario.

## Reglas identificadas
1. Costos y Tiempos Base por Categoría: Cada tipo de comida urbana tiene parámetros fijos de cocina por unidad:
   - `"Hamburguesa"` $\rightarrow$ Costo: \$6.50 USD | Tiempo: 8 minutos.
   - `"Pizza"` $\rightarrow$ Costo: \$9.00 USD | Tiempo: 12 minutos.
   - `"Tacos"` $\rightarrow$ Costo: \$4.00 USD | Tiempo: 5 minutos.
2. Filtro de Datos e Integridad: Si la lista de `platillos` está vacía, la `distanciaKm` es menor o igual a cero, o se detecta una cantidad menor o igual a cero en las unidades, el simulador cancela el proceso devolviendo costos en 0.0 y un estado de `"Orden Invalida"`.
3. Simulación Logística y Fórmulas de Envío:
   - Tarifa de Envío Estándar: Se calcula multiplicando la `distanciaKm` por \$1.20 USD.
   - Factor de Clima Adverso: Si el `tipoClima` es `"Lluvia"`, la tarifa de envío estándar se incrementa en un **25%** debido al riesgo de tráfico, y se añaden **10 minutos fijos** al tiempo estimado total.
4. Activación de Conductor Prioritario: Si el tiempo estimado total de preparación supera los 45 minutos, o si la distancia de entrega es mayor a 8 kilómetros, la orden se clasifica automáticamente con `requierePrioritario = true` para garantizar la temperatura del alimento.

## Pruebas

### Caso 1: Pedido mixto en clima lluvioso y larga distancia
Entrada: orden = `{"pedidoId": "CF-101", "platillos": [{"categoria": "Hamburguesa", "cantidad": 3}, {"categoria": "Pizza", "cantidad": 2}], "distanciaKm": 10.0, "tipoClima": "Lluvia"}`
Explicación:
- Costo Base Comida: $(3 \times 6.50) + (2 \times 9.00) = 19.50 + 18.00 = 37.50$.
- Tiempo Cocina Base: $(3 \times 8) + (2 \times 12) = 24 + 24 = 48$ minutos.
- Tarifa Envío: Envío base = $10.0 \times 1.20 = 12.00$. Con recargo de lluvia (+25%) $\rightarrow$ $12.00 \times 1.25 = 15.00$.
- Tiempo Final: 48 minutos de cocina + 10 minutos por lluvia = 58 minutos totales.
- Conductor Prioritario: `true` (Ya que el tiempo de cocina supera los 45 min y la distancia es mayor a 8 km).
Resultado esperado: `{ "costoComida": 37.50, "tarifaEnvio": 15.00, "tiempoEstimadoMin": 58, "requierePrioritario": true }`

### Caso 2: Orden simple en condiciones ideales
Entrada: orden = `{"pedidoId": "CF-102", "platillos": [{"categoria": "Tacos", "cantidad": 4}], "distanciaKm": 3.5, "tipoClima": "Normal"}`
Explicación: Costo comida = $4 \times 4.00 = 16.00$. Tiempo cocina = $4 \times 5 = 20$ minutos. Envío = $3.5 \times 1.20 = 4.20$. No requiere conductor prioritario.
Resultado esperado: `{ "costoComida": 16.00, "tarifaEnvio": 4.20, "tiempoEstimadoMin": 20, "requierePrioritario": false }`

## Explicacion final
La solución modela una simulación operativa donde las variables de entorno (el clima y la distancia física) reconfiguran dinámicamente los costos de envío y las asignaciones de personal de reparto. Al separar el cómputo de cocina del cómputo logístico, el estudiante aprende a estructurar lógicas desacopladas listas para entornos reales de microservicios de entrega.