# Plantilla de solucion

## Analisis

- Entrada: Un objeto `dispositivo` con las propiedades `nombre` (texto), `consumoWatts` (número) y `horasEncendido` (número).
- Proceso: Validar que el tiempo y las métricas de consumo no sean negativos, calcular el gasto energético total diario y clasificar la eficiencia del hardware.
- Salida: Un objeto con el consumo diario en Watts-hora, el nivel de eficiencia energética asignado y si requiere o no un plan de optimización de consumo.

## Reglas identificadas

1. Regla de Consumo Crítico: Si un dispositivo consume más de 1200 Watts-hora al día, se clasifica automáticamente con eficiencia `"alta_demanda"` y se activa la alerta de optimización en verdadero (`true`).
2. Regla de Validación de Operación: Si las horas de encendido exceden las 24 horas en un solo día o contienen valores negativos, se suspende el cálculo por inconsistencia en la telemetría.

## Pruebas

### Caso normal

Entrada:
dispositivo: {
  nombre: "Servidor IoT ESP32",
  consumoWatts: 60,
  horasEncendido: 24
}

Resultado esperado:
consumoDiarioWh: 1440
eficienciaNivel: "alta_demanda"
requiereOptimizacion: true

### Caso borde

Entrada:
dispositivo: {
  nombre: "Foco Inteligente",
  consumoWatts: 12,
  horasEncendido: -5
}

Resultado esperado:
consumoDiarioWh: 0
eficienciaNivel: "error_telemetria"
requiereOptimizacion: false

## Explicación final

La solución funciona porque realiza un filtrado preventivo sobre las horas de encendido para asegurar que se mantengan dentro del límite físico de un ciclo diario (0 a 24 horas). Al procesar únicamente datos coherentes, la multiplicación directa determina el consumo real acumulado, permitiendo segmentar el hardware según las políticas de ahorro energético del laboratorio de manera confiable.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.