# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) con movimientos realizados dentro de una animación digital.
  - Cada movimiento contiene:
    - `objeto`: nombre del elemento animado.
    - `distancia`: cantidad de unidades recorridas.
    - `tiempo`: duración del movimiento.

- **Proceso:**
  - Validar que existan movimientos registrados.
  - Revisar que distancia y tiempo sean valores positivos.
  - Calcular la velocidad de cada elemento.
  - Acumular distancia y tiempo total.
  - Calcular la velocidad promedio del conjunto de movimientos.

- **Salida:**
  - Un objeto con:
    - Cantidad de movimientos analizados.
    - Distancia total recorrida.
    - Tiempo total empleado.
    - Velocidad promedio.
    - Detalle individual de cada movimiento.

## Reglas identificadas

1. Debe existir al menos un movimiento para realizar los cálculos.

2. Los valores de distancia y tiempo deben cumplir:

\[
Distancia > 0
\]

\[
Tiempo > 0
\]

3. La velocidad de un objeto se calcula mediante:

\[
Velocidad = \frac{Distancia}{Tiempo}
\]

4. La distancia total corresponde a la suma de todos los desplazamientos:

\[
DistanciaTotal = d_1+d_2+d_3+...+d_n
\]

5. El tiempo total corresponde a:

\[
TiempoTotal = t_1+t_2+t_3+...+t_n
\]

6. La velocidad promedio general se calcula como:

\[
VelocidadPromedio =
\frac{DistanciaTotal}{TiempoTotal}
\]

7. Los movimientos con datos inválidos no participan en los cálculos acumulados.

## Pruebas

### Caso normal

Entrada:

```javascript
const animaciones = [
  {
    objeto: "Personaje",
    distancia: 120,
    tiempo: 6
  },
  {
    objeto: "Camara",
    distancia: 200,
    tiempo: 10
  },
  {
    objeto: "Objeto3D",
    distancia: 80,
    tiempo: 4
  }
];
```

Resultado esperado:

```javascript
{
  movimientosAnalizados: 3,
  distanciaTotal: 400,
  tiempoTotal: 20,
  velocidadPromedio: 20,
  resultados: [
    {
      objeto: "Personaje",
      distancia: 120,
      tiempo: 6,
      velocidad: 20
    },
    {
      objeto: "Camara",
      distancia: 200,
      tiempo: 10,
      velocidad: 20
    },
    {
      objeto: "Objeto3D",
      distancia: 80,
      tiempo: 4,
      velocidad: 20
    }
  ]
}
```

### Caso borde

Entrada:

```javascript
const animaciones = [
  {
    objeto: "Personaje",
    distancia: 100,
    tiempo: 0
  }
];
```

Resultado esperado:

```javascript
{
  movimientosAnalizados: 1,
  distanciaTotal: 0,
  tiempoTotal: 0,
  velocidadPromedio: 0,
  resultados: [
    {
      objeto: "Personaje",
      estado: "Datos inválidos"
    }
  ]
}
```

## Explicacion final

La solución representa un sistema básico de análisis de movimiento para dibujo digital y animaciones. Cada elemento tiene una distancia recorrida y un tiempo de ejecución, permitiendo calcular la velocidad de desplazamiento.

El algoritmo aplica la fórmula física de velocidad, acumula los valores generales y obtiene un promedio global del movimiento. Además, controla casos especiales como tiempos inválidos para evitar divisiones incorrectas.

La implementación utiliza funciones, arreglos, ciclos, acumuladores, condicionales y operaciones matemáticas para crear una solución ordenada y verificable.