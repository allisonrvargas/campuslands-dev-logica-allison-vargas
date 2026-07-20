# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) con información estadística de jugadores de videojuegos competitivos.
  - Cada jugador contiene:
    - `nombre`: identificador del jugador.
    - `victorias`: cantidad de partidas ganadas.
    - `derrotas`: cantidad de partidas perdidas.
    - `horasJuego`: experiencia acumulada en horas.

- **Proceso:**
  - Validar que los datos del jugador sean correctos.
  - Calcular la cantidad total de partidas jugadas.
  - Obtener el porcentaje de victorias del jugador.
  - Aplicar reglas de clasificación según rendimiento y experiencia.
  - Contabilizar cuántos jugadores pertenecen a cada categoría.

- **Salida:**
  - Un objeto con:
    - Total de jugadores evaluados.
    - Cantidad de jugadores Elite.
    - Cantidad de jugadores Competitivos.
    - Cantidad de jugadores Principiantes.
    - Información detallada de la categoría de cada jugador.

## Reglas identificadas

1. Cada jugador debe tener un nombre válido y valores numéricos no negativos.

2. El total de partidas se calcula mediante:

\[
PartidasTotales = Victorias + Derrotas
\]

3. El porcentaje de victorias se calcula mediante:

\[
PorcentajeVictoria = \frac{Victorias}{Victorias + Derrotas} \times 100
\]

4. Un jugador será clasificado como **Jugador Elite** si cumple:

\[
PorcentajeVictoria \ge 80\%
\]

y

\[
HorasJuego \ge 500
\]

5. Un jugador será clasificado como **Jugador Competitivo** si cumple:

\[
PorcentajeVictoria \ge 50\%
\]

y

\[
HorasJuego \ge 100
\]

6. Si no cumple ninguna condición anterior, será clasificado como:

```text
Jugador Principiante
```

7. Los jugadores con datos inválidos no afectan los contadores de clasificación.

## Pruebas

### Caso normal

Entrada:

```javascript
const jugadores = [
  {
    nombre: "ShadowX",
    victorias: 90,
    derrotas: 10,
    horasJuego: 800
  },
  {
    nombre: "CyberWolf",
    victorias: 40,
    derrotas: 30,
    horasJuego: 250
  },
  {
    nombre: "NewPlayer",
    victorias: 5,
    derrotas: 20,
    horasJuego: 30
  }
];
```

Resultado esperado:

```javascript
{
  jugadoresEvaluados: 3,
  elite: 1,
  competitivo: 1,
  principiante: 1,
  resultados: [
    {
      nombre: "ShadowX",
      porcentajeVictoria: "90.00%",
      categoria: "Jugador Elite"
    },
    {
      nombre: "CyberWolf",
      porcentajeVictoria: "57.14%",
      categoria: "Jugador Competitivo"
    },
    {
      nombre: "NewPlayer",
      porcentajeVictoria: "20.00%",
      categoria: "Jugador Principiante"
    }
  ]
}
```

### Caso borde

Entrada:

```javascript
const jugadores = [
  {
    nombre: "ErrorPlayer",
    victorias: -5,
    derrotas: 10,
    horasJuego: -20
  }
];
```

Resultado esperado:

```javascript
{
  jugadoresEvaluados: 1,
  elite: 0,
  competitivo: 0,
  principiante: 0,
  resultados: [
    {
      nombre: "ErrorPlayer",
      estado: "Datos inválidos"
    }
  ]
}
```

## Explicacion final

La solución representa un sistema de clasificación para jugadores de videojuegos competitivos utilizando reglas de negocio basadas en rendimiento y experiencia.

El algoritmo primero valida los datos recibidos, después calcula el porcentaje de victorias de cada jugador y finalmente aplica una serie de condiciones para determinar su nivel competitivo. La clasificación utiliza una estructura jerárquica donde los jugadores con mejores estadísticas reciben una categoría superior.

La implementación utiliza funciones, arreglos, ciclos, acumuladores y condicionales, permitiendo procesar múltiples jugadores de forma organizada y generar resultados verificables según diferentes escenarios.