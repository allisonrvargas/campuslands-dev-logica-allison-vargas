# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) que representa una playlist musical.
  - Cada canción contiene:
    - `titulo`: nombre de la canción.
    - `artista`: intérprete o grupo musical.
    - `duracion`: duración en segundos.
    - `reproducciones`: cantidad de veces reproducida.
    - `genero`: categoría musical.

- **Proceso:**
  - Validar que la playlist tenga canciones.
  - Revisar que cada canción tenga datos completos.
  - Detectar valores incorrectos en duración y reproducciones.
  - Calcular la duración total de la playlist.
  - Contabilizar apariciones de artistas.
  - Detectar canciones que incumplen reglas establecidas.
  - Generar una lista de inconsistencias encontradas.

- **Salida:**
  - Un objeto con:
    - Cantidad de canciones analizadas.
    - Duración total de la playlist.
    - Número de inconsistencias.
    - Detalle de cada problema detectado.

## Reglas identificadas

1. La playlist debe contener al menos una canción.

2. Una canción es válida si cumple:

\[
Duracion > 0
\]

\[
Reproducciones \ge 0
\]

Además debe tener:
- Título.
- Artista.
- Género.

3. Una canción genera inconsistencia si su duración supera:

\[
Duracion > 600 \text{ segundos}
\]

4. Una canción genera inconsistencia si no tiene reproducciones:

\[
Reproducciones = 0
\]

5. Se debe controlar la cantidad de canciones por artista.

6. Si un artista aparece más de tres veces:

\[
CantidadCancionesArtista > 3
\]

se genera una inconsistencia.

7. La duración total se calcula mediante:

\[
DuracionTotal =
\sum DuracionCanciones
\]

8. Los datos inválidos no detienen el análisis, sino que se registran como inconsistencias.

## Pruebas

### Caso normal

Entrada:

```javascript
const playlist = [
  {
    titulo: "Neon Dreams",
    artista: "CyberBand",
    duracion: 240,
    reproducciones: 5000,
    genero: "Electrónica"
  },
  {
    titulo: "Infinite Night",
    artista: "CyberBand",
    duracion: 720,
    reproducciones: 0,
    genero: "Electrónica"
  },
  {
    titulo: "Ocean Lights",
    artista: "WaveSound",
    duracion: 300,
    reproducciones: 2500,
    genero: "Pop"
  }
];
```

Resultado esperado:

```javascript
{
  cancionesAnalizadas: 3,
  duracionTotalMinutos: 21,
  inconsistenciasEncontradas: 2,
  inconsistencias: [
    {
      titulo: "Infinite Night",
      motivo: "La duración supera el límite permitido."
    },
    {
      titulo: "Infinite Night",
      motivo: "La canción no tiene reproducciones registradas."
    }
  ]
}
```

### Caso borde

Entrada:

```javascript
const playlist = [
  {
    titulo: "",
    artista: "",
    duracion: -50,
    reproducciones: -10,
    genero: ""
  }
];
```

Resultado esperado:

```javascript
{
  cancionesAnalizadas: 1,
  duracionTotalMinutos: 0,
  inconsistenciasEncontradas: 1,
  inconsistencias: [
    {
      titulo: "",
      motivo: "Datos incompletos o valores inválidos."
    }
  ]
}
```

## Explicacion final

La solución analiza una playlist musical para encontrar inconsistencias en sus datos. Primero verifica que la información básica de cada canción sea correcta y posteriormente evalúa reglas específicas del sistema.

El algoritmo identifica problemas como duraciones excesivas, canciones sin reproducciones y exceso de canciones del mismo artista. Al mismo tiempo calcula estadísticas generales como la duración total de la playlist.

La implementación utiliza funciones, arreglos, ciclos, acumuladores y estructuras condicionales para construir un sistema de validación capaz de detectar errores y entregar un reporte organizado.