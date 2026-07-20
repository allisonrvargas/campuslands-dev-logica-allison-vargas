# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo de objetos `inventario` y un objeto `criterio` con `minVelocidad` y `minHp`.
* **Proceso**: Filtrado de elementos basado en condiciones concurrentes (cumplir ambos umbrales) y validación de existencia de resultados.
* **Salida**: Un objeto que indica el estado de la búsqueda (`encontrado`) y contiene el arreglo de `autos` resultantes o un mensaje de error.

## Reglas identificadas

1. El vehículo debe cumplir estrictamente que `velocidadMax >= criterio.minVelocidad`.
2. El vehículo debe cumplir estrictamente que `hp >= criterio.minHp`.
3. Si no hay vehículos que satisfagan ambas condiciones, el sistema debe retornar un mensaje de "No hay autos que cumplan con los requisitos".

## Pruebas

### Caso normal

* **Entrada**: `inventario: catalogo, criterio: { minVelocidad: 400, minHp: 1400 }`
* **Resultado esperado**: `{ encontrado: true, autos: [todos los elementos del catalogo] }`

### Caso borde

* **Entrada**: `inventario: catalogo, criterio: { minVelocidad: 450, minHp: 1500 }`
* **Resultado esperado**: `{ encontrado: true, autos: [{ modelo: "Koenigsegg Jesko", ... }] }`

## Explicacion final

La solución funciona aplicando el método `filter` de JavaScript, el cual evalúa de forma lógica la conjunción de los dos requisitos mínimos por cada elemento del catálogo, garantizando que solo los vehículos que igualan o superan los estándares definidos pasen al resultado final.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Condición de Velocidad**: `auto.velocidadMax >= criterio.minVelocidad`
* **Condición de Potencia**: `auto.hp >= criterio.minHp`
* **Validación de Búsqueda**: `resultados.length === 0`