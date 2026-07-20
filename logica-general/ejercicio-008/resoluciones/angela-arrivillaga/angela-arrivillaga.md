# Plantilla de solucion

## Analisis

- **Entrada:** Un objeto con una lista de items y una prioridad.
- **Proceso:** Validar la existencia y contenido de los datos, verificar bloqueos bajo prioridad "alta" y confirmar la finalización exitosa del flujo.
- **Salida:** Un objeto con la accion a realizar y el motivo de la decisión.

## Reglas identificadas

1. Si no hay parámetros de entrada, se detiene el proceso.
2. Si la lista de items está vacía o no existe, se aborta la ejecución del paso 1.
3. Si la prioridad es "alta" y hay elementos "bloqueado", se requiere revisión manual.
4. Si no se detectan bloqueos, se completa el flujo exitosamente.

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
  "items": ["aprobado", "pendiente"], 
  "prioridad": "baja", 
  "regla": "ejecutar secuencia estándar" 
}
```

Resultado esperado:

```json
{ 
  "accion": "completar flujo cinematográfico", 
  "motivo": "Todos los pasos validados correctamente." 
}
```

### Explicacion final
La solución implementa una validación por pasos (análisis de entrada, verificación de integridad y control de riesgos). El uso de retornos tempranos permite detener el flujo de forma segura ante cualquier anomalía, garantizando que el "flujo cinematográfico" solo se complete una vez superadas las verificaciones de seguridad.