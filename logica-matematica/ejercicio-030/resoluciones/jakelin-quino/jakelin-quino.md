## Analisis
- **Entrada**: Una lista con los precios de diferentes paquetes turísticos.
- **Proceso**: Sumo todos los precios, divido entre la cantidad de paquetes para obtener el promedio y uso `Math.round()` para quitar los decimales.
- **Salida**: El precio final redondeado que se le cobrará al cliente.

## Reglas aplicadas
1. **Promedio**: Es la suma total dividida por el número de elementos.
2. **Redondeo**: Se utiliza la regla estándar: si el decimal es .5 o superior, sube al siguiente entero; si es menor, se queda en el entero actual.

## Pruebas
- **Caso Normal**: `[150.75, 200.40, 100.90]` -> Suma: 452.05 -> Promedio: 150.68 -> **Resultado: 151**.
- **Caso Borde**: `[100.20, 100.20]` -> Promedio: 100.2 -> **Resultado: 100**.

## Explicacion
A veces, al dividir números decimales en programación, obtenemos muchos números después de la coma (ej: 150.68333...). Como en turismo no podemos cobrar fracciones de moneda, el método `Math.round()` es la forma más segura y justa de "limpiar" el resultado para que el precio sea exacto para el sistema de facturación.