# Plantilla de solucion

## Analisis

* **Entrada**: Un objeto `personaje` (con propiedades de estado, escondite, arma y susto) y un string `evento`.
* **Proceso**: Evaluación lógica del evento ocurrido para actualizar el `sustoAcumulado` y el `estado` del personaje, aplicando reglas de defensa o penalización según el caso.
* **Salida**: Un nuevo objeto `personaje` con sus propiedades actualizadas tras procesar el evento.

## Reglas identificadas

1. Si el evento es "ruido", el susto aumenta 1 punto si está escondido o 3 si no lo está.
2. Si el evento es "encuentro" y no tiene arma, el personaje es "Eliminado".
3. Si el susto acumulado es igual o mayor a 10, el estado cambia automáticamente a "Pánico".

## Pruebas

### Caso normal

* **Entrada**: `protagonista (susto 8), "ruido"`
* **Resultado esperado**: `{ ..., sustoAcumulado: 11, estado: "Pánico" }`

### Caso borde

* **Entrada**: `protagonista, "encuentro"`
* **Resultado esperado**: `{ ..., estado: "Eliminado" }`

## Explicacion final

La solución funciona mediante la creación de un nuevo objeto a partir del original, lo que permite modificar el estado de forma segura e independiente. La lógica utiliza condicionales (`if-else if`) para clasificar el impacto de cada evento sobre el personaje, asegurando que se evalúen primero los estados críticos (como ser eliminado) antes de actualizar la clasificación de "Pánico" o "A salvo".

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Penalización por ruido**: `p.sustoAcumulado += p.escondido ? 1 : 3;`
* **Defensa en encuentro**: `if (p.tieneArma) p.sustoAcumulado += 2;`
* **Umbral de pánico**: `p.estado = p.sustoAcumulado >= 10 ? "Pánico" : "A salvo";`