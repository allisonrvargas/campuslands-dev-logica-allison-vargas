# Plantilla de solucion

## Analisis

- Entrada: Un arreglo de objetos (inventario) y un objeto (criterios de filtro).
- Proceso: Aplicar un filtro sobre el arreglo original verificando tres condiciones simultáneas.
- Salida: Un nuevo arreglo con las motos que cumplen estrictamente todos los criterios.

## Reglas identificadas

1. Disponibilidad: La moto debe coincidir con el estado requerido (disponible/no disponible).
2. Kilometraje: El kilometraje debe ser menor o igual al límite definido.
3. Motor: Si se especifica un tipo de motor, la moto debe coincidir con dicho valor.

## Pruebas

### Caso normal

Entrada:
stock: [{ modelo: "Yamaha MT-07", kilometraje: 5000, motor: "700cc", estaDisponible: true }], 
filtro: { soloDisponibles: true, maxKilometraje: 10000, motorRequerido: "700cc" }

Resultado esperado:
[{ modelo: "Yamaha MT-07", kilometraje: 5000, motor: "700cc", estaDisponible: true }]

### Caso borde

Entrada:
stock: [{ modelo: "Kawasaki Z900", kilometraje: 2000, motor: "900cc", estaDisponible: false }], 
filtro: { soloDisponibles: true, maxKilometraje: 5000, motorRequerido: "900cc" }

Resultado esperado:
[] (Arreglo vacío, ya que la moto no está disponible)

## Explicacion final

La solución utiliza el método `.filter()` que recorre el inventario y retorna solo los elementos que cumplen con la conjunción lógica (AND) de los tres criterios establecidos. Esto permite una búsqueda eficiente y escalable para cualquier número de motos.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.