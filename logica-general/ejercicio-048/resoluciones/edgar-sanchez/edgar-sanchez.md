# Plantilla de solucion: Problema 42

## Analisis
El problema consiste en diseñar un sistema de procesamiento y categorización paso a paso para un catálogo de películas de ciencia ficción en una plataforma de streaming. El sistema debe evaluar las producciones basándose en su año de lanzamiento, la calificación de la crítica y su duración para estructurar una lista organizada. Esto optimiza los flujos de recomendación del servidor de video, aislando el contenido obsoleto o mal calificado antes de calcular las estadísticas de visualización de la plataforma.

- Entrada: Una lista de objetos de películas (cada una con `titulo` [texto], `anioLanzamiento` [entero], `calificacion` [flotante de 0.0 a 10.0] y `duracionMinutos` [entero]).
- Proceso:
  1. Depurar la lista omitiendo películas con datos corruptos o valores imposibles (años del futuro o menores a 1888, calificaciones fuera de rango o duraciones negativas).
  2. Clasificar cada película en una era del género: `"Clásica"` (antes del año 2000) o `"Moderna"` (año 2000 en adelante).
  3. Filtrar únicamente las producciones que superen una calificación mínima de calidad.
- Salida: Un objeto estructurado que separa las películas aprobadas por eras y calcula la duración promedio de todo el catálogo apto.

## Reglas identificadas
1. Filtro de Control de Datos: Se ignora cualquier película si su `duracionMinutos` es menor o igual a 0, si su `anioLanzamiento` es mayor a 2026, o si su `calificacion` es menor a 0.0 o mayor a 10.0.
2. Umbral de Calidad Mínima: Solo se consideran aptas para la recomendación final las películas cuya `calificacion` sea mayor o igual a 7.0. El resto se descarta del flujo sin generar errores.
3. Clasificación Cronológica por Eras:
   - Si `anioLanzamiento` es menor a 2000 $\rightarrow$ Categoría `"Clasicas"`.
   - Si `anioLanzamiento` es mayor o igual a 2000 $\rightarrow$ Categoría `"Modernas"`.
4. Manejo de Listas Vacías o Sin Coincidencias: Si no ingresan películas o ninguna supera el filtro de calidad, las listas de las eras se entregan vacías y la duración promedio se establece en 0.0.

## Pruebas

### Caso 1: Flujo de procesamiento completo con filtros y eras
Entrada: peliculas = `[{"titulo": "Matrix", "anioLanzamiento": 1999, "calificacion": 8.7, "duracionMinutos": 136}, {"titulo": "Interstellar", "anioLanzamiento": 2014, "calificacion": 8.6, "duracionMinutos": 169}, {"titulo": "Mala Sci-Fi", "anioLanzamiento": 2020, "calificacion": 4.2, "duracionMinutos": 90}]`
Explicación: "Mala Sci-Fi" se descarta por baja calificación (< 7.0). "Matrix" es Clásica (1999) e "Interstellar" es Moderna (2014). El promedio se calcula con las dos aprobadas: $(136 + 169) / 2 = 152.5$.
Resultado esperado: { "clasicas": ["Matrix"], "modernas": ["Interstellar"], "duracionPromedioAptas": 152.5 }

### Caso 2: Ningún elemento supera el filtro de calidad
Entrada: peliculas = `[{"titulo": "Invalida", "anioLanzamiento": 2010, "calificacion": 5.0, "duracionMinutos": 120}]`
Resultado esperado: { "clasicas": [], "modernas": [], "duracionPromedioAptas": 0.0 }

## Explicacion final
La solución implementa un flujo por etapas donde la depuración de datos erróneos ocurre al inicio del ciclo de lectura. Al organizar las estructuras de destino en memoria antes de calcular la media matemática, el sistema garantiza un resultado preciso sin riesgo de divisiones por cero o contaminaciones con datos fuera de rango.