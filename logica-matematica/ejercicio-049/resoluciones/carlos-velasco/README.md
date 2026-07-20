# Logica matematica 049 - analisis de intensidad de pelicula

## Sistema de Análisis de Intensidad Cinematográfica

Este script evalúa una serie de valores (frames) representativos de una película para determinar su nivel de intensidad, identificando momentos críticos basados en un intervalo definido.

* **Descripción del proceso:**
* **Cálculo de Intensidad Base**: Suma los valores de todos los frames proporcionados.
* **Detección de "Jump Scares"**: Identifica momentos de terror intenso utilizando el operador módulo (`%`), donde los valores divisibles exactamente por el `intervalo` son considerados momentos críticos.
* **Ponderación Final**: Aplica un bono de 10 puntos por cada "jump scare" detectado.
* **Clasificación Dinámica**: Clasifica la película como "Intensa" si la cantidad de momentos críticos supera un tercio del total de escenas, o "Suspenso Moderado" en caso contrario.


* **Tecnologías:**
* JavaScript (métodos de arreglos `.reduce()` y `.filter()`).



---

### Explicación técnica

1. **Lógica de Análisis**: Al combinar `.reduce()` para la suma total y `.filter()` para la detección de eventos críticos, el script logra un balance eficiente entre procesamiento de datos y legibilidad.
2. **Umbral de Clasificación**: La comparación `jumpScares > (frames.length / 3)` establece un criterio de densidad de eventos, permitiendo escalar la clasificación según la frecuencia de momentos críticos.

### Lógica del Código

```javascript
const analizarPelicula = (frames, intervalo) => {
    // 1. Manejo de catálogo vacío
    if (frames.length === 0) return { puntaje_total: 0, clasificacion: "Moderado", explicacion: "Sin escenas." };

    // 2. Cálculo de suma y detección de momentos intensos
    const suma = frames.reduce((a, b) => a + b, 0);
    const jumpScares = frames.filter(f => f % intervalo === 0).length;
    
    // 3. Ponderación y clasificación
    const puntajeTotal = suma + (jumpScares * 10);
    const clasificacion = jumpScares > (frames.length / 3) ? "Intensa" : "Suspenso Moderado";

    // 4. Retorno del informe
    return {
        puntaje_total: puntajeTotal,
        clasificacion: clasificacion,
        explicacion: `Se detectaron ${jumpScares} momentos de terror intenso.`
    };
};

```

### Salida Esperada

```text
{
  puntaje_total: 140,
  clasificacion: 'Intensa',
  explicacion: 'Se detectaron 4 momentos de terror intenso.'
}
{
  puntaje_total: 23,
  clasificacion: 'Suspenso Moderado',
  explicacion: 'Se detectaron 0 momentos de terror intenso.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-049/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco