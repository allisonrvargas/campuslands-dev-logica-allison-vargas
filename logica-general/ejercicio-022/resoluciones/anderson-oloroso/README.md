# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) que contiene equipos de un ranking de fútbol sala.
  - Cada equipo contiene:
    - `nombre`: identificación del equipo.
    - `partidosJugados`: cantidad total de partidos disputados.
    - `victorias`: partidos ganados.
    - `empates`: partidos igualados.
    - `derrotas`: partidos perdidos.
    - `golesFavor`: goles anotados.
    - `golesContra`: goles recibidos.

- **Proceso:**
  - Validar que exista al menos un equipo.
  - Verificar que ninguna estadística tenga valores negativos.
  - Comprobar que la cantidad de partidos coincida con los resultados:

\[
Victorias + Empates + Derrotas = PartidosJugados
\]

  - Calcular los puntos obtenidos por cada equipo.
  - Calcular la diferencia de goles.
  - Comparar equipos para encontrar el líder del ranking.
  - Clasificar cada equipo según sus puntos obtenidos.

- **Salida:**
  - Un objeto con:
    - Cantidad de equipos evaluados.
    - Total de puntos acumulados.
    - Equipo líder.
    - Información de clasificación de cada equipo.

## Reglas identificadas

1. Debe existir al menos un equipo registrado.

2. Los valores estadísticos deben ser mayores o iguales a cero.

3. La cantidad de partidos debe coincidir con los resultados registrados:

\[
PJ = V + E + D
\]

4. Los puntos se calculan mediante el sistema tradicional:

\[
Puntos = (Victorias \times 3) + (Empates \times 1)
\]

5. La diferencia de goles se calcula como:

\[
Diferencia = GolesFavor - GolesContra
\]

6. El equipo líder es el que tenga:
   - Mayor cantidad de puntos.
   - En caso de empate, mayor diferencia de goles.

7. La clasificación del ranking depende de los puntos:
   - **20 puntos o más** → "Zona de clasificación".
   - **Entre 10 y 19 puntos** → "Zona media".
   - **Menos de 10 puntos** → "Zona baja".

8. Si la información ingresada no cumple las validaciones, el sistema devuelve un error.

## Pruebas

### Caso normal

Entrada:

```javascript
const equipos = [
  {
    nombre: "Titanes FC",
    partidosJugados: 8,
    victorias: 6,
    empates: 1,
    derrotas: 1,
    golesFavor: 35,
    golesContra: 15
  },
  {
    nombre: "Rápidos FS",
    partidosJugados: 8,
    victorias: 3,
    empates: 2,
    derrotas: 3,
    golesFavor: 20,
    golesContra: 18
  }
];
```

Resultado esperado:

```javascript
{
  equiposEvaluados: 2,
  puntosTotales: 24,
  equipoLider: "Titanes FC",
  resultados: [
    {
      nombre: "Titanes FC",
      puntos: 19,
      diferenciaGoles: 20,
      estadoRanking: "Zona media"
    },
    {
      nombre: "Rápidos FS",
      puntos: 11,
      diferenciaGoles: 2,
      estadoRanking: "Zona media"
    }
  ]
}
```

### Caso borde

Entrada:

```javascript
const equipos = [
  {
    nombre: "Equipo inválido",
    partidosJugados: 5,
    victorias: 4,
    empates: 2,
    derrotas: 1,
    golesFavor: 10,
    golesContra: 5
  }
];
```

Resultado esperado:

```javascript
{
  estado: "Error",
  motivo: "Los partidos del equipo Equipo inválido no coinciden con sus resultados."
}
```

## Explicacion final

La solución valida un ranking de fútbol sala aplicando reglas estadísticas y de negocio. Primero revisa que los datos ingresados sean coherentes, evitando inconsistencias entre partidos jugados y resultados obtenidos.

Después calcula los puntos de cada equipo mediante el sistema de puntuación del torneo y obtiene la diferencia de goles como criterio adicional de comparación. Con estas métricas se determina el líder del ranking y la zona en la que se encuentra cada equipo.

El algoritmo combina validaciones, ciclos, acumuladores, comparaciones y estructuras condicionales para procesar equipos de forma organizada y generar un ranking confiable.