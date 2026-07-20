# Plantilla de solucion

## Analisis
El problema se diseñó para automatizar el control de calidad y la asignación de prioridades de reparación en un taller mecánico en función de la gravedad de la falla (medida en una escala numérica) y el tiempo estimado de reparación en horas. Al cruzar estas variables con límites mínimos y máximos operativos, el sistema optimiza la cadena de trabajo determinando si el vehículo requiere atención inmediata, si es una reparación estándar o si excede las capacidades temporales del taller.

- Entrada: Nivel de gravedad de la falla (entero del 1 al 10) y las horas estimadas de reparación (flotante).
- Proceso: 
  1. Validar que los datos de entrada se encuentren dentro de los rangos lógicos del taller.
  2. Evaluar si las horas estimadas superan el límite máximo permitido por la política del taller.
  3. Clasificar la orden en "Prioridad Alta" si la gravedad es crítica o si requiere intervención inmediata por seguridad, u "Óptimo" para reparaciones estándar.
- Salida: Un objeto que contiene el estado de aceptación del vehículo ("Aceptado", "Rechazado" o "Error") junto con su "Prioridad" asignada.

## Reglas identificadas
1. Límites de Admisión Temporal: El taller tiene un límite máximo de 48.0 horas de trabajo por vehículo. Si las horas estimadas superan este umbral ($horas > 48.0$), el vehículo es automáticamente "Rechazado" por exceso de tiempo.
2. Criterio de Gravedad y Prioridad: 
   - Si la gravedad está entre 8 y 10, la prioridad es "Alta" y el estado es "Aceptado".
   - Si la gravedad está entre 1 y 7, la prioridad es "Estándar" y el estado es "Aceptado".
3. Validación de Rangos de Control: El nivel de gravedad debe pertenecer estrictamente al rango inclusivo $[1, 10]$ y las horas estimadas no pueden ser menores o iguales a cero. Cualquier infracción a esto devuelve un estado de "Error" y prioridad "Ninguna".

## Pruebas

### Caso normal (Gravedad alta)
Entrada: nivelGravedad = 9, horasEstimadas = 14.5
Resultado esperado: { "estado": "Aceptado", "prioridad": "Alta" }

### Caso rechazado por tiempo
Entrada: nivelGravedad = 5, horasEstimadas = 52.0
Resultado esperado: { "estado": "Rechazado", "prioridad": "Ninguna" }

### Caso borde (Error por entrada inválida)
Entrada: nivelGravedad = 0, horasEstimadas = 10.0
Resultado esperado: { "estado": "Error", "prioridad": "Ninguna" }

## Explicacion final
La solución funciona porque primero filtra y descarta datos de entrada inconsistentes, posteriormente aplica la regla límite de capacidad temporal del taller y finalmente segmenta las reparaciones aceptadas según su nivel de urgencia.