# Plantilla de solucion

## Analisis

- **Entrada:** Un objeto con una lista de estaciones (items) y una prioridad.
- **Proceso:** Validar la existencia del objeto de control (payload), escanear mediante un bucle `while` para detectar la presencia de una falla ("bloqueado") y evaluar la prioridad para decidir la acción de control.
- **Salida:** Un objeto con la accion a realizar y el motivo de la decisión.

## Reglas identificadas

1. Si no existe el objeto de control, la línea se bloquea automáticamente.
2. Si la prioridad es "alta" y se detecta una falla, se prioriza la revisión del elemento bloqueado.
3. Si el sistema opera en rangos seguros, se procede a asignar el siguiente turno.

## Pruebas

### Caso normal

Entrada:
```json
{ 
  "items": ["aprobado", "pendiente", "bloqueado"], 
  "prioridad": "alta", 
  "regla": "revisar bloqueados primero" 
}
```

Resultado esperado:

```json
{ 
  "accion": "revisar bloqueado", 
  "motivo": "la regla prioriza riesgos antes de tareas normales." 
}
```

### Caso borde
Entrada:

```json
{ 
  "items": undefined, 
  "prioridad": "baja", 
  "regla": "estándar" 
}
```

Resultado esperado:

```json
{ 
  "accion": "asignar siguiente turno", 
  "motivo": "Estaciones de soldadura operando dentro de los rangos seguros." 
}
```

### Explicacion final
La solución implementa una validación inicial del payload seguida de un escaneo eficiente mediante ```while``` y ```break```, que permite detener el proceso tan pronto como se identifica una anomalía. Esta estructura asegura que la línea de soldadura mantenga la seguridad, priorizando riesgos únicamente cuando la configuración de prioridad lo exige.