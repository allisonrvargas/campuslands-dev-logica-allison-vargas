# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) con evaluaciones de trabajadores de soldadura.
  - Cada registro contiene:
    - `nombre`: nombre del trabajador evaluado.
    - `puntaje`: resultado obtenido en la evaluación técnica.

- **Proceso:**
  - Validar que existan evaluaciones.
  - Encontrar el puntaje máximo obtenido.
  - Aplicar una fórmula de normalización para comparar resultados.
  - Clasificar el desempeño según el puntaje normalizado.
  - Calcular promedios generales.

- **Salida:**
  - Cantidad de trabajadores evaluados.
  - Puntaje máximo encontrado.
  - Promedio de puntajes originales.
  - Promedio de puntajes normalizados.
  - Resultado individual de cada trabajador.

## Reglas identificadas

### 1. Validación de datos

Cada evaluación debe cumplir:

\[
Nombre \neq vacío
\]

\[
0 \leq Puntaje \leq 100
\]


### 2. Búsqueda del puntaje máximo

Se identifica:

\[
PuntajeMaximo = Max(Puntajes)
\]


### 3. Normalización de puntajes

Cada resultado se transforma a una escala de 0 a 100:

\[
PuntajeNormalizado =
\frac{PuntajeObtenido}{PuntajeMaximo}
\times 100
\]


### 4. Clasificación del trabajador

| Puntaje normalizado | Nivel |
|---|---|
| 90 o más | Excelente |
| 70 a 89.99 | Competente |
| Menor a 70 | Necesita mejora |


### 5. Promedios

Promedio original:

\[
Promedio =
\frac{\sum Puntajes}{CantidadDeTrabajadores}
\]


Promedio normalizado:

\[
PromedioNormalizado =
\frac{\sum PuntajesNormalizados}{CantidadDeTrabajadores}
\]


## Pruebas

### Caso normal

Entrada:

```javascript
[
  {
    nombre: "Carlos",
    puntaje: 85
  },
  {
    nombre: "Ana",
    puntaje: 100
  },
  {
    nombre: "Luis",
    puntaje: 60
  }
]
```

Resultado esperado:

```javascript
{
  totalEvaluados: 3,
  puntajeMaximo: 100,
  resultados: [
    {
      nombre: "Carlos",
      puntajeOriginal: 85,
      puntajeNormalizado: "85.00",
      nivel: "Competente"
    },
    {
      nombre: "Ana",
      puntajeOriginal: 100,
      puntajeNormalizado: "100.00",
      nivel: "Excelente"
    },
    {
      nombre: "Luis",
      puntajeOriginal: 60,
      puntajeNormalizado: "60.00",
      nivel: "Necesita mejora"
    }
  ]
}
```


### Caso borde

Entrada:

```javascript
[
  {
    nombre: "Trabajador inválido",
    puntaje: 150
  }
]
```

Resultado esperado:

```javascript
{
  nombre: "Trabajador inválido",
  estado: "Datos inválidos"
}
```


## Explicacion final

La solución representa un sistema de evaluación para trabajadores de soldadura donde los puntajes obtenidos son ajustados a una escala común.

El proceso primero encuentra el mejor resultado obtenido y utiliza ese valor como referencia para normalizar los demás puntajes. Esto permite comparar rendimientos aunque existan diferencias entre evaluaciones.

La implementación utiliza funciones, arreglos, ciclos, acumuladores y cálculos matemáticos para resolver un problema de análisis de desempeño con reglas claras.