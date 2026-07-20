# Logica matematica 050 - redondeo y precision

## Motor de Ajuste y Clasificación de Precios

Este script procesa una lista de precios base, aplicando conversiones de moneda y tasas impositivas para determinar el costo final, además de categorizar cada producto según su valor resultante.

* **Descripción del proceso:**
* **Conversión de Divisa**: Aplica un factor multiplicador (`tasa`) al precio base.
* **Aplicación de Impuestos**: Incrementa el valor convertido mediante un porcentaje de `impuesto`.
* **Redondeo**: Utiliza `Math.ceil()` para asegurar que el precio final sea un valor entero redondeado hacia arriba.
* **Categorización**: Clasifica los productos en "Económico", "Estándar" o "Lujo" basándose en umbrales de precio.


* **Tecnologías:**
* JavaScript (método `.map()`, funciones de redondeo).



---

### Explicación técnica

1. **Transformación Funcional**: El método `.map()` permite iterar sobre el arreglo original y retornar una nueva estructura de objetos sin modificar la fuente de datos.
2. **Lógica de Clasificación**: Utiliza una estructura condicional que permite una categorización rápida y eficiente del resultado final del cálculo.

### Lógica del Código

```javascript
const calcularPreciosFinales = (precios, tasa, impuesto) => {
    return precios.map(precio => {
        // 1. Cálculo del precio ajustado e impuestos
        const convertido = precio * tasa;
        const total = Math.ceil(convertido * (1 + impuesto));
        
        // 2. Clasificación según el valor total
        let categoria = "Económico";
        if (total > 500) categoria = "Lujo";
        else if (total > 100) categoria = "Estándar";

        // 3. Retorno del objeto formateado
        return {
            precio_final: total,
            clasificacion: categoria
        };
    });
};

```

### Salida Esperada

```text
[
  { precio_final: 122, clasificacion: 'Estándar' },
  { precio_final: 545, clasificacion: 'Lujo' }
]

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-050/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco