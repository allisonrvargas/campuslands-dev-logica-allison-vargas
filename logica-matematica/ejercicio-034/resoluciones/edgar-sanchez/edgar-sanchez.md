# Cálculo de Áreas y Perímetros en Diseños de Tatuajes

## Pensamiento del Problema
El ejercicio plantea la necesidad de dimensionar el espacio geométrico que ocupará un tatuaje en la piel. Para ello, se requiere estimar el área (vital para calcular la cantidad de pigmento y el tiempo de relleno) y el perímetro (que define la longitud total de las líneas guía o delineado del diseño).

El problema se aborda modelando la superficie mediante un rectángulo contenedor. Se introducen estructuras de control condicionales como filtros de seguridad de rango para descartar dimensiones nulas o negativas, asegurando que un error de entrada no genere cálculos absurdos o lógicas físicas inconsistentes.

## Elección del Lenguaje
Se seleccionó **JavaScript (.js)** gracias a su versatilidad para retornar múltiples valores asociados mediante pares clave-valor dentro de objetos JSON nativos. Esto permite encapsular el área y el perímetro limpiamente en una única respuesta estructurada sin necesidad de mutar variables globales ni depender de librerías externas de estructuras de datos, facilitando también la iteración del banco de pruebas incorporado.