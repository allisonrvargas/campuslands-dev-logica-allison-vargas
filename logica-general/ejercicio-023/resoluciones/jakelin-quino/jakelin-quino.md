## Analisis

- Entrada: Cantidad de partidas ganadas (número) y cantidad de penalizaciones (número).
- Proceso: Validar que las victorias sean 5 o más Y que las penalizaciones sean 3 o menos.
- Salida: El estado del equipo ("Avanza a la final" o "Eliminado") y una justificación.

## Reglas identificadas

1. Para avanzar se requieren al menos 5 partidas ganadas.
2. Si el equipo tiene más de 3 penalizaciones, queda descalificado automáticamente independientemente de sus victorias.

## Pruebas

### Caso normal

Entrada:
partidasGanadas: 8
penalizaciones: 1

Resultado esperado:
resultado: Avanza a la final
motivo: Cumple con el minimo de victorias y conducta aceptable.

### Caso borde

Entrada:
partidasGanadas: 6
penalizaciones: 4

Resultado esperado:
resultado: Eliminado
motivo: No cumple los requisitos minimos o tiene muchas faltas.

## Explicacion final

Mi solucion utiliza una estructura condicional 'if' con operadores lógicos ('&&'). Primero compruebo si el equipo tiene suficientes victorias y luego verifico que no supere el límite de penalizaciones. Si ambas condiciones son verdaderas, el equipo avanza; de lo contrario, el sistema lo marca como eliminado automáticamente.