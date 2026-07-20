# Plantilla de solucion

## Analisis

- Entrada: Un objeto `encargoDibujo` con las propiedades `artista` (texto), `tipoLienzo` (texto: "boceto", "lineart", "completo"), `incluyeUsoComercial` (booleano) y `cantidadPersonajes` (número).
- Proceso: Aplicar las tarifas base del estudio de arte digital y calcular los recargos acumulativos establecidos por las reglas de negocio según la complejidad de la ilustración.
- Salida: Un objeto indicando el precio total calculado de la comisión, el estado de la orden y el desglose lógico del presupuesto.

## Reglas identificadas

1. Regla de Tarifa Base por Complejidad: El costo inicial depende estrictamente del `tipoLienzo`: "boceto" cuesta $20, "lineart" cuesta $40, y un arte "completo" (con color y renderizado) cuesta $80.
2. Regla de Escalabilidad de Personajes: La tarifa base cubre únicamente a 1 personaje. Cada personaje adicional en la ilustración (`cantidadPersonajes` mayor a 1) añade un recargo fijo de $15 al acumulador.
3. Regla de Derechos Comerciales: Si `incluyeUsoComercial` es verdadero (`true`), se aplica un recargo multiplicador del 50% (+0.50) sobre el total acumulado hasta ese punto de la cotización.

## Pruebas

### Caso normal

Entrada:
encargoDibujo: {
  artista: "Dulce Morales",
  tipoLienzo: "completo",
  incluyeUsoComercial: false,
  cantidadPersonajes: 2
}

Resultado esperado:
precioTotal: 95
estadoOrden: "cotizado"
motivo: "Cotización exitosa para Dulce Morales. Base de arte completo ($80) más 1 personaje adicional ($15). Uso comercial no requerido."

### Caso borde

Entrada:
encargoDibujo: {
  artista: "DigitalArt Studio",
  tipoLienzo: "boceto",
  incluyeUsoComercial: true,
  cantidadPersonajes: -1
}

Resultado esperado:
precioTotal: 0
estadoOrden: "error_regla_negocio"
motivo: "Error: La cantidad de personajes no puede ser menor o igual a cero."

## Explicacion final

La solución funciona porque ejecuta un flujo secuencial que respeta el orden lógico de las políticas comerciales del estudio. Primero inicializa un acumulador basado en un diccionario indexado de precios por complejidad. Posteriormente, calcula las variables dinámicas de volumen (personajes extra) para finalmente aplicar la tasa impositiva de uso corporativo o comercial, asegurando que los presupuestos automatizados mantengan la rentabilidad y precisión del software de gestión artística.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.