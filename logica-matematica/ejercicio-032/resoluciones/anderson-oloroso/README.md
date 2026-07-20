# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) con registros de partidas de pingpong.
  - Cada partida contiene:
    - `jugadorA`: nombre del primer jugador.
    - `jugadorB`: nombre del segundo jugador.
    - `puntosA`: puntos obtenidos por el jugador A.
    - `puntosB`: puntos obtenidos por el jugador B.

- **Proceso:**
  - Validar que existan partidas registradas.
  - Revisar que los datos de cada partida sean correctos.
  - Determinar el ganador de cada encuentro.
  - Contabilizar las victorias del jugador A.
  - Calcular la probabilidad de victoria del jugador A respecto a las partidas válidas.

- **Salida:**
  - Un objeto con:
    - Número de partidas analizadas.
    - Número de partidas válidas.
    - Victorias del jugador A.
    - Porcentaje de probabilidad de victoria.
    - Resultado de cada enfrentamiento.

## Reglas identificadas

1. Debe existir al menos una partida registrada.

2. Una partida válida debe cumplir:

\[
PuntosA \ge 0
\]

\[
PuntosB \ge 0
\]

Además:

\[
PuntosA \neq PuntosB
\]

porque una partida debe tener un ganador.

3. Si:

\[
PuntosA > PuntosB
\]

el ganador será el jugador A.

4. Si:

\[
PuntosB > PuntosA
\]

el ganador será el jugador B.

5. La probabilidad de victoria del jugador A se calcula mediante:

\[
Probabilidad =
\frac{Victorias\ del\ jugador\ A}
{Partidas\ validas}
\times 100
\]

6. Los registros inválidos no participan en el cálculo estadístico.

## Pruebas

### Caso normal

Entrada:

```javascript
const partidas = [
  {
    jugadorA: "Ana",
    jugadorB: "Luis",
    puntosA: 11,
    puntosB: 7
  },
  {
    jugadorA: "Ana",
    jugadorB: "Luis",
    puntosA: 8,
    puntosB: 11
  },
  {
    jugadorA: "Ana",
    jugadorB: "Luis",
    puntosA: 11,
    puntosB: 9
  }
];
```

Resultado esperado:

```javascript
{
  partidasAnalizadas: 3,
  partidasValidas: 3,
  victoriasJugadorA: 2,
  probabilidadVictoriaJugadorA: "66.67%",
  resultados: [
    {
      jugadorA: "Ana",
      jugadorB: "Luis",
      ganador: "Ana"
    },
    {
      jugadorA: "Ana",
      jugadorB: "Luis",
      ganador: "Luis"
    },
    {
      jugadorA: "Ana",
      jugadorB: "Luis",
      ganador: "Ana"
    }
  ]
}
```

### Caso borde

Entrada:

```javascript
const partidas = [
  {
    jugadorA: "Ana",
    jugadorB: "Luis",
    puntosA: 10,
    puntosB: 10
  }
];
```

Resultado esperado:

```javascript
{
  partidasAnalizadas: 1,
  partidasValidas: 0,
  victoriasJugadorA: 0,
  probabilidadVictoriaJugadorA: "0.00%",
  resultados: [
    {
      jugadorA: "Ana",
      jugadorB: "Luis",
      estado: "Datos inválidos"
    }
  ]
}
```

## Explicacion final

La solución simula un análisis probabilístico básico de partidas de pingpong. Cada enfrentamiento es revisado para identificar al ganador y determinar cuántas veces vence el jugador A.

Después de procesar todas las partidas válidas, se aplica una fórmula de probabilidad frecuentista para calcular el porcentaje de victorias del jugador A. Los casos incorrectos son descartados para evitar alterar el resultado estadístico.

El algoritmo utiliza funciones, arreglos, ciclos, acumuladores y cálculos numéricos para transformar registros de partidas en información útil para la toma de decisiones.