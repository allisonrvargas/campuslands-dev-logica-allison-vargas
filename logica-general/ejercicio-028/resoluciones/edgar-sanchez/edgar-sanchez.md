# Plantilla de solucion: Problema 28

## Analisis
El problema consiste en modelar y validar un flujo de procesamiento por pasos para la aprobación de guiones o proyectos cinematográficos dentro del género de ciencia ficción. En un sistema de producción, un proyecto debe superar fases secuenciales obligatorias (Evaluación de Premisa $\rightarrow$ Presupuesto de Efectos Visuales $\rightarrow$ Clasificación de Edad) antes de recibir la luz verde para su rodaje. El algoritmo debe analizar si un proyecto ha cumplido correctamente con el orden lógico del flujo sin saltarse pasos y determinar el estado final del proyecto según las condiciones acumuladas.

- Entrada: El paso actual completado (entero del 0 al 3), el presupuesto asignado para efectos visuales (flotante), y una bandera que indica si el guion contiene escenas de violencia explícita (booleano).
- Proceso:
  1. Validar que el paso de origen reportado sea un valor consistente con la secuencia.
  2. Evaluar de forma lineal el progreso: cada paso requiere que las condiciones técnicas del paso anterior estén aprobadas.
  3. Aplicar filtros condicionales en el paso de efectos especiales (presupuesto mínimo) y en el paso de clasificación (restricción por contenido).
- Salida: Un objeto que indica el estado del flujo ("En Progreso", "Aprobado para Producción", "Rechazado" o "Error de Secuencia").

## Reglas identificadas
1. Secuencia de Flujo Obligatoria:
   - **Paso 0**: Idea inicial (Estado inicial, requiere pasar al paso 1).
   - **Paso 1 (Premisa aprobada)**: Requiere evaluar la viabilidad financiera de efectos visuales (VFX). Si el presupuesto asignado para VFX es menor a $50,000, el proyecto se detiene como `"Rechazado"`.
   - **Paso 2 (Presupuesto VFX aprobado)**: Requiere evaluar la clasificación por edad. Si el guion tiene violencia explícita (`true`), la clasificación final debe ser estrictamente para adultos, restringiendo su distribución masiva (Modifica el estado final).
   - **Paso 3 (Clasificación completada)**: El flujo finaliza con éxito.
2. Detección de Saltos en el Flujo: Si se intenta procesar un paso superior sin que las variables del paso inmediatamente anterior estén validadas o si el número de paso no existe, el sistema retorna `"Error de Secuencia"`.

## Pruebas

### Caso 1: Flujo completado con éxito (Luz verde)
Entrada: pasoActual = 3, presupuestoVFX = 120000.0, violenciaExplicita = false
Resultado esperado: { "estadoFlujo": "Aprobado para Producción", "observaciones": "Proyecto listo para rodaje" }

### Caso 2: Rechazado en Paso 1 por presupuesto insuficiente
Entrada: pasoActual = 1, presupuestoVFX = 25000.0, violenciaExplicita = false
Resultado esperado: { "estadoFlujo": "Rechazado", "observaciones": "Presupuesto de VFX por debajo del mínimo" }

### Caso 3: Error por paso inexistente
Entrada: pasoActual = 5, presupuestoVFX = 80000.0, violenciaExplicita = false
Resultado esperado: { "estadoFlujo": "Error de Secuencia", "observaciones": "Fase de producción inválida" }

## Explicacion final
La solución funciona porque implementa una máquina de estado simplificada mediante estructuras condicionales anidadas. Esto garantiza que ningún proyecto avance en la cadena de distribución sin cumplir los requisitos de financiamiento y clasificación de contenido obligatorios del estudio.