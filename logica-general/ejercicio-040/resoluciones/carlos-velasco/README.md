# Logica general 040 - estrategias de seleccion

## Sistema de Selección de Pedidos

Este script automatiza la decisión de qué cliente atender primero en un sistema de atención, priorizando clientes VIP con tiempos de espera significativos.

* **Descripción del proceso:**
* **Prioridad VIP**: El sistema busca primero un cliente de tipo "vip" que haya esperado más de 15 minutos.
* **Prioridad Regular**: Si no hay clientes VIP que cumplan la condición, se filtran los clientes "regular" y se selecciona el que tenga el mayor tiempo de espera.
* **Clasificación de Urgencia**: Un pedido se marca como "urgente" si el tiempo de espera supera los 30 minutos.


* **Tecnologías:**
* JavaScript (métodos de arreglos `find`, `filter`, `sort`).


### Explicación técnica

1. **Priorización Jerárquica**: El uso de `find` para el segmento VIP garantiza que el sistema siempre intente atender primero a los clientes de mayor categoría si cumplen los criterios, antes de considerar cualquier pedido regular.
2. **Ordenamiento Dinámico**: Para los pedidos regulares, el sistema ordena los elementos descendentemente (`b.esperaMin - a.esperaMin`), lo que permite extraer siempre al cliente que ha estado esperando más tiempo.
3. **Seguridad de Datos**: La lógica de retorno maneja explícitamente el caso en que no existan pedidos regulares mediante un operador ternario, evitando errores de referencia (`undefined`).

---

### Lógica del Código

```javascript
const seleccionarPedido = (pedidos) => {
    // 1. Buscar prioridad VIP (> 15 min)
    let vipPrioritario = pedidos.find(p => p.tipo === "vip" && p.esperaMin > 15);
    
    if (vipPrioritario) {
        return { 
            atender: vipPrioritario.cliente, 
            prioridad: "VIP - Alta",
            urgente: vipPrioritario.esperaMin > 30 
        };
    }

    // 2. Si no hay VIP, buscar el regular con mayor espera
    let regular = pedidos.filter(p => p.tipo === "regular").sort((a, b) => b.esperaMin - a.esperaMin)[0];

    return {
        atender: regular ? regular.cliente : "Ninguno",
        prioridad: "Regular",
        urgente: regular ? regular.esperaMin > 30 : false
    };
};

```

### Salida Esperada

De acuerdo con la ejecución registrada en el archivo {8CC4D94A-A57C-4355-96C3-3055378B7180}.png:

```text
{ atender: 'Luis', prioridad: 'VIP - Alta', urgente: false }

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-040/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco