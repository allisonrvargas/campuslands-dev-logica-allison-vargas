# Logica general 048 - sistema de recomendacion de peliculas

## Motor de Recomendación Cinematográfica

Este script implementa un sistema básico de recomendación de películas basado en la disponibilidad del catálogo y las preferencias del usuario.

* **Descripción del proceso:**
* **Filtrado de Disponibilidad**: Primero, aísla únicamente las películas que están marcadas como disponibles.
* **Búsqueda por Preferencia**: Intenta encontrar una coincidencia exacta entre el subgénero preferido del usuario y los disponibles.
* **Sugerencia de Reserva**: Si no se encuentra una coincidencia exacta, el sistema sugiere automáticamente el primer elemento disponible en el catálogo filtrado.
* **Tecnologías:**
* JavaScript (métodos de arreglos `.filter()` y `.find()`).

---

### Explicación técnica

1. **Jerarquía de Decisión**: El código prioriza la disponibilidad sobre la preferencia, asegurando que el usuario reciba una recomendación válida (disponible) en lugar de un resultado nulo.
2. **Manejo de Estados**: La lógica contempla tres estados de salida: "Ninguna" (sin stock), "Coincidencia exacta" (preferencia encontrada) y "Sugerencia basada en disponibilidad" (fallback).

### Lógica del Código

```javascript
const recomendarPelicula = (peliculas, preferencia) => {
    // 1. Filtrar solo las disponibles
    const disponibles = peliculas.filter(p => p.disponible);
    
    // 2. Manejo de catálogo vacío
    if (disponibles.length === 0) {
        return { accion: "Ninguna", motivo: "No hay películas disponibles en el catálogo." };
    }

    // 3. Buscar coincidencia exacta
    const coincidencia = disponibles.find(p => p.subgenero === preferencia);
    
    // 4. Retornar recomendación según hallazgo
    if (coincidencia) {
        return { accion: `Ver ${coincidencia.titulo}`, motivo: "Coincidencia exacta con tu preferencia." };
    }

    return { accion: `Ver ${disponibles[0].titulo}`, motivo: "No hay coincidencias exactas, sugerencia basada en disponibilidad." };
};

```

### Salida Esperada

```text
{
  accion: 'Ver Blade Runner 2049',
  motivo: 'Coincidencia exacta con tu preferencia.'
}
{
  accion: 'Ver Blade Runner 2049',
  motivo: 'No hay coincidencias exactas, sugerencia basada en disponibilidad.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-048/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco