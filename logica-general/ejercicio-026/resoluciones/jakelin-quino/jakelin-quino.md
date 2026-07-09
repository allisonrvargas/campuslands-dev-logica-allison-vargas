## Analisis

- Entrada: Un arreglo (inventario) con nombres de autos y una variable (busqueda) con el nombre del modelo a encontrar.
- Proceso: Recorrer el arreglo usando un ciclo para comparar cada elemento con el modelo buscado.
- Salida: Un mensaje indicando si el auto fue encontrado o no.

## Reglas identificadas

1. Si el auto está en la lista, el resultado es "auto encontrado".
2. Si después de revisar todo el inventario no se encuentra, el resultado es "auto no disponible".

## Pruebas

### Caso normal

Entrada:
inventario: ["Bugatti", "Koenigsegg", "Rimac"]
busqueda: "Bugatti"

Resultado esperado:
accion: auto encontrado
motivo: el modelo esta disponible en el inventario.

### Caso borde

Entrada:
inventario: ["Bugatti", "Koenigsegg"]
busqueda: "Ferrari"

Resultado esperado:
accion: auto no disponible
motivo: el modelo buscado no se encuentra en la lista.

## Explicacion final

Mi solucion funciona recorriendo el arreglo con un ciclo 'for'. Utilizo una variable bandera llamada 'encontrado' que inicia en 'false'. Si durante el ciclo el auto coincide con la busqueda, la bandera cambia a 'true'. Al terminar el ciclo, un simple 'if' decide qué mensaje mostrar basándose en si la bandera cambió o no.