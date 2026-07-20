# Plantilla de solucion

## Analisis

- Entrada: Un arreglo `garajeHiperdeportivos` con objetos de autos (propiedades `modelo`, `marca` y `disponible`) y un texto `modeloBuscar`.
- Proceso: Recorrer el lote del garaje mediante un método de búsqueda para verificar si el modelo exacto solicitado existe y si se encuentra listo para salir a pista.
- Salida: Un objeto que indica el estado del auto encontrado, si está disponible para conducción extrema y el motivo de la búsqueda.

## Reglas identificadas

1. Regla de Disponibilidad en Pista: Si el hiperdeportivo es localizado en la lista y su propiedad `disponible` es verdadera (`true`), se autoriza de inmediato su salida a los boxes de carrera.
2. Regla de Ausencia o Bloqueo: Si el auto no se encuentra en el lote o su estado de disponibilidad es falso (`false`), el sistema debe reportar que el coche está en mantenimiento o no asignado.

## Pruebas

### Caso normal

Entrada:
garajeHiperdeportivos: [
  { modelo: "Chiron", marca: "Bugatti", disponible: true },
  { modelo: "Jesko", marca: "Koenigsegg", disponible: false }
]
modeloBuscar: "Chiron"

Resultado esperado:
autoEncontrado: true
estadoPista: "autorizado_salida"
motivo: "El Bugatti Chiron se encuentra listo en el garaje y disponible para pruebas de alta velocidad."

### Caso borde

Entrada:
garajeHiperdeportivos: []
modeloBuscar: "Huayra"

Resultado esperado:
autoEncontrado: false
estadoPista: "garaje_vacio_o_no_encontrado"
motivo: "No se registran hiperdeportivos en el lote de inventario para iniciar el escaneo."

## Explicacion final

La solución funciona porque implementa un método de búsqueda lineal directo sobre la lista de hiperdeportivos del garaje. Primero intercepta si la colección está vacía para mitigar lecturas nulas, y de contar con datos, extrae el objeto coincidente por su modelo para validar su estado hidráulico y operativo antes de dar la orden de ignición en el pit lane.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.