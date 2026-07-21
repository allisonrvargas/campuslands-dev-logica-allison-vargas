# Plantilla de solucion

## Analisis

- Entrada: Un arreglo `inventarioMotos` con objetos que representan motocicletas (propiedades `modelo`, `cilindraje`, `precio` y `disponible`) y un objeto `criteriosFiltro` (con propiedades como `cilindrajeMinimo` o `precioMaximo`).
- Proceso: Evaluar cada motocicleta de la lista para comprobar si cumple simultáneamente con las condiciones de cilindraje mínimo, presupuesto máximo y si está disponible para entrega inmediata.
- Salida: Un arreglo con los modelos de motocicletas que pasaron con éxito todos los filtros establecidos y un mensaje con el motivo técnico del resultado.

## Reglas identificadas

1. Regla de Filtrado Excluyente: Para que una motocicleta sea incluida en el resultado final, debe cumplir obligatoriamente con todos los criterios de búsqueda al mismo tiempo (operación lógica AND).
2. Regla de Disponibilidad de Stock: Si una motocicleta cumple con el precio y cilindraje pero su propiedad `disponible` es falsa (`false`), debe ser descartada del inventario activo por falta de existencias físicas.

## Pruebas

### Caso normal

Entrada:
inventarioMotos: [
  { modelo: "Yamaha R3", cilindraje: 321, precio: 5500, disponible: true },
  { modelo: "Honda CB190R", cilindraje: 184, precio: 3200, disponible: true },
  { modelo: "Kawasaki Ninja 400", cilindraje: 399, precio: 6200, disponible: false }
]
criteriosFiltro: { cilindrajeMinimo: 250, precioMaximo: 6000 }

Resultado esperado:
motosFiltradas: ["Yamaha R3"]
motivo: "Se filtraron los modelos que superan los 250cc y no exceden el presupuesto de 6000. La Ninja 400 cumple las especificaciones pero se descartó por no estar disponible en stock."

### Caso borde

Entrada:
inventarioMotos: []
criteriosFiltro: { cilindrajeMinimo: 150, precioMaximo: 4000 }

Resultado esperado:
motosFiltradas: []
motivo: "El inventario de motocicletas se encuentra vacío o los criterios de búsqueda no están inicializados."

## Explicacion final

La solución funciona porque utiliza el método de filtrado nativo de JavaScript para recorrer el catálogo de motos aplicando un validador compuesto. El algoritmo actúa como un tamiz que descarta en primer lugar las unidades sin stock disponible, y posteriormente realiza comparaciones numéricas directas de límites sobre el cilindraje y el coste monetario, asegurando que solo los modelos aptos lleguen a la selección final del cliente.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.