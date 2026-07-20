# Logica matematica 048 - sistema de evaluacion de peliculas

## Motor de Cálculo de Puntaje Cinematográfico

Este script procesa un conjunto de puntajes de críticas para calcular una calificación final ajustada, aplicando bonos y penalizaciones según la calidad de las reseñas recibidas.

* **Descripción del proceso:**
* **Promediado**: Calcula el promedio aritmético de todos los puntajes proporcionados.
* **Ajuste de Penalización**: Identifica críticas negativas (puntaje menor a 5) y aplica una deducción acumulativa sobre el promedio.
* **Normalización**: Ajusta el puntaje final dentro de un rango lógico (mínimo 0).
* **Clasificación**: Categoriza la película en "Obra Maestra", "Buena" o "Decepción" según el puntaje final obtenido.
* **Tecnologías:**
* JavaScript (métodos de arreglos `.reduce()`, `.filter()`, lógica condicional).

---

### Explicación técnica

1. **Evaluación Estricta**: La lógica separa el promedio base del factor correctivo, permitiendo que las reseñas negativas tengan un impacto directo y negativo en la calificación final de la película.
2. **Formateo de Salida**: Utiliza `.toFixed(2)` para asegurar que el puntaje final se presente con dos decimales, proporcionando precisión en la evaluación.

### Lógica del Código

```javascript
const calcularPuntajePelicula = (puntajes, bono, penalizacion) => {
    // 1. Validación de datos vacíos
    if (puntajes.length === 0) return { puntaje_final: 0, clasificacion: "Decepción", explicacion: "Sin críticas." };

    // 2. Cálculo de promedio y conteo de críticas negativas (< 5)
    const suma = puntajes.reduce((a, b) => a + b, 0);
    const bajos = puntajes.filter(p => p < 5).length;
    
    // 3. Aplicación de bono y penalización
    let final = (suma / puntajes.length) + bono - (bajos * penalizacion);
    if (final < 0) final = 0;

    // 4. Clasificación según resultados
    let clasificacion = "Decepción";
    if (final > 8) clasificacion = "Obra Maestra";
    else if (final > 5) clasificacion = "Buena";

    return {
        puntaje_final: final.toFixed(2),
        clasificacion: clasificacion,
        explicacion: `Promedio calculado con ${bajos} críticas negativas penalizadas.`
    };
};

```

### Salida Esperada

```text
{
  puntaje_final: '6.00',
  clasificacion: 'Buena',
  explicacion: 'Promedio calculado con 1 críticas negativas penalizadas.'
}
{
  puntaje_final: '0.00',
  clasificacion: 'Decepción',
  explicacion: 'Promedio calculado con 2 críticas negativas penalizadas.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-048/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco