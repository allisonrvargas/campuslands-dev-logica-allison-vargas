# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) que contiene películas de ciencia ficción.
  - Cada película contiene:
    - `titulo`: nombre de la película.
    - `puntuacionCritica`: evaluación de expertos.
    - `puntuacionPublico`: valoración de espectadores.
    - `efectosEspeciales`: calidad visual y tecnológica.

- **Proceso:**
  - Validar que existan películas registradas.
  - Comprobar que todas las puntuaciones estén dentro del rango de 0 a 100.
  - Calcular una puntuación ponderada para cada película:

    \[
    PuntuacionFinal =
    (Critica \times 0.4)
    +(Publico \times 0.35)
    +(Efectos \times 0.25)
    \]

  - Acumular las puntuaciones para obtener el promedio general.
  - Comparar los resultados para encontrar la película con mayor puntuación.
  - Clasificar cada película según su puntuación final.

- **Salida:**
  - Un objeto con:
    - Cantidad de películas evaluadas.
    - Promedio general.
    - Película con mejor puntuación.
    - Clasificación individual de cada película.

## Reglas identificadas

1. Debe existir al menos una película registrada.
2. Todas las puntuaciones deben estar entre 0 y 100.
3. La puntuación final utiliza pesos diferentes para cada criterio:

\[
P=(Critica \times 40\%)+(Publico \times 35\%)+(Efectos \times 25\%)
\]

4. El promedio general se calcula mediante:

\[
Promedio=\frac{\sum Puntuaciones}{Cantidad\ de\ peliculas}
\]

5. La película con mayor puntuación será considerada la mejor evaluada.
6. La categoría depende de la puntuación final:
   - **90 o más** → "Obra maestra futurista".
   - **75 a 89.99** → "Éxito de ciencia ficción".
   - **60 a 74.99** → "Aceptable".
   - **Menor de 60** → "Bajo rendimiento".

7. Si una puntuación está fuera del rango permitido, el sistema devuelve un error.

## Pruebas

### Caso normal

Entrada:

```javascript
const peliculas = [
  {
    titulo: "Galaxia Perdida",
    puntuacionCritica: 95,
    puntuacionPublico: 90,
    efectosEspeciales: 98
  },
  {
    titulo: "Mundos Paralelos",
    puntuacionCritica: 80,
    puntuacionPublico: 85,
    efectosEspeciales: 88
  }
];
```

Resultado esperado:

```javascript
{
  peliculasEvaluadas: 2,
  promedioGeneral: 89.58,
  mejorPelicula: "Galaxia Perdida",
  resultados: [
    {
      titulo: "Galaxia Perdida",
      puntuacionFinal: 94.95,
      categoria: "Obra maestra futurista"
    },
    {
      titulo: "Mundos Paralelos",
      puntuacionFinal: 84.2,
      categoria: "Éxito de ciencia ficción"
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
    puntuacionCritica: 120,
    puntuacionPublico: 80,
    efectosEspeciales: 90
  }
];
```

Resultado esperado:

```javascript
{
  estado: "Error",
  motivo: "Las puntuaciones deben estar entre 0 y 100."
}
```

## Explicacion final

La solución analiza películas de ciencia ficción mediante un sistema de puntuación compuesto por varios criterios. Primero valida que los valores ingresados sean correctos y estén dentro de los límites establecidos.

Después aplica una fórmula ponderada donde cada aspecto tiene una importancia diferente: crítica, público y efectos especiales. Utilizando ciclos y acumuladores se calculan los resultados individuales y el promedio general del conjunto.

Finalmente, mediante condiciones se asigna una categoría de rendimiento y se identifica la película con mejor puntuación. El algoritmo combina funciones, arreglos, validaciones y cálculos estadísticos para transformar evaluaciones cinematográficas en información cuantificable y verificable.