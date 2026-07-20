# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) con información de películas de miedo.
  - Cada película contiene:
    - `titulo`: nombre de la película.
    - `nivelTerror`: intensidad del miedo generada por la película.
    - `escenasMiedo`: cantidad de escenas consideradas aterradoras.

- **Proceso:**
  - Validar que existan películas registradas.
  - Verificar que los valores ingresados sean válidos.
  - Calcular un índice de terror utilizando una multiplicación:

    \[
    IndiceTerror = NivelTerror \times EscenasMiedo
    \]

  - Acumular los índices de terror para obtener un promedio.
  - Comparar los índices para encontrar la película con mayor nivel de terror.
  - Clasificar cada resultado según reglas de divisibilidad utilizando el módulo (`%`).

- **Salida:**
  - Un objeto con:
    - Cantidad de películas evaluadas.
    - Promedio del índice de terror.
    - Película más aterradora.
    - Clasificación de cada película según su índice.

## Reglas identificadas

1. Debe existir al menos una película registrada.
2. El nivel de terror no puede ser negativo.
3. La cantidad de escenas de miedo debe ser un número entero válido.
4. El índice de terror se calcula mediante:

\[
IndiceTerror = NivelTerror \times EscenasMiedo
\]

5. La clasificación depende de la divisibilidad del índice:
   - Si el índice es divisible entre 3:

\[
IndiceTerror \mod 3 = 0
\]

   → **"Terror divisible nivel 3"**

   - Si el índice es divisible entre 2:

\[
IndiceTerror \mod 2 = 0
\]

   → **"Terror divisible nivel 2"**

   - Si no cumple ninguna condición:

   → **"Terror especial"**

6. La película más aterradora es la que tenga el mayor índice de terror.

## Pruebas

### Caso normal

Entrada:

```javascript
const peliculas = [
  {
    titulo: "La Casa Oscura",
    nivelTerror: 8,
    escenasMiedo: 9
  },
  {
    titulo: "Sombras Nocturnas",
    nivelTerror: 7,
    escenasMiedo: 5
  },
  {
    titulo: "El Ritual Perdido",
    nivelTerror: 9,
    escenasMiedo: 6
  }
];
```

Resultado esperado:

```javascript
{
  peliculasEvaluadas: 3,
  promedioTerror: 65.67,
  peliculaMasAterradora: "El Ritual Perdido",
  resultados: [
    {
      titulo: "La Casa Oscura",
      indiceTerror: 72,
      clasificacion: "Terror divisible nivel 3"
    },
    {
      titulo: "Sombras Nocturnas",
      indiceTerror: 35,
      clasificacion: "Terror especial"
    },
    {
      titulo: "El Ritual Perdido",
      indiceTerror: 54,
      clasificacion: "Terror divisible nivel 3"
    }
  ]
}
```

### Caso borde

Entrada:

```javascript
const peliculas = [
  {
    titulo: "Terror inválido",
    nivelTerror: -5,
    escenasMiedo: 4
  }
];
```

Resultado esperado:

```javascript
{
  estado: "Error",
  motivo: "Los niveles y cantidades deben ser valores válidos."
}
```

## Explicacion final

La solución analiza películas de miedo utilizando operaciones matemáticas basadas en multiplicación, acumuladores y reglas de divisibilidad. Primero valida que los datos de entrada sean correctos para evitar cálculos inválidos.

Después calcula un índice de terror combinando la intensidad del miedo y la cantidad de escenas aterradoras. Este valor permite comparar películas, obtener un promedio general y encontrar cuál tiene mayor impacto.

Finalmente se utiliza el operador módulo para identificar patrones de divisibilidad y clasificar cada película según su índice. El algoritmo integra ciclos, funciones, arreglos y operaciones numéricas para convertir características de películas de terror en resultados cuantificables.