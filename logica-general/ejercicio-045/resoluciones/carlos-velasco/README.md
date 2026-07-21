# Logica general 045 - organizacion de taller mecanico

## Sistema de Gestión de Fila de Taller

Este script organiza una lista de vehículos pendientes de reparación, estableciendo una jerarquía de prioridades basada en el tipo de avería y la urgencia del servicio.

* **Descripción del proceso:**
* **Prioridad 1 (Frenos)**: Cualquier vehículo con avería en los frenos se mueve automáticamente al inicio de la fila.
* **Prioridad 2 (Otros Urgentes)**: Vehículos marcados como urgentes (que no tienen avería en frenos) ocupan la segunda sección de la fila.
* **Prioridad 3 (Normales)**: Vehículos sin urgencia y sin averías críticas se posicionan al final de la fila.
* **Tecnologías:**
* JavaScript (método `.filter()`, operador spread `...`).

---

### Explicación técnica

1. **Segmentación de Datos**: El código utiliza múltiples filtros (`.filter()`) para dividir el arreglo original en subconjuntos lógicos basados en reglas de negocio.
2. **Recomposición de Fila**: El operador spread (`...`) se encarga de concatenar los grupos en el orden de prioridad definido, retornando una nueva fila organizada sin mutar el arreglo original.

### Lógica del Código

```javascript
const organizarTaller = (vehiculos) => {
    // 1. Separación por categorías de prioridad
    let frenos = vehiculos.filter(v => v.averia === "frenos");
    let otrosUrgentes = vehiculos.filter(v => v.urgente && v.averia !== "frenos");
    let normales = vehiculos.filter(v => !v.urgente && v.averia !== "frenos");

    // 2. Unificación de la fila en orden de importancia
    return [...frenos, ...otrosUrgentes, ...normales];
};

```

### Salida Esperada

```text
[
  { placa: 'XYZ-789', averia: 'frenos', urgente: false },
  { placa: 'LMN-456', averia: 'motor', urgente: true },
  { placa: 'ABC-123', averia: 'cambio aceite', urgente: false }
]

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-045/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco