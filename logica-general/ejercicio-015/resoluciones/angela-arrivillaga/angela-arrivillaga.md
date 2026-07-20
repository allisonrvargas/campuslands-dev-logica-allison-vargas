# Plantilla de solucion

## Analisis

- **Entrada:** Un objeto con una lista de capas (items) y una prioridad.
- **Proceso:** Validar la integridad de los datos, iterar mediante un bucle `for` para contar las capas con estado "bloqueado" y evaluar si la prioridad "alta" requiere una intervención antes de la exportación.
- **Salida:** Un objeto con la accion a realizar y el motivo de la decisión.

## Reglas identificadas

1. Si las capas no son válidas o el formato no es un arreglo, se cancela la exportación.
2. Si la prioridad es "alta" y existe al menos una capa "bloqueado", se prioriza la revisión de dicho elemento.
3. Si no hay bloqueos, se procede a renderizar el lienzo con todas las capas procesadas.

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
  "items": [], 
  "prioridad": "alta", 
  "regla": "revisar bloqueados primero" 
}
```

Resultado esperado:

```json
{ 
  "accion": "renderizar lienzo", 
  "motivo": "Todas las capas (0) procesadas y listas para exportación." 
}
```

### Explicacion final
La solución asegura la estabilidad del proceso verificando el tipo de dato de entrada antes de operar. Utiliza un contador iterativo para rastrear las capas bloqueadas y, al final, ofrece un flujo condicional que protege el renderizado final, permitiendo la exportación únicamente cuando se cumplen los controles de seguridad o cuando no existen riesgos pendientes.