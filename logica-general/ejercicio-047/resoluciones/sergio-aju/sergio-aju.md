# Detección de Inconsistencias - Playlist Musical

## Descripción
Algoritmo de auditoría para listas de reproducción. Identifica canciones con errores de formato, datos faltantes o duplicidad de IDs.

## Reglas Aplicadas
- Validación de presencia de campos obligatorios.
- Verificación de rangos numéricos (duración > 0).
- Filtrado por formatos permitidos y unicidad de ID.

## Ejecución
Ejecuta el archivo `nombre-apellido.js` mediante Node.js. La función `limpiarPlaylist` retorna un objeto con las canciones divididas en grupos (válidas/inválidas).

## Casos Probados
- **Integridad:** IDs duplicados fueron detectados y movidos a la lista de inválidos.
- **Formato:** Canciones con formatos no soportados fueron rechazadas.