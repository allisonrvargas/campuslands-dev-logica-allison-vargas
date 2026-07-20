# Plantilla de solucion

## Analisis

- **Entrada:** Un objeto con una lista de reactivos (items) y una prioridad.
- **Proceso:** Validar la disponibilidad de los datos, utilizar el método `reduce` para calcular el total de reactivos en estado "bloqueado" y evaluar si la prioridad "alta" exige una revisión de seguridad.
- **Salida:** Un objeto con la accion a realizar y el motivo de la decisión.

## Reglas identificadas

1. Si no existen datos de reactivos, se procede a cerrar válvulas por seguridad.
2. Si la prioridad es "alta" y se detecta al menos un reactivo bloqueado, se prioriza la revisión de riesgos.
3. Si los reactivos están estables, se autoriza la preparación de la fórmula.

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
  "items": ["aprobado", "aprobado", "pendiente"], 
  "prioridad": "alta", 
  "regla": "revisar bloqueados primero" 
}
```

Resultado esperado:

```json
{ 
  "accion": "autorizar preparación de fórmula", 
  "motivo": "Todos los reactivos se encuentran estables y aprobados." 
}
```

### Explicacion final
La solución emplea un enfoque funcional mediante ```reduce``` para cuantificar los riesgos de forma precisa. Esta metodología garantiza que el sistema pueda evaluar rápidamente la estabilidad del inventario químico y, siguiendo las reglas de prioridad, determinar si es seguro autorizar la preparación de la fórmula o si se requiere una intervención inmediata por elementos bloqueados.