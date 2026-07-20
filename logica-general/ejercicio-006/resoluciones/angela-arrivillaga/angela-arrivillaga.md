# Plantilla de solucion

## Analisis

- **Entrada:** Un objeto con una lista de items, una prioridad y una regla.
- **Proceso:** Validar la existencia del catálogo, verificar si la regla exige revisar bloqueados bajo prioridad "alta" y usar el método `find` para localizar el primer elemento "bloqueado".
- **Salida:** Un objeto con la accion a realizar y el motivo de la decisión.

## Reglas identificadas

1. Si no hay catálogo de autos o los datos son nulos, se cancela la operación.
2. Si la prioridad es "alta" y la regla menciona "bloqueado", se busca específicamente ese estado en el catálogo.
3. Si no hay bloqueos críticos, se procede a listar los autos disponibles.

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
  "items": ["bugatti", "koenigsegg"], 
  "prioridad": "baja", 
  "regla": "revisar bloqueados primero" 
}
```

Resultado esperado:

```json
{ 
  "accion": "listar autos disponibles", 
  "motivo": "No se encontraron alertas o bloqueos críticos en la búsqueda." 
}
```

### Explicacion final
La solución funciona validando primero la presencia del catálogo. Luego, emplea .find() para localizar eficientemente el elemento crítico. Al combinar toLowerCase() en la regla, asegura que la búsqueda sea robusta frente a variaciones de formato, permitiendo decidir con precisión si se requiere una revisión o si el flujo puede continuar normalmente.