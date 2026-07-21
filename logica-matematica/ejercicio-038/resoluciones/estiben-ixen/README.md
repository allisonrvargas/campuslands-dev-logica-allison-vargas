# Resolución Ejercicio: Normalización de Puntajes en Soldadura

## Como pensaste el problema
El reto se resolvió mediante la normalización de un promedio simple hacia un puntaje ponderado. Identifiqué que el amperaje actúa como un modificador constante (bono/penalización), mientras que la temperatura actúa como un factor de riesgo (multiplicador) que afecta la integridad del resultado final.

## Reglas aplicadas
1. **Promedio:** Se obtiene un valor base a partir de múltiples inspecciones.
2. **Amperaje:** Rango ideal de 80-120A. Si se cumple, el puntaje sube; de lo contrario, se penaliza.
3. **Temperatura:** Si excede los 400°C, se reduce el puntaje un 15% (factor 0.85) debido a posibles cambios metalúrgicos en la zona afectada por el calor.
4. **Clasificación:** Basada en umbrales de 50 y 80 puntos.

## Como ejecutar o revisar tu solucion
1. Ejecuta el archivo en tu entorno de Node.js: `shen.js`.
2. Revisa la salida de consola para verificar que el puntaje final corresponda a las reglas aplicadas.

## casos probaste
- **Caso normal:** Amperaje y temperatura en rangos de seguridad.
- **Caso borde:** Sobrecalentamiento crítico (> 400°C) que dispara la regla de reducción de calidad, incluso con pruebas base altas.