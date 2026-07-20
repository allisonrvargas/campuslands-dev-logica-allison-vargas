## Analisis
- **Entrada**: Una lista de estados de peleadores (ej: "listo", "lesionado", "suspendido").
- **Proceso**: Evalúo la lista buscando prioridades. La regla es: primero la seguridad (lesionados), luego la actividad (listos) y al final lo administrativo (suspendidos).
- **Salida**: La acción prioritaria a realizar.

## Reglas aplicadas
1. **Prioridad 1**: Si hay al menos un "lesionado", la acción es atenderlo.
2. **Prioridad 2**: Si no hay lesionados, busco a los que están "listo".
3. **Prioridad 3**: Si nadie está listo ni lesionado, proceso los "suspendidos".

## Pruebas
- **Caso Normal**: `["listo", "lesionado", "listo"]` -> Resultado: "atender lesionados".
- **Caso Borde (Solo suspendidos)**: `["suspendido", "suspendido"]` -> Resultado: "revisar suspensiones".

## Explicacion
Para organizar la lista, no necesité ordenar todo el arreglo. Como el ejercicio pide una prioridad, utilicé el método `.includes()` que me permite preguntar directamente si un elemento existe en la lista. Esto es mucho más eficiente que recorrer toda la lista buscando manualmente, ya que el código se detiene apenas encuentra la urgencia más alta.