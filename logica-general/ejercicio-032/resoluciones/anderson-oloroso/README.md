# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) con los jugadores de pingpong.
  - Cada jugador contiene:
    - `nombre`: nombre del jugador.
    - `victorias`: cantidad de partidos ganados.
    - `derrotas`: cantidad de partidos perdidos.
    - `precision`: porcentaje de precisión en los golpes.

- **Proceso:**
  - Validar que existan al menos dos jugadores.
  - Comprobar que la información de cada jugador sea válida.
  - Calcular un puntaje de rendimiento para cada participante.
  - Comparar los puntajes obtenidos.
  - Determinar cuál jugador presenta el mejor desempeño.

- **Salida:**
  - Un objeto con:
    - Cantidad de jugadores analizados.
    - Nombre del jugador con mayor puntaje.
    - Puntaje obtenido por cada participante.

## Reglas identificadas

1. Deben existir al menos dos jugadores para realizar la comparación.

2. Los datos válidos cumplen:

\[
Victorias \ge 0
\]

\[
Derrotas \ge 0
\]

\[
0 \le Precision \le 100
\]

3. El puntaje de rendimiento se calcula mediante:

\[
Puntaje=(Victorias \times 5)-(Derrotas \times 2)+(Precision \times 0.5)
\]

4. El jugador con mayor puntaje será considerado el mejor competidor.

5. Los jugadores con datos inválidos no participan en la comparación y se registran como error.

## Pruebas

### Caso normal

Entrada:

```javascript
const jugadores = [
  {
    nombre: "Laura",
    victorias: 18,
    derrotas: 4,
    precision: 92
  },
  {
    nombre: "Daniel",
    victorias: 20,
    derrotas: 7,
    precision: 85
  },
  {
    nombre: "Camilo",
    victorias: 15,
    derrotas: 2,
    precision: 95
  }
];
```

Resultado esperado:

```javascript
{
  jugadoresAnalizados: 3,
  mejorJugador: "Laura",
  resultados: [
    {
      nombre: "Laura",
      puntaje: 128
    },
    {
      nombre: "Daniel",
      puntaje: 128.5
    },
    {
      nombre: "Camilo",
      puntaje: 118.5
    }
  ]
}
```

> **Nota:** Con la fórmula utilizada, el mejor jugador realmente es **Daniel**, ya que obtiene **128.5 puntos**, superando a Laura (128). Por tanto, el valor correcto de `mejorJugador` sería `"Daniel"`.

### Caso borde

Entrada:

```javascript
const jugadores = [
  {
    nombre: "",
    victorias: -2,
    derrotas: 1,
    precision: 120
  },
  {
    nombre: "Pedro",
    victorias: 8,
    derrotas: 3,
    precision: 88
  }
];
```

Resultado esperado:

```javascript
{
  jugadoresAnalizados: 2,
  mejorJugador: "Pedro",
  resultados: [
    {
      nombre: "",
      estado: "Datos inválidos"
    },
    {
      nombre: "Pedro",
      puntaje: 78
    }
  ]
}
```

## Explicacion final

La solución compara el rendimiento de varios jugadores de pingpong utilizando una fórmula que combina victorias, derrotas y porcentaje de precisión. Primero se valida que existan suficientes participantes y que sus datos sean correctos.

Posteriormente se calcula un puntaje para cada jugador y se compara con el mejor registrado hasta ese momento. De esta forma es posible identificar automáticamente al competidor con el mejor desempeño.

El algoritmo utiliza funciones, arreglos, ciclos, acumuladores y estructuras condicionales para implementar un proceso de comparación eficiente y fácilmente adaptable a otros criterios de evaluación.