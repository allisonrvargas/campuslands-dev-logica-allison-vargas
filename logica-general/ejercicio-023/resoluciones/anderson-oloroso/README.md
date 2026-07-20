# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) con información de jugadores participantes en un torneo de esports.
  - Cada jugador contiene:
    - `nombre`: identificación del jugador.
    - `victorias`: partidas ganadas.
    - `derrotas`: partidas perdidas.
    - `asistencias`: ayudas realizadas durante las partidas.
    - `nivel`: experiencia o rango del jugador.

- **Proceso:**
  - Validar que existan jugadores registrados.
  - Verificar que los valores ingresados sean válidos.
  - Calcular el porcentaje de victorias:

\[
PorcentajeVictoria =
\frac{Victorias}{Victorias + Derrotas} \times 100
\]

  - Calcular una puntuación competitiva:

\[
Puntos =
(Victorias \times 5)
+
(Asistencias \times 2)
+
(Nivel \times 3)
-
(Derrotas \times 2)
\]

  - Acumular puntos para obtener el promedio del torneo.
  - Comparar puntuaciones para encontrar al jugador destacado.
  - Aplicar reglas de decisión para determinar la clasificación.

- **Salida:**
  - Un objeto con:
    - Cantidad de jugadores evaluados.
    - Promedio de puntos.
    - Jugador destacado.
    - Decisión competitiva de cada participante.

## Reglas identificadas

1. Debe existir al menos un jugador registrado.

2. Los valores permitidos son:
   - Victorias mayores o iguales a cero.
   - Derrotas mayores o iguales a cero.
   - Asistencias mayores o iguales a cero.
   - Nivel entre 1 y 100.

3. Cada jugador debe tener al menos una partida jugada:

\[
Victorias + Derrotas > 0
\]

4. La puntuación competitiva se calcula con:

\[
P=(V \times 5)+(A \times 2)+(N \times 3)-(D \times 2)
\]

Donde:
- `V` = victorias.
- `A` = asistencias.
- `N` = nivel.
- `D` = derrotas.

5. Las decisiones del torneo dependen de dos factores:
   - Nivel del jugador.
   - Porcentaje de victorias.

6. Clasificación:
   - **Nivel ≥ 90** y **victorias ≥ 80%**:

     → "Clasificado a final"

   - **Nivel ≥ 60** y **victorias ≥ 60%**:

     → "Clasificado a semifinal"

   - **Victorias ≥ 50%**:

     → "Clasificado a eliminatoria"

   - Cualquier otro caso:

     → "Eliminado"

7. El jugador destacado es quien tenga mayor puntuación competitiva.

8. Si los datos son inválidos, el sistema devuelve un error.

## Pruebas

### Caso normal

Entrada:

```javascript
const jugadores = [
  {
    nombre: "CyberWolf",
    victorias: 15,
    derrotas: 2,
    asistencias: 30,
    nivel: 95
  },
  {
    nombre: "DarkByte",
    victorias: 10,
    derrotas: 5,
    asistencias: 20,
    nivel: 70
  },
  {
    nombre: "NeoPlayer",
    victorias: 4,
    derrotas: 6,
    asistencias: 8,
    nivel: 40
  }
];
```

Resultado esperado:

```javascript
{
  jugadoresEvaluados: 3,
  promedioPuntos: 220.33,
  jugadorDestacado: "CyberWolf",
  resultados: [
    {
      nombre: "CyberWolf",
      porcentajeVictoria: 88.24,
      puntos: 339,
      decision: "Clasificado a final"
    },
    {
      nombre: "DarkByte",
      porcentajeVictoria: 66.67,
      puntos: 242,
      decision: "Clasificado a semifinal"
    },
    {
      nombre: "NeoPlayer",
      porcentajeVictoria: 40,
      puntos: 80,
      decision: "Eliminado"
    }
  ]
}
```

### Caso borde

Entrada:

```javascript
const jugadores = [
  {
    nombre: "Jugador inválido",
    victorias: 5,
    derrotas: 3,
    asistencias: 10,
    nivel: 120
  }
];
```

Resultado esperado:

```javascript
{
  estado: "Error",
  motivo: "Los datos del jugador contienen valores inválidos."
}
```

## Explicacion final

La solución evalúa participantes de un torneo de esports mediante un sistema de toma de decisiones basado en estadísticas. Primero verifica que los datos sean coherentes y que cada jugador tenga información válida.

Después calcula indicadores importantes como porcentaje de victorias y puntuación competitiva. Estos valores permiten comparar jugadores y aplicar reglas de clasificación para decidir si avanzan a una fase del torneo o quedan eliminados.

El algoritmo utiliza funciones, arreglos, ciclos, acumuladores y condiciones múltiples para simular un sistema competitivo donde las decisiones dependen del rendimiento medible de cada jugador.