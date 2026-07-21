# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) con información estadística de equipos de fútbol sala.
  - Cada equipo contiene:
    - `nombre`: nombre del equipo participante.
    - `partidosJugados`: cantidad de partidos disputados.
    - `golesFavor`: cantidad de goles anotados.
    - `golesContra`: cantidad de goles recibidos.
    - `puntos`: puntuación acumulada en el torneo.

- **Proceso:**
  - Validar que cada equipo tenga información correcta.
  - Revisar que los valores numéricos sean válidos.
  - Comprobar que los puntos obtenidos sean coherentes con la cantidad de partidos jugados.
  - Calcular la diferencia de goles cuando el registro sea válido.
  - Clasificar cada equipo como válido o inválido.
  - Guardar los errores encontrados.

- **Salida:**
  - Un objeto con:
    - Cantidad de equipos evaluados.
    - Cantidad de equipos válidos.
    - Cantidad de equipos inválidos.
    - Resultado individual de validación por equipo.

## Reglas identificadas

1. El nombre del equipo debe existir y contener texto válido.

2. Los valores estadísticos deben cumplir:

\[
PartidosJugados \geq 0
\]

\[
GolesFavor \geq 0
\]

\[
GolesContra \geq 0
\]

\[
Puntos \geq 0
\]

3. El sistema considera que un equipo puede obtener como máximo:

\[
PuntosMaximos = PartidosJugados \times 3
\]

porque una victoria entrega tres puntos.

4. Si:

\[
Puntos > PartidosJugados \times 3
\]

el registro del equipo es inconsistente.

5. Un equipo con todos sus datos correctos será clasificado como:

```text
Datos válidos
```

6. Un equipo que incumpla una o más reglas será clasificado como:

```text
Datos inválidos
```

7. Para equipos válidos se calcula la diferencia de goles:

\[
DiferenciaGoles = GolesFavor - GolesContra
\]

## Pruebas

### Caso normal

Entrada:

```javascript
const equipos = [
  {
    nombre: "Titanes FS",
    partidosJugados: 10,
    golesFavor: 35,
    golesContra: 20,
    puntos: 24
  },
  {
    nombre: "Rápidos FC",
    partidosJugados: 12,
    golesFavor: 40,
    golesContra: 25,
    puntos: 30
  }
];
```

Resultado esperado:

```javascript
{
  equiposEvaluados: 2,
  equiposValidos: 2,
  equiposInvalidos: 0,
  resultados: [
    {
      nombre: "Titanes FS",
      estado: "Datos válidos",
      diferenciaGoles: 15
    },
    {
      nombre: "Rápidos FC",
      estado: "Datos válidos",
      diferenciaGoles: 15
    }
  ]
}
```

### Caso borde

Entrada:

```javascript
const equipos = [
  {
    nombre: "Furia Urbana",
    partidosJugados: 8,
    golesFavor: 18,
    golesContra: 22,
    puntos: 40
  }
];
```

Resultado esperado:

```javascript
{
  equiposEvaluados: 1,
  equiposValidos: 0,
  equiposInvalidos: 1,
  resultados: [
    {
      nombre: "Furia Urbana",
      estado: "Datos inválidos",
      errores: [
        "Los puntos superan el máximo posible de partidos"
      ]
    }
  ]
}
```

## Explicacion final

La solución implementa un sistema de validación para un ranking de fútbol sala donde se revisa que las estadísticas de cada equipo sean coherentes antes de utilizarlas.

El algoritmo aplica reglas matemáticas del torneo, como el límite máximo de puntos posibles según los partidos jugados, además de validar que no existan valores negativos o datos incompletos.

Gracias al uso de funciones, arreglos, ciclos y acumuladores, el programa puede analizar múltiples equipos y generar un reporte detallado que permite identificar errores en los datos del ranking deportivo.