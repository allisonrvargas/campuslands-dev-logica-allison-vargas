# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) con información de los luchadores de kickboxing.
  - Cada luchador contiene:
    - `nombre`: identificación del competidor.
    - `peso`: categoría de peso del luchador.
    - `nivel`: nivel competitivo del participante.

- **Proceso:**
  - Validar que existan suficientes luchadores.
  - Comparar cada luchador con los demás mediante combinaciones posibles.
  - Revisar si dos competidores pueden formar un combate.
  - Contabilizar las parejas válidas encontradas.
  - Guardar la información de cada combate posible.

- **Salida:**
  - Un objeto con:
    - Cantidad total de luchadores.
    - Número de combates posibles.
    - Lista de parejas que cumplen las condiciones.

## Reglas identificadas

1. Deben existir al menos dos luchadores para poder crear combinaciones de combate.

2. Cada pareja de luchadores debe evaluarse únicamente una vez.

3. Dos luchadores pueden enfrentarse si cumplen:

\[
Peso_{A} = Peso_{B}
\]

y

\[
Nivel_{A} \neq Nivel_{B}
\]

4. Los luchadores con diferente categoría de peso no generan combate.

5. Un luchador no puede enfrentarse contra sí mismo.

6. El número de combinaciones posibles se obtiene comparando todos los pares disponibles:

\[
Combinaciones = \frac{n(n-1)}{2}
\]

donde `n` es la cantidad de luchadores.

## Pruebas

### Caso normal

Entrada:

```javascript
const luchadores = [
  {
    nombre: "Carlos",
    peso: 70,
    nivel: "Amateur"
  },
  {
    nombre: "Andrea",
    peso: 70,
    nivel: "Profesional"
  },
  {
    nombre: "Miguel",
    peso: 80,
    nivel: "Profesional"
  },
  {
    nombre: "Laura",
    peso: 70,
    nivel: "Semiprofesional"
  }
];
```

Resultado esperado:

```javascript
{
  totalLuchadores: 4,
  combatesPosibles: 3,
  parejas: [
    {
      competidor1: "Carlos",
      competidor2: "Andrea",
      categoriaPeso: 70
    },
    {
      competidor1: "Carlos",
      competidor2: "Laura",
      categoriaPeso: 70
    },
    {
      competidor1: "Andrea",
      competidor2: "Laura",
      categoriaPeso: 70
    }
  ]
}
```

### Caso borde

Entrada:

```javascript
const luchadores = [
  {
    nombre: "Pedro",
    peso: 60,
    nivel: "Amateur"
  }
];
```

Resultado esperado:

```javascript
{
  estado: "Error",
  motivo: "Se necesitan al menos dos luchadores para formar combates."
}
```

## Explicacion final

La solución utiliza un conteo combinatorio simple para encontrar todas las posibles parejas de combate dentro de un torneo de kickboxing. Mediante dos ciclos anidados se comparan los luchadores sin repetir parejas ni generar enfrentamientos consigo mismos.

Cada combinación es evaluada usando reglas de negocio basadas en la categoría de peso y el nivel competitivo. Cuando una pareja cumple las condiciones, se incrementa el contador y se almacena como combate válido.

El algoritmo aplica funciones, arreglos, ciclos, acumuladores y razonamiento lógico para resolver un problema de combinaciones de manera organizada y verificable.