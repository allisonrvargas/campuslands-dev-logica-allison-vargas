# Logica general 049 - simulador de supervivencia de personajes

## Sistema de Simulación de Supervivencia

Este script modela el estado de un personaje en un entorno de tensión, donde diferentes eventos afectan su nivel de susto acumulado y su estado general (A salvo, Pánico o Eliminado).

* **Descripción del proceso:**
* **Gestión de Eventos**: Evalúa tres tipos de eventos: "ruido" (aumenta el susto según la posición del personaje), "encuentro" (evalúa defensa o eliminación) y "calma" (reduce el susto acumulado).
* **Actualización de Estado**: Tras cada evento, el sistema recalcula si el personaje entra en estado de "Pánico" (si el susto acumulado es 10 o más) o permanece "A salvo".
* **Validación de Integridad**: Si el personaje ya se encuentra "Eliminado", no procesa cambios adicionales.
* **Tecnologías:**
* JavaScript (clonación de objetos, operadores condicionales, funciones de comparación).

---

### Explicación técnica

1. **Inmutabilidad**: Utiliza el operador spread (`{...personaje}`) para generar una nueva instancia del objeto personaje, protegiendo el estado original de modificaciones inesperadas durante la simulación.
2. **Lógica de Umbrales**: El sistema utiliza `Math.max(0, ...)` para asegurar que el susto nunca descienda a valores negativos durante los eventos de "calma", manteniendo la coherencia de los datos.

### Lógica del Código

```javascript
const simularSupervivencia = (personaje, evento) => {
    // 1. Verificación de estado final
    if (personaje.estado === "Eliminado") return personaje;

    let p = { ...personaje };

    // 2. Procesamiento según tipo de evento
    if (evento === "ruido") {
        p.sustoAcumulado += p.escondido ? 1 : 3;
    } else if (evento === "encuentro") {
        if (p.tieneArma) p.sustoAcumulado += 2;
        else p.estado = "Eliminado";
    } else if (evento === "calma") {
        p.sustoAcumulado = Math.max(0, p.sustoAcumulado - 2);
    }

    // 3. Determinación de estado actual
    if (p.estado !== "Eliminado") {
        p.estado = p.sustoAcumulado >= 10 ? "Pánico" : "A salvo";
    }

    return p;
};

```

### Salida Esperada

```text
{
  nombre: 'Elena',
  escondido: false,
  tieneArma: false,
  sustoAcumulado: 11,
  estado: 'Pánico'
}
{
  nombre: 'Elena',
  escondido: false,
  tieneArma: false,
  sustoAcumulado: 8,
  estado: 'Eliminado'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-049/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco