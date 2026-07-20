# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo numérico `duraciones`, un número `factor` de división y un número `penalizacion` por elemento.
* **Proceso**: Cálculo de la suma total, aplicación de la fórmula de ponderación con penalización, normalización a cero si el resultado es negativo y clasificación basada en un umbral.
* **Salida**: Un objeto que contiene el `puntaje_final` (con dos decimales), la `clasificacion` asignada y una breve `explicacion`.

## Reglas identificadas

1. El puntaje se calcula como: `(Suma total de duraciones / factor) - (Cantidad de elementos * penalizacion)`.
2. Si el puntaje resultante es menor a cero, debe normalizarse a `0`.
3. Una playlist es "Premium" si su puntaje es superior a `100`; de lo contrario, es "Estándar".

## Pruebas

### Caso normal

* **Entrada**: `duraciones: [180, 240, 300], factor: 2, penalizacion: 10`
* **Resultado esperado**: `{ puntaje_final: "330.00", clasificacion: "Premium", ... }`

### Caso borde

* **Entrada**: `duraciones: [30, 30], factor: 2, penalizacion: 50`
* **Resultado esperado**: `{ puntaje_final: "0.00", clasificacion: "Estándar", ... }`

## Explicacion final

La solución funciona porque utiliza el método `reduce` para obtener la duración acumulada de la playlist de forma eficiente, permitiendo aplicar la fórmula ponderada de manera centralizada. La estructura de condiciones posterior garantiza que el puntaje sea siempre un valor lógico (no negativo) y categoriza el resultado final según el rendimiento obtenido, cumpliendo con la lógica de negocio requerida.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Ejemplo manual**: Para `[180, 240, 300]` con factor `2` y penalización `10`:
* Suma = `720`.
* Puntaje = `(720 / 2) - (3 * 10)` = `360 - 30` = `330`.
* Como `330 > 100`, es `"Premium"`.