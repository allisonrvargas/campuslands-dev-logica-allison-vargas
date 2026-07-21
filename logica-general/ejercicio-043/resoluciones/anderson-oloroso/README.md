# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) con información de equipos participantes en un torneo de esports.
  - Cada equipo contiene:
    - `nombre`: nombre del equipo.
    - `victorias`: cantidad de partidas ganadas.
    - `derrotas`: cantidad de partidas perdidas.
    - `rendimiento`: porcentaje de rendimiento del equipo (0 a 100).
    - `conducta`: indica si el equipo mantiene un comportamiento adecuado.

- **Proceso:**
  - Validar que los datos ingresados sean correctos.
  - Calcular el porcentaje de victorias de cada equipo.
  - Evaluar reglas de clasificación considerando rendimiento, resultados y conducta.
  - Tomar una decisión sobre el futuro del equipo en el torneo.
  - Contabilizar equipos clasificados, en revisión y eliminados.

- **Salida:**
  - Un objeto con:
    - Número de equipos evaluados.
    - Cantidad de equipos clasificados.
    - Cantidad de equipos en revisión.
    - Cantidad de equipos eliminados.
    - Resultado individual de cada equipo.

## Reglas identificadas

1. Los datos básicos del equipo deben ser válidos:

\[
Victorias \geq 0
\]

\[
Derrotas \geq 0
\]

\[
0 \le Rendimiento \le 100
\]

2. El porcentaje de victorias se calcula mediante:

\[
PorcentajeVictoria =
\frac{Victorias}{Victorias + Derrotas}
\times 100
\]

3. Un equipo será **Clasificado a fase final** si cumple todas las condiciones:

- Tiene buena conducta.
- Su porcentaje de victorias es mayor o igual a 70%.
- Su rendimiento es mayor o igual a 80%.

4. Un equipo estará **En revisión técnica** si:

- Tiene buena conducta.
- Su porcentaje de victorias es mayor o igual a 50%.

5. Todo equipo que no cumpla las condiciones anteriores será:

```text
Eliminado
```

6. Los registros con información incorrecta no participan en la clasificación.

## Pruebas

### Caso normal

Entrada:

```javascript
const equipos = [
  {
    nombre: "Cyber Titans",
    victorias: 8,
    derrotas: 2,
    rendimiento: 90,
    conducta: true
  },
  {
    nombre: "Pixel Warriors",
    victorias: 6,
    derrotas: 4,
    rendimiento: 70,
    conducta: true
  },
  {
    nombre: "Dark Squad",
    victorias: 3,
    derrotas: 7,
    rendimiento: 50,
    conducta: false
  }
];
```

Resultado esperado:

```javascript
{
  equiposEvaluados: 3,
  clasificados: 1,
  enRevision: 1,
  eliminados: 1,
  resultados: [
    {
      nombre: "Cyber Titans",
      porcentajeVictoria: "80.00%",
      decision: "Clasificado a fase final"
    },
    {
      nombre: "Pixel Warriors",
      porcentajeVictoria: "60.00%",
      decision: "En revisión técnica"
    },
    {
      nombre: "Dark Squad",
      porcentajeVictoria: "30.00%",
      decision: "Eliminado"
    }
  ]
}
```

### Caso borde

Entrada:

```javascript
const equipos = [
  {
    nombre: "Equipo Error",
    victorias: -2,
    derrotas: 5,
    rendimiento: 120,
    conducta: true
  }
];
```

Resultado esperado:

```javascript
{
  equiposEvaluados: 1,
  clasificados: 0,
  enRevision: 0,
  eliminados: 0,
  resultados: [
    {
      nombre: "Equipo Error",
      estado: "Datos inválidos"
    }
  ]
}
```

## Explicacion final

La solución representa un sistema de toma de decisiones para un torneo competitivo de esports. El programa analiza diferentes variables del equipo, como rendimiento, porcentaje de victorias y comportamiento, para determinar la acción correspondiente.

La lógica utiliza reglas jerárquicas donde primero se evalúan los mejores escenarios de clasificación, después los casos intermedios y finalmente los equipos eliminados. Además, se incluyen validaciones para evitar que datos incorrectos afecten las decisiones.

La implementación utiliza funciones, arreglos, ciclos, acumuladores y condicionales, permitiendo procesar múltiples equipos y generar resultados claros y verificables.