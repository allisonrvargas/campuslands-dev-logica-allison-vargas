# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) con las coordenadas tridimensionales de los saltadores.
  - Cada elemento contiene:
    - `nombre`: identificación del saltador.
    - `x`: posición horizontal en el eje X.
    - `y`: posición horizontal en el eje Y.
    - `z`: altura del saltador.

- **Proceso:**
  - Validar que existan suficientes coordenadas.
  - Comparar cada punto con los demás sin repetir parejas.
  - Calcular la distancia espacial entre dos posiciones.
  - Encontrar la pareja de saltadores con mayor separación.
  - Guardar todas las distancias calculadas.

- **Salida:**
  - Un objeto con:
    - Cantidad de coordenadas analizadas.
    - Número de distancias calculadas.
    - Pareja con mayor distancia.
    - Lista completa de distancias obtenidas.

## Reglas identificadas

1. Deben existir al menos dos coordenadas para poder calcular una distancia.

2. La distancia entre dos puntos tridimensionales se calcula mediante la fórmula euclidiana:

\[
d = \sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}
\]

3. Cada pareja de saltadores debe compararse una sola vez.

4. La distancia máxima se obtiene mediante:

\[
MayorDistancia = max(d_1,d_2,d_3,...,d_n)
\]

5. Las coordenadas pueden representar posiciones dentro del espacio de salto y permiten conocer la separación entre participantes.

## Pruebas

### Caso normal

Entrada:

```javascript
const saltadores = [
  {
    nombre: "Carlos",
    x: 10,
    y: 20,
    z: 1000
  },
  {
    nombre: "Laura",
    x: 20,
    y: 30,
    z: 1200
  },
  {
    nombre: "Miguel",
    x: 40,
    y: 50,
    z: 1500
  }
];
```

Resultado esperado:

```javascript
{
  coordenadasAnalizadas: 3,
  distanciasCalculadas: 3,
  parejaMasAlejada: {
    saltador1: "Carlos",
    saltador2: "Miguel",
    distancia: 548.72
  }
}
```

### Caso borde

Entrada:

```javascript
const saltadores = [
  {
    nombre: "Ana",
    x: 0,
    y: 0,
    z: 100
  }
];
```

Resultado esperado:

```javascript
{
  estado: "Error",
  motivo: "Se requieren al menos dos coordenadas para calcular distancias."
}
```

## Explicacion final

La solución representa un sistema de análisis espacial para un escenario de paracaidismo, donde cada participante posee una posición dentro de un espacio tridimensional.

Mediante la fórmula de distancia euclidiana se calculan las separaciones entre todos los pares posibles de saltadores. Posteriormente se identifica cuál pareja tiene la mayor distancia entre sus posiciones.

El algoritmo utiliza funciones, arreglos, ciclos, comparaciones y cálculos matemáticos para resolver el problema de manera estructurada, evitando repetir comparaciones y generando resultados verificables.