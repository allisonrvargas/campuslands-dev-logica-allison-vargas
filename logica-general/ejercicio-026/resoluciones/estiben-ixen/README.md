# Plantilla de solucion

## Analisis

- Entrada: Un arreglo de objetos (catalogo) y un objeto con los criterios de búsqueda (requisitos).
- Proceso: Filtrar los objetos que cumplen simultáneamente con tres condiciones de rendimiento.
- Salida: Un arreglo filtrado con los modelos que superan o igualan las especificaciones técnicas requeridas.

## Reglas identificadas

1. Velocidad: El auto debe alcanzar o superar la velocidad mínima especificada.
2. Potencia: El auto debe tener igual o mayor cantidad de caballos de fuerza (HP) que los requeridos.
3. Hibridación: Si se requiere exclusivamente tecnología híbrida, el auto debe marcar esa propiedad como verdadera.

## Pruebas

### Caso normal

Entrada:
catalogo: [Bugatti Chiron, Rimac Nevera, Koenigsegg Jesko], requisitos: { minVelocidad: 450, minPotencia: 1500, soloHibridos: false }

Resultado esperado:
[Bugatti Chiron, Koenigsegg Jesko]

### Caso borde

Entrada:
catalogo: [Rimac Nevera], requisitos: { minVelocidad: 500, minPotencia: 2000, soloHibridos: true }

Resultado esperado:
[] (Arreglo vacío, ya que el auto no cumple con los mínimos extremos solicitados)

## Explicacion final

La solución emplea la función de alto nivel `.filter()` junto con un operador lógico `&&` (AND). Esto asegura que solo se retornen los vehículos que satisfacen estrictamente la totalidad de las condiciones, permitiendo realizar búsquedas complejas con un código legible y mantenible.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.
