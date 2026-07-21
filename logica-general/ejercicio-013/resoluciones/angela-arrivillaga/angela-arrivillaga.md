# Plantilla de solucion

## Analisis

- **Entrada:** Un objeto con una lista de elementos (items) y una prioridad.
- **Proceso:** Validar la existencia del objeto de control, utilizar el método `reduce` para contabilizar los elementos marcados como "bloqueado" y evaluar si la prioridad "alta" exige una revisión de seguridad.
- **Salida:** Un objeto con la accion a realizar y el motivo de la decisión.

## Reglas identificadas

1. Si no existe un objeto de control de saltos, se detiene el proceso ("frenar").
2. Si la prioridad es "alta" y el conteo de riesgos es mayor a cero, se activa la revisión de elementos bloqueados.
3. Si el control de seguridad es superado, se autoriza el despegue.

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
  "items": null, 
  "prioridad": "baja", 
  "regla": "evaluación por defecto" 
}
```

Resultado esperado:

```json
{ 
  "accion": "autorizar despegue", 
  "motivo": "Todos los casos de revisión de equipo pasaron el control estándar." 
}
```

### Explicacion final
La solución es eficiente al utilizar el método funcional ```reduce```, que permite recorrer y acumular el conteo de riesgos de forma limpia en una sola pasada. Esta lógica garantiza que, si se detecta cualquier incidencia de seguridad bajo alta prioridad, el sistema se detenga inmediatamente para una revisión, asegurando que solo se autorice el despegue cuando el equipo está validado.