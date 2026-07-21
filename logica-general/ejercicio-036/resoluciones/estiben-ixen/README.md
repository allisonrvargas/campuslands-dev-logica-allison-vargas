Análisis
Entrada: Un arreglo de strings (lista de estados de assets) como ["aprobado", "pendiente", "bloqueado"].

Proceso: Validar si la lista está vacía, buscar estados críticos (bloqueado) y luego estados de progreso (pendiente) para determinar la prioridad.

Salida: Un objeto con la accion a realizar y el motivo de la decisión.

Reglas identificadas
Error: Si la lista está vacía o es nula, el sistema debe reportar un error.

Prioridad Alta: Si existe al menos un elemento "bloqueado", se debe priorizar la revisión de bloqueos.

Prioridad Media: Si no hay bloqueos pero hay elementos "pendiente", se debe proceder con la producción.

Estado final: Si todos los elementos están "aprobado", el pipeline se considera finalizado.

Pruebas
Caso normal
Entrada: ["aprobado", "pendiente", "bloqueado"]

Resultado esperado: ```json
{
"accion": "revisar bloqueado",
"motivo": "La regla prioriza riesgos antes de tareas normales."
}


### Caso borde

**Entrada:** `[]`

**Resultado esperado:** 
```json
{ 
  "accion": "error", 
  "motivo": "La lista de assets está vacía." 
}
```

## Explicación final

Mi solución funciona mediante el uso de condicionales en cascada. Primero valido la integridad de la entrada para evitar errores de ejecución. Luego, utilizo el método .includes() de JavaScript, que es muy eficiente para verificar la presencia de un elemento dentro de un arreglo. Al evaluar los estados de mayor a menor prioridad ("bloqueado" > "pendiente" > otros), aseguro que el sistema siempre responda con la acción más crítica primero.

Sugerencia

**Convierte cada regla del problema en una condición clara antes de programar. Por ejemplo: si hay bloqueos -> error prioritario. Esto reduce la complejidad lógica al escribir las sentencias if.**