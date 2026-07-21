# Plantilla de solucion

## Analisis

- **Entrada:** Un objeto con una lista de opciones (items) y una prioridad.
- **Proceso:** Validar la existencia de opciones, iterar mediante un bucle `while` para detectar la presencia de algún elemento "bloqueado" y evaluar si la prioridad "alta" requiere una intervención de seguridad.
- **Salida:** Un objeto con la accion a realizar y el motivo de la decisión.

## Reglas identificadas

1. Si no hay opciones válidas, el sistema retorna una acción de "rebotar".
2. Si existe al menos un elemento "bloqueado" bajo prioridad "alta", se prioriza la revisión de dicho riesgo.
3. Si el sistema no detecta bloqueos tras la iteración, se selecciona la mejor opción disponible.

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
  "accion": "seleccionar mejor opción", 
  "motivo": "Opciones comparadas sin encontrar riesgos estructurales." 
}
```
### Explicacion final
La solución emplea un bucle ```while```  para recorrer la lista de opciones de manera controlada hasta encontrar un bloqueo, lo cual permite detener la búsqueda inmediatamente (optimización mediante break). Esta estructura garantiza que la lógica de prioridades se aplique correctamente antes de proceder con la selección final de la opción más adecuada.