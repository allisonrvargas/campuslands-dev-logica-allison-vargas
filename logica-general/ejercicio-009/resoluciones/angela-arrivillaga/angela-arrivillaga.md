# Plantilla de solucion

## Analisis

- **Entrada:** Un objeto con una lista de items y una prioridad.
- **Proceso:** Validar la existencia de los datos, verificar condiciones de alta prioridad para elementos "bloqueado" y determinar si el estado del lote es estable.
- **Salida:** Un objeto con la accion a realizar y el motivo de la decisión.

## Reglas identificadas

1. Si no hay datos de entrada o la estructura es inválida, el estado es "desconocido".
2. Si la prioridad es "alta" y la lista contiene elementos "bloqueado", se activa la revisión de riesgos.
3. Si no existen condiciones críticas, se procede a renderizar la cartelera con un estado estable.

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
  "items": ["pendiente"], 
  "prioridad": "baja", 
  "regla": "revisar bloqueados primero" 
}
```

Resultado esperado:

```json
{ 
  "accion": "renderizar cartelera", 
  "motivo": "Estado estable detectado en el lote de películas." 
}
```

### Explicacion final
La solución funciona validando la integridad del objeto de entrada desde el inicio. A continuación, utiliza una estructura condicional que prioriza la detección de riesgos (bloqueos bajo alta prioridad) antes de permitir que el sistema avance al flujo normal de renderizado de cartelera.