# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) que contiene las estadísticas de varios equipos de fútbol sala.
  - Cada equipo registra:
    - `nombre`: nombre del equipo.
    - `partidosJugados`: cantidad total de partidos disputados.
    - `partidosGanados`: cantidad de victorias.
    - `golesAFavor`: goles anotados.
    - `golesEnContra`: goles recibidos.

- **Proceso:**
  - Validar que las estadísticas sean coherentes.
  - Recorrer cada equipo mediante un ciclo.
  - Calcular el porcentaje de victorias:

    \[
    Porcentaje=\frac{PartidosGanados}{PartidosJugados}\times100
    \]

  - Calcular la diferencia de goles:

    \[
    Diferencia=GolesAFavor-GolesEnContra
    \]

  - Evaluar varias condiciones para clasificar el rendimiento del equipo considerando tanto el porcentaje de victorias como la diferencia de goles.

- **Salida:**
  - Un arreglo con el ranking de los equipos, indicando:
    - Nombre.
    - Porcentaje de victorias.
    - Diferencia de goles.
    - Categoría obtenida.

## Reglas identificadas

1. Los partidos jugados deben ser mayores que cero.
2. Las victorias no pueden ser negativas ni superar los partidos disputados.
3. Los goles a favor y en contra deben ser valores positivos o cero.
4. El porcentaje de victorias se calcula mediante:

\[
\frac{Victorias}{PartidosJugados}\times100
\]

5. La diferencia de goles se obtiene restando:

\[
GolesAFavor-GolesEnContra
\]

6. La clasificación depende de múltiples condiciones:
   - **80% o más** de victorias y diferencia de goles de **20 o más** → **"Candidato al título"**.
   - **60% o más** de victorias y diferencia de goles de **10 o más** → **"Competidor fuerte"**.
   - **40% o más** de victorias → **"Equipo competitivo"**.
   - En cualquier otro caso → **"En desarrollo"**.

## Pruebas

### Caso normal

Entrada:

```javascript
const equipos = [
  {
    nombre: "Tigres FS",
    partidosJugados: 20,
    partidosGanados: 17,
    golesAFavor: 65,
    golesEnContra: 35
  },
  {
    nombre: "Leones FS",
    partidosJugados: 20,
    partidosGanados: 11,
    golesAFavor: 48,
    golesEnContra: 40
  }
];
```

Resultado esperado:

```javascript
[
  {
    nombre: "Tigres FS",
    porcentajeVictorias: "85%",
    diferenciaGoles: 30,
    categoria: "Candidato al título"
  },
  {
    nombre: "Leones FS",
    porcentajeVictorias: "55%",
    diferenciaGoles: 8,
    categoria: "Equipo competitivo"
  }
]
```

### Caso borde

Entrada:

```javascript
const equipos = [
  {
    nombre: "Equipo Error",
    partidosJugados: 10,
    partidosGanados: 12,
    golesAFavor: 20,
    golesEnContra: 10
  }
];
```

Resultado esperado:

```javascript
{
  estado: "Error",
  motivo: "Las estadísticas del equipo son inválidas."
}
```

## Explicacion final

La solución construye un ranking de fútbol sala utilizando porcentajes, proporciones y múltiples condiciones de evaluación. Primero verifica que las estadísticas ingresadas sean consistentes antes de realizar cualquier cálculo.

Posteriormente calcula el porcentaje de victorias y la diferencia de goles de cada equipo, dos indicadores ampliamente utilizados para medir el rendimiento deportivo. Ambos valores se combinan mediante estructuras condicionales para clasificar el desempeño de cada equipo en diferentes categorías.

El algoritmo emplea ciclos para recorrer todos los equipos, acumulando los resultados en un nuevo arreglo que representa el ranking final. De esta manera, transforma estadísticas deportivas en una evaluación cuantitativa clara y verificable.