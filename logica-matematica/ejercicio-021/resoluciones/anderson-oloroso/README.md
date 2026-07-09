# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un objeto (`Object`) con las estadísticas de un jugador en un videojuego competitivo.
  - El objeto contiene:
    - `jugador`: nombre del jugador.
    - `victorias`: cantidad de partidas ganadas.
    - `derrotas`: cantidad de partidas perdidas.
    - `asistencias`: acciones de apoyo realizadas.
    - `penalizaciones`: sanciones recibidas durante las partidas.

- **Proceso:**
  - Validar que todas las estadísticas sean números positivos o cero.
  - Calcular el puntaje total aplicando un sistema de recompensas y penalizaciones:

    \[
    Puntaje = (Victorias \times 10) + (Asistencias \times 3) - (Derrotas \times 5) - (Penalizaciones \times 8)
    \]

  - Evaluar el puntaje obtenido mediante varias condiciones.
  - Asignar un rango al jugador según su desempeño.

- **Salida:**
  - Un objeto con:
    - Nombre del jugador.
    - Puntaje final.
    - Rango alcanzado.

## Reglas identificadas

1. Ninguna estadística puede tener valores negativos.
2. Cada victoria suma **10 puntos**.
3. Cada asistencia suma **3 puntos**.
4. Cada derrota resta **5 puntos**.
5. Cada penalización resta **8 puntos**.
6. El rango del jugador depende del puntaje obtenido:
   - **100 puntos o más** → "Jugador Elite".
   - **50 a 99 puntos** → "Jugador Avanzado".
   - **0 a 49 puntos** → "Jugador Intermedio".
   - **Menor que 0** → "Jugador Novato".

## Pruebas

### Caso normal

Entrada:

```javascript
const partida = {
  jugador: "ShadowX",
  victorias: 8,
  derrotas: 2,
  asistencias: 12,
  penalizaciones: 1
};
```

Resultado esperado:

```javascript
{
  jugador: "ShadowX",
  puntajeFinal: 98,
  rango: "Jugador Avanzado"
}
```

### Caso borde

Entrada:

```javascript
const partida = {
  jugador: "Nova",
  victorias: 3,
  derrotas: -1,
  asistencias: 4,
  penalizaciones: 0
};
```

Resultado esperado:

```javascript
{
  estado: "Error",
  motivo: "Las estadísticas no pueden contener valores negativos."
}
```

## Explicacion final

La solución implementa un sistema de puntuación para un videojuego competitivo mediante operaciones aritméticas controladas. Primero verifica que todas las estadísticas sean válidas para evitar resultados inconsistentes.

Después calcula el puntaje del jugador combinando diferentes reglas: las victorias y asistencias aumentan la puntuación, mientras que las derrotas y penalizaciones la disminuyen. Este proceso integra varias operaciones aritméticas en una sola expresión.

Finalmente, el puntaje obtenido se evalúa mediante múltiples condiciones para asignar un rango que representa el rendimiento del jugador. La solución combina validaciones, operaciones numéricas y estructuras condicionales para producir un resultado claro, verificable y fácil de interpretar.