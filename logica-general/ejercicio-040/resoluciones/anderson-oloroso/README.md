# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) con información de puestos de comida urbana.
  - Cada puesto contiene:
    - `nombre`: nombre del establecimiento.
    - `calificacion`: puntuación otorgada por los clientes (0 a 5).
    - `tiempoEspera`: minutos estimados para entregar el pedido.
    - `disponible`: indica si el puesto está atendiendo.

- **Proceso:**
  - Validar la información de cada puesto.
  - Evaluar disponibilidad, calificación y tiempo de espera.
  - Clasificar cada puesto según una estrategia de selección.
  - Contabilizar la cantidad de puestos recomendados, aceptables y descartados.
  - Generar un reporte con los resultados obtenidos.

- **Salida:**
  - Un objeto con:
    - Cantidad de puestos evaluados.
    - Número de puestos recomendados.
    - Número de puestos aceptables.
    - Número de puestos descartados.
    - Estado individual de cada puesto.

## Reglas identificadas

1. Todo puesto debe tener un nombre válido.

2. La calificación debe cumplir:

\[
0 \le Calificacion \le 5
\]

3. El tiempo de espera debe ser mayor o igual a cero.

4. Un puesto será **Recomendado** cuando cumpla simultáneamente:

- Está disponible.
- Calificación mayor o igual a 4.5.
- Tiempo de espera menor o igual a 15 minutos.

5. Un puesto será **Aceptable** cuando:

- Está disponible.
- Calificación mayor o igual a 3.5.
- Tiempo de espera menor o igual a 30 minutos.

6. Todo puesto que no cumpla las condiciones anteriores será clasificado como **Descartado**.

7. Los registros con información inválida no participan en las estadísticas.

## Pruebas

### Caso normal

Entrada:

```javascript
const puestos = [
  {
    nombre: "Burger Express",
    calificacion: 4.8,
    tiempoEspera: 10,
    disponible: true
  },
  {
    nombre: "Tacos City",
    calificacion: 4.0,
    tiempoEspera: 25,
    disponible: true
  },
  {
    nombre: "Pizza Flash",
    calificacion: 3.2,
    tiempoEspera: 35,
    disponible: false
  }
];
```

Resultado esperado:

```javascript
{
  puestosEvaluados: 3,
  recomendados: 1,
  aceptables: 1,
  descartados: 1,
  resultados: [
    {
      nombre: "Burger Express",
      estado: "Recomendado"
    },
    {
      nombre: "Tacos City",
      estado: "Aceptable"
    },
    {
      nombre: "Pizza Flash",
      estado: "Descartado"
    }
  ]
}
```

### Caso borde

Entrada:

```javascript
const puestos = [
  {
    nombre: "",
    calificacion: 6,
    tiempoEspera: -5,
    disponible: true
  }
];
```

Resultado esperado:

```javascript
{
  puestosEvaluados: 1,
  recomendados: 0,
  aceptables: 0,
  descartados: 0,
  resultados: [
    {
      nombre: "",
      estado: "Datos inválidos"
    }
  ]
}
```

## Explicacion final

La solución implementa una estrategia de selección para puestos de comida urbana basada en reglas de negocio. Cada establecimiento es evaluado considerando su disponibilidad, la calificación otorgada por los clientes y el tiempo estimado de espera.

Mediante una serie de condiciones jerárquicas, el algoritmo clasifica los puestos como **Recomendado**, **Aceptable** o **Descartado**, permitiendo identificar rápidamente las mejores opciones disponibles. Además, valida los datos de entrada para evitar resultados inconsistentes y genera estadísticas generales del proceso.

La implementación utiliza funciones, arreglos, ciclos, acumuladores y estructuras condicionales, proporcionando una solución organizada, reutilizable y fácil de verificar con distintos escenarios de prueba.