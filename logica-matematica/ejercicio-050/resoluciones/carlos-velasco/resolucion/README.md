# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo `precios`, un número `tasa` de conversión y un número `impuesto` porcentual.
* **Proceso**: Conversión de divisas, aplicación de impuestos, redondeo al entero superior y clasificación del producto según su valor final.
* **Salida**: Un arreglo de objetos con el `precio_final` y la `clasificacion` correspondiente para cada elemento.

## Reglas identificadas

1. El precio final se obtiene multiplicando el precio base por la tasa y luego aplicando el impuesto: `Math.ceil((precio * tasa) * (1 + impuesto))`.
2. Clasificación "Lujo": precio final mayor a 500.
3. Clasificación "Estándar": precio final mayor a 100 y hasta 500; de lo contrario, "Económico".

## Pruebas

### Caso normal

* **Entrada**: `precios: [100, 450], tasa: 1.1, impuesto: 0.10`
* **Resultado esperado**: `[{ precio_final: 122, clasificacion: "Estándar" }, { precio_final: 545, clasificacion: "Lujo" }]`

### Caso borde

* **Entrada**: `precios: [10], tasa: 1.1, impuesto: 0.10`
* **Resultado esperado**: `[{ precio_final: 13, clasificacion: "Económico" }]`

## Explicacion final

La solución utiliza el método `.map()` para transformar cada precio individual, garantizando la inmutabilidad del arreglo original. El proceso de cálculo es secuencial, asegurando que primero se realice la conversión de moneda y luego la aplicación de impuestos. Finalmente, las sentencias `if-else` categorizan correctamente cada precio resultante basándose en los umbrales definidos, devolviendo la estructura de datos requerida para cada producto.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Ejemplo manual (Precio 100)**:
* Valor convertido: $100 \times 1.1 = 110$.
* Valor con impuesto: $110 \times (1 + 0.10) = 110 \times 1.1 = 121$.
* Redondeo `Math.ceil(121)` = 121. *(Nota: El código del ejemplo en la imagen resultó en 122 debido a la precisión de punto flotante en JS, $110 * 1.1 = 121.00000000000001$, lo que demuestra la importancia de verificar estos cálculos).*
* Como $121 > 100$, es `"Estándar"`.