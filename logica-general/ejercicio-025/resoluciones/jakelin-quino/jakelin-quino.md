## Analisis

- Entrada: El tipo de reparación a realizar y un booleano que indica si es urgente.
- Proceso: Verificar si la reparación es de tipo "motor" o si está marcada como "urgente".
- Salida: El nivel de prioridad asignado y una breve justificación del motivo.

## Reglas identificadas

1. Si la reparación es "motor" o es urgente, la prioridad es "alta".
2. Si la reparación no cumple lo anterior, la prioridad es "baja".

## Pruebas

### Caso normal

Entrada:
reparacion: "motor"
esUrgente: false

Resultado esperado:
prioridad: alta
motivo: La reparacion afecta la seguridad o funcionalidad critica.

### Caso borde

Entrada:
reparacion: "cambio de aceite"
esUrgente: false

Resultado esperado:
prioridad: baja
motivo: Es una tarea de mantenimiento preventivo.

## Explicacion final

Mi solucion funciona utilizando una estructura 'if' simple con un operador lógico 'OR' (||). Esto permite clasificar el trabajo como prioritario si se cumplen cualquiera de las dos condiciones de riesgo (ser una falla grave o ser urgente). De lo contrario, se marca como prioridad baja, lo que permite organizar el taller de forma eficiente.