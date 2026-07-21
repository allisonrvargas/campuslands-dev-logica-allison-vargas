# Logica matematica 043 - promedios y medianas

## Sistema de Análisis de Tendencia de Tiempos

Este script analiza un conjunto de tiempos registrados para calcular métricas de tendencia central y clasificar la duración global frente a un umbral determinado.

* **Descripción del proceso:**
* **Cálculo de Promedio**: Utiliza el método `.reduce()` para obtener la suma total y dividirla por la cantidad de elementos.
* **Cálculo de Mediana**: Ordena el arreglo para encontrar el valor central exacto, manejando tanto listas pares como impares.
* **Clasificación**: Determina si la duración es "Larga" o "Estándar" comparando la mediana contra un umbral definido.
* **Tecnologías:**
* JavaScript (métodos de arreglos, funciones matemáticas).

---

### Explicación técnica

1. **Inmutabilidad de Datos**: Al usar `[...tiempos]` para ordenar el arreglo, se evita modificar el conjunto de datos original, preservando la integridad de la entrada para posibles procesos secundarios.
2. **Precisión Estadística**: El uso de la mediana en lugar del promedio para la clasificación permite que el sistema sea más robusto ante valores atípicos extremos, asegurando una categorización más representativa del comportamiento de los tiempos.

### Lógica del Código

```javascript
const analizarTiempos = (tiempos, umbral) => {
    // 1. Validación de datos vacíos
    if (tiempos.length === 0) return { error: "Sin datos" };

    // 2. Cálculo del promedio
    const suma = tiempos.reduce((a, b) => a + b, 0);
    const promedio = suma / tiempos.length;

    // 3. Cálculo de la mediana
    const ordenados = [...tiempos].sort((a, b) => a - b);
    const mitad = Math.floor(ordenados.length / 2);
    const mediana = ordenados.length % 2 !== 0 
        ? ordenados[mitad] 
        : (ordenados[mitad - 1] + ordenados[mitad]) / 2;

    // 4. Clasificación según umbral
    const clasificacion = mediana > umbral ? "Larga" : "Estándar";

    return {
        promedio: promedio.toFixed(2),
        mediana: mediana,
        clasificacion: clasificacion,
        explicacion: "Comparación de tendencia central para determinar categoría de duración."
    };
};

```

### Salida Esperada

```text
{
  promedio: '33.00',
  mediana: 30,
  clasificacion: 'Estándar',
  explicacion: 'Comparación de tendencia central para determinar categoría de duración.'
}
{
  promedio: '12.33',
  mediana: 12,
  clasificacion: 'Estándar',
  explicacion: 'Comparación de tendencia central para determinar categoría de duración.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-043/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco