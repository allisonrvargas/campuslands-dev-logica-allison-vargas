# Analisis

- **Entrada:** `victorias` (number), `derrotas` (number), `tienePenalizacion` (boolean).
- **Proceso:** Se evalúan condiciones jerárquicas: primero la penalización (bloqueo total), luego el éxito directo, seguido de la oportunidad de repechaje, y finalmente la eliminación.
- **Salida:** Un objeto con el `estado` y el `motivo` de la decisión.

## Reglas aplicadas

1. **Regla de Conducta:** La penalización anula cualquier resultado deportivo.
2. **Regla de Clasificación Directa:** 5 o más victorias aseguran el pase.
3. **Regla de Repechaje:** Necesitas al menos 3 victorias con pocas derrotas (< 2).
4. **Regla por defecto:** Si no se cumplen los criterios anteriores, el equipo es eliminado.

## Casos probados

### Caso normal
- **Entrada:** 6 victorias, 1 derrota, sin penalización.
- **Resultado:** { estado: "Clasificado", motivo: "Superó el umbral de victorias." }

### Caso borde
- **Entrada:** 2 victorias, 0 derrotas, con penalización.
- **Resultado:** { estado: "Descalificado", motivo: "Penalización activa por conducta." }

## Explicacion final

Al evaluar primero el estado de penalización, evitamos procesar datos deportivos que ya no tienen relevancia legal en el torneo. Esta jerarquía sirve para manejar sistemas donde una condición especial puede invalidar todo el contexto previo.