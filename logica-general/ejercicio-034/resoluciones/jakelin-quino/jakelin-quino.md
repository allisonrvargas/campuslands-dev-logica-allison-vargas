## Analisis
- **Entrada**: Un booleano por cada posible error (alergia, edad).
- **Proceso**: Compruebo mediante condicionales si alguna regla de seguridad se incumple.
- **Salida**: Un mensaje claro indicando si la cita es aprobada o qué error específico impidió el proceso.

## Reglas aplicadas
1. **Prioridad 1**: Si hay alergia, el proceso se cancela inmediatamente por riesgo médico.
2. **Prioridad 2**: Si no hay alergia pero es menor de edad, el proceso se cancela por temas legales.
3. **Éxito**: Solo si no hay alergia y es mayor de edad, se aprueba la cita.

## Pruebas
- **Caso Normal**: `alergia: false, menor: false` -> Resultado: "Cita aprobada".
- **Caso Borde (Error doble)**: `alergia: true, menor: true` -> Resultado: "Error: Riesgo de salud por alergia." (Se detiene en la primera regla).

## Explicacion
Para este diagnóstico, usé una estructura de "cascada" con `if-else if`. Esto es útil porque, en salud y seguridad, lo más importante es detener el proceso apenas se detecta el primer riesgo, sin necesidad de seguir revisando las demás condiciones.