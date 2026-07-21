# Logica general 042 - validaciones de inscripcion

## Sistema de Validación de Inscripción de Jugadores

Este script evalúa la elegibilidad de un jugador para su inscripción en una liga deportiva, aplicando filtros estrictos de edad, salud física e historial disciplinario.

* **Descripción del proceso:**
* **Filtro de Edad**: Verifica que el jugador se encuentre dentro del rango permitido (15 a 40 años).
* **Filtro de Salud**: Evalúa si el jugador presenta alguna lesión activa.
* **Filtro Disciplinario**: Descalifica automáticamente a jugadores que acumulan 3 o más tarjetas rojas en su historial.
* **Tecnologías:**
* JavaScript (lógica condicional, objetos).

---

### Explicación técnica

1. **Evaluación de Exclusión**: El código emplea una arquitectura de "fall-fast" (fallo rápido), donde cualquier incumplimiento de las reglas resulta en una devolución inmediata de estado "Rechazado" con su respectivo motivo.
2. **Modularidad de Reglas**: La estructura permite añadir nuevas restricciones de elegibilidad de forma aislada sin afectar el flujo lógico del resto de las validaciones.

### Lógica del Código

```javascript
const validarInscripcion = (jugador) => {
    if (jugador.edad < 15 || jugador.edad > 40) {
        return { estado: "Rechazado", motivo: "Edad fuera de rango permitido." };
    }
    if (jugador.tieneLesion) {
        return { estado: "Rechazado", motivo: "El jugador presenta una lesión activa." };
    }
    if (jugador.tarjetasRojas >= 3) {
        return { estado: "Rechazado", motivo: "Jugador suspendido por historial disciplinario." };
    }
    return { estado: "Aprobado", motivo: "Inscripción exitosa." };
};

```

### Salida Esperada

```text
{ estado: 'Aprobado', motivo: 'Inscripción exitosa.' }
{ estado: 'Rechazado', motivo: 'Edad fuera de rango permitido.' }

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-042/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco