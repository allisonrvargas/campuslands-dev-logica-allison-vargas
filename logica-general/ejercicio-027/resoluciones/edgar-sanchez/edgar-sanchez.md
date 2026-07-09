# Plantilla de solucion: Problema 27

## Analisis
El problema se enfoca en la validación e integridad de metadatos dentro de una lista de reproducción (playlist) digital. En plataformas de streaming, los errores de carga o la manipulación de archivos pueden generar registros inconsistentes o corruptos que arruinan la experiencia del usuario (por ejemplo, canciones con duraciones negativas, identificadores duplicados o campos obligatorios vacíos). El sistema debe examinar de forma exhaustiva una colección de datos musicales para aislar y reportar cualquier anomalía estructural.

- Entrada: Una lista de objetos (diccionarios) que representan las canciones de la playlist. Cada canción contiene los atributos `id` (entero), `titulo` (texto) y `duracionSegundos` (entero).
- Proceso: 
  1. Validar que la estructura de la playlist contenga elementos mínimos utilizables.
  2. Recorrer de forma secuencial la colección para inspeccionar individualmente las propiedades de cada pista.
  3. Evaluar de forma concurrente si existen inconsistencias físicas (tiempos menores o iguales a cero) o campos de texto vacíos.
  4. Rastrear si existen identificadores únicos (`id`) duplicados a lo largo de toda la secuencia.
- Salida: Un objeto o reporte de diagnóstico que define si la playlist es segura para reproducción (`"Limpia"`) o si presenta anomalías (`"Inconsistente"`), detallando la naturaleza del error encontrado.

## Reglas identificadas
1. Filtro de Integridad Física (Duración): El atributo numérico `duracionSegundos` debe ser estrictamente mayor a cero ($duracionSegundos > 0$). Si se detecta un valor menor o igual a cero, el registro se marca inmediatamente como corrupto.
2. Filtro de Presencia Obligatoria (Texto): El campo `titulo` no puede estar vacío, contener únicamente espacios en blanco o ser de tipo nulo.
3. Regla de Unicidad (ID Único): No pueden existir dos o más canciones con el mismo número de `id` dentro de la misma playlist. Cualquier duplicación rompe la integridad referencial del índice.
4. Estado de Contingencia General: Si la playlist de entrada está completamente vacía, el sistema devuelve un estado neutral de `"Vacía"`.

## Pruebas

### Caso 1: Playlist limpia y consistente
Entrada: playlist = `[{id: 1, titulo: "Song A", duracionSegundos: 180}, {id: 2, titulo: "Song B", duracionSegundos: 210}]`
Resultado esperado: { "estado": "Limpia", "mensaje": "Análisis completado sin errores" }

### Caso 2: Inconsistencia por tiempo erróneo
Entrada: playlist = `[{id: 1, titulo: "Song A", duracionSegundos: -15}]`
Resultado esperado: { "estado": "Inconsistente", "mensaje": "Duración inválida detectada" }

### Caso 3: Inconsistencia por duplicación de ID
Entrada: playlist = `[{id: 1, titulo: "Song A", duracionSegundos: 120}, {id: 1, titulo: "Song C", duracionSegundos: 150}]`
Resultado esperado: { "estado": "Inconsistente", "mensaje": "Identificadores duplicados detectados" }

## Explicacion final
La solución funciona porque realiza un escaneo de una sola pasada utilizando colecciones auxiliares de control de unicidad (conjuntos/sets) y compuertas lógicas de exclusión que detienen el proceso ante la primera violación de las reglas de consistencia de datos establecidas.