# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) que contiene canciones de una playlist musical.
  - Cada canción contiene:
    - `titulo`: nombre de la canción.
    - `artista`: intérprete o creador.
    - `duracion`: duración de la canción en minutos.

- **Proceso:**
  - Validar que la playlist tenga canciones registradas.
  - Verificar que las duraciones sean valores positivos.
  - Recorrer todas las canciones mediante un ciclo.
  - Acumular la duración total:

    \[
    DuracionTotal = \sum Duracion_i
    \]

  - Encontrar la canción con mayor duración comparando valores.
  - Calcular la duración promedio:

    \[
    Promedio = \frac{DuracionTotal}{Cantidad\ de\ canciones}
    \]

  - Clasificar la playlist según la duración promedio.
  - Generar una secuencia ordenada de reproducción.

- **Salida:**
  - Un objeto con:
    - Cantidad de canciones.
    - Duración total.
    - Duración promedio.
    - Canción más larga.
    - Tipo de playlist.
    - Orden de reproducción.

## Reglas identificadas

1. La playlist debe contener al menos una canción.
2. La duración de cada canción debe ser mayor que cero.
3. La duración total se calcula sumando todas las canciones:

\[
Total = C_1 + C_2 + C_3 + ... + C_n
\]

4. La canción más larga corresponde a la que tenga la mayor duración:

\[
Max = max(Duracion_i)
\]

5. La clasificación de la playlist depende del promedio:
   - Promedio **≥ 5 minutos** → **"Playlist extendida"**.
   - Promedio **≥ 3 minutos y < 5 minutos** → **"Playlist estándar"**.
   - Promedio **< 3 minutos** → **"Playlist corta"**.

6. Si alguna duración es inválida, el sistema devuelve un error.

## Pruebas

### Caso normal

Entrada:

```javascript
const canciones = [
  {
    titulo: "Ecos del Futuro",
    artista: "Nova Beat",
    duracion: 4
  },
  {
    titulo: "Horizonte Digital",
    artista: "Synth Wave",
    duracion: 6
  },
  {
    titulo: "Noche Estelar",
    artista: "Cosmic Sound",
    duracion: 3
  }
];
```

Resultado esperado:

```javascript
{
  cancionesRegistradas: 3,
  duracionTotal: 13,
  promedioDuracion: 4.33,
  cancionMasLarga: "Horizonte Digital",
  tipoPlaylist: "Playlist estándar",
  secuenciaReproduccion: [
    {
      posicion: 1,
      titulo: "Ecos del Futuro",
      artista: "Nova Beat",
      duracion: 4
    },
    {
      posicion: 2,
      titulo: "Horizonte Digital",
      artista: "Synth Wave",
      duracion: 6
    },
    {
      posicion: 3,
      titulo: "Noche Estelar",
      artista: "Cosmic Sound",
      duracion: 3
    }
  ]
}
```

### Caso borde

Entrada:

```javascript
const canciones = [
  {
    titulo: "Canción inválida",
    artista: "Desconocido",
    duracion: 0
  }
];
```

Resultado esperado:

```javascript
{
  estado: "Error",
  motivo: "La duración de las canciones debe ser mayor que cero."
}
```

## Explicacion final

La solución analiza una playlist musical utilizando secuencias numéricas, acumuladores y comparaciones. Primero valida que los datos de entrada sean correctos y que todas las canciones tengan una duración válida.

Luego recorre el arreglo de canciones para calcular la duración total, encontrar la canción con mayor duración y construir una secuencia ordenada de reproducción. Posteriormente utiliza el promedio de duración para clasificar la playlist según su extensión.

El algoritmo combina funciones, arreglos, ciclos, acumuladores y operaciones matemáticas para transformar información musical en estadísticas verificables y fáciles de interpretar.