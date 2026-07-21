# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo de objetos `destinos` (con `nombre`, `costo`, `requiereVisa`) y un objeto `turista` (con `presupuesto`, `tieneVisa`).
* **Proceso**: Filtrado de los destinos según la viabilidad económica (presupuesto vs costo) y legal (requisitos de visa), seguido de una evaluación de resultados.
* **Salida**: Un objeto que contiene un arreglo `aptos` con los destinos filtrados y un `motivo` descriptivo del resultado.

## Reglas identificadas

1. El presupuesto del turista debe ser mayor o igual al costo del destino.
2. Si un destino no requiere visa, es apto automáticamente en cuanto al aspecto legal.
3. Si un destino requiere visa, el turista debe poseerla obligatoriamente para ser considerado apto.

## Pruebas

### Caso normal

* **Entrada**: `catalogo, { presupuesto: 1500, tieneVisa: false }`
* **Resultado esperado**: `{ aptos: [{ nombre: "Lima", ... }], motivo: "Destinos que cumplen con su perfil económico y legal." }`

### Caso borde

* **Entrada**: `catalogo, { presupuesto: 500, tieneVisa: false }`
* **Resultado esperado**: `{ aptos: [], motivo: "No se encontraron destinos viables. Revise presupuesto o documentación." }`

## Explicacion final

La solución funciona mediante el uso del método `.filter()`, que permite evaluar cada objeto del catálogo bajo una expresión booleana compuesta. Esta expresión combina la validación de presupuesto con la lógica de visas, asegurando que solo los destinos que cumplen ambos criterios pasen al arreglo de resultados. Finalmente, una estructura ternaria analiza la cantidad de elementos encontrados para devolver el informe correspondiente, facilitando la interpretación de los datos por parte del usuario.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Validación económica**: `turista.presupuesto >= destino.costo`
* **Validación legal**: `!destino.requiereVisa || turista.tieneVisa`
* **Combinación de reglas**: `tienePresupuesto && cumpleVisa`