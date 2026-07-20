## Analisis

- Entrada: `pedidos` (cantidad), `tiempoPreparacion` (por plato) y `tiempoDespacho` (por pedido).
- Proceso: Aplicar la fórmula lineal de tiempos acumulados para proyectar el flujo de trabajo.
- Salida: Un objeto que detalla el tiempo total de operación y el promedio por cliente.

## Reglas identificadas

1. Linealidad: Cada pedido suma de forma constante el tiempo de preparación y el de despacho.
2. Independencia: Se asume que el Food Truck tiene capacidad para procesar un pedido a la vez (modelo de cola FIFO).
3. Eficiencia: El tiempo total es el determinante para medir la capacidad operativa del puesto.



## Pruebas

### Caso normal

Entrada:
pedidos: 5, prep: 4, despacho: 1

Resultado esperado:
{ pedidosProcesados: 5, tiempoTotalMinutos: 25, tiempoPromedioPorCliente: 5 }

### Caso borde

Entrada:
pedidos: 0, prep: 5, despacho: 2

Resultado esperado:
{ pedidosProcesados: 0, tiempoTotalMinutos: 0, tiempoPromedioPorCliente: NaN }

## Explicacion final

Esta simulación utiliza una relación lineal simple para modelar la carga de trabajo en un entorno de alta demanda. Entender que el tiempo total de servicio es una función del volumen de pedidos permite a los dueños de negocios de comida urbana planificar mejor su personal y tiempos de entrega durante las horas pico.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.