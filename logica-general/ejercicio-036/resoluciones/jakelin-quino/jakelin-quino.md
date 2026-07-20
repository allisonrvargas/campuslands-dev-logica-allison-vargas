## Analisis
- **Entrada**: Una matriz (arreglo de arreglos) que representa el espacio 3D y las coordenadas (fila, columna) a revisar.
- **Proceso**: Accedo a la posición específica de la matriz usando los índices. Si el valor es `1`, hay un objeto; si es `0`, está vacío.
- **Salida**: Un mensaje confirmando si hay un objeto o si el espacio está libre.

## Reglas aplicadas
1. **Coordenadas**: La primera posición es `[0,0]` (esquina superior izquierda).
2. **Identificación**: `1` significa presencia de geometría, `0` es espacio vacío.
3. **Seguridad**: El código verifica si la fila existe para evitar errores si buscamos fuera de la matriz.

## Pruebas
- **Caso Normal**: `buscarObjeto(escena, 0, 1)` -> Resultado: "Objeto encontrado".
- **Caso Borde (Vacío)**: `buscarObjeto(escena, 0, 0)` -> Resultado: "Espacio vacío".

## Explicacion
Pensé la matriz como un mapa de coordenadas. Para entenderla, lo mejor es verla como un tablero donde cada número es una celda. Usar `matriz[fila][columna]` es la forma estándar de navegar en estas estructuras.