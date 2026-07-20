# Logica matematica 045 - gestion de inventario y stock

## Sistema de Evaluación de Stock

Este script analiza un conjunto de niveles de existencias (stock) para identificar el valor más bajo y determinar si el inventario requiere acciones de reposición frente a un umbral mínimo.

* **Descripción del proceso:**
* **Detección de Mínimo**: Identifica el valor más bajo presente en el inventario actual.
* **Filtrado de Riesgo**: Identifica y cuenta cuántas referencias están por debajo del límite mínimo permitido.
* **Evaluación de Estado**: Determina si el inventario es "Stock óptimo" o si requiere "Reposición necesaria" según la presencia de piezas críticas.
* **Tecnologías:**
* JavaScript (métodos de arreglos, funciones matemáticas).

---

### Explicación técnica

1. **Búsqueda de Valor Crítico**: Utiliza `Math.min(...stock)` para extraer instantáneamente la referencia con menor cantidad disponible en el inventario.
2. **Evaluación de Conformidad**: La lógica emplea `filter()` para aislar elementos que no cumplen con los niveles requeridos, facilitando una gestión de inventario reactiva y precisa.

### Lógica del Código

```javascript
const evaluarStock = (stock, minimo) => {
    // 1. Validación de seguridad
    if (stock.length === 0) return { error: "Stock vacío" };

    // 2. Identificación de mínimo y elementos críticos
    const stockMinimo = Math.min(...stock);
    const piezasCriticas = stock.filter(item => item < minimo);
    
    // 3. Determinación de estado de inventario
    const estado = piezasCriticas.length > 0 ? "Reposición necesaria" : "Stock óptimo";

    return {
        stock_critico: stockMinimo,
        estado_inventario: estado,
        explicacion: `Se detectaron ${piezasCriticas.length} repuestos por debajo del límite.`
    };
};

```

### Salida Esperada

```text
{
  stock_critico: 5,
  estado_inventario: 'Reposición necesaria',
  explicacion: 'Se detectaron 1 repuestos por debajo del límite.'
}
{
  stock_critico: 15,
  estado_inventario: 'Stock óptimo',
  explicacion: 'Se detectaron 0 repuestos por debajo del límite.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-045/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco