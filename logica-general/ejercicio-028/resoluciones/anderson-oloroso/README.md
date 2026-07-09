# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) con información de películas de ciencia ficción.
  - Cada película contiene:
    - `titulo`: nombre de la película.
    - `duracion`: duración en minutos.
    - `puntuacion`: valoración de 0 a 10.
    - `presupuesto`: inversión económica de producción.
    - `tecnologia`: nivel tecnológico utilizado.

- **Proceso:**
  - Validar que existan películas registradas.
  - Revisar que los datos básicos sean correctos.
  - Clasificar la fase de producción según presupuesto y tecnología.
  - Calcular una valoración final combinando puntuación y duración.
  - Acumular valores para obtener un promedio.
  - Identificar la película con mejor valoración.
  - Generar un reporte paso a paso del procesamiento.

- **Salida:**
  - Un objeto con:
    - Número de películas procesadas.
    - Promedio de valoración.
    - Película destacada.
    - Resultado individual de cada película.

## Reglas identificadas

1. Debe existir al menos una película registrada.

2. Los datos deben cumplir:

\[
Duracion > 0
\]

\[
0 \le Puntuacion \le 10
\]

\[
Presupuesto \ge 0
\]

3. La fase de producción se determina mediante condiciones:

- Si:

\[
Presupuesto \ge 100000000
\]

y la tecnología es "Avanzada":

→ "Producción Premium"

- Si:

\[
Presupuesto \ge 50000000
\]

o la tecnología es "Avanzada":

→ "Producción Estándar"

- En cualquier otro caso:

→ "Producción Básica"

4. La valoración final se calcula con:

\[
Valoracion =
(Puntuacion \times 10)
+
\frac{Duracion}{30}
\]

5. La película destacada será la que tenga mayor valoración final.

6. Los datos inválidos no detienen el flujo, sino que son registrados con estado de error.

## Pruebas

### Caso normal

Entrada:

```javascript
const peliculas = [
  {
    titulo: "Galactic Horizon",
    duracion: 150,
    puntuacion: 9,
    presupuesto: 200000000,
    tecnologia: "Avanzada"
  },
  {
    titulo: "Mars Colony",
    duracion: 120,
    puntuacion: 7,
    presupuesto: 60000000,
    tecnologia: "Media"
  },
  {
    titulo: "Lost Planet",
    duracion: 90,
    puntuacion: 5,
    presupuesto: 20000000,
    tecnologia: "Básica"
  }
];
```

Resultado esperado:

```javascript
{
  peliculasProcesadas: 3,
  promedioValoracion: 71.67,
  peliculaDestacada: "Galactic Horizon",
  resultados: [
    {
      titulo: "Galactic Horizon",
      faseProduccion: "Producción Premium",
      valoracionFinal: 95,
      estado: "Procesada"
    },
    {
      titulo: "Mars Colony",
      faseProduccion: "Producción Estándar",
      valoracionFinal: 74,
      estado: "Procesada"
    },
    {
      titulo: "Lost Planet",
      faseProduccion: "Producción Básica",
      valoracionFinal: 53,
      estado: "Procesada"
    }
  ]
}
```

### Caso borde

Entrada:

```javascript
const peliculas = [
  {
    titulo: "Película inválida",
    duracion: 0,
    puntuacion: 15,
    presupuesto: -1000,
    tecnologia: "Desconocida"
  }
];
```

Resultado esperado:

```javascript
{
  peliculasProcesadas: 1,
  promedioValoracion: 0,
  peliculaDestacada: null,
  resultados: [
    {
      titulo: "Película inválida",
      estado: "Datos inválidos"
    }
  ]
}
```

## Explicacion final

La solución representa un flujo de procesamiento para películas de ciencia ficción donde cada elemento pasa por diferentes etapas de validación, clasificación y evaluación.

Primero se verifican los datos recibidos para evitar errores. Después se aplican reglas de negocio que determinan la categoría de producción según recursos y tecnología utilizada.

Finalmente se calcula una valoración combinando diferentes características de la película, se compara el rendimiento de cada producción y se genera un reporte completo. El algoritmo utiliza funciones, arreglos, ciclos, acumuladores y decisiones condicionales para simular un sistema de evaluación cinematográfica organizado.