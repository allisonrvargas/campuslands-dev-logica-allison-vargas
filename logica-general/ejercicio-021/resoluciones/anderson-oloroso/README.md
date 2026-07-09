# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) con información de jugadores competitivos.
  - Cada jugador contiene:
    - `nombre`: identificación del jugador.
    - `victorias`: cantidad de partidas ganadas.
    - `derrotas`: cantidad de partidas perdidas.
    - `nivel`: nivel actual del jugador dentro del videojuego.

- **Proceso:**
  - Validar que exista al menos un jugador.
  - Verificar que las victorias, derrotas y niveles tengan valores válidos.
  - Calcular el porcentaje de victorias:

\[
PorcentajeVictoria =
\frac{Victorias}{Victorias + Derrotas} \times 100
\]

  - Calcular una puntuación competitiva:

\[
Puntuacion =
(Victorias \times 10)
+
(Nivel \times 2)
-
(Derrotas \times 3)
\]

  - Acumular las puntuaciones para obtener un promedio.
  - Comparar puntuaciones para encontrar el jugador destacado.
  - Clasificar cada jugador mediante reglas de negocio.

- **Salida:**
  - Un objeto con:
    - Cantidad de jugadores evaluados.
    - Promedio de puntuación.
    - Jugador destacado.
    - Clasificación individual de cada jugador.

## Reglas identificadas

1. Debe existir al menos un jugador registrado.

2. Los valores permitidos son:
   - Victorias mayores o iguales a 0.
   - Derrotas mayores o iguales a 0.
   - Nivel entre 1 y 100.

3. La puntuación competitiva se calcula con:

\[
P=(V \times 10)+(N \times 2)-(D \times 3)
\]

Donde:
- `V` representa victorias.
- `N` representa nivel.
- `D` representa derrotas.

4. La clasificación depende de varias condiciones:
   - **Nivel ≥ 80** y **porcentaje de victoria ≥ 75%**:

     → "Jugador Élite"

   - **Nivel ≥ 50** y **porcentaje de victoria ≥ 50%**:

     → "Jugador Competitivo"

   - Cualquier otro caso:

     → "Jugador En Desarrollo"

5. El jugador destacado será quien tenga la mayor puntuación competitiva.

6. Si un dato no cumple las reglas establecidas, el sistema devuelve un error.

## Pruebas

### Caso normal

Entrada:

```javascript
const jugadores = [
  {
    nombre: "Shadow",
    victorias: 80,
    derrotas: 15,
    nivel: 90
  },
  {
    nombre: "Nova",
    victorias: 40,
    derrotas: 35,
    nivel: 60
  },
  {
    nombre: "Pixel",
    victorias: 20,
    derrotas: 40,
    nivel: 30
  }
];
```

Resultado esperado:

```javascript
{
  jugadoresEvaluados: 3,
  promedioPuntuacion: 456.67,
  jugadorDestacado: "Shadow",
  resultados: [
    {
      nombre: "Shadow",
      porcentajeVictoria: 84.21,
      puntuacion: 1015,
      categoria: "Jugador Élite"
    },
    {
      nombre: "Nova",
      porcentajeVictoria: 53.33,
      puntuacion: 475,
      categoria: "Jugador Competitivo"
    },
    {
      nombre: "Pixel",
      porcentajeVictoria: 33.33,
      puntuacion: 100,
      categoria: "Jugador En Desarrollo"
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
    victorias: 10,
    derrotas: 5,
    nivel: 150
  }
];
```

Resultado esperado:

```javascript
{
  estado: "Error",
  motivo: "Los datos del jugador no cumplen las reglas establecidas."
}
```

## Explicacion final

La solución clasifica jugadores de videojuegos competitivos mediante un conjunto de reglas de negocio. Primero valida que la información recibida sea correcta y que los valores estén dentro de los límites permitidos.

Después calcula indicadores importantes como el porcentaje de victorias y una puntuación competitiva basada en rendimiento. Con estos datos se aplican condiciones para determinar el nivel del jugador y encontrar cuál tiene el mejor desempeño.

El algoritmo utiliza arreglos, ciclos, acumuladores, funciones y estructuras condicionales para procesar múltiples jugadores y generar una clasificación organizada, verificable y fácil de interpretar.