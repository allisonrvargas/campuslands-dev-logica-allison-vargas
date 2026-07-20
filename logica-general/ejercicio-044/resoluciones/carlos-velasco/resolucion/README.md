# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo de objetos `motos`, donde cada objeto contiene `modelo`, `cilindraje` y `necesitaMantenimiento`.
* **Proceso**: Iteración mediante el método `.map()` para aplicar reglas de exclusión (mantenimiento) y clasificación (cilindraje).
* **Salida**: Un nuevo arreglo de objetos que contiene únicamente el `modelo` y su `categoria` asignada.

## Reglas identificadas

1. Si `necesitaMantenimiento` es verdadero, la categoría es automáticamente "Fuera de servicio".
2. Un cilindraje mayor a 500 cc clasifica la moto como "Alta gama".
3. Un cilindraje entre 125 y 500 cc clasifica como "Urbana", mientras que un valor menor a 125 cc clasifica como "Económica".

## Pruebas

### Caso normal

* **Entrada**: `{ modelo: "Ninja", cilindraje: 650, necesitaMantenimiento: false }`
* **Resultado esperado**: `{ modelo: "Ninja", categoria: "Alta gama" }`

### Caso borde

* **Entrada**: `{ modelo: "CB125", cilindraje: 125, necesitaMantenimiento: true }`
* **Resultado esperado**: `{ modelo: "CB125", categoria: "Fuera de servicio" }`

## Explicacion final

La solución funciona iterando sobre cada elemento del inventario y aplicando una jerarquía lógica: se evalúa primero la disponibilidad operativa (mantenimiento) como filtro excluyente y, solo si la moto está operativa, se procede a clasificarla según su potencia (cilindraje), garantizando una categorización precisa y ordenada.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Condición de Mantenimiento**: `moto.necesitaMantenimiento`
* **Condición Alta Gama**: `moto.cilindraje > 500`
* **Condición Urbana/Económica**: `moto.cilindraje >= 125` (Urbana) de lo contrario (Económica).