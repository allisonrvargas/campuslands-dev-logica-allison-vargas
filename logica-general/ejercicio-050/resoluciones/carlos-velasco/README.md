# Logica general 050 - sistema de filtrado de destinos turísticos

## Motor de Selección de Viajes

Este script permite filtrar un catálogo de destinos turísticos basándose en el presupuesto disponible del usuario y sus requisitos documentales (visas), ayudando a identificar opciones de viaje viables de forma automática.

* **Descripción del proceso:**
* **Evaluación Económica**: Compara el presupuesto del turista contra el costo de cada destino.
* **Validación Legal**: Verifica si el destino requiere visa y si el turista cuenta con ella.
* **Filtrado Inteligente**: Selecciona únicamente aquellos destinos que cumplen simultáneamente con ambas condiciones.
* **Generación de Informe**: Retorna una lista de destinos aptos o un mensaje indicando la inviabilidad de las opciones actuales.


* **Tecnologías:**
* JavaScript (método `.filter()`, operadores lógicos).



---

### Explicación técnica

1. **Lógica Condicional**: El método `.filter()` utiliza una expresión lógica que asegura que solo los destinos que cumplen tanto con el costo (`turista.presupuesto >= destino.costo`) como con el estatus legal (`!destino.requiereVisa || turista.tieneVisa`) pasen a la lista final.
2. **Manejo de Resultados**: Una estructura ternaria evalúa la longitud del arreglo resultante, proporcionando una respuesta descriptiva (motivo) según el éxito de la búsqueda.

### Lógica del Código

```javascript
const filtrarDestinos = (destinos, turista) => {
    // 1. Filtrar destinos según presupuesto y visa
    const viables = destinos.filter(destino => {
        const tienePresupuesto = turista.presupuesto >= destino.costo;
        const cumpleVisa = !destino.requiereVisa || turista.tieneVisa;
        return tienePresupuesto && cumpleVisa;
    });

    // 2. Retornar resultados con informe descriptivo
    return viables.length > 0 
        ? { aptos: viables, motivo: "Destinos que cumplen con su perfil económico y legal." }
        : { aptos: [], motivo: "No se encontraron destinos viables. Revise presupuesto o documentación." };
};

```

### Salida Esperada

```text
{
  aptos: [ { nombre: 'Lima', costo: 800, requiereVisa: false } ],
  motivo: 'Destinos que cumplen con su perfil económico y legal.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-050/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco