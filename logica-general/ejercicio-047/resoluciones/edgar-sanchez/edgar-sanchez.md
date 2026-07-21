# Plantilla de solucion: Problema 41

## Analisis
El problema consiste en desarrollar un módulo de auditoría y limpieza para plataformas de streaming que analice el contenido de una lista de reproducción (playlist) antes de ser publicada o compartida en el perfil del usuario. Los metadatos de las canciones compartidas de forma pública pueden presentar corrupción de datos debido a problemas en la sincronización local-nube o fallas de red durante la subida de los archivos de audio (por ejemplo, duraciones en cero o negativas, o recuentos de reproducciones incoherentes). El sistema debe detectar estas inconsistencias, aislar las canciones corruptas y certificar la salud general de la lista.

- Entrada: Una lista de objetos que representan canciones (cada una con `titulo` [texto], `duracionSegundos` [entero], `reproducciones` [entero] y `explicit` [booleano]).
- Proceso:
  1. Recorrer la colección de canciones para evaluar de forma exhaustiva sus metadatos numéricos.
  2. Clasificar cada elemento como "Sano" o "Inconsistente".
  3. Calcular métricas operacionales consolidadas con base únicamente en las canciones que superen con éxito los filtros.
- Salida: Un reporte técnico que detalla la cantidad de errores encontrados, la lista de títulos limpios y el tiempo total de reproducción acumulado.

## Reglas identificadas
1. Filtro de Integridad de Audio: Una canción presenta un estado "Inconsistente" si su `duracionSegundos` es menor o igual a 0, o si el contador de `reproducciones` registra un número negativo. 
2. Aislamiento de Erreores: Los elementos inconsistentes se separan del flujo principal, contabilizando la cantidad total de fallas para alertar a los administradores de la plataforma.
3. Métricas de Certificación: El sistema acumula la suma de la duración de todas las canciones sanas en segundos. Si la lista final no contiene ningún error de datos, el estado del reporte se define como `"Playlist Certificada"`; en caso de encontrar al menos un fallo, se clasifica como `"Requiere Depuración"`.
4. Caso de Colección Vacía: Si la playlist original se encuentra sin registros o si todos los elementos resultan corruptos, el reporte regresa totales en cero y una lista vacía de títulos válidos.

## Pruebas

### Caso 1: Playlist con errores y canciones sanas
Entrada: canciones = `[{"titulo": "Song 1", "duracionSegundos": 180, "reproducciones": 1500}, {"titulo": "Song 2", "duracionSegundos": 0, "reproducciones": 300}, {"titulo": "Song 3", "duracionSegundos": 240, "reproducciones": -5}]`
Explicación: "Song 2" tiene duración 0 e invalida sus metadatos. "Song 3" contiene reproducciones negativas. El único tema sano es "Song 1".
Resultado esperado: { "estado": "Requiere Depuración", "erroresDetectados": 2, "duracionTotalSegundos": 180, "cancionesLimpias": ["Song 1"] }

### Caso 2: Playlist completamente sana
Entrada: canciones = `[{"titulo": "Track A", "duracionSegundos": 200, "reproducciones": 50000}, {"titulo": "Track B", "duracionSegundos": 150, "reproducciones": 10}]`
Resultado esperado: { "estado": "Playlist Certificada", "erroresDetectados": 0, "duracionTotalSegundos": 350, "cancionesLimpias": ["Track A", "Track B"] }

## Explicacion final
La solución funciona porque realiza un filtrado y mapeo de datos secuencial antes de ejecutar cualquier agregación numérica. Al separar la lógica de conteo de errores del cálculo de duraciones, se asegura de que ninguna anomalía estructural altere los indicadores globales de uso de la plataforma.