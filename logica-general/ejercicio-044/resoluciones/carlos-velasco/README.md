# Logica general 044 - filtros por condiciones

## Sistema de Clasificación de Inventario

Este script procesa un inventario de motocicletas para asignarles una categoría basada en su cilindraje, priorizando el estado de mantenimiento del vehículo.

* **Descripción del proceso:**
* **Priorización de Mantenimiento**: Verifica primero si la moto necesita mantenimiento; si es así, se marca automáticamente como "Fuera de servicio".
* **Clasificación por Cilindraje**: Si la moto está operativa, asigna una categoría según su potencia:
* `> 500 cc`: "Alta gama".
* `125 - 500 cc`: "Urbana".
* `< 125 cc`: "Económica".


* **Tecnologías:**
* JavaScript (método `.map()`, condicionales anidados).

---

### Explicación técnica

1. **Transformación Funcional**: Se utiliza `.map()` para generar un nuevo arreglo transformado, lo que permite mantener la inmutabilidad de los datos originales del inventario.
2. **Jerarquía de Reglas**: La lógica condicional está estructurada para que el estado de mantenimiento actúe como un filtro excluyente, garantizando que ninguna moto averiada sea clasificada por su cilindraje.

### Lógica del Código

```javascript
const clasificarMotos = (motos) => {
    return motos.map(moto => {
        // 1. Filtro prioritario de mantenimiento
        if (moto.necesitaMantenimiento) {
            return { modelo: moto.modelo, categoria: "Fuera de servicio" };
        }
        
        // 2. Clasificación basada en cilindraje
        let categoria = "";
        if (moto.cilindraje > 500) categoria = "Alta gama";
        else if (moto.cilindraje >= 125) categoria = "Urbana";
        else categoria = "Económica";
        
        return { modelo: moto.modelo, categoria };
    });
};

```

### Salida Esperada

```text
[
  { modelo: 'Ninja', categoria: 'Alta gama' },
  { modelo: 'CB125', categoria: 'Fuera de servicio' },
  { modelo: 'Scooter', categoria: 'Económica' }
]

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-044/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco