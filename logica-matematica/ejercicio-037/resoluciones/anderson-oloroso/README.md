# Plantilla de solucion

## Analisis

- Entrada:
- Proceso:
- Salida:

## Reglas identificadas

1.
2.
3.

## Pruebas

### Caso normal

Entrada:

Resultado esperado:

### Caso borde

Entrada:

Resultado esperado:

## Explicacion final

Escribe aqui por que tu solucion funciona.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.
# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) con proyectos de arquitectura 3D.
  - Cada proyecto contiene:
    - `nombre`: nombre del diseño arquitectónico.
    - `creatividad`: puntuación creativa del proyecto.
    - `funcionalidad`: puntuación de utilidad y diseño.
    - `precision`: nivel de precisión del modelo 3D.

- **Proceso:**
  - Validar que los datos ingresados sean correctos.
  - Calcular un puntaje ponderado para cada proyecto.
  - Clasificar cada proyecto según su puntuación.
  - Calcular el promedio general del ranking.
  - Encontrar el proyecto con mayor puntuación.

- **Salida:**
  - Cantidad de proyectos evaluados.
  - Promedio general del ranking.
  - Proyecto ganador.
  - Puntaje más alto.
  - Ranking individual de proyectos.

## Reglas identificadas

### 1. Validación de puntuaciones

Cada puntuación debe estar dentro del rango permitido:

\[
0 \leq Puntaje \leq 100
\]


### 2. Cálculo del ranking

El puntaje final utiliza pesos diferentes:

\[
PuntajeFinal =
(Creatividad \times 0.40)
+
(Funcionalidad \times 0.35)
+
(Precision \times 0.25)
\]


### 3. Clasificación de proyectos

| Puntaje final | Categoría |
|---|---|
| 90 o más | Nivel profesional |
| 70 a 89.99 | Nivel avanzado |
| Menor a 70 | Nivel básico |


### 4. Promedio general

Se calcula mediante:

\[
Promedio =
\frac{\sum PuntajesFinales}{CantidadDeProyectos}
\]


### 5. Mejor proyecto

El ganador será el proyecto con:

\[
Mayor(PuntajeFinal)
\]


## Pruebas

### Caso normal

Entrada:

```javascript
[
  {
    nombre: "Torre Moderna",
    creatividad: 95,
    funcionalidad: 90,
    precision: 92
  },
  {
    nombre: "Casa Inteligente",
    creatividad: 80,
    funcionalidad: 85,
    precision: 75
  }
]
```

Resultado esperado:

```javascript
{
  cantidadProyectos: 2,
  mejorProyecto: "Torre Moderna",
  ranking: [
    {
      nombre: "Torre Moderna",
      categoria: "Nivel profesional"
    },
    {
      nombre: "Casa Inteligente",
      categoria: "Nivel avanzado"
    }
  ]
}
```


### Caso borde

Entrada:

```javascript
[
  {
    nombre: "Diseño inválido",
    creatividad: 120,
    funcionalidad: 80,
    precision: 70
  }
]
```

Resultado esperado:

```javascript
{
  nombre: "Diseño inválido",
  estado: "Datos inválidos"
}
```


## Explicacion final

La solución implementa un sistema de ranking para proyectos de arquitectura 3D. Cada diseño es evaluado mediante diferentes criterios con pesos específicos para obtener una puntuación final.

El algoritmo permite comparar proyectos, clasificarlos por rendimiento y determinar cuál obtiene la mejor posición en el ranking.

La implementación utiliza funciones, arreglos, ciclos, acumuladores y cálculos matemáticos para resolver un problema de evaluación con múltiples criterios.