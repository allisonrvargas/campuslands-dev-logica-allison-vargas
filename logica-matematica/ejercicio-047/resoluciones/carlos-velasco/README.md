# Logica matematica 047 - calculo de ranking de playlist

## Sistema de Ranking de Playlist

Este script calcula un puntaje ponderado para una lista de canciones basado en sus duraciones, aplicando factores de escala y deducciones por penalización para determinar su clasificación final.

* **Descripción del proceso:**
* **Suma Acumulada**: Utiliza `reduce` para obtener la duración total de todas las pistas.
* **Cálculo de Puntaje**: Aplica una fórmula que escala la suma total y resta una penalización proporcional al número de canciones.
* **Normalización**: Asegura que el puntaje nunca sea negativo, fijando un mínimo de cero.
* **Clasificación**: Categoriza la playlist como "Premium" o "Estándar" dependiendo de si supera los 100 puntos.
* **Tecnologías:**
* JavaScript (método `.reduce()`, funciones matemáticas).

---

### Explicación técnica

1. **Ponderación**: El sistema permite ajustar la relevancia de la duración total mediante el parámetro `factor`, mientras que la `penalización` actúa como un factor de corrección por cantidad de elementos.
2. **Validación de Datos**: Incluye una verificación inicial para evitar errores en casos donde el arreglo de entrada esté vacío.

### Lógica del Código

```javascript
const calcularRankingPlaylist = (duraciones, factor, penalizacion) => {
    // 1. Manejo de casos sin datos
    if (duraciones.length === 0) return { puntaje_final: 0, clasificacion: "Estándar", explicacion: "Sin datos." };

    // 2. Cálculo matemático del puntaje
    const suma = duraciones.reduce((a, b) => a + b, 0);
    let puntaje = (suma / factor) - (duraciones.length * penalizacion);
    
    // 3. Normalización y clasificación
    if (puntaje < 0) puntaje = 0;

    return {
        puntaje_final: puntaje.toFixed(2),
        clasificacion: puntaje > 100 ? "Premium" : "Estándar",
        explicacion: "Cálculo de secuencia de duración ponderada con ajuste de penalización."
    };
};

```

### Salida Esperada

```text
{
  puntaje_final: '330.00',
  clasificacion: 'Premium',
  explicacion: 'Cálculo de secuencia de duración ponderada con ajuste de penalización.'
}
{
  puntaje_final: '0.00',
  clasificacion: 'Estándar',
  explicacion: 'Cálculo de secuencia de duración ponderada con ajuste de penalización.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-047/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco