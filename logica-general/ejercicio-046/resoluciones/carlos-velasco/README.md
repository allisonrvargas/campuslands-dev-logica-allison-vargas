# Logica general 046 - filtrado de catálogo de automóviles

## Sistema de Búsqueda de Automóviles por Rendimiento

Este script implementa un mecanismo de filtrado sobre un catálogo de vehículos, permitiendo identificar modelos que cumplen simultáneamente con requisitos mínimos de velocidad máxima y potencia (HP).

* **Descripción del proceso:**
* **Filtrado Dinámico**: Utiliza el método `.filter()` para comparar las propiedades de cada auto contra los criterios proporcionados.
* **Validación de Resultados**: Verifica si existen coincidencias tras el filtrado; de lo contrario, retorna un mensaje informativo indicando la ausencia de resultados.
* **Estructura de Retorno**: Proporciona un objeto que confirma el éxito de la búsqueda y adjunta los elementos encontrados.
* **Tecnologías:**
* JavaScript (método `.filter()`, condicionales).

---

### Explicación técnica

1. **Eficiencia en Filtrado**: La lógica condicional interna asegura que solo se retornen vehículos que cumplan rigurosamente con ambos parámetros (`velocidadMax` y `hp`), garantizando la precisión del resultado.
2. **Manejo de Errores Lógicos**: La verificación `resultados.length === 0` permite que el sistema maneje escenarios de "búsqueda vacía" de manera elegante y estructurada, evitando respuestas indefinidas.

### Lógica del Código

```javascript
const buscarAutos = (inventario, criterio) => {
    // 1. Filtrado basado en criterios de velocidad y potencia
    const resultados = inventario.filter(auto => 
        auto.velocidadMax >= criterio.minVelocidad && 
        auto.hp >= criterio.minHp
    );

    // 2. Validación de resultados encontrados
    if (resultados.length === 0) {
        return { encontrado: false, mensaje: "No hay autos que cumplan con los requisitos." };
    }

    return { encontrado: true, autos: resultados };
};

```

### Salida Esperada

```text
{
  encontrado: true,
  autos: [ { modelo: 'Koenigsegg Jesko', velocidadMax: 480, hp: 1600 } ]
}
{
  encontrado: true,
  autos: [
    { modelo: 'Bugatti Chiron', velocidadMax: 420, hp: 1500 },
    { modelo: 'Koenigsegg Jesko', velocidadMax: 480, hp: 1600 },
    { modelo: 'Rimac Nevera', velocidadMax: 412, hp: 1914 }
  ]
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-046/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco