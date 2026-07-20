## Analisis
- **Entrada**: El tipo de tarea de soldadura y la disponibilidad del operario.
- **Proceso**: Verifico primero si hay alguien disponible y luego dirijo la tarea al operario según el nivel de experiencia requerido.
- **Salida**: La asignación final del turno o una alerta de espera.

## Reglas aplicadas
1. **Disponibilidad**: Si `operarioDisponible` es `false`, se detiene el proceso.
2. **Jerarquía**: 
    - Básica -> Junior.
    - Avanzada -> Senior.
    - Especializada -> Maestro Soldador.
3. **Seguridad**: Se incluye un caso `default` para manejar entradas no reconocidas.

## Pruebas
- **Caso Normal**: `tipo: "avanzada", disponible: true` -> Resultado: "Turno asignado a operario Senior".
- **Caso Borde (Sin personal)**: `tipo: "basica", disponible: false` -> Resultado: "Esperar turno".

## Explicacion
Para este sistema de turnos, utilicé una estructura `switch`. A diferencia de los `if/else`, el `switch` es mucho más limpio cuando tienes varias opciones fijas (como los tipos de soldadura).