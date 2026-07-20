# Logica general 047 - deteccion de inconsistencias en playlist

## Sistema de Validación de Playlist

Este script analiza una lista de canciones para identificar inconsistencias en los datos, permitiendo auditar la calidad de una biblioteca musical antes de su reproducción.

* **Descripción del proceso:**
* **Validación de Títulos**: Verifica la existencia y contenido de los títulos (evita campos vacíos).
* **Validación de Integridad**: Comprueba que la duración sea un valor positivo lógico.
* **Validación de Formato**: Asegura que el archivo tenga un formato compatible (mp3, wav, flac).
* **Tecnologías:**
* JavaScript (método `.map()`, condicionales).

---

### Explicación técnica

1. **Jerarquía de Errores**: El código evalúa las condiciones de forma secuencial, priorizando el reporte de errores más críticos (como título faltante) antes de pasar a validaciones de integridad o formato.
2. **Transformación de Datos**: Utiliza `.map()` para generar un informe de estado para cada canción, permitiendo una rápida identificación de problemas en grandes volúmenes de datos.

### Lógica del Código

```javascript
const detectarInconsistencias = (canciones) => {
    return canciones.map(cancion => {
        let error = null;

        // 1. Evaluación de reglas de validación
        if (!cancion.titulo || cancion.titulo.trim() === "") {
            error = "Falta título";
        } else if (cancion.duracion <= 0) {
            error = "Corrupta";
        } else if (!["mp3", "wav", "flac"].includes(cancion.formato.toLowerCase())) {
            error = "Formato no soportado";
        }

        // 2. Retorno de estado de auditoría
        return {
            titulo: cancion.titulo,
            estado: error ? "Inconsistente" : "Ok",
            motivo: error || "Sin errores"
        };
    });
};

```

### Salida Esperada

```text
[
  { titulo: 'Bohemian Rhapsody', estado: 'Ok', motivo: 'Sin errores' },
  { titulo: '', estado: 'Inconsistente', motivo: 'Falta título' },
  { titulo: 'Error track', estado: 'Inconsistente', motivo: 'Corrupta' },
  { titulo: 'Unknown', estado: 'Inconsistente', motivo: 'Formato no soportado' }
]

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-047/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco