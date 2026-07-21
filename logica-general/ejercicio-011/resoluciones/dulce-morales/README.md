# Plantilla de solucion

## Analisis

- Entrada: Un arreglo `listaPeleadores` con objetos de competidores (propiedades `nombre`, `pesoKg` y `peleasGanadas`) y un objeto `limitesCategoria`.
- Proceso: Recorrer la lista de competidores usando un ciclo para acumular y clasificar a los peleadores en dos listas organizadas e independientes según su peso (Categoría Ligera vs. Categoría Pesada).
- Salida: Un objeto con dos arreglos organizados por peso, el total de peleadores clasificados y un mensaje descriptivo de la organización del torneo.

## Reglas identificadas

1. Regla de Umbral de Peso: Los peleadores con un peso menor o igual a `70` kg se agrupan en la lista `"categoria_ligera"`. Los que superen los `70` kg se acumulan en la lista `"categoria_pesada"`.
2. Regla de Registro Deportivo: Si el peso de un peleador es menor o igual a `0` o el contador de peleas ganadas es negativo, se descarta al competidor por inconsistencia en su ficha de inscripción.

## Pruebas

### Caso normal

Entrada:
listaPeleadores: [
  { nombre: "Alex Silva", pesoKg: 65, peleasGanadas: 12 },
  { nombre: "Marcus Vane", pesoKg: 84, peleasGanadas: 15 },
  { nombre: "Danny Torres", pesoKg: 70, peleasGanadas: 8 }
]

Resultado esperado:
totalOrganizados: 3
listasClasificadas: {
  categoria_ligera: ["Alex Silva", "Danny Torres"],
  categoria_pesada: ["Marcus Vane"]
}
motivo: "Se organizó la lista del torneo de kickboxing de forma correcta. Danny Torres ingresa a la categoría ligera al marcar exactamente el límite de 70 kg."

### Caso borde

Entrada:
listaPeleadores: [
  { nombre: "Fighter Invalido", pesoKg: -5, peleasGanadas: 0 }
]

Resultado esperado:
totalOrganizados: 0
listasClasificadas: {
  categoria_ligera: [],
  categoria_pesada: []
}
motivo: "No se encontraron atletas inscritos con datos físicos válidos para organizar los grupos de combate."

## Explicacion final

La solución funciona porque implementa un ciclo de iteración lineal (`for`) acoplado a un acumulador selectivo. A medida que el script evalúa la ficha de cada peleador, aplica filtros preventivos de peso y récord para luego empujar los nombres de los competidores válidos hacia sus respectivas divisiones deportivas, asegurando que los emparejamientos del torneo de kickboxing sean competitivos, justos y seguros.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.